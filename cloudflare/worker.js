const MAX_IMAGE_BYTES = 8 * 1024 * 1024;
const MAX_DELETE_KEYS = 20;

function jsonResponse(body, status, origin, allowedOrigin) {
  const headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  if (origin && origin === allowedOrigin) {
    headers.set('Access-Control-Allow-Origin', origin);
    headers.set('Vary', 'Origin');
  }
  return new Response(JSON.stringify(body), { status, headers });
}

function allowedOrigins(env) {
  return new Set((env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean));
}

async function verifyAdmin(request, env) {
  const authorization = request.headers.get('Authorization') || '';
  const token = authorization.match(/^Bearer\s+(.+)$/i)?.[1];
  if (!token) return false;

  const response = await fetch(`${env.SUPABASE_URL}/auth/v1/user`, {
    headers: {
      apikey: env.SUPABASE_ANON_KEY,
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) return false;

  const user = await response.json();
  const adminEmails = (env.ADMIN_EMAILS || '')
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
  return typeof user.email === 'string'
    && adminEmails.includes(user.email.toLowerCase());
}

function validProductKey(key) {
  return typeof key === 'string'
    && key.startsWith('products/')
    && key.length <= 220
    && !key.split('/').some((part) => !part || part === '.' || part === '..')
    && /^[a-zA-Z0-9._/-]+$/.test(key);
}

function publicImageUrl(baseUrl, key) {
  return `${baseUrl.replace(/\/+$/, '')}/${key.split('/').map(encodeURIComponent).join('/')}`;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin');
    const origins = allowedOrigins(env);
    const allowedOrigin = origin && origins.has(origin) ? origin : null;

    if (request.method === 'OPTIONS') {
      if (!allowedOrigin) return new Response(null, { status: 403 });
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': allowedOrigin,
          'Access-Control-Allow-Methods': 'POST, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Authorization, Content-Type',
          'Access-Control-Max-Age': '86400',
          'Vary': 'Origin',
        },
      });
    }

    if (!allowedOrigin) return jsonResponse({ error: 'Origin tidak diizinkan.' }, 403, origin, allowedOrigin);
    if (!env.ADMIN_EMAILS || !env.SUPABASE_URL || !env.SUPABASE_ANON_KEY || !env.IMAGE_BASE_URL) {
      console.error('[Zaloma Image API] Konfigurasi Worker belum lengkap.');
      return jsonResponse({ error: 'Layanan penyimpanan gambar belum dikonfigurasi.' }, 500, origin, allowedOrigin);
    }

    try {
      if (!await verifyAdmin(request, env)) {
        return jsonResponse({ error: 'Sesi admin tidak valid atau tidak memiliki izin.' }, 401, origin, allowedOrigin);
      }

      const url = new URL(request.url);
      if (request.method === 'POST' && url.pathname === '/upload') {
        const form = await request.formData();
        const file = form.get('file');
        const slug = form.get('slug');
        if (!(file instanceof File) || file.type !== 'image/webp') {
          return jsonResponse({ error: 'File harus berformat WebP.' }, 400, origin, allowedOrigin);
        }
        if (file.size === 0 || file.size > MAX_IMAGE_BYTES) {
          return jsonResponse({ error: 'Ukuran foto harus lebih dari 0 dan maksimal 8 MB.' }, 400, origin, allowedOrigin);
        }
        if (typeof slug !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug.length > 120) {
          return jsonResponse({ error: 'Slug produk tidak valid.' }, 400, origin, allowedOrigin);
        }

        const key = `products/${slug}-${crypto.randomUUID()}.webp`;
        await env.IMAGES.put(key, file.stream(), {
          httpMetadata: {
            contentType: 'image/webp',
            cacheControl: 'public, max-age=31536000, immutable',
          },
        });
        return jsonResponse({
          key,
          url: publicImageUrl(env.IMAGE_BASE_URL, key),
        }, 201, origin, allowedOrigin);
      }

      if (request.method === 'DELETE' && url.pathname === '/objects') {
        const body = await request.json();
        if (!Array.isArray(body.keys) || body.keys.length === 0 || body.keys.length > MAX_DELETE_KEYS
          || body.keys.some((key) => !validProductKey(key))) {
          return jsonResponse({ error: 'Daftar file yang akan dihapus tidak valid.' }, 400, origin, allowedOrigin);
        }
        await env.IMAGES.delete([...new Set(body.keys)]);
        return jsonResponse({ deleted: [...new Set(body.keys)].length }, 200, origin, allowedOrigin);
      }

      return jsonResponse({ error: 'Endpoint tidak ditemukan.' }, 404, origin, allowedOrigin);
    } catch (error) {
      console.error('[Zaloma Image API] Permintaan gagal:', error);
      return jsonResponse({ error: 'Permintaan penyimpanan gambar gagal.' }, 500, origin, allowedOrigin);
    }
  },
};

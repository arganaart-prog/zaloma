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

const BRAND_BANNER_GUIDE = [
  'Design a premium florist promotional banner for Zaloma Florist in Malang, Indonesia.',
  'Use only this palette: burgundy #893144, deep burgundy #671E2F, gold #C59253, cream #F6E3E1, ivory #FDF7F7, dusty rose #D87B84.',
  'Style: elegant boutique florist, refined serif headline, real flowers, generous quiet space, warm and formal.',
  'Do not use neon colors, cartoons, clip-art, watermarks, extra logos, or cluttered layouts.',
  'Render the offer text from the admin prompt in clear Indonesian, large enough to read at a glance.',
  'Do not invent discounts, prices, or products that the prompt did not mention.',
].join(' ');

const BANNER_SIZES = {
  desktop: {
    openaiSize: '1536x1024',
    layout: 'Wide desktop hero, exact visual ratio 2:1. Keep the offer text in the center safe area.',
  },
  mobile: {
    openaiSize: '1536x1024',
    layout: 'Mobile banner, visual ratio about 1080:776. Keep the offer text large and inside the center safe area.',
  },
};

function bytesToBase64(bytes) {
  let binary = '';
  const chunk = 0x8000;
  for (let index = 0; index < bytes.length; index += chunk) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunk));
  }
  return btoa(binary);
}

function resolveImageModel(env) {
  const raw = String(env.OPENAI_IMAGE_MODEL || 'gpt-image-1').trim();
  const normalized = raw.toLowerCase().replace(/\s+/g, '-');
  // User-facing alias → current OpenAI Images API model id
  if (
    normalized === 'gpt-image-2.6-flare'
    || normalized === 'gpt-image-2-6-flare'
    || normalized === 'gpt-image-2.6'
    || normalized === 'flare'
  ) {
    // Prefer explicit override if OpenAI later exposes this exact id.
    // Until then map to gpt-image-1 which supports the same Images API shape.
    return env.OPENAI_IMAGE_MODEL_STRICT === '1' ? raw : 'gpt-image-1';
  }
  return raw;
}

function buildImageRequestBody(model, prompt, size) {
  const isGptImage = /^gpt-image/i.test(model);
  if (isGptImage) {
    return {
      model,
      prompt,
      size,
      quality: 'medium',
      output_format: 'png',
      n: 1,
    };
  }
  // dall-e-3 and similar
  return {
    model,
    prompt,
    size: size === '1536x1024' ? '1792x1024' : size,
    quality: 'standard',
    response_format: 'b64_json',
    n: 1,
  };
}

async function generateBannerImage(env, prompt, sizeKey) {
  const size = BANNER_SIZES[sizeKey];
  const model = resolveImageModel(env);
  const fullPrompt = `${BRAND_BANNER_GUIDE} ${size.layout} Admin offer: ${prompt}`;
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(buildImageRequestBody(model, fullPrompt, size.openaiSize)),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = payload?.error?.message
      || payload?.error?.code
      || `OpenAI menolak permintaan gambar (${response.status}).`;
    const err = new Error(message);
    err.status = response.status >= 400 && response.status < 600 ? response.status : 502;
    throw err;
  }

  const first = payload?.data?.[0] || {};
  if (typeof first.b64_json === 'string' && first.b64_json) {
    return { base64: first.b64_json, mime: 'image/png', model };
  }
  if (typeof first.url === 'string' && first.url) {
    const imageResponse = await fetch(first.url);
    if (!imageResponse.ok) throw new Error('Gambar hasil generate tidak bisa diunduh.');
    const bytes = new Uint8Array(await imageResponse.arrayBuffer());
    const mime = imageResponse.headers.get('Content-Type') || 'image/png';
    return { base64: bytesToBase64(bytes), mime, model };
  }
  throw new Error('OpenAI tidak mengembalikan gambar.');
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

      if (request.method === 'POST' && url.pathname === '/generate-banner') {
        if (!env.OPENAI_API_KEY) {
          return jsonResponse({
            error: 'OPENAI_API_KEY belum dipasang di Worker. Tambahkan secret OPENAI_API_KEY lalu deploy ulang.',
          }, 500, origin, allowedOrigin);
        }
        const body = await request.json().catch(() => null);
        const prompt = typeof body?.prompt === 'string' ? body.prompt.trim() : '';
        const size = body?.size;
        if (prompt.length < 8 || prompt.length > 600) {
          return jsonResponse({ error: 'Prompt harus 8–600 karakter.' }, 400, origin, allowedOrigin);
        }
        if (size !== 'desktop' && size !== 'mobile' && size !== 'both') {
          return jsonResponse({ error: 'Pilih ukuran desktop, mobile, atau keduanya.' }, 400, origin, allowedOrigin);
        }

        const targets = size === 'both' ? ['desktop', 'mobile'] : [size];
        const images = {};
        for (const target of targets) {
          images[target] = await generateBannerImage(env, prompt, target);
        }
        return jsonResponse({
          images,
          model: resolveImageModel(env),
        }, 200, origin, allowedOrigin);
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
      const message = error instanceof Error && error.message
        ? error.message
        : 'Permintaan penyimpanan gambar gagal.';
      const status = Number(error?.status) >= 400 && Number(error?.status) < 600
        ? Number(error.status)
        : 500;
      return jsonResponse({ error: message }, status, origin, allowedOrigin);
    }
  },
};

import type { Product } from '../data/products';

type ProductName = Pick<Product, 'name'>;
type PopularProduct = ProductName & Partial<Pick<Product, 'featured'>>;

/** Produk yang tidak ditampilkan di halaman utama (tetap ada di katalog/kategori). */
export const HOME_EXCLUDED_PRODUCT_SLUGS = ['bunga-papan-duka-cita-malang-004'] as const;

/** Baris konfigurasi sistem di tabel products (bukan produk jual). */
export function isSystemProductSlug(slug: string | null | undefined): boolean {
  return Boolean(slug && String(slug).startsWith('_'));
}

/** Buang baris config sistem dari hasil fetch Supabase. */
export function getSellableProducts<T extends { slug?: string | null }>(products: T[]): T[] {
  return products.filter((product) => !isSystemProductSlug(product.slug));
}

/** Maksimal produk bunga papan per subkategori di home. */
export const BUNGA_PAPAN_HOME_MAX_PER_CATEGORY = 8;

export function isBungaPapanCategory(categorySlug: string): boolean {
  return categorySlug.startsWith('bunga-papan-');
}

/** Filter produk untuk section & rotasi unggulan di halaman utama. */
export function getHomeDisplayProducts(products: Product[]): Product[] {
  const excluded = new Set<string>(HOME_EXCLUDED_PRODUCT_SLUGS);
  const bungaPapanCount = new Map<string, number>();

  return products.filter((product) => {
    if (excluded.has(product.slug)) return false;

    if (isBungaPapanCategory(product.categorySlug)) {
      const taken = bungaPapanCount.get(product.categorySlug) ?? 0;
      if (taken >= BUNGA_PAPAN_HOME_MAX_PER_CATEGORY) return false;
      bungaPapanCount.set(product.categorySlug, taken + 1);
    }

    return true;
  });
}

export function getHomeBungaPapanProducts(products: Product[], categorySlug: string): Product[] {
  return getHomeDisplayProducts(products).filter((p) => p.categorySlug === categorySlug);
}

export function getProductDisplayName(product: ProductName): string {
  return product.name.replace(/\s*\*\s*/g, ' ').replace(/\s+/g, ' ').trim();
}

export function isProductPopular(product: PopularProduct): boolean {
  return Boolean(product.featured || product.name.includes('*'));
}

export interface DerivedCategory {
  slug: string;
  name: string;
  image: string;
  description?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
}

/**
 * Ekstrak daftar kategori dari _categories_config_ system product di Supabase.
 * Admin dashboard menyimpan konfigurasi kategori sebagai JSON di field description.
 */
export function extractConfigCategories(rawProducts: any[]): DerivedCategory[] {
  const configRow = rawProducts.find(
    (p) => p && p.slug === '_categories_config_'
  );
  if (configRow && configRow.description) {
    try {
      const parsed = JSON.parse(configRow.description);
      if (Array.isArray(parsed)) {
        return parsed
          .filter((c: any) => c && c.slug && c.name)
          .map((c: any) => ({
            slug: c.slug,
            name: c.name,
            image: c.image || c.image_url || '',
            description: c.description || '',
            seoTitle: c.seoTitle || '',
            seoDescription: c.seoDescription || '',
            seoKeywords: c.seoKeywords || '',
          }));
      }
    } catch (error) {
      console.warn('[Zaloma] Failed to parse Supabase category configuration:', error);
    }
  }
  return [];
}

/**
 * Derive unique categories dynamically from Supabase product data.
 * Mengelompokkan produk berdasarkan category_slug dan mengambil nama serta gambar dari produk pertama.
 */
export function deriveCategoriesFromProducts(products: any[]): DerivedCategory[] {
  const map = new Map<string, DerivedCategory>();
  products
    .filter((p) => p && p.categorySlug)
    .forEach((p) => {
      if (!map.has(p.categorySlug)) {
        map.set(p.categorySlug, {
          slug: p.categorySlug,
          name: p.categoryName || p.categorySlug,
          image: p.image || '',
        });
      }
    });
  return Array.from(map.values());
}

/**
 * Gabungkan kategori dari _categories_config_ dan dari produk Supabase.
 * Kategori dari config memiliki prioritas (metadata lebih lengkap).
 */
export function mergeCategories(
  configCats: DerivedCategory[],
  productCats: DerivedCategory[]
): DerivedCategory[] {
  const map = new Map<string, DerivedCategory>();

  // Config categories first (they have better metadata)
  configCats.forEach((c) => {
    if (c.slug) map.set(c.slug, c);
  });

  // Product-derived categories fill any gaps
  productCats.forEach((c) => {
    if (!map.has(c.slug)) {
      map.set(c.slug, c);
    } else {
      // If config category has no image, use product's image
      const existing = map.get(c.slug)!;
      if (!existing.image && c.image) {
        existing.image = c.image;
      }
    }
  });

  return Array.from(map.values());
}

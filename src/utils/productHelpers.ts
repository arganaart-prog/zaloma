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

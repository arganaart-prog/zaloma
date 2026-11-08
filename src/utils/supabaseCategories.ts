import { SUPABASE_ANON_KEY, SUPABASE_URL } from '../data/supabaseConfig';
import {
  deriveCategoriesFromProducts,
  extractConfigCategories,
  getCategoryImage,
  mergeCategories,
  type DerivedSubcategory,
} from './productHelpers';

export interface SupabaseCategory {
  slug: string;
  name: string;
  image: string;
  subcategories: DerivedSubcategory[];
}

export async function fetchSupabaseCategories(): Promise<SupabaseCategory[]> {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/products?select=*&order=created_at.desc`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Supabase categories request failed with status ${response.status}`);
  }

  const products: unknown = await response.json();
  if (!Array.isArray(products)) {
    throw new TypeError('Supabase categories response must be an array');
  }

  const configCategories = extractConfigCategories(products);
  const productCategories = deriveCategoriesFromProducts(
    products
      .filter((product) => product && product.slug && !String(product.slug).startsWith('_'))
      .map((product) => ({
        categorySlug: product.category_slug,
        categoryName: product.category_name,
        image: product.image,
      })),
  );

  return mergeCategories(configCategories, productCategories).map((category) => ({
    slug: category.slug,
    name: category.name,
    image: getCategoryImage(category),
    subcategories: category.subcategories ?? [],
  }));
}

export interface SubCategory {
  id: string;
  name: string;
  slug: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  description?: string;
  subcategories: SubCategory[];
}

// Seluruh kategori awal telah dikosongkan agar admin dapat menambah kategori dan subkategori sesuai kebutuhan
export const DEFAULT_CATEGORIES: CategoryItem[] = [];

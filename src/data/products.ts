export interface Product {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  city: string;
  priceFrom: number;
  priceLabel: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  description: string;
  featured: boolean;
  whatsappText: string;
  processingTime: string;
  serviceArea: string[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords?: string;
  image: string;
}

// Semua produk sekarang 100% dikelola secara dinamis melalui Supabase Cloud Database & Admin Dashboard
export const PRODUCTS: Product[] = [];

// Semua kategori sekarang 100% dikelola secara dinamis melalui Supabase Cloud Database & Admin Dashboard
export const CATEGORIES: Category[] = [];

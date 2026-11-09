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
  images?: string[];
  hoverPreviewIndex?: number;
  imageWidth: number;
  imageHeight: number;
  description: string;
  featured: boolean;
  whatsappText: string;
  processingTime: string;
  serviceArea: string[];
  cardShape?: 'portrait' | 'square' | 'arch';
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

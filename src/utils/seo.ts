export const DEFAULT_SITE_SEO_TITLE =
  'Zaloma Florist -Toko bunga online | Florist 24 jam | Florist Profesional';

export function getCitySeoTitle(cityName: string): string {
  return `Zaloma Florist -Toko bunga online | Florist 24 jam | Florist ${cityName}`;
}

export function getCitySeoDescription(cityName: string): string {
  return `Zaloma Florist melayani pemesanan toko bunga online 24 jam di ${cityName}. Pesan bunga papan, buket, standing flower, dan rangkaian bunga segar dengan konfirmasi sebelum pengiriman.`;
}

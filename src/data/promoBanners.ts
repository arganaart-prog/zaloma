import { WHATSAPP_NUMBER } from './constants';

export interface PromoBanner {
  id: string;
  citySlug?: string;
  badge: string;
  headline: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  alt: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryHref?: string;
  ctaPrimaryExternal?: boolean;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  ctaSecondaryExternal?: boolean;
}

export const PROMO_BANNERS_CONFIG_SLUG = '_promo_banners_config_';

export const DEFAULT_PROMO_BANNERS: PromoBanner[] = [
  {
    id: 'promo-buka-24-jam',
    badge: 'Buka 24 Jam Nonstop',
    headline: 'Toko Bunga Profesional Buka 24 Jam Nonstop',
    description: 'Melayani pemesanan karangan bunga 24 jam sehari, 7 hari seminggu. Respon cepat, bunga segar berkualitas, dan siap dikirim ke berbagai kota.',
    mobileImage: '/images/banner/promo%20banner/1.webp?v=3',
    desktopImage: '/images/banner/promo%20banner/2.webp?v=3',
    alt: 'Toko Bunga Profesional Buka 24 Jam Nonstop - Zaloma Florist',
  },
  {
    id: 'promo-7-bunga-papan',
    badge: 'Paket Hemat - Acara Besar',
    headline: 'Pesan 7 Bunga Papan untuk Acara Besar',
    description: 'Cocok buat pernikahan, wisuda, dan grand opening. Makin banyak pesanan, harga makin hemat.',
    mobileImage: '/images/banner/promo%20banner/3.webp',
    desktopImage: '/images/banner/promo%20banner/3.webp',
    alt: 'Promo Spesial Pesan 7 Bunga Papan untuk Acara Besar - Zaloma Florist',
    ctaPrimaryLabel: 'Tanya via WhatsApp',
    ctaPrimaryHref: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo Zaloma Florist, saya ingin info promo pemesanan bunga papan.')}`,
    ctaPrimaryExternal: true,
    ctaSecondaryLabel: 'Lihat Bunga Papan',
    ctaSecondaryHref: '/katalog/?search=bunga%20papan',
  },
  {
    id: 'promo-bunga-papan-400rb',
    badge: 'Mulai 400 Ribu - Siap 3 Jam',
    headline: 'Bunga Papan Mulai 400 Ribu, Selesai 3 Jam',
    description: 'Pernikahan, duka cita, wisuda, hingga grand opening. Pengerjaan cepat, difoto sebelum dikirim.',
    mobileImage: '/images/banner/promo%20banner/4.webp',
    desktopImage: '/images/banner/promo%20banner/4.webp',
    alt: 'Bunga Papan Mulai 400 Ribuan - Zaloma Florist',
    ctaPrimaryLabel: 'Lihat Desain Papan',
    ctaPrimaryHref: '/katalog/?search=bunga%20papan',
    ctaSecondaryLabel: 'Tanya Harga',
    ctaSecondaryHref: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo Zaloma Florist, saya ingin tanya harga bunga papan.')}`,
    ctaSecondaryExternal: true,
  },
];

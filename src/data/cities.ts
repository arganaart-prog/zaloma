export interface CityItem {
  name: string;
  slug: string;
  description?: string;
  isMainArea?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  tagline?: string;
}

export const DEFAULT_CITIES: CityItem[] = [
  {
    name: "Malang Raya (Kota Malang, Kab. Malang, Kota Batu)",
    slug: "malang-raya",
    description: "Pusat Workshop & Galeri Utama Zaloma Florist — Gratis ongkir area Malang Kota",
    isMainArea: true,
    tagline: "Area Pusat Toko & Galeri Bunga",
    seoTitle: "Toko Bunga Malang Raya & Batu Murah Berkualitas — Zaloma Florist",
    seoDescription: "Pesan karangan bunga papan, buket bunga, standing flower di Malang Raya & Batu. Pengerjaan cepat 3 jam, bunga segar berkualitas & gratis ongkir Malang Kota."
  },
  {
    name: "Kota Malang",
    slug: "kota-malang",
    description: "Wilayah Kota Malang (Klojen, Lowokwaru, Blimbing, Sukun, Kedungkandang) — Pengiriman Kilat",
    isMainArea: true,
    tagline: "Kirim Cepat Area Kota Malang",
    seoTitle: "Toko Bunga Kota Malang — Karangan Bunga & Buket Terdekat Cepat",
    seoDescription: "Florist terpercaya di Kota Malang. Melayani bunga papan duka cita, pernikahan, grand opening & hand bouquet segar dengan garansi foto sebelum dikirim."
  },
  {
    name: "Kota Batu",
    slug: "kota-batu",
    description: "Wilayah Kota Wisata Batu, Bumiaji, Junrejo — Pengiriman Langsung dari Workshop",
    isMainArea: true,
    tagline: "Kota Wisata Batu & Sekitarnya",
    seoTitle: "Toko Bunga Kota Batu — Florist Papan & Buket Wisuda Cepat",
    seoDescription: "Pemesanan bunga papan dan buket bunga untuk hotel, villa, dan gedung acara di Kota Batu. Desain eksklusif dan bunga segar tahan lama."
  },
  {
    name: "Kabupaten Malang",
    slug: "kabupaten-malang",
    description: "Kepanjen, Singosari, Lawang, Pakis, Turen, Gondanglegi, dampit & seluruh Kab. Malang",
    isMainArea: true,
    tagline: "Seluruh Wilayah Kab. Malang",
    seoTitle: "Toko Bunga Kabupaten Malang — Kirim Karangan Bunga Kepanjen & Sekitarnya",
    seoDescription: "Layanan pesan antar karangan bunga papan pernikahan, duka cita, dan pelantikan ke seluruh kecamatan di Kabupaten Malang amanah dan tepat waktu."
  },
  {
    name: "Surabaya",
    slug: "surabaya",
    description: "Seluruh area Kota Surabaya (Pusat, Timur, Barat, Selatan, Utara)",
    tagline: "Kota Surabaya & Sekitarnya",
    seoTitle: "Toko Bunga Surabaya Terpercaya — Kirim Bunga Papan & Buket Cepat",
    seoDescription: "Florist pengiriman Surabaya. Karangan bunga papan ucapan selamat, duka cita, grand opening, dan buket bunga segar langsung ke alamat tujuan."
  },
  {
    name: "Sidoarjo",
    slug: "sidoarjo",
    description: "Kota Sidoarjo, Waru, Gedangan, Candi, Porong, Krian & sekitarnya",
    tagline: "Wilayah Sidoarjo & Sekitarnya",
    seoTitle: "Toko Bunga Sidoarjo — Florist Bunga Papan & Buket Hadiah",
    seoDescription: "Jasa kirim karangan bunga papan dan buket bunga segar terpercaya di Sidoarjo. Respon cepat, amanah, dan gratis konsultasi desain."
  },
  {
    name: "Gresik",
    slug: "gresik",
    description: "Gresik Kota, Kebomas, Manyar, Driyorejo & kawasan industri sekitarnya",
    tagline: "Wilayah Gresik & Kawasan Industri",
    seoTitle: "Toko Bunga Gresik — Karangan Bunga Papan Peresmian & Duka Cita",
    seoDescription: "Layanan pesan bunga papan untuk perusahaan, instansi, dan perorangan di Gresik. Desain elegan, rapi, dan konfirmasi foto pengiriman."
  },
  {
    name: "Pasuruan",
    slug: "pasuruan",
    description: "Kota & Kabupaten Pasuruan, Pandaan, Bangil, Gempol & sekitarnya",
    tagline: "Kota & Kabupaten Pasuruan",
    seoTitle: "Toko Bunga Pasuruan & Pandaan — Florist Karangan Bunga Terbaik",
    seoDescription: "Pesan karangan bunga papan pernikahan, duka cita, dan standing flower ke Pasuruan dan Pandaan. Pengiriman aman dengan kurir khusus bunga."
  },
  {
    name: "Mojokerto",
    slug: "mojokerto",
    description: "Kota Mojokerto, Kranggan, Magersari, Puri, Trowulan & Kab. Mojokerto",
    tagline: "Kota & Kabupaten Mojokerto",
    seoTitle: "Toko Bunga Mojokerto — Florist Cepat & Karangan Bunga Lengkap",
    seoDescription: "Florist terpercaya melayani pengiriman bunga papan dan buket bunga cantik ke Mojokerto. Hasil rangkaian rapi dan memuaskan."
  },
  {
    name: "Jombang",
    slug: "jombang",
    description: "Pusat Kota Jombang, Peterongan, Diwek, Ploso & sekitarnya",
    tagline: "Wilayah Jombang & Sekitarnya",
    seoTitle: "Toko Bunga Jombang — Florist Bunga Papan & Buket Segar",
    seoDescription: "Pesan bunga ucapan selamat dan duka cita di Jombang. Layanan cepat dan terpercaya dengan bunga berkualitas pilihan."
  },
  {
    name: "Kediri",
    slug: "kediri",
    description: "Kota Kediri, Pare, Gampengrejo & Kabupaten Kediri",
    tagline: "Kota & Kabupaten Kediri",
    seoTitle: "Toko Bunga Kediri — Bunga Papan & Florist Lengkap Cepat",
    seoDescription: "Layanan karangan bunga papan duka cita, pernikahan, dan standing flower untuk area Kediri dan Pare dengan pelayanan ramah dan cepat."
  },
  {
    name: "Blitar",
    slug: "blitar",
    description: "Kota Blitar, Kepanjenkidul, Sukorejo, Sananwetan, Wlingi & sekitarnya",
    tagline: "Kota & Kabupaten Blitar",
    seoTitle: "Toko Bunga Blitar — Kirim Bunga Papan & Buket Amanah",
    seoDescription: "Florist online Blitar. Kirim karangan bunga ucapan duka cita, pernikahan, dan buket wisuda dengan proses mudah langsung via WhatsApp."
  },
  {
    name: "Bisa Dikirim ke Mana Saja",
    slug: "bisa-dikirim-ke-mana-saja",
    description: "Pengiriman produk buket bunga kering, paper flower, atau ekspedisi ke seluruh Indonesia",
    tagline: "Jangkauan Seluruh Indonesia",
    seoTitle: "Pengiriman Bunga ke Seluruh Indonesia — Zaloma Florist",
    seoDescription: "Katalog produk Zaloma Florist yang siap dikirim ke mana saja di seluruh kota Indonesia dengan packing aman dan garansi sampai di tujuan."
  }
];

export function cityToSlug(cityName: string): string {
  if (!cityName) return '';
  const clean = cityName.trim().toLowerCase();

  if (clean.includes('malang raya')) return 'malang-raya';
  if (clean === 'kota malang') return 'kota-malang';
  if (clean === 'kota batu') return 'kota-batu';
  if (clean === 'kabupaten malang' || clean === 'kab. malang') return 'kabupaten-malang';
  if (clean.includes('mana saja') || clean.includes('seluruh indonesia')) return 'bisa-dikirim-ke-mana-saja';

  return clean
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

export function slugToCityName(slug: string, dynamicCities: any[] = []): string {
  if (!slug) return 'Malang Raya';
  const foundDefault = DEFAULT_CITIES.find(c => c.slug === slug);
  if (foundDefault) return foundDefault.name;

  const foundDynamic = dynamicCities.find(c => {
    const s = typeof c === 'string' ? cityToSlug(c) : (c.slug || cityToSlug(c.name));
    return s === slug;
  });
  if (foundDynamic) {
    return typeof foundDynamic === 'string' ? foundDynamic : foundDynamic.name;
  }

  // Fallback: title case the slug
  return slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export function productMatchesCity(productCity: string | undefined | null, targetCityName: string): boolean {
  if (!targetCityName) return true;
  const tNorm = targetCityName.toLowerCase();

  // If viewing "Bisa Dikirim ke Mana Saja", show everything or items marked for it
  if (tNorm.includes('mana saja')) return true;

  // If product doesn't specify a city, default to Malang Raya
  const pNorm = (productCity || 'Malang Raya').toLowerCase();

  // "Bisa Dikirim ke Mana Saja" products match EVERY city
  if (pNorm.includes('mana saja') || pNorm.includes('seluruh indonesia')) return true;

  // Exact match
  if (pNorm === tNorm) return true;

  // Malang Raya matches Kota Malang, Kabupaten Malang, Kota Batu
  if (tNorm.includes('malang raya')) {
    if (pNorm.includes('malang') || pNorm.includes('batu')) return true;
  }

  // Vice versa: if product is marked Malang Raya, it is available in Kota Malang, Kab Malang, Kota Batu
  if (pNorm.includes('malang raya')) {
    if (tNorm.includes('malang') || tNorm.includes('batu')) return true;
  }

  // Substring match (e.g. "Surabaya" matches "Kota Surabaya")
  if (pNorm.includes(tNorm) || tNorm.includes(pNorm)) return true;

  return false;
}

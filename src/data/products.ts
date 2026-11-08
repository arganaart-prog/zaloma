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

const RAW_CATEGORIES: Category[] = [
  {
    slug: "bunga-papan",
    name: "Bunga Papan",
    description: "Karangan bunga papan ucapan di Malang untuk duka cita, pernikahan (wedding), peresmian kantor, dan selamat & sukses.",
    seoTitle: "Bunga Papan Malang Murah & Berkualitas - Florist Cepat 3 Jam",
    seoDescription: "Pesan karangan bunga papan di Malang murah dan berkualitas. Pilihan bunga papan duka cita, wedding, dan congratulations. Bunga segar, pengerjaan cepat 3 jam, gratis ongkir Kota Malang.",
    seoKeywords: "bunga papan malang, karangan bunga papan malang, florist bunga papan malang, bunga papan murah malang, bunga papan duka cita malang, bunga papan wedding malang, bunga papan ucapan selamat malang",
    image: "/images/kategori/duka-cita.webp"
  },
  {
    slug: "bunga-papan-duka-cita-malang",
    name: "Bunga Papan Duka Cita",
    description: "Karangan bunga papan duka cita dengan tata huruf rapi dan nuansa teduh untuk ungkapan belasungkawa.",
    seoTitle: "Bunga Papan Duka Cita Malang Murah & Berkualitas",
    seoDescription: "Pesan bunga papan duka cita Malang murah dan berkualitas di Zaloma Florist. Rangkaian elegan, bunga segar, proses cepat 3 jam, dan gratis ongkir area Kota Malang.",
    image: "/images/kategori/duka-cita.webp"
  },
  {
    slug: "bunga-papan-wedding-malang",
    name: "Bunga Papan Wedding",
    description: "Karangan bunga papan pernikahan dengan susunan bunga segar dan warna cerah untuk ucapan selamat menempuh hidup baru.",
    seoTitle: "Bunga Papan Wedding Malang Murah & Berkualitas",
    seoDescription: "Jual bunga papan wedding Malang murah dan berkualitas. Desain elegan, warna menawan, bunga segar, dan pengerjaan cepat oleh florist profesional.",
    image: "/images/kategori/wedding.webp"
  },
  {
    slug: "bunga-papan-congratulations-malang",
    name: "Bunga Papan Congratulations",
    description: "Bunga papan ucapan selamat untuk grand opening toko, peresmian kantor cabang, wisuda, dan serah terima jabatan.",
    seoTitle: "Bunga Papan Congratulations Malang Murah & Berkualitas",
    seoDescription: "Kirim bunga papan congratulations Malang murah dan berkualitas untuk grand opening, toko baru, kantor, atau ucapan selamat sukses dengan desain modern.",
    image: "/images/kategori/congratulations.webp"
  },
  {
    slug: "bunga-papan-semi-styrofoam-malang",
    name: "Bunga Papan Semi Styrofoam",
    description: "Papan bunga semi styrofoam (semi strefoam) modern dengan perpaduan cetak banner tajam dan ornamen huruf timbul 3D yang artistik dan mewah.",
    seoTitle: "Bunga Papan Semi Styrofoam Malang Murah & Berkualitas - Zaloma Florist",
    seoDescription: "Pesan bunga papan semi styrofoam (semi strefoam) di Malang murah dan berkualitas. Desain modern, ornamen huruf timbul 3D, bunga segar, pengerjaan cepat 3 jam, dan gratis ongkir Kota Malang.",
    seoKeywords: "bunga papan semi styrofoam malang, bunga papan semi strefoam, papan semi styrofoam malang, bunga papan printing malang, papan bunga semi styrofoam, karangan bunga semi styrofoam malang, florist semi styrofoam malang",
    image: "/images/kategori/semi-styrofoam.webp"
  },
  {
    slug: "standing-flower-malang",
    name: "Standing Flower",
    description: "Rangkaian bunga standing flower untuk diletakkan di area indoor resepsi, lobby gedung kantor, atau rumah duka.",
    seoTitle: "Standing Flower Malang Murah & Berkualitas",
    seoDescription: "Pesan standing flower Malang murah dan berkualitas untuk duka cita, opening, wedding, dan acara formal. Rangkaian segar, elegan, dan pengiriman aman.",
    image: "/images/kategori/standing-flower.webp"
  },
  {
    slug: "bouquet",
    name: "Bouquet",
    description: "Buket bunga segar dan kado istimewa untuk wisuda, perayaan ulang tahun, lamaran, hari ibu, dan momen bahagia.",
    seoTitle: "Buket Bunga & Bouquet Malang Murah Berkualitas - Zaloma Florist",
    seoDescription: "Jual buket bunga (bouquet) Malang murah dan berkualitas untuk wisuda, ulang tahun, lamaran, dan kado spesial. Bunga segar, rapi, bisa custom ucapan.",
    seoKeywords: "bouquet malang, buket bunga malang, hand bouquet malang, buket wisuda malang, buket mawar malang, toko buket malang, buket bunga murah malang",
    image: "/images/kategori/hand-bouquet.webp"
  },
  {
    slug: "hand-bouquet-malang",
    name: "Hand Bouquet",
    description: "Buket bunga segar untuk kado wisuda, perayaan ulang tahun, lamaran, dan hari ibu.",
    seoTitle: "Hand Bouquet Malang Murah & Berkualitas",
    seoDescription: "Jual hand bouquet Malang murah dan berkualitas untuk wisuda, lamaran, ulang tahun, Valentine, dan hadiah romantis. Bunga segar, rapi, bisa custom.",
    image: "/images/kategori/hand-bouquet.webp"
  },
  {
    slug: "paper-flower-malang",
    name: "Paper Flower",
    description: "Rangkaian bunga kertas tahan lama untuk hadiah wisuda, lamaran, dan hiasan ruangan.",
    seoTitle: "Paper Flower Malang Murah & Berkualitas",
    seoDescription: "Pesan paper flower Malang murah dan berkualitas. Bunga kertas artistik, tahan lama, cantik untuk dekorasi, kado wisuda, lamaran, dan pajangan.",
    image: "/images/kategori/paper-flower.webp"
  },
  {
    slug: "bunga-meja-malang",
    name: "Bunga Meja",
    description: "Rangkaian bunga potong segar dalam vas untuk meja resepsi, meja tamu kantor, atau dekorasi acara.",
    seoTitle: "Bunga Meja Malang Murah & Berkualitas",
    seoDescription: "Pesan bunga meja Malang murah dan berkualitas untuk dekorasi lobby, kantor, ruang tamu, meja resepsi, dan acara formal. Segar, cantik, dan elegan.",
    image: "/images/kategori/bunga-meja.svg"
  },
  {
    slug: "tabulampot",
    name: "Tabulampot",
    description: "Pohon buah dan tanaman hias hidup dalam pot dengan pita dan kartu ucapan sebagai pilihan kado yang ramah lingkungan dan terus tumbuh.",
    seoTitle: "Tabulampot & Pohon Ucapan Malang Murah Berkualitas - Zaloma Florist",
    seoDescription: "Jual tabulampot dan pohon ucapan tanaman di Malang. Pilihan bibit pohon buah dalam pot dengan pita satin elegan untuk kado grand opening ramah lingkungan.",
    seoKeywords: "tabulampot malang, tanbulampot malang, pohon ucapan malang, kado tanaman buah malang, bibit pohon ucapan malang, bunga ucapan tanaman malang",
    image: "/images/kategori/tanbulampot.webp"
  },
  {
    slug: "tanbulampot-malang",
    name: "Tanbulampot (Pohon Ucapan)",
    description: "Pohon buah dan tanaman hias hidup dalam pot dengan pita dan kartu ucapan sebagai pilihan kado yang ramah lingkungan dan terus tumbuh.",
    seoTitle: "Bunga Ucapan Tanaman & Pohon Ucapan Tanbulampot Malang",
    seoDescription: "Jual bunga ucapan tanaman, pohon ucapan, ucapan bibit pohon & buah, karangan bibit tanaman (tanbulampot) di Malang. Bunga ucapan tanaman hidup eksklusif, ramah lingkungan, pesan cepat.",
    seoKeywords: "bunga ucapan tanaman, pohon ucapan, ucapan bibit pohon & buah, ucapan tanaman, karangan bibit tanaman, karangan bunga tanaman, bunga ucapan tanaman hidup, tanbulampot malang, tabulampot malang, pohon ucapan malang, kado tanaman hidup malang, hampers tanaman buah malang, standing plant ucapan malang, bibit pohon ucapan selamat",
    image: "/images/kategori/tanbulampot.webp"
  }
];

// Semua produk sekarang 100% dikelola secara dinamis melalui Supabase Cloud Database & Admin Dashboard
export const PRODUCTS: Product[] = [];

// Semua kategori aktif Zaloma Florist
export const CATEGORIES: Category[] = RAW_CATEGORIES;

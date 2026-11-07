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

export const DEFAULT_CATEGORIES: CategoryItem[] = [
  {
    id: "bunga-papan",
    slug: "bunga-papan",
    name: "Bunga Papan",
    description: "Karangan bunga papan untuk berbagai momen penting di Malang.",
    subcategories: [
      { id: "duka-cita", slug: "duka-cita", name: "Duka Cita" },
      { id: "wedding", slug: "wedding", name: "Wedding / Pernikahan" },
      { id: "congratulations", slug: "congratulations", name: "Congratulations / Selamat & Sukses" },
      { id: "semi-styrofoam", slug: "semi-styrofoam", name: "Semi Styrofoam (Strefoam)" }
    ]
  },
  {
    id: "standing-flower",
    slug: "standing-flower-malang",
    name: "Standing Flower",
    description: "Rangkaian bunga standing flower untuk duka cita, opening, wedding, dan resepsi.",
    subcategories: [
      { id: "standing-duka-cita", slug: "duka-cita", name: "Duka Cita" },
      { id: "standing-grand-opening", slug: "grand-opening", name: "Grand Opening / Toko Baru" },
      { id: "standing-wedding", slug: "wedding", name: "Wedding & Resepsi" }
    ]
  },
  {
    id: "hand-bouquet",
    slug: "hand-bouquet-malang",
    name: "Hand Bouquet",
    description: "Buket bunga segar untuk wisuda, ulang tahun, dan kado spesial.",
    subcategories: [
      { id: "buket-wisuda", slug: "wisuda", name: "Buket Wisuda" },
      { id: "buket-ulang-tahun", slug: "ulang-tahun", name: "Buket Ulang Tahun" },
      { id: "buket-mawar", slug: "mawar", name: "Buket Bunga Mawar" },
      { id: "buket-uang", slug: "uang", name: "Buket Uang (Money Bouquet)" }
    ]
  },
  {
    id: "bunga-meja",
    slug: "bunga-meja-malang",
    name: "Bunga Meja",
    description: "Rangkaian bunga potong segar dalam vas untuk meja tamu dan resepsi.",
    subcategories: [
      { id: "meja-vip", slug: "vip", name: "Bunga Meja VIP" },
      { id: "meja-kantor", slug: "kantor", name: "Bunga Meja Tamu Kantor" }
    ]
  },
  {
    id: "paper-flower",
    slug: "paper-flower-malang",
    name: "Paper Flower",
    description: "Rangkaian bunga kertas tahan lama untuk hadiah dan dekorasi.",
    subcategories: []
  },
  {
    id: "tanbulampot",
    slug: "tanbulampot-malang",
    name: "Tanbulampot (Pohon Ucapan)",
    description: "Pohon buah dan tanaman hias hidup dalam pot dengan pita dan kartu ucapan.",
    subcategories: [
      { id: "pohon-jeruk", slug: "pohon-jeruk", name: "Pohon Jeruk Nagami / Chokun" },
      { id: "tanaman-hias", slug: "tanaman-hias", name: "Tanaman Hias Eksklusif" }
    ]
  }
];

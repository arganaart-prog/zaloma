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

// Kategori Zaloma Florist sesuai permintaan
export const DEFAULT_CATEGORIES: CategoryItem[] = [
  {
    id: "bunga-papan",
    slug: "bunga-papan",
    name: "Bunga Papan",
    description: "Karangan bunga papan untuk berbagai acara penting di Malang.",
    subcategories: [
      { id: "duka-cita", slug: "duka-cita", name: "Duka Cita" },
      { id: "wedding", slug: "wedding", name: "Wedding" },
      { id: "congratulations", slug: "congratulations", name: "Congratulations" }
    ]
  },
  {
    id: "bunga-papan-semi-styrofoam",
    slug: "bunga-papan-semi-styrofoam",
    name: "Bunga Papan Semi Styrofoam",
    description: "Papan bunga semi styrofoam modern dengan desain artistik timbul 3D.",
    subcategories: []
  },
  {
    id: "tabulampot",
    slug: "tabulampot",
    name: "Tabulampot",
    description: "Pohon buah dan tanaman hias hidup dalam pot dengan pita ucapan selamat.",
    subcategories: []
  },
  {
    id: "bouquet",
    slug: "bouquet",
    name: "Bouquet",
    description: "Buket bunga segar dan hadiah istimewa untuk berbagai momen bahagia.",
    subcategories: []
  },
  {
    id: "bunga-meja",
    slug: "bunga-meja",
    name: "Bunga Meja",
    description: "Rangkaian bunga potong segar dalam vas untuk meja tamu dan resepsi.",
    subcategories: []
  },
  {
    id: "paper-flower",
    slug: "paper-flower",
    name: "Paper Flower",
    description: "Rangkaian bunga kertas tahan lama dan cantik untuk dekorasi atau hadiah.",
    subcategories: []
  },
  {
    id: "standing-flower",
    slug: "standing-flower",
    name: "Standing Flower",
    description: "Rangkaian bunga standing flower untuk duka cita, grand opening, dan resepsi.",
    subcategories: []
  }
];

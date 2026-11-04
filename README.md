# Zaloma Florist - Website Katalog Toko Bunga Malang & Batu

Zaloma Florist adalah website katalog toko bunga modern, premium, dan responsif untuk area Malang Raya dan Kota Batu. Website ini dirancang khusus sebagai katalog statis (*static site*) tanpa backend, database, sistem keranjang, ataupun login, di mana semua tindakan pemesanan langsung diarahkan ke chat admin WhatsApp Business.

## 🛠️ Tech Stack & Fitur
* **Astro v5** (Static Site Generator yang super cepat)
* **TypeScript** (Keamanan tipe data)
* **Tailwind CSS v4** via `@tailwindcss/vite` (Desain responsif, modern, dan performa tinggi)
* **@astrojs/sitemap** (Pembuatan sitemap otomatis)
* **SEO & Metadata Lengkap** (Title, Meta Description, Canonical URL, Open Graph, Twitter Card, JSON-LD Schema Markup untuk Florist & Product, robots.txt)
* **Filter Interaktif** (Filter katalog produk instan menggunakan Vanilla JavaScript tanpa overhead framework tambahan)
* **WhatsApp Form Integration** (Formulir kontak terintegrasi otomatis ke pesan WhatsApp terformat)

---

## 🚀 Cara Menjalankan Project

### Prerequisites
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) (versi 18+ direkomendasikan).

### 1. Instalasi Dependensi
Jalankan perintah berikut di terminal pada direktori root project untuk menginstal semua library yang dibutuhkan:
```bash
npm install
```

### 2. Menjalankan Server Development (Lokal)
Untuk melihat perubahan website secara real-time di browser, jalankan:
```bash
npm run dev
```
Buka browser dan akses [http://localhost:4321](http://localhost:4321).

### 3. Melakukan Build untuk Produksi
Untuk menghasilkan halaman-halaman HTML statis yang siap dideploy, jalankan:
```bash
npm run build
```
Hasil build akan diekspor ke folder `/dist`.

### 4. Meninjau Hasil Build (Preview)
Untuk menjalankan server lokal yang menyajikan folder `/dist` hasil build:
```bash
npm run preview
```

---

## ⚙️ Cara Konfigurasi & Kustomisasi

### 1. Mengganti Nomor WhatsApp & Username Instagram
Semua informasi kontak utama telah dipusatkan dalam file `src/data/constants.ts`. Anda hanya perlu mengedit file tersebut:

Buka file [src/data/constants.ts](file:///d:/Users/project/xampp/htdocs/Zaloma Florist%201/src/data/constants.ts):
* **`WHATSAPP_NUMBER`**: Ganti dengan nomor WhatsApp Anda diawali kode negara (misal `6281234567890`), tanpa tanda `+` atau `0` di depan.
* **`WHATSAPP_LABEL`**: Format tampilan nomor telepon di website (misal `+62 812-3456-7890`).
* **`INSTAGRAM_USERNAME`**: Username Instagram Anda tanpa simbol `@` (misal `Zaloma Florist.id`).

### 2. Mengganti Domain Website
Jika Anda ingin mengganti domain website (misal dari `Zaloma Florist.id` ke domain Anda sendiri), lakukan penyesuaian di 3 tempat berikut:

1. **`src/data/constants.ts`**:
   Ubah nilai `SITE_DOMAIN` menjadi domain baru Anda (misal `https://florakartika.com` atau `https://username.github.io/Zaloma Florist`).
2. **`astro.config.mjs`**:
   Buka file [astro.config.mjs](file:///d:/Users/project/xampp/htdocs/Zaloma Florist%201/astro.config.mjs) dan ubah bagian `site`:
   ```javascript
   export default defineConfig({
     site: 'https://domain-baru-anda.com',
     base: '/', // Ubah menjadi '/nama-subfolder/' jika menggunakan GitHub Pages tanpa custom domain
     ...
   });
   ```
3. **`public/robots.txt`**:
   Buka file [public/robots.txt](file:///d:/Users/project/xampp/htdocs/Zaloma Florist%201/public/robots.txt) dan sesuaikan link Sitemap:
   ```txt
   Sitemap: https://domain-baru-anda.com/sitemap-index.xml
   ```

### 3. Menambah atau Mengubah Produk
Semua katalog produk dan kategori dikelola secara rapi melalui file [src/data/products.ts](file:///d:/Users/project/xampp/htdocs/Zaloma Florist%201/src/data/products.ts).

#### A. Menambah / Mengubah Kategori
Kategori dikelola dalam array `CATEGORIES`. Setiap objek kategori memiliki struktur berikut:
```typescript
{
  slug: "bunga-papan-wedding-malang",
  name: "Bunga Papan Wedding",
  description: "Deskripsi singkat kategori...",
  seoTitle: "Title SEO Halaman Kategori...",
  seoDescription: "Deskripsi SEO Halaman Kategori...",
  image: "/images/produk/wedding-sweet.webp"
}
```

#### B. Menambah / Mengubah Produk
Produk dikelola dalam array `PRODUCTS`. Anda bisa menambahkan objek produk baru seperti di bawah ini:
```typescript
{
  id: "BP-WD-03", // ID Unik produk
  slug: "bunga-papan-wedding-luxury-gold", // Slug unik untuk URL (huruf kecil & strip)
  name: "Bunga Papan Wedding - Luxury Gold", // Nama produk
  categorySlug: "bunga-papan-wedding-malang", // Slug kategori yang sesuai
  categoryName: "Bunga Papan Wedding", // Nama kategori
  city: "Malang",
  priceFrom: 1200000, // Harga dalam bentuk angka
  priceLabel: "Rp 1.200.000", // Teks tampilan harga
  image: "/images/produk/wedding-luxury.webp", // Path gambar produk
  imageWidth: 600, // Lebar gambar asli (piksel)
  imageHeight: 450, // Tinggi gambar asli (piksel)
  description: "Deskripsi detail mengenai rangkaian bunga, jenis bunga, dan bahan papan...",
  featured: true, // Set true jika ingin ditampilkan di homepage (maksimal 6 teratas)
  whatsappText: "Halo Zaloma Florist, saya ingin pesan karangan Bunga Papan Wedding - Luxury Gold (BP-WD-03). Mohon info harga detail dan format pemesanannya.", // Template chat otomatis WA
  processingTime: "4 - 5 Jam",
  serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"] // Jangkauan pengiriman
}
```

> [!NOTE]  
> Pastikan file gambar produk diletakkan di dalam folder `/public/images/produk/` dengan format yang optimal (seperti `.webp`).

---

## 🚀 Panduan Deployment

Karena Zaloma Florist merupakan website statis (*static site*), Anda dapat mendeploy-nya secara **100% gratis** menggunakan layanan CDN modern.

### Pilihan 1: Cloudflare Pages (Sangat Direkomendasikan)
1. Buat akun di [Cloudflare](https://dash.cloudflare.com/).
2. Masuk ke menu **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Pilih repositori GitHub proyek Zaloma Florist Anda.
4. Pada **Build settings**:
   * **Framework preset**: `Astro` (atau pilih `None` lalu isi konfigurasi di bawah)
   * **Build command**: `npm run build`
   * **Build output directory**: `dist`
5. Klik **Save and Deploy**. Cloudflare akan mem-build proyek secara otomatis setiap kali Anda melakukan push kode ke GitHub.

### Pilihan 2: GitHub Pages
Jika Anda ingin mendeploy langsung ke GitHub Pages bawaan repositori:

1. Pastikan Anda menyesuaikan file `astro.config.mjs`:
   * Jika menggunakan custom domain, set `site` ke `https://domain-anda.com` dan `base` ke `/`.
   * Jika menggunakan domain gratis GitHub (`username.github.io/Zaloma Florist`), ubah `site` ke `https://username.github.io` dan `base` ke `/Zaloma Florist/`.
2. Gunakan GitHub Actions untuk deploy otomatis. Buat file `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Install, build, and upload
           uses: withastro/action@v3
           # Action ini akan membaca astro.config.mjs secara otomatis dan melakukan build serta upload artifact
   ```
3. Di pengaturan repositori GitHub Anda, buka **Settings** -> **Pages**, dan di bawah **Build and deployment** -> **Source**, pilih **GitHub Actions**.

---

*Selamat mengelola katalog florist Zaloma Florist Anda! Jika ada kendala, silakan periksa log console terminal.*

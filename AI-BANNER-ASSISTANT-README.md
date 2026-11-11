# AI Banner Assistant - Zaloma Florist

## 📋 Deskripsi

**AI Banner Assistant** adalah tool untuk generate **prompt JSON** yang bisa digunakan di image generator gratis (Leonardo.ai, Ideogram, Playground, dll). 

Pendekatan ini mengatasi limitasi free tier API image generator dengan cara:
1. AI menghasilkan **prompt teks** yang sudah dioptimasi
2. User **copy prompt** tersebut
3. User paste ke **image generator gratis** pilihan mereka
4. User download hasil dan upload ke website

## 🎯 Kenapa Pakai Pendekatan Ini?

### ❌ Masalah Sebelumnya:
- API image generator (DALL-E, Stable Diffusion) **tidak gratis** atau limitnya sangat ketat
- Cloudflare Worker dengan Gemini Imagen **terbatas** di free tier
- Tidak bisa generate gambar langsung karena **limit habis**

### ✅ Solusi Sekarang:
- Pakai **Gemini API** (gratis) untuk generate **prompt text** saja
- User pakai **image generator gratis** seperti:
  - **Leonardo.ai** - 150 token/hari gratis
  - **Ideogram.ai** - 25 gambar/hari gratis
  - **Playground.com** - 50 gambar/hari gratis
- AI tetap membantu dengan memberikan **prompt yang sudah dioptimasi** untuk brand Zaloma

## 🚀 Cara Penggunaan

### 1. Akses AI Banner Assistant
- Login ke admin panel Zaloma
- Klik tab **"Banner Promo"**
- Klik tombol **"AI Assistant"** (warna ungu-gradien)
- Atau langsung ke: `https://zalomaflorist.com/admin/ai-banner-assistant`

### 2. Dapatkan Gemini API Key (Gratis)
- Buka: https://aistudio.google.com/apikey
- Login dengan akun Google
- Klik **"Create API Key"**
- Copy API key yang dihasilkan
- Paste ke field **"Gemini API Key"** di form

### 3. Input Deskripsi Banner
Masukkan deskripsi promo di textarea, contoh:

```
Diskon 50% untuk semua bouquet Valentine. 
Periode 10-14 Februari 2027. 
Gratis kartu ucapan dan pita premium. 
Delivery gratis Malang Raya.
```

**Tips menulis request yang baik:**
- ✅ Sebutkan **detail promo** (diskon, periode, syarat)
- ✅ Sebutkan **produk spesifik** (bouquet, bunga papan, dll)
- ✅ Sebutkan **benefit tambahan** (gratis kartu, diskon tambahan)
- ❌ Jangan terlalu panjang (maks 600 karakter)
- ❌ Jangan bertele-tele

### 4. Generate Prompt JSON
- Klik tombol **"Generate Prompt JSON"**
- Tunggu beberapa detik (biasanya 3-5 detik)
- Hasil akan muncul di panel sebelah kanan

### 5. Copy Prompt ke Image Generator

#### Output yang dihasilkan:
1. **Preview Copywriting** (badge, headline, description)
2. **Desktop Prompt** (untuk rasio 2:1)
3. **Mobile Prompt** (untuk rasio 1080:776)
4. **Full JSON** (semua data)

#### Cara pakai di Leonardo.ai:
1. Buka https://leonardo.ai
2. Login / Sign up (gratis 150 token/hari)
3. Klik **"Image Generation"**
4. **Copy prompt Desktop** dari AI Assistant
5. **Paste** di text box Leonardo
6. Atur **Aspect Ratio: 2:1** (untuk desktop) atau **Custom** (untuk mobile)
7. Klik **"Generate"**
8. Download gambar hasil

#### Cara pakai di Ideogram.ai:
1. Buka https://ideogram.ai
2. Login / Sign up (gratis 25 gambar/hari)
3. **Copy prompt** dari AI Assistant
4. **Paste** di prompt box
5. Pilih **"Landscape"** (untuk desktop)
6. Klik **"Generate"**
7. Download gambar hasil

#### Cara pakai di Playground.com:
1. Buka https://playground.com
2. Login / Sign up (gratis 50 gambar/hari)
3. **Copy prompt** dari AI Assistant
4. **Paste** di prompt box
5. Atur **dimensions** sesuai kebutuhan
6. Klik **"Generate"**
7. Download gambar hasil

### 6. Upload ke Banner Promo
- Kembali ke admin panel Zaloma
- Tab **"Banner Promo"** → **"+ Tambah Banner"**
- Upload gambar yang sudah di-generate
- Lengkapi data banner (judul, deskripsi, kota, dll)
- Simpan

## 📊 Format JSON Output

AI Assistant menghasilkan JSON dengan struktur:

```json
{
  "badge": "PROMO VALENTINE",
  "headline": "Diskon 50% Bouquet Valentine + Gratis Kartu Ucapan",
  "description": "Rayakan Valentine dengan bouquet istimewa dari Zaloma Florist. Periode 10-14 Februari. Gratis kartu ucapan dan pita premium. Delivery gratis Malang Raya.",
  "image_prompt": {
    "desktop": "Premium Valentine bouquet promotional banner, 2:1 landscape format. Elegant composition with fresh red roses and white lilies arranged in luxury wrapping. Burgundy #671E2F and dusty rose #D87B84 color palette. Gold #C59253 accents on ribbon. Clean white space on left third for text overlay. Professional florist photography style, soft natural lighting, creamy ivory #FDF7F7 background. High-end romantic atmosphere, suitable for premium flower shop promotion.",
    "mobile": "Premium Valentine bouquet promotional banner for mobile, 1080x776 vertical format. Close-up of fresh red roses with white lilies, elegant burgundy #671E2F and gold #C59253 ribbon. Clean composition with text-safe area at top third. Soft cream #F6E3E1 background, professional florist photography, romantic premium atmosphere."
  }
}
```

## 🎨 Brand Guidelines yang Diikuti

AI Assistant sudah diprogram untuk mengikuti brand Zaloma:

### Palet Warna:
- **Burgundy**: #893144 (primary)
- **Burgundy Tua**: #671E2F (dark)
- **Emas**: #C59253 (accent)
- **Krem**: #F6E3E1 (soft)
- **Ivory**: #FDF7F7 (light)
- **Dusty Rose**: #D87B84 (secondary)

### Style:
- Premium dan elegan
- Fotografi bunga realistis
- Tipografi serif yang terbaca
- Ruang kosong untuk teks overlay
- Tidak ada logo atau teks panjang (rawan typo)

## 🔧 Technical Details

### Stack:
- **Frontend**: Astro + Vanilla JS
- **AI API**: Google Gemini 2.0 Flash Lite (free tier)
- **Styling**: Tailwind CSS (inline di Astro)

### API Endpoint:
```
https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent
```

### Rate Limits (Gemini Free Tier):
- **1,500 requests per day**
- **15 requests per minute**
- Sangat cukup untuk generate prompt banner

### Browser Support:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## 💡 Tips & Best Practices

### Untuk Request yang Optimal:
1. **Spesifik tapi ringkas** (100-400 karakter ideal)
2. **Sebutkan angka** (diskon %, harga, periode)
3. **Highlight USP** (gratis ongkir, custom, pre-order)
4. **Target audience** jelas (Valentine, wisuda, wedding)

### Untuk Image Generator:
1. **Leonardo.ai**: Bagus untuk style realistis, pilih model "Leonardo Diffusion XL"
2. **Ideogram.ai**: Bagus untuk komposisi text + image
3. **Playground**: Bagus untuk creative control dan editing

### Ukuran Gambar yang Direkomendasikan:
- **Desktop Banner**: 2048 x 1024 px (ratio 2:1)
- **Mobile Banner**: 1080 x 776 px (sesuai design Zaloma)

## 🐛 Troubleshooting

### "API error (401)" atau "Invalid API key":
- Pastikan API key Gemini sudah benar
- Cek apakah API key sudah diaktifkan di Google AI Studio
- Generate API key baru jika perlu

### "Gemini tidak mengembalikan JSON prompt":
- Coba lagi dengan request yang lebih simpel
- Kurangi panjang deskripsi
- Hindari karakter spesial atau emoji berlebihan

### Image generator hasil tidak sesuai:
- Coba **re-generate** beberapa kali (setiap generator punya variasi)
- Edit prompt sedikit (tambah "professional", "high quality", dll)
- Gunakan **negative prompt** di generator: "blurry, low quality, text overlay, watermark"

### Copy button tidak bekerja:
- Gunakan browser modern (Chrome/Edge/Firefox terbaru)
- Atau copy manual dari textarea

## 📝 Changelog

### v1.0 (November 2026)
- ✅ Initial release
- ✅ Integrasi Gemini API untuk generate prompt text
- ✅ Output format: Desktop (2:1), Mobile (1080:776), Full JSON
- ✅ Preview copywriting (badge, headline, description)
- ✅ Example prompts untuk inspirasi
- ✅ Copy to clipboard functionality
- ✅ Toast notifications
- ✅ Responsive design

## 🔮 Future Improvements (Optional)

- [ ] Save prompt history ke localStorage
- [ ] Export prompt ke file .txt
- [ ] Template prompt untuk berbagai occasion
- [ ] Integrasi langsung ke image generator via API (jika ada budget)
- [ ] Multi-language support (English prompts)

## 📞 Support

Jika ada masalah atau pertanyaan:
1. Cek troubleshooting di atas
2. Pastikan API key Gemini valid
3. Coba refresh page dan re-generate

---

**Dibuat untuk Zaloma Florist Admin Panel**  
*Solusi praktis untuk generate banner promo tanpa biaya API image generator*

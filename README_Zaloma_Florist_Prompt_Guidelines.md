# Panduan Prompt Banner Zaloma Florist

Dokumen ini adalah standar untuk membuat banner promosi Zaloma Florist
dengan AI image generator. Tujuannya menjaga warna, identitas merek,
gaya, komposisi, dan kualitas visual agar seluruh banner serasi dengan
website.

> Prinsip utama: konten promosi boleh berubah, tetapi identitas visual
> Zaloma Florist harus tetap konsisten.

## 1. Identitas visual tetap

### Palet warna

  Peran            Warna                HEX
  ---------------- -------------------- -----------
  Utama            Burgundy / maroon    `#842D43`
  Gelap            Deep burgundy        `#641E32`
  Latar utama      Warm ivory / cream   `#FFF8F0`
  Latar sekunder   Soft blush           `#F7E5E3`
  Aksen            Champagne gold       `#C99A45`
  Teks sekunder    Warm charcoal        `#625653`
  Netral           White                `#FFFFFF`

Aturan warna: - Cream/ivory menjadi warna latar dominan. - Burgundy
menjadi warna identitas utama untuk headline, ornamen, panel, garis, dan
aksen merek. - Gold hanya untuk aksen dan penekanan; jangan
mendominasi. - Blush digunakan sebagai warna pendamping pada panel
lembut, pembungkus bunga, atau gradasi tipis. - Hijau hanya boleh muncul
secara alami pada daun dan tanaman. Jangan menjadikannya tema warna
utama. - Hindari biru elektrik, ungu neon, hijau neon, oranye terang,
dan warna lain di luar palet.

### Gaya desain

-   Premium florist, elegant editorial, warm, romantic, dan refined.
-   Gunakan latar cream, tipografi serif besar, aksen burgundy-gold,
    bunga realistis, dan ornamen lengkung yang elegan.
-   Komposisi lapang, rapi, dan memiliki hierarki informasi yang jelas.
-   Bunga harus tampak realistis, segar, detail, dengan pencahayaan
    hangat.
-   Hindari gaya kartun, 3D plastik, neon, futuristik, cyberpunk, atau
    layout yang terlalu ramai.

### Identitas merek

-   Nama toko wajib ditulis tepat: **ZALOMA FLORIST**.
-   Subjudul lokasi jika diperlukan: **FLORIST MALANG**.
-   Gunakan logo lotus resmi sebagai referensi jika aset tersedia.
-   Jangan mengganti nama menjadi Floragate atau merek lain.
-   Jangan menciptakan logo alternatif atau simbol baru.
-   Untuk hasil publikasi, gunakan file logo resmi dan periksa kembali
    teks karena AI dapat salah mengeja.

## 2. Aturan konsistensi

Hal yang wajib tetap: 1. Palet burgundy, ivory/cream, blush, dan
champagne gold. 2. Nama dan identitas Zaloma Florist. 3. Nuansa elegan,
premium, hangat, dan floral. 4. Serif elegan untuk headline utama. 5.
Sans-serif bersih untuk informasi pendukung. 6. Gold sebagai aksen
terbatas. 7. Fotografi bunga realistis dengan pencahayaan hangat.

Hal yang boleh berubah: - Headline, subheadline, dan isi promosi. -
Jenis rangkaian bunga atau foto produk. - Objek pendukung yang relevan,
misalnya jam, toko, kendaraan pengiriman, atau hadiah. - Posisi objek
selama hierarki visual tetap jelas.

Jangan membuat semua banner identik secara kaku. Variasikan komposisi
seperlunya, tetapi pertahankan bahasa visual brand.

## 3. Ukuran dan komposisi

Gunakan ukuran yang disebutkan dalam brief. Jangan mengasumsikan semua
banner memiliki ukuran sama.

Contoh: banner horizontal `1080 × 540 px` (rasio `2:1`). Ukuran lain
harus mengikuti kebutuhan media.

Aturan layout: - Sisakan safe area di setiap sisi. - Jangan menempatkan
logo atau teks penting terlalu dekat tepi. - Headline harus terbaca saat
banner ditampilkan kecil. - Seimbangkan area teks dan area visual. -
Jangan memotong objek utama, logo, headline, atau informasi promosi. -
Buat komposisi sesuai rasio target, bukan sekadar memotong desain dari
rasio lain.

## 4. Template prompt JSON

Salin template ini untuk setiap banner. Ganti bagian `campaign_content`,
`visual_subject`, dan `canvas` sesuai brief. Pertahankan aturan brand
dan `negative_prompt`.

``` json
{
  "task": "Create a promotional banner for Zaloma Florist.",
  "brand_identity": {
    "brand_name": "ZALOMA FLORIST",
    "location_line": "FLORIST MALANG",
    "brand_style": [
      "premium florist",
      "elegant editorial",
      "warm romantic",
      "refined floral"
    ],
    "logo_instruction": "Use the supplied official Zaloma Florist logo as the exact reference. Do not redesign or replace it."
  },
  "brand_color_system": {
    "primary": "#842D43",
    "deep": "#641E32",
    "background": "#FFF8F0",
    "secondary_background": "#F7E5E3",
    "accent": "#C99A45",
    "body_text": "#625653",
    "neutral": "#FFFFFF",
    "usage_rules": [
      "Warm ivory or cream must dominate the background.",
      "Burgundy is the primary brand color for important typography and design accents.",
      "Gold is a restrained accent and must never dominate.",
      "Blush may be used for soft panels and floral wrapping.",
      "Natural green is allowed only in realistic leaves and botanical details."
    ]
  },
  "campaign_content": {
    "headline": "[MAIN PROMOTIONAL HEADLINE]",
    "subheadline": "[SUPPORTING HEADLINE]",
    "description": "[SHORT PROMOTIONAL DESCRIPTION]",
    "call_to_action": "[CTA OR EMPTY STRING]",
    "exact_text_instruction": "Use supplied wording exactly. Do not invent prices, discounts, dates, guarantees, or claims."
  },
  "visual_subject": {
    "main_subject": "[MAIN FLOWER ARRANGEMENT OR CAMPAIGN OBJECT]",
    "supporting_elements": [
      "[RELEVANT SUPPORTING OBJECT 1]",
      "[RELEVANT SUPPORTING OBJECT 2]"
    ],
    "photography_style": "Photorealistic premium florist photography, realistic flower details, natural materials, soft warm lighting."
  },
  "layout": {
    "composition": "Balanced editorial composition with a clear text area and a dedicated visual subject area.",
    "headline_hierarchy": "Large elegant serif headline, readable supporting text, restrained decorative details.",
    "brand_placement": "Place Zaloma Florist identity clearly without overpowering the campaign headline.",
    "safe_area": "Keep all important text, logo, and objects comfortably inside the canvas."
  },
  "design_language": {
    "background": "Warm ivory cream with subtle blush transitions and restrained floral details.",
    "decorative_elements": [
      "Elegant burgundy curved shapes",
      "Thin champagne-gold accents",
      "Soft botanical framing where appropriate"
    ],
    "typography": {
      "headline": "High-contrast elegant editorial serif",
      "supporting_text": "Clean readable sans-serif",
      "script": "Optional restrained calligraphic script for a short phrase only"
    },
    "lighting": "Soft, warm, premium studio or natural ambient lighting."
  },
  "canvas": {
    "width": 1080,
    "height": 540,
    "aspect_ratio": "2:1",
    "orientation": "landscape"
  },
  "consistency_rules": [
    "Match the established Zaloma Florist website visual identity.",
    "Keep the burgundy, ivory, blush, and champagne-gold color family.",
    "Do not introduce a new dominant color palette.",
    "Keep the overall design elegant, warm, premium, and floral.",
    "Make this banner feel like part of the same Zaloma Florist campaign family."
  ],
  "negative_prompt": [
    "No unrelated brand names or logos.",
    "No green botanical theme as the dominant palette.",
    "No bright blue, neon purple, neon green, or oversaturated orange.",
    "No cyberpunk, futuristic, cartoon, childish, or plastic 3D style.",
    "No cluttered layout or excessive decorative elements.",
    "No tiny, crowded, distorted, or misspelled typography.",
    "No invented prices, discounts, dates, contact details, or unsupported claims.",
    "Do not crop important text, logos, flowers, or campaign objects."
  ],
  "output_requirements": {
    "deliverable": "One finished promotional banner image.",
    "quality": "High resolution, polished composition, crisp details, readable typography.",
    "priority_order": [
      "Correct campaign message",
      "Consistent Zaloma Florist brand identity",
      "Correct canvas dimensions",
      "Clear composition and readable typography",
      "High-quality realistic floral imagery"
    ]
  }
}
```

## 5. Contoh pengisian konten

### Banner buka 24 jam

``` json
{
  "campaign_content": {
    "headline": "TOKO KAMI BUKA 24 JAM",
    "subheadline": "Siap melayani setiap hari",
    "description": "Pemesanan karangan bunga kapan saja, setiap hari.",
    "call_to_action": ""
  },
  "visual_subject": {
    "main_subject": "A premium pink and ivory flower bouquet with a burgundy satin ribbon and Zaloma Florist brand tag.",
    "supporting_elements": [
      "Elegant clock motif",
      "Small florist storefront icon"
    ]
  }
}
```

### Banner gratis ongkir

``` json
{
  "campaign_content": {
    "headline": "GRATIS ONGKIR",
    "subheadline": "ke Malang Kota",
    "description": "Pesan karangan bunga favorit Anda dengan pengiriman gratis ke seluruh area Malang Kota.",
    "call_to_action": "Pesan Sekarang"
  },
  "visual_subject": {
    "main_subject": "A realistic white flower delivery van with a tasteful Zaloma Florist logo, accompanied by a premium standing flower arrangement.",
    "supporting_elements": [
      "Malang city street atmosphere",
      "Fresh floral arrangement"
    ]
  }
}
```

## 6. Checklist sebelum digunakan

-   [ ] Nama brand tertulis **ZALOMA FLORIST**.
-   [ ] Warna dominan tetap burgundy, ivory/cream, blush, dan gold.
-   [ ] Tidak ada warna baru yang mendominasi.
-   [ ] Gaya visual tetap elegan, premium, hangat, dan floral.
-   [ ] Headline terbaca jelas dan tidak terpotong.
-   [ ] Ejaan dan isi promosi sesuai brief.
-   [ ] Tidak ada harga, diskon, tanggal, atau klaim yang dibuat-buat.
-   [ ] Ukuran dan rasio gambar sesuai permintaan.
-   [ ] Banner terlihat serasi dengan banner Zaloma Florist lainnya.

## 7. Catatan penggunaan AI

AI image generator dapat keliru menulis teks, logo, angka, dan detail
kecil. Untuk banner yang akan dipublikasikan: - Periksa semua teks
secara manual. - Gunakan logo resmi sebagai referensi, bukan logo hasil
generasi. - Jika teks tidak akurat, hasilkan visual dengan ruang teks
yang cukup lalu tambahkan teks final melalui aplikasi desain. - Nilai
HEX adalah panduan; sertakan juga screenshot website atau banner yang
sudah disetujui sebagai referensi visual bila memungkinkan. - Jangan
mengubah isi promosi tanpa persetujuan.

------------------------------------------------------------------------

**Standar akhir:** setiap banner harus langsung terasa sebagai bagian
dari website Zaloma Florist, meskipun tema promosi, foto bunga, objek
pendukung, dan ukuran banner berbeda.

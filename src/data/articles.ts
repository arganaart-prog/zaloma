export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor?: string;
  date: string;
  isoDate: string;
  image: string;
  author: string;
  authorRole: string;
  content: {
    lead: string;
    sections: {
      heading: string;
      body: string[];
      tip?: string;
    }[];
    conclusion: string;
  };
  tags: string[];
}

export const ARTICLES: Article[] = [
  {
    id: 'artikel-1',
    slug: 'panduan-memilih-karangan-bunga-papan',
    title: 'Panduan Memilih Karangan Bunga Papan di Malang: Duka Cita, Pernikahan, & Selamat',
    excerpt: 'Standar ukuran, perpaduan warna yang sopan, etika kalimat ucapan, dan tips pemesanan tepat waktu di Malang.',
    category: 'Panduan Florist',
    categoryColor: '#2D382E',
    date: '14 Oktober 2026',
    isoDate: '2026-10-14',
    image: '/images/produk/wedding-luxury.webp',
    author: 'Tim Zaloma Florist',
    authorRole: 'Master Florist & Desainer Ucapan',
    content: {
      lead: 'Karangan bunga papan merupakan representasi penghormatan dan rasa peduli Anda kepada keluarga, sahabat, maupun rekan bisnis. Di Malang, tradisi mengirim bunga papan memiliki etika pemilihan warna dan tata bahasa ucapan tersendiri yang perlu diperhatikan.',
      sections: [
        {
          heading: '1. Menyesuaikan Warna Rangkaian dengan Momen',
          body: [
            'Untuk momen Duka Cita, gunakan dominasi warna teduh seperti hitam, putih, kuning lembut, ungu tua, atau biru tua. Hindari warna merah menyala atau motif ceria.',
            'Sebaliknya, untuk Pernikahan (Happy Wedding) dan Grand Opening atau Sertijab, gunakan palet warna cerah dan energik seperti merah marun, emas (gold), oranye hangat, dan hijau segar sebagai simbol keberuntungan dan kegembiraan.'
          ],
          tip: 'Zaloma Florist selalu memberikan foto preview bunga papan sebelum dikirim ke lokasi acara di Malang Raya.'
        },
        {
          heading: '2. Ukuran Papan Standar vs Ukuran Jumbo',
          body: [
            'Ukuran standar 2 x 1,2 meter sangat ideal untuk mewakili individu atau divisi kantor kecil.',
            'Untuk instansi pemerintah, BUMN, direksi perusahaan, atau sahabat karib keluarga inti, ukuran 2 x 1,5 meter atau paket gandeng double papan memberikan impresi yang jauh lebih megah dan menonjol di barisan terdepan lokasi.'
          ]
        },
        {
          heading: '3. Waktu Pemesanan yang Ideal',
          body: [
            'Untuk acara pernikahan atau peresmian gedung, disarankan memesan H-1 agar papan dapat dipasang 2 jam sebelum tamu undangan hadir.',
            'Namun bila terjadi peristiwa duka cita mendadak, Zaloma Florist menyediakan layanan ekspres 3 jam selesai dengan garansi tiba tepat waktu di seluruh rumah duka di Kota Malang.'
          ]
        }
      ],
      conclusion: 'Memilih karangan bunga papan yang tepat menunjukkan ketulusan dan profesionalitas Anda. Konsultasikan kebutuhan desain dan kalimat ucapan Anda bersama tim Zaloma Florist Malang.'
    },
    tags: ['Bunga Papan', 'Florist Malang', 'Etika Karangan Bunga', 'Tips Pesan Bunga']
  },
  {
    id: 'artikel-2',
    slug: 'cara-merawat-hand-bouquet-bunga-segar',
    title: '5 Cara Merawat Hand Bouquet Bunga Segar Agar Mawar Tahan Lama di Rumah',
    excerpt: 'Trik praktis florist profesional: cara potong batang 45°, suhu ruangan ideal, dan ramuan alami menjaga kelopak tetap mekar.',
    category: 'Tips Perawatan',
    categoryColor: '#967849',
    date: '12 Oktober 2026',
    isoDate: '2026-10-12',
    image: '/images/produk/bunga-meja/400000/700.webp',
    author: 'Sarah Lestari',
    authorRole: 'Spesialis Perangkai Hand Bouquet',
    content: {
      lead: 'Mendapatkan buket bunga segar saat hari ulang tahun, wisuda, atau anniversary tentu membahagiakan. Sayangnya tanpa perawatan yang benar, kelopak mawar bisa layu dalam 2 hari. Berikut panduan merawat buket agar awet hingga 7–10 hari.',
      sections: [
        {
          heading: '1. Buka Pembungkus & Potong Batang Miring 45 Derajat',
          body: [
            'Segera buka kertas pembungkus buket jika sudah sampai di rumah agar sirkulasi udara lancar.',
            'Potong bagian bawah batang bunga sekitar 2 cm dengan sudut miring 45 derajat menggunakan gunting tajam atau pisau di dalam air. Potongan miring memaksimalkan luas penyerapan air oleh pembuluh batang.'
          ],
          tip: 'Jangan memotong batang dengan gunting tumpul karena dapat meremukkan pembuluh kapiler bunga.'
        },
        {
          heading: '2. Gunakan Vas Bersih dan Air Dingin Segar',
          body: [
            'Pastikan vas bunga dicuci bersih bebas dari bakteri sebelum diisi air dingin. Bersihkan daun-daun di bagian bawah batang yang terendam air untuk mencegah pembusukan dan bau tidak sedap.',
            'Ganti air vas setiap hari atau maksimal 2 hari sekali agar air selalu steril dan kaya oksigen.'
          ]
        },
        {
          heading: '3. Hindarkan dari Sinar Matahari Langsung & AC Ekstrem',
          body: [
            'Tempatkan vas bunga di area yang teduh, sejuk, dan memiliki ventilasi baik.',
            'Jauhkan dari hembusan angin langsung AC, kipas angin kencang, serta jangan diletakkan dekat buah-buahan matang seperti pisang atau apel karena memancarkan gas etilen yang mempercepat pelayuan.'
          ]
        }
      ],
      conclusion: 'Dengan sedikit ketelatenan, buket bunga kenangan spesial Anda akan tetap cantik, wangi, dan mekar segar menghiasi sudut ruangan.'
    },
    tags: ['Hand Bouquet', 'Perawatan Bunga', 'Mawar Segar', 'Tips Rumah']
  },
  {
    id: 'artikel-3',
    slug: 'makna-filosofis-warna-bunga',
    title: 'Makna Filosofis Warna Bunga: Jangan Sampai Salah Kirim di Hari Istimewa',
    excerpt: 'Pahami arti simbolis mawar merah, putih, lily, hingga anggrek sebelum mengirimkan karangan bunga kepada orang terkasih.',
    category: 'Inspirasi Bunga',
    categoryColor: '#BFA77A',
    date: '10 Oktober 2026',
    isoDate: '2026-10-10',
    image: '/images/produk/standing-flower/1500 kombinasi bunga mawar dan lily.webp',
    author: 'Zaloma Florist',
    authorRole: 'Konsultan Estetika Bunga',
    content: {
      lead: 'Setiap warna kelopak bunga memiliki bahasa tersirat (floriography) yang telah diwariskan sejak berabad-abad lalu. Memahami makna warna akan membuat ucapan Anda terasa jauh lebih personal dan menyentuh hati penerima.',
      sections: [
        {
          heading: '1. Merah Menyala: Cinta Sejati & Keberanian',
          body: [
            'Mawar merah melambangkan gairah, cinta yang mendalam, dan rasa hormat yang tinggi. Sangat tepat untuk momen romantis seperti Hari Valentine, lamaran pernikahan, atau anniversary.',
            'Dalam bunga papan peresmian, sentuhan merah juga menyimbolkan semangat membara dan kesuksesan finansial.'
          ]
        },
        {
          heading: '2. Putih Bersih: Ketulusan, Kesucian, & Simpati',
          body: [
            'Bunga putih seperti lily casablanca, mawar putih, dan krisan putih melambangkan keanggunan, ketulusan niat, dan kedamaian.',
            'Warna ini sangat universal: anggun untuk momen pernikahan sakral dan penuh hormat saat dijadikan karangan duka cita sebagai ungkapan belasungkawa.'
          ],
          tip: 'Kombinasi mawar putih dan baby breath adalah pilihan terpopuler untuk wisuda karena melambangkan awal babak baru yang suci.'
        },
        {
          heading: '3. Kuning Cerah & Oranye: Persahabatan & Optimisme',
          body: [
            'Warna kuning memancarkan keceriaan, kehangatan sinar mentari, dan persahabatan erat.',
            'Cocok untuk memberi semangat kepada sahabat yang sedang sakit (Get Well Soon) atau ucapan selamat atas kelulusan dan promosi jabatan.'
          ]
        }
      ],
      conclusion: 'Bingung meracik paduan warna yang tepat? Diskusikan pesan dan nuansa yang ingin Anda sampaikan kepada desainer bunga Zaloma Florist.'
    },
    tags: ['Makna Bunga', 'Filosofi Bunga', 'Mawar', 'Inspirasi Kado']
  },
  {
    id: 'artikel-4',
    slug: 'keunggulan-tanbulampot-kado-hidup-modern',
    title: 'Keunggulan Tanbulampot sebagai Kado Hidup Modern & Pohon Ucapan di Malang',
    excerpt: 'Alternatif karangan bunga kekinian yang ramah lingkungan, dapat dipanen buahnya, dan menjadi kenang-kenangan abadi.',
    category: 'Tren Florist',
    categoryColor: '#55654B',
    date: '08 Oktober 2026',
    isoDate: '2026-10-08',
    image: '/images/produk/tanbulampot/1250 berbuah.webp',
    author: 'Dian Saputra',
    authorRole: 'Spesialis Tanaman & Lanskap',
    content: {
      lead: 'Bosan dengan karangan bunga konvensional yang layu setelah 3 hari? Di Malang, hadir tren baru kado ucapan berupa Tanbulampot (Tanaman Buah dalam Pot) berhias pita dan kartu ucapan akrilik eksklusif dari Zaloma Florist.',
      sections: [
        {
          heading: '1. Kado Hidup yang Tahan Bertahun-tahun',
          body: [
            'Berbeda dengan bunga potong yang hanya bertahan hitungan hari, tanbulampot adalah hadiah hidup yang akan terus tumbuh subur dan dirawat oleh penerima.',
            'Setiap kali menyiram dan melihat pohon tumbuh, penerima akan selalu teringat pada ketulusan Anda yang mengirimkannya.'
          ],
          tip: 'Pilihan tanaman favorit di Zaloma Florist meliputi Jeruk Nagami, Jeruk Chokun, Jambu Kristal, dan Sawo Manila yang rajin berbuah di dataran Malang.'
        },
        {
          heading: '2. Simbol Berkah, Rezeki, dan Produktivitas',
          body: [
            'Pohon buah yang sedang berbunga atau berbuah lebat menyimbolkan panen rezeki, kemakmuran, dan bisnis yang berbuah manis.',
            'Sangat cocok dihadiahkan untuk pembukaan kantor baru, housewarming pindah rumah, maupun ucapan selamat pensiun kepada atasan.'
          ]
        },
        {
          heading: '3. Tampilan Mewah & Mudah Dirawat',
          body: [
            'Dikemas dalam pot teraso atau keramik elegan, dihias bebatuan alami, pita satin, serta banner ucapan berdesain custom.',
            'Penerima juga mendapatkan panduan penyiraman dan pemupukan sederhana sehingga siapa saja bisa merawatnya dengan mudah.'
          ]
        }
      ],
      conclusion: 'Jadikan momen ucapan Anda berbeda dan lebih bermakna dengan mengirimkan pohon ucapan tanbulampot dari Zaloma Florist Malang.'
    },
    tags: ['Tanbulampot', 'Pohon Ucapan', 'Kado Ramah Lingkungan', 'Florist Malang']
  },
  {
    id: 'artikel-5',
    slug: 'memilih-bunga-wisuda-yang-berkesan',
    title: 'Memilih Bunga Wisuda yang Berkesan: Antara Buket, Standing, dan Papan Ucapan',
    excerpt: 'Panduan praktis menentukan jenis rangkaian bunga yang paling tepat untuk momen wisuda, dari sisi ukuran, anggaran, dan kesan yang ingin disampaikan.',
    category: 'Panduan Florist',
    categoryColor: '#2D382E',
    date: '06 Oktober 2026',
    isoDate: '2026-10-06',
    image: '/images/produk/wedding-luxury.webp',
    author: 'Tim Zaloma Florist',
    authorRole: 'Master Florist & Desainer Ucapan',
    content: {
      lead: 'Wisuda adalah momen bersejarah yang menandai babak baru kehidupan seseorang. Membawa atau mengirimkan bunga yang tepat dapat membuat hari tersebut terasa semakin istimewa dan bermakna bagi sang wisudawan.',
      sections: [
        {
          heading: '1. Hand Bouquet: Intimate & Personal',
          body: [
            'Hand bouquet atau buket tangan adalah pilihan paling klasik dan personal untuk diberikan langsung saat prosesi wisuda berlangsung.',
            'Ukuran sedang dengan 20–30 tangkai mawar atau campuran gerbera dan freesia sudah cukup elegan tanpa terasa berlebihan saat dibawa berfoto.'
          ],
          tip: 'Pilih warna pastel atau warna favorit sang wisudawan agar tampak lebih personal dan berkesan.'
        },
        {
          heading: '2. Standing Flower: Kesan Prestisius di Lokasi',
          body: [
            'Bila Anda ingin memberikan kesan yang lebih megah dan terlihat oleh seluruh hadirin, standing flower setinggi 1,2–1,5 meter adalah pilihan terbaik.',
            'Ditempatkan di pintu masuk gedung atau di samping bangku keluarga, standing flower menjadi penanda visual kebanggaan keluarga atas pencapaian sang wisudawan.'
          ]
        },
        {
          heading: '3. Papan Ucapan: Cocok untuk Kelompok atau Rekan Kerja',
          body: [
            'Jika Anda mewakili komunitas, angkatan kuliah, atau kantor, bunga papan ucapan adalah bentuk apresiasi kolektif yang elegan.',
            'Kalimat ucapan yang formal namun hangat, seperti "Selamat Atas Raihan Gelar S.E. — Semoga Ilmu Bermanfaat", memberikan kesan yang mendalam dan profesional.'
          ]
        }
      ],
      conclusion: 'Apa pun pilihannya, yang terpenting adalah niat tulus yang Anda sampaikan bersama bunga tersebut. Tim Zaloma Florist siap membantu Anda meracik rangkaian terbaik untuk momen wisuda yang tak terlupakan.'
    },
    tags: ['Wisuda', 'Bunga Wisuda', 'Hand Bouquet', 'Florist Malang']
  },
  {
    id: 'artikel-6',
    slug: 'etika-mengirim-bunga-duka-cita',
    title: 'Etika Mengirim Bunga Duka Cita: Cara yang Benar agar Tidak Menyinggung',
    excerpt: 'Panduan lengkap memilih warna, kalimat ucapan, waktu pengiriman, dan jenis rangkaian bunga untuk momen belasungkawa yang penuh penghormatan.',
    category: 'Panduan Florist',
    categoryColor: '#2D382E',
    date: '04 Oktober 2026',
    isoDate: '2026-10-04',
    image: '/images/produk/standing-flower/1500 kombinasi bunga mawar dan lily.webp',
    author: 'Tim Zaloma Florist',
    authorRole: 'Master Florist & Desainer Ucapan',
    content: {
      lead: 'Mengirim bunga duka cita adalah salah satu cara paling universal untuk menyampaikan rasa simpati dan belasungkawa. Namun, ada sejumlah etika yang perlu diperhatikan agar gestur baik Anda tidak terasa canggung atau menyinggung keluarga yang sedang berduka.',
      sections: [
        {
          heading: '1. Pilih Warna yang Tenang dan Penuh Hormat',
          body: [
            'Warna yang paling umum dan diterima secara luas untuk bunga duka cita adalah putih, kuning gading, ungu muda, dan krem. Warna-warna ini memancarkan ketenangan dan rasa hormat yang mendalam.',
            'Hindari penggunaan warna merah terang, oranye mencolok, atau motif yang terlalu ceria, karena dapat terkesan tidak sensitif terhadap situasi.'
          ],
          tip: 'Lilium putih (casablanca) dan mawar putih adalah pilihan paling aman dan paling dihargai di hampir semua budaya di Indonesia.'
        },
        {
          heading: '2. Kalimat Ucapan yang Tepat dan Tulus',
          body: [
            'Tuliskan ucapan yang singkat, tulus, dan tidak berlebihan. Contoh yang baik: "Turut berduka cita atas kepergian Bapak/Ibu [nama]. Semoga almarhum/almarhumah mendapat tempat terbaik di sisi-Nya."',
            'Hindari kalimat yang tanpa sengaja menyiratkan penilaian, seperti "Semoga lebih ikhlas" atau ungkapan klise yang terasa hampa.'
          ]
        },
        {
          heading: '3. Waktu Pengiriman yang Tepat',
          body: [
            'Idealnya, bunga duka cita dikirim pada hari yang sama dengan pemberitahuan kabar duka, atau paling lambat pada hari pertama masa berkabung.',
            'Zaloma Florist menyediakan layanan pengiriman ekspres yang menjamin bunga tiba dalam 3 jam sejak pemesanan, bahkan untuk pesanan mendadak di malam hari.'
          ]
        }
      ],
      conclusion: 'Bunga adalah bahasa universal yang melampaui kata-kata. Kirimkan dengan tulus, dan keluarga yang berduka akan merasakan kehangatan kepedulian Anda.'
    },
    tags: ['Duka Cita', 'Bunga Belasungkawa', 'Etika Bunga', 'Florist Malang']
  },
  {
    id: 'artikel-7',
    slug: 'bunga-pernikahan-dekorasi-altar-dan-meja-tamu',
    title: 'Bunga Pernikahan di Malang: Panduan Dekorasi Altar, Meja Tamu, dan Hand Bouquet Pengantin',
    excerpt: 'Tips memilih tema warna, jenis bunga musiman, dan estimasi anggaran dekorasi bunga pernikahan yang elegan namun tetap efisien.',
    category: 'Tren Florist',
    categoryColor: '#55654B',
    date: '02 Oktober 2026',
    isoDate: '2026-10-02',
    image: '/images/produk/wedding-luxury.webp',
    author: 'Dian Saputra',
    authorRole: 'Spesialis Tanaman & Lanskap',
    content: {
      lead: 'Dekorasi bunga adalah salah satu elemen paling visual dan berkesan dalam sebuah pernikahan. Pemilihan jenis bunga, palet warna, dan tata letak rangkaian akan sangat menentukan atmosfer keseluruhan venue.',
      sections: [
        {
          heading: '1. Menentukan Tema Warna Pernikahan',
          body: [
            'Tema warna pernikahan sebaiknya ditentukan sejak awal karena akan mempengaruhi pilihan gaun, dekorasi, hingga jenis bunga yang digunakan.',
            'Tema klasik romantis biasanya menggunakan palet merah marun, blush pink, dan putih gading. Sementara tema garden party modern cenderung menggunakan sage green, dusty rose, dan putih dengan sentuhan dedaunan hijau segar.'
          ],
          tip: 'Diskusikan tema warna dengan florist Anda minimal 2 minggu sebelum hari H agar ketersediaan bunga musiman dapat diantisipasi.'
        },
        {
          heading: '2. Jenis Bunga yang Populer untuk Pernikahan',
          body: [
            'Mawar adalah pilihan abadi yang tidak pernah salah. Untuk nuansa yang lebih organik dan natural, tambahkan eucalyptus, baby breath, atau ruscus sebagai pengisi rangkaian.',
            'Untuk pasangan yang menginginkan nuansa eksklusif, bunga peony, ranunculus, atau tulip bisa menjadi pilihan premium yang elegan.'
          ]
        },
        {
          heading: '3. Estimasi Anggaran Dekorasi Bunga',
          body: [
            'Anggaran dekorasi bunga pernikahan sangat bervariasi tergantung skala acara. Untuk intimate wedding dengan 50–100 tamu, anggaran Rp 3–7 juta sudah dapat menghasilkan dekorasi yang elegan.',
            'Untuk grand wedding di gedung mewah, anggaran dekorasi bunga biasanya berkisar Rp 15–50 juta yang meliputi altar, lorong tamu, meja resepsi, dan hand bouquet pengantin.'
          ]
        }
      ],
      conclusion: 'Percayakan dekorasi bunga pernikahan Anda kepada tim profesional Zaloma Florist yang berpengalaman merias ratusan pernikahan di Malang Raya dengan sentuhan personal yang detail.'
    },
    tags: ['Bunga Pernikahan', 'Dekorasi Pernikahan', 'Florist Malang', 'Pernikahan Malang']
  },
  {
    id: 'artikel-8',
    slug: 'jenis-bunga-meja-kantor-yang-meningkatkan-produktivitas',
    title: 'Jenis Bunga Meja Kantor yang Terbukti Meningkatkan Mood dan Produktivitas Kerja',
    excerpt: 'Penelitian menunjukkan kehadiran tanaman hias di ruang kerja dapat mengurangi stres hingga 37%. Ini rekomendasinya untuk kantor di Malang.',
    category: 'Inspirasi Bunga',
    categoryColor: '#BFA77A',
    date: '30 September 2026',
    isoDate: '2026-09-30',
    image: '/images/produk/bunga-meja/400000/700.webp',
    author: 'Sarah Lestari',
    authorRole: 'Spesialis Perangkai Hand Bouquet',
    content: {
      lead: 'Ruang kerja yang dihiasi tanaman atau bunga segar terbukti secara ilmiah dapat meningkatkan fokus, kreativitas, dan kesejahteraan emosional karyawan. Berikut rekomendasi bunga dan tanaman terbaik untuk meja kantor Anda di Malang.',
      sections: [
        {
          heading: '1. Peace Lily: Penyaring Udara Alami',
          body: [
            'Peace lily (Spathiphyllum) adalah pilihan terbaik untuk ruangan ber-AC karena kemampuannya menyerap polutan udara seperti formaldehida dan benzena.',
            'Bunganya yang anggun berwarna putih juga memberikan kesan profesional dan bersih di lingkungan kerja formal.'
          ],
          tip: 'Peace lily hanya perlu disiram sekali seminggu dan dapat bertahan dengan cahaya ruangan yang minim, sangat cocok untuk kantor yang tidak memiliki banyak jendela.'
        },
        {
          heading: '2. Krisan Meja: Warna-warni yang Mengangkat Semangat',
          body: [
            'Rangkaian bunga krisan (chrysanthemum) segar dalam vas kecil di meja kerja memberikan semburat warna yang secara psikologis membantu mengangkat mood sepanjang hari.',
            'Tersedia dalam berbagai warna mulai dari kuning cerah, merah marun, hingga putih klasik, krisan dapat diganti setiap 1–2 minggu dengan harga yang sangat terjangkau.'
          ]
        },
        {
          heading: '3. Anggrek Mini: Elegan dan Tahan Lama',
          body: [
            'Anggrek bulan (Phalaenopsis) mini dalam pot kecil adalah pilihan premium untuk meja eksekutif atau ruang rapat. Tampilannya elegan, berbunga lama hingga 2–3 bulan, dan tidak memerlukan perawatan rumit.',
            'Cukup siram akarnya dengan 3 buah batu es seminggu sekali dan letakkan di dekat sumber cahaya tidak langsung.'
          ]
        }
      ],
      conclusion: 'Investasi kecil pada tanaman dan bunga di ruang kerja Anda adalah langkah nyata untuk menciptakan lingkungan kerja yang lebih manusiawi, produktif, dan menyenangkan.'
    },
    tags: ['Bunga Kantor', 'Tanaman Hias', 'Produktivitas Kerja', 'Inspirasi Interior']
  },
  {
    id: 'artikel-9',
    slug: 'kado-bunga-ulang-tahun-panduan-lengkap',
    title: 'Kado Bunga Ulang Tahun: Panduan Lengkap Memilih Rangkaian yang Paling Tepat',
    excerpt: 'Dari buket romantis untuk pasangan, buket wisuda untuk adik, hingga standing flower untuk orang tua — setiap momen ulang tahun memiliki pilihan bunga yang paling sesuai.',
    category: 'Panduan Florist',
    categoryColor: '#2D382E',
    date: '28 September 2026',
    isoDate: '2026-09-28',
    image: '/images/produk/bunga-meja/400000/700.webp',
    author: 'Tim Zaloma Florist',
    authorRole: 'Master Florist & Desainer Ucapan',
    content: {
      lead: 'Bunga adalah kado yang hampir selalu tepat untuk ulang tahun siapa pun. Namun memilih jenis rangkaian yang paling sesuai dengan penerima dan hubungan Anda dengan mereka akan membuat hadiah itu terasa jauh lebih bermakna.',
      sections: [
        {
          heading: '1. Untuk Pasangan: Romantis dan Personal',
          body: [
            'Buket mawar merah atau pink dengan jumlah 12, 24, atau 36 tangkai adalah simbol cinta yang tak lekang oleh waktu.',
            'Tambahkan cokelat premium atau lilin aromaterapi dalam satu paket hampers untuk kesan yang lebih lengkap dan berkesan.'
          ],
          tip: 'Sertakan kartu ucapan tulisan tangan — sentuhan personal yang justru sering lebih diingat daripada bunga itu sendiri.'
        },
        {
          heading: '2. Untuk Orang Tua: Hangat dan Penuh Hormat',
          body: [
            'Pilih rangkaian dengan warna-warna hangat seperti kuning, oranye, atau merah marun yang melambangkan rasa syukur dan kasih sayang.',
            'Standing flower berukuran sedang atau rangkaian bunga meja dalam vas keramik elegan adalah pilihan yang tepat dan tidak berlebihan untuk diberikan kepada orang tua.'
          ]
        },
        {
          heading: '3. Untuk Teman atau Rekan Kerja: Ceria dan Universal',
          body: [
            'Buket berisi campuran gerbera, sunflower, dan krisan berwarna cerah adalah pilihan yang menyenangkan dan tidak terkesan terlalu intim untuk diberikan kepada teman atau rekan profesional.',
            'Ukuran medium dengan 15–20 tangkai sudah terasa cukup berkesan tanpa terasa berlebihan.'
          ]
        }
      ],
      conclusion: 'Tidak ada yang salah dalam memberikan bunga sebagai kado ulang tahun. Yang membuat perbedaan adalah ketulusan Anda dalam memilih dan kepedulian kecil dalam memerhatikan preferensi si penerima.'
    },
    tags: ['Kado Ulang Tahun', 'Bunga Ulang Tahun', 'Hand Bouquet', 'Florist Malang']
  },
  {
    id: 'artikel-10',
    slug: 'tips-memesan-bunga-online-tanpa-kecewa',
    title: 'Tips Memesan Bunga Online agar Tidak Kecewa: Panduan dari Florist Profesional',
    excerpt: 'Kenali tanda florist terpercaya, cara membaca foto katalog dengan benar, dan pertanyaan penting yang harus diajukan sebelum memesan.',
    category: 'Tips Perawatan',
    categoryColor: '#967849',
    date: '25 September 2026',
    isoDate: '2026-09-25',
    image: '/images/produk/standing-flower/1500 kombinasi bunga mawar dan lily.webp',
    author: 'Sarah Lestari',
    authorRole: 'Spesialis Perangkai Hand Bouquet',
    content: {
      lead: 'Di era digital, memesan bunga secara online menawarkan kemudahan yang luar biasa. Namun, tidak sedikit konsumen yang merasa kecewa karena bunga yang datang tidak sesuai dengan foto di katalog. Berikut panduan agar pengalaman memesan bunga online Anda selalu memuaskan.',
      sections: [
        {
          heading: '1. Kenali Ciri Florist yang Dapat Dipercaya',
          body: [
            'Florist yang profesional dan transparan biasanya memiliki portofolio pesanan nyata (bukan hanya foto stok), ulasan pelanggan yang dapat diverifikasi, serta bersedia memberikan foto real sebelum pengiriman.',
            'Perhatikan juga apakah mereka mencantumkan alamat toko fisik yang jelas, nomor kontak yang aktif, dan estimasi waktu pengiriman yang realistis.'
          ],
          tip: 'Zaloma Florist selalu mengirimkan foto asli rangkaian bunga kepada pelanggan sebelum produk diantarkan ke alamat tujuan.'
        },
        {
          heading: '2. Pahami Cara Membaca Foto Katalog',
          body: [
            'Foto katalog profesional biasanya menggunakan pencahayaan studio yang optimal, sehingga warna terlihat lebih cerah dan vivid dari aslinya.',
            'Tanyakan langsung kepada florist apakah foto tersebut adalah foto produk nyata atau hanya referensi desain. Florist jujur akan menjawab dengan transparan dan menawarkan alternatif yang sesuai stok saat ini.'
          ]
        },
        {
          heading: '3. Pertanyaan Penting Sebelum Memesan',
          body: [
            'Sebelum melakukan pembayaran, pastikan Anda telah menanyakan: jenis bunga yang digunakan beserta alternatifnya jika tidak tersedia, waktu tiba paling cepat dan paling lambat, serta kebijakan penggantian jika bunga tidak sesuai ekspektasi.',
            'Simpan semua percakapan dan nota pesanan sebagai bukti jika terjadi ketidaksesuaian.'
          ]
        }
      ],
      conclusion: 'Memesan bunga online seharusnya menjadi pengalaman yang menyenangkan dan bebas kekhawatiran. Pilih florist yang mengedepankan transparansi, kualitas, dan kepuasan pelanggan seperti Zaloma Florist Malang.'
    },
    tags: ['Tips Beli Bunga Online', 'Florist Terpercaya', 'Panduan Konsumen', 'Florist Malang']
  },
  {
    id: 'artikel-11',
    slug: 'sejarah-dan-tradisi-bunga-di-indonesia',
    title: 'Sejarah dan Tradisi Bunga dalam Budaya Jawa: Dari Siraman Hingga Selamatan',
    excerpt: 'Bunga bukan sekadar hiasan — dalam budaya Jawa, bunga memiliki peran sakral dalam berbagai upacara adat yang masih hidup hingga hari ini.',
    category: 'Inspirasi Bunga',
    categoryColor: '#BFA77A',
    date: '22 September 2026',
    isoDate: '2026-09-22',
    image: '/images/produk/wedding-luxury.webp',
    author: 'Zaloma Florist',
    authorRole: 'Konsultan Estetika Bunga',
    content: {
      lead: 'Di balik keindahan visualnya, bunga dalam tradisi Jawa menyimpan makna filosofis yang sangat dalam. Setiap jenis bunga yang dipilih untuk ritual adat memiliki fungsi simbolis, doa, dan harapan yang disampaikan kepada Yang Maha Kuasa.',
      sections: [
        {
          heading: '1. Bunga Melati: Kesucian dan Kesetiaan',
          body: [
            'Melati (Jasminum sambac) adalah bunga nasional Indonesia yang paling sering hadir dalam upacara adat Jawa. Dalam prosesi siraman calon pengantin, air yang dicampur melati dipercaya menyucikan jiwa dan raga.',
            'Rangkaian melati dalam bentuk ronce (untaian panjang) juga sering digunakan sebagai penghias sanggul pengantin dan gapura rumah.'
          ],
          tip: 'Aroma melati yang khas dipercaya dapat menenangkan jiwa dan menghadirkan suasana sakral dalam setiap upacara yang dilaksanakan.'
        },
        {
          heading: '2. Bunga Kenanga dan Mawar: Ritual Selamatan dan Ziarah',
          body: [
            'Dalam tradisi taburan bunga (nyekar) di makam leluhur, campuran kelopak mawar merah, mawar putih, dan kenanga adalah komposisi yang paling umum digunakan.',
            'Setiap bunga memiliki maknanya masing-masing: mawar merah sebagai simbol kehidupan dan cinta, mawar putih sebagai simbol kesucian dan kedamaian, serta kenanga sebagai simbol kehangatan dan kasih sayang yang tak terputus.'
          ]
        },
        {
          heading: '3. Bunga dalam Tradisi Selamatan Modern',
          body: [
            'Di era modern, penggunaan bunga dalam selamatan dan syukuran tidak serta-merta ditinggalkan. Rangkaian bunga segar masih menjadi elemen penting dalam dekorasi tasyakuran kelahiran bayi, khitanan, hingga pernikahan adat.',
            'Para florist profesional di Malang kini mampu memadukan elemen bunga tradisional dengan sentuhan desain kontemporer yang estetik.'
          ]
        }
      ],
      conclusion: 'Mengenal tradisi bunga dalam budaya lokal kita adalah cara untuk menghargai kekayaan warisan leluhur. Zaloma Florist hadir menjadi bagian dari setiap momen bermakna dalam kehidupan Anda.'
    },
    tags: ['Tradisi Bunga', 'Budaya Jawa', 'Upacara Adat', 'Bunga Indonesia']
  },
  {
    id: 'artikel-12',
    slug: 'panduan-dekorasi-bunga-ulang-tahun-perusahaan',
    title: 'Dekorasi Bunga untuk Ulang Tahun Perusahaan: Kesan Profesional yang Tak Terlupakan',
    excerpt: 'Tips memilih rangkaian bunga corporate yang mencerminkan identitas brand, dari standing flower elegant hingga centerpiece meja gala dinner.',
    category: 'Tren Florist',
    categoryColor: '#55654B',
    date: '19 September 2026',
    isoDate: '2026-09-19',
    image: '/images/produk/tanbulampot/1250 berbuah.webp',
    author: 'Dian Saputra',
    authorRole: 'Spesialis Tanaman & Lanskap',
    content: {
      lead: 'Ulang tahun perusahaan adalah momen penting untuk merayakan perjalanan, pencapaian, dan mempererat hubungan antar tim maupun dengan mitra bisnis. Dekorasi bunga yang tepat dapat menciptakan suasana yang elegan, profesional, dan penuh kenangan.',
      sections: [
        {
          heading: '1. Selaraskan Warna Bunga dengan Brand Identity',
          body: [
            'Langkah pertama yang sering terlewat adalah menyelaraskan pilihan warna bunga dengan warna identitas perusahaan (brand color).',
            'Misalnya, perusahaan dengan logo biru dan emas dapat menggunakan kombinasi bunga biru iris, mawar putih, dan sentuhan aksesoris emas untuk menciptakan dekorasi yang kohesif dan berkesan profesional.'
          ],
          tip: 'Sampaikan logo dan palette warna perusahaan Anda kepada tim Zaloma Florist untuk mendapatkan rekomendasi kombinasi bunga yang paling tepat.'
        },
        {
          heading: '2. Jenis Dekorasi yang Paling Efektif',
          body: [
            'Untuk acara indoor seperti gala dinner atau konferensi, centerpiece meja berupa rangkaian bunga tinggi yang tidak menghalangi pandangan antar tamu adalah pilihan terbaik.',
            'Untuk acara outdoor atau semi-outdoor, standing flower berukuran besar di titik-titik strategis seperti pintu masuk dan panggung utama menciptakan kesan megah yang terlihat bahkan dari kejauhan.'
          ]
        },
        {
          heading: '3. Pertimbangan Praktis dan Logistik',
          body: [
            'Untuk acara berskala besar dengan lebih dari 200 tamu, pemesanan dekorasi bunga sebaiknya dilakukan minimal 2–3 minggu sebelum acara agar ketersediaan bunga dan tenaga pemasang dapat dijamin.',
            'Diskusikan juga detail teknis seperti jadwal pemasangan, akses vendor ke venue, dan kebijakan pengembalian pot atau rangkaian setelah acara selesai.'
          ]
        }
      ],
      conclusion: 'Dekorasi bunga yang direncanakan dengan baik bukan hanya memperindah venue, tetapi juga memperkuat citra profesional perusahaan Anda di mata tamu undangan dan mitra bisnis.'
    },
    tags: ['Dekorasi Perusahaan', 'Corporate Event', 'Bunga Event', 'Florist Malang']
  },
  {
    id: 'artikel-13',
    slug: 'mengenal-jenis-mawar-dan-kegunaannya',
    title: 'Mengenal 7 Jenis Mawar yang Paling Populer di Indonesia dan Kegunaannya',
    excerpt: 'Dari mawar Ecuador premium hingga mawar lokal Batu yang harum, setiap varietas memiliki karakteristik dan kecocokan rangkaian yang berbeda-beda.',
    category: 'Inspirasi Bunga',
    categoryColor: '#BFA77A',
    date: '16 September 2026',
    isoDate: '2026-09-16',
    image: '/images/produk/standing-flower/1500 kombinasi bunga mawar dan lily.webp',
    author: 'Zaloma Florist',
    authorRole: 'Konsultan Estetika Bunga',
    content: {
      lead: 'Mawar adalah ratu bunga yang telah memesona manusia selama ribuan tahun. Di pasar floristry Indonesia, tersedia berbagai varietas mawar dari sumber yang berbeda, masing-masing dengan karakteristik unik yang menentukan kegunaannya dalam dunia rangkaian bunga.',
      sections: [
        {
          heading: '1. Mawar Ecuador: Tangkai Panjang, Kelopak Besar',
          body: [
            'Mawar impor dari Ecuador dikenal dengan tangkainya yang panjang (60–90 cm), kelopak yang besar dan kompak, serta vase life (ketahanan) yang mencapai 10–14 hari.',
            'Varietas ini adalah pilihan utama untuk hand bouquet premium, bunga papan, dan dekorasi pernikahan karena tampilannya yang megah dan tahan lama.'
          ],
          tip: 'Harga mawar Ecuador memang lebih tinggi dari mawar lokal, namun nilai visualnya sepadan untuk momen-momen yang sangat penting.'
        },
        {
          heading: '2. Mawar Batu (Lokal Malang): Harum dan Ekonomis',
          body: [
            'Mawar yang ditanam di dataran tinggi Batu, Malang, dikenal dengan aromanya yang lebih harum dan harganya yang jauh lebih terjangkau.',
            'Meski tangkainya lebih pendek dan kelopaknya lebih kecil, mawar Batu sangat ideal untuk rangkaian buket compact, meja resepsi, dan dekorasi yang membutuhkan volume bunga dalam jumlah banyak.'
          ]
        },
        {
          heading: '3. Spray Rose: Kecil, Mungil, dan Menggemaskan',
          body: [
            'Spray rose adalah varietas mawar yang menghasilkan banyak kuntum kecil dalam satu tangkai, mirip bunga liar yang natural.',
            'Sangat populer sebagai bunga pengisi (filler) dalam rangkaian buket dan dekorasi untuk memberikan tekstur dan kesan natural yang organik.'
          ]
        }
      ],
      conclusion: 'Memahami karakteristik setiap varietas mawar akan membantu Anda berkomunikasi lebih baik dengan florist dan mendapatkan hasil rangkaian yang paling sesuai dengan ekspektasi.'
    },
    tags: ['Jenis Mawar', 'Mawar Indonesia', 'Tips Floristry', 'Bunga Malang']
  },
  {
    id: 'artikel-14',
    slug: 'bunga-untuk-grand-opening-yang-berkesan',
    title: 'Bunga untuk Grand Opening: Strategi Dekorasi yang Meninggalkan Kesan Pertama yang Kuat',
    excerpt: 'Kesan pertama yang baik dimulai dari tampak depan. Pelajari bagaimana susunan bunga papan dan standing flower yang tepat dapat meningkatkan citra bisnis baru Anda.',
    category: 'Tren Florist',
    categoryColor: '#55654B',
    date: '13 September 2026',
    isoDate: '2026-09-13',
    image: '/images/produk/wedding-luxury.webp',
    author: 'Dian Saputra',
    authorRole: 'Spesialis Tanaman & Lanskap',
    content: {
      lead: 'Grand opening adalah momen krusial yang menjadi titik awal citra sebuah bisnis di mata masyarakat. Dekorasi bunga yang tertata dengan baik tidak hanya memperindah tampilan, tetapi juga menyampaikan pesan bahwa bisnis Anda dijalankan dengan standar yang tinggi.',
      sections: [
        {
          heading: '1. Bunga Papan: Media Ucapan dari Mitra Bisnis',
          body: [
            'Deretan bunga papan ucapan dari mitra, klien, dan rekan bisnis di depan lokasi grand opening adalah simbol kepercayaan dan dukungan dari komunitas bisnis yang lebih luas.',
            'Informasikan kepada relasi Anda alamat pengiriman dan rentang waktu pemasangan agar semua papan dapat terpasang rapi sebelum acara dimulai.'
          ],
          tip: 'Koordinasikan dengan penyelenggara acara mengenai titik pemasangan papan ucapan agar terlihat rapi dan tidak menghalangi akses tamu.'
        },
        {
          heading: '2. Standing Flower di Pintu Masuk: First Impression yang Kuat',
          body: [
            'Letakkan sepasang standing flower tinggi yang simetris di kedua sisi pintu masuk utama untuk menciptakan kesan "red carpet" yang megah.',
            'Pilih warna yang harmonis dengan fasad bangunan atau identitas visual brand Anda untuk menciptakan tampilan yang kohesif dan berkesan profesional.'
          ]
        },
        {
          heading: '3. Rangkaian Bunga Meja untuk Area Resepsi',
          body: [
            'Di area resepsi atau meja penyambutan tamu, hadirkan rangkaian bunga meja berukuran medium yang elegan namun tidak mengganggu interaksi.',
            'Pilih warna-warna yang cerah dan energik untuk menciptakan suasana yang hangat dan mengundang bagi setiap tamu yang datang.'
          ]
        }
      ],
      conclusion: 'Investasi pada dekorasi bunga grand opening adalah investasi pada citra bisnis Anda. Hubungi tim Zaloma Florist untuk konsultasi paket grand opening yang sesuai dengan kebutuhan dan anggaran Anda.'
    },
    tags: ['Grand Opening', 'Dekorasi Bisnis', 'Bunga Papan', 'Florist Malang']
  }
];

export function getFeaturedArticles(limit = 4): Article[] {
  return ARTICLES.slice(0, limit);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string, limit = 3): Article[] {
  return ARTICLES.filter((article) => article.slug !== currentSlug).slice(0, limit);
}

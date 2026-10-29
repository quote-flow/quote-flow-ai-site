// Bahasa Malaysia copy. Source: quoteflow-my/docs/MARKETING_COPY.md (final text, 2026-10-29).
// Every BM page must be reviewed by a native speaker before launch.
// Strings marked "[Not in copy]" were written for the site (BM translation by Claude) and
// need the same native-speaker review.

import type { Content } from "./en";

export const ms: Content = {
  locale: "ms",
  htmlLang: "ms-MY",
  langSwitch: { label: "EN", name: "English" },

  nav: {
    howItWorks: "Cara ia berfungsi",
    industries: "Industri",
    pricing: "Harga",
    security: "Keselamatan",
    contact: "Hubungi",
    cta: "Sertai pilot percuma",
    menu: "Menu", // [Not in copy]
    home: "Laman utama Quotebird", // [Not in copy]
  },

  footer: {
    tagline: "Quotebird: sebut harga untuk perniagaan Malaysia.",
    links: {
      pricing: "Harga",
      security: "Keselamatan",
      about: "Tentang kami",
      contact: "Hubungi",
      privacy: "Dasar privasi",
      terms: "Terma penggunaan",
    },
    whatsapp: "WhatsApp kami",
    copyright: "© 2026 {{OPERATOR_NAME}}. Hak cipta terpelihara.",
  },

  whatsappFloat: {
    label: "Sembang dengan kami",
    message: "Hai Quotebird, saya ingin tahu lebih lanjut.",
  },

  banner: {
    text: "Pilot percuma untuk 10 syarikat Malaysia: 3 bulan percuma, kemudian diskaun 50% untuk tahun pertama.",
    cta: "Sertai sekarang →",
    dismiss: "Tutup", // [Not in copy]
  },

  ui: {
    skip: "Langkau ke kandungan", // [Not in copy]
  },

  meta: {
    home: {
      title: "Quotebird | Perisian sebut harga untuk PKS Malaysia",
      description:
        "Tukar pertanyaan WhatsApp dan e-mel kepada sebut harga yang tepat dalam beberapa minit. Katalog anda, harga anda, kelulusan anda. Pilot percuma untuk perniagaan Malaysia.",
    },
    building: {
      title: "Perisian sebut harga untuk pembekal bahan binaan dan perkakasan | Quotebird",
      description:
        "Tukar senarai barang yang panjang di WhatsApp kepada sebut harga yang tepat dalam beberapa minit, menggunakan harga anda sendiri.",
    },
    service: {
      title: "Perisian sebut harga untuk kontraktor perkhidmatan | Quotebird",
      description:
        "Penyaman udara, M&E, ubah suai, pembersihan: sebut harga upah dan alat ganti dengan tepat dalam beberapa minit, dengan kelulusan untuk diskaun.",
    },
    distributors: {
      title: "Perisian sebut harga untuk pengedar dan pembekal B2B | Quotebird",
      description:
        "Katalog besar, harga pelanggan yang dipersetujui dan peraturan kelulusan, digunakan dengan betul pada setiap sebut harga.",
    },
    pricing: {
      title: "Harga | Quotebird",
      description:
        "Pelan dari RM 99 sebulan. Pilot percuma 3 bulan, kemudian diskaun 50% untuk tahun pertama.",
    },
    pilot: {
      title: "Sertai pilot percuma | Quotebird",
      description:
        "3 bulan percuma, kemudian diskaun 50% untuk tahun pertama. Kami sediakannya bersama anda.",
    },
    security: {
      title: "Keselamatan dan privasi | Quotebird",
      description: "Cara Quotebird melindungi harga, pelanggan dan sebut harga anda.",
    },
    // [Not in copy] meta for the pages below
    thanks: {
      title: "Terima kasih | Quotebird",
      description: "Kami telah menerima permohonan pilot anda.",
    },
    about: {
      title: "Tentang kami | Quotebird",
      description:
        "Mengapa Quotebird wujud: sebut harga yang dibina mengikut cara sebenar perniagaan Malaysia bekerja.",
    },
    contact: {
      title: "Hubungi | Quotebird",
      description:
        "Hubungi Quotebird melalui WhatsApp atau e-mel. Kami membalas dalam satu hari bekerja.",
    },
    privacy: {
      title: "Dasar privasi | Quotebird",
      description: "Cara Quotebird mengendalikan data peribadi di bawah PDPA Malaysia.",
    },
    terms: {
      title: "Terma penggunaan | Quotebird",
      description: "Terma penggunaan untuk program pilot Quotebird.",
    },
  },

  home: {
    hero: {
      headline: "Setiap pertanyaan, siap disebut harga dalam beberapa minit.",
      subline:
        "Tampal mesej WhatsApp, e-mel atau gambar senarai barang. Quotebird menyediakan draf sebut harga daripada katalog *anda* pada harga *anda*. Pasukan anda menyemak dan meluluskannya, dan pelanggan menerimanya secara dalam talian.",
      primary: "Sertai pilot percuma",
      secondary: "Lihat cara ia berfungsi",
      smallPrint: "Percuma selama 3 bulan. Tiada kad diperlukan.",
    },
    problem: {
      heading: "Menyediakan sebut harga tidak sepatutnya mengambil separuh hari anda.",
      points: [
        {
          lead: "Pertanyaan datang dari mana-mana.",
          body: "WhatsApp, e-mel, gambar senarai tulisan tangan. Seseorang perlu membaca setiap satu dan menaipnya semula.",
        },
        {
          lead: "Harga hanya dalam ingatan seseorang.",
          body: "Atau dalam fail Excel lama. Dua jurujual, dua harga berbeza untuk barang yang sama.",
        },
        {
          lead: "Diskaun tanpa kelulusan.",
          body: "Apabila bos melihat sebut harga itu, pelanggan sudah pun menerimanya.",
        },
        {
          lead: "Sebut harga yang dilupakan.",
          body: "Dihantar, kemudian dilupakan. Tiada susulan, dan pesaing yang mendapat kerja itu.",
        },
      ],
    },
    howItWorks: {
      heading: "Daripada pertanyaan hingga sebut harga diterima, dalam tiga langkah.",
      steps: [
        {
          lead: "Tampal atau muat naik pertanyaan.",
          body: "Salin mesej WhatsApp atau e-mel, atau muat naik PDF atau gambar. Tidak perlu menaip semula.",
        },
        {
          lead: "Quotebird menyediakan draf.",
          body: "Ia membaca barang dan kuantiti, memadankan setiap satu dengan katalog anda pada harga anda, dan menandakan maklumat yang tiada, seperti saiz, jenama atau alamat penghantaran.",
        },
        {
          lead: "Luluskan, hantar, dapatkan persetujuan.",
          body: "Semak draf, hantar melalui e-mel atau kongsi pautan, dan pelanggan anda menerima atau menolak secara dalam talian. Anda akan tahu serta-merta.",
        },
      ],
    },
    trust: {
      heading: "AI tidak sekali-kali menetapkan harga anda.",
      body: "AI Quotebird hanya membaca pertanyaan. Itu sahaja. Setiap harga datang daripada katalog anda sendiri, atau daripada kakitangan yang dibenarkan mengubahnya. Jumlah, diskaun dan cukai dikira dengan tepat oleh sistem, bukan diteka oleh AI. Diskaun yang melebihi had anda perlu diluluskan oleh pengurus sebelum pelanggan melihatnya.",
      points: [
        "Harga hanya daripada katalog anda atau kakitangan yang dibenarkan",
        "Pengiraan tepat hingga ke sen",
        "Peraturan kelulusan yang anda tetapkan",
        "Setiap perubahan direkodkan",
      ],
    },
    features: {
      heading: "Semua yang pasukan anda perlukan untuk menyediakan sebut harga dengan betul.",
      items: [
        {
          title: "Katalog anda",
          body: "Produk dan perkhidmatan dengan harga dan unit anda. Import dari Excel dalam beberapa minit.",
        },
        {
          title: "Harga pelanggan",
          body: "Harga yang dipersetujui untuk pelanggan tetap digunakan secara automatik.",
        },
        {
          title: "Kelulusan",
          body: "Tetapkan had diskaun. Apa-apa yang melebihinya akan dihantar kepada pengurus dahulu.",
        },
        {
          title: "PDF berjenama",
          body: "Logo anda, terma anda, tempoh sah laku anda, pada setiap sebut harga.",
        },
        {
          title: "Hantar dan jejak",
          body: "Hantar sebut harga melalui e-mel atau kongsi pautan. Pelanggan menerima atau menolak secara dalam talian.",
        },
        {
          title: "Susulan",
          body: "Tetapkan tarikh susulan untuk setiap sebut harga supaya tiada yang dilupakan.",
        },
        {
          title: "Versi dan sejarah",
          body: "Semak semula sebut harga tanpa kehilangan versi lama. Setiap perubahan direkodkan.",
        },
        { title: "Peranan pasukan", body: "Akses pemilik, pentadbir, jualan, pelulus dan lihat sahaja." },
        {
          title: "Papan pemuka",
          body: "Sebut harga menunggu kelulusan, dihantar, berjaya dan gagal, sekali pandang.",
        },
        { title: "Log masuk selamat", body: "Log masuk dua langkah untuk pemilik dan pentadbir." },
      ],
    },
    comingSoon: {
      heading: "Akan datang",
      body: "Kami sedang membina keseluruhan perjalanan, daripada mesej pertama hingga pembayaran.",
      items: [
        {
          lead: "Terima pertanyaan WhatsApp dan e-mel secara automatik.",
          body: "Pertanyaan masuk ke Quotebird dengan sendirinya.",
        },
        {
          lead: "Pembayaran dalam talian.",
          body: "Pelanggan membayar deposit atau penuh melalui FPX, DuitNow atau kad, terus ke akaun anda sendiri.",
        },
        { lead: "Analisis jualan AI.", body: "Satu klik untuk melihat mengapa anda berjaya atau gagal." },
        { lead: "Eksport ke perakaunan.", body: "Hantar rekod ke perisian perakaunan anda." },
      ],
    },
    industries: {
      heading: "Dibina untuk perniagaan yang menyediakan sebut harga setiap hari.",
      cards: [
        {
          key: "building",
          lead: "Pembekal bahan binaan dan perdagangan.",
          body: "Senarai barang yang panjang di WhatsApp, disebut harga sebelum pesaing anda membalas.",
        },
        {
          key: "service",
          lead: "Kontraktor perkhidmatan.",
          body: "Upah, alat ganti dan lawatan tapak dalam satu sebut harga yang jelas.",
        },
        {
          key: "distributors",
          lead: "Pengedar.",
          body: "Katalog besar dan harga pelanggan yang dipersetujui, digunakan dengan betul setiap kali.",
        },
      ],
      other: "Bidang lain? Jika anda menghantar sebut harga, Quotebird sesuai untuk anda.",
      otherLink: "Hubungi kami →",
    },
    pricingTeaser: {
      heading: "Pelan bulanan yang mudah, dari RM 99.",
      body: "Setiap pelan merangkumi produk penuh. Syarikat pilot mendapat 3 bulan percuma, kemudian diskaun 50% untuk tahun pertama.",
      link: "Lihat harga →",
    },
    faq: {
      heading: "Soalan lazim", // [Not in copy]
      items: [
        {
          q: "Adakah AI akan mereka harga?",
          a: "Tidak. AI hanya membaca pertanyaan. Harga datang daripada katalog anda atau kakitangan yang anda benarkan, dan sistem mengira setiap jumlah dengan tepat.",
        },
        {
          q: "Jenis pertanyaan apa yang boleh dibaca?",
          a: "Teks yang disalin daripada WhatsApp atau e-mel, fail PDF, dan gambar atau tangkapan skrin (JPG atau PNG), termasuk gambar senarai tulisan tangan. Ia paling baik dalam Bahasa Inggeris dan Bahasa Malaysia. Kami sedang menguji mesej bahasa Cina dan bahasa campuran bersama syarikat pilot kami.",
        },
        {
          q: "Adakah pelanggan saya perlu mengubah apa-apa?",
          a: "Tidak. Mereka terus menghantar mesej kepada anda seperti biasa. Anda menampal pertanyaan ke dalam Quotebird, dan mereka menerima sebut harga yang profesional melalui e-mel atau pautan.",
        },
        {
          q: "Adakah ia bersambung dengan WhatsApp secara automatik?",
          a: "Belum lagi. Buat masa ini anda menyalin mesej ke dalamnya, yang hanya mengambil beberapa saat. Penerimaan automatik daripada WhatsApp dan e-mel akan datang tidak lama lagi.",
        },
        {
          q: "Bolehkah pelanggan saya membayar melalui Quotebird?",
          a: "Belum lagi. Pembayaran dalam talian terus ke akaun anda sendiri akan datang tidak lama lagi.",
        },
        {
          q: "Bagaimana dengan SST?",
          a: "Anda tetapkan sama ada perniagaan anda berdaftar SST, dan cara setiap item katalog dicukai. Quotebird menggunakan tetapan anda. Ia tidak pernah meneka.",
        },
        {
          q: "Bolehkah saya menggunakan senarai harga sedia ada?",
          a: "Boleh. Import produk, perkhidmatan dan pelanggan anda dari Excel atau CSV.",
        },
        {
          q: "Adakah data saya selamat?",
          a: "Data setiap syarikat diasingkan sepenuhnya. Setiap perubahan direkodkan, dan anda boleh mengeksport atau memadam data anda pada bila-bila masa.",
          link: { text: "Baca tentang keselamatan →", to: "security" },
        },
        {
          q: "Apa yang berlaku selepas pilot percuma?",
          a: "Anda memilih pelan dan membayar 50% daripada harga untuk tahun pertama. Kami tidak akan mengenakan caj secara automatik. Jika Quotebird tidak sesuai, eksport data anda dan berhenti.",
        },
      ],
    },
    finalCta: {
      heading: "Sediakan sebut harga lebih pantas mulai minggu depan.",
      body: "Kami menerima 10 syarikat Malaysia ke dalam pilot percuma. Kami sediakannya bersama anda, import senarai harga anda, dan bantu pasukan anda mula menggunakannya.",
      button: "Sertai pilot percuma",
    },
  },

  industry: {
    soundFamiliar: "Biasa berlaku?", // [Not in copy]
    exampleHeading: "Daripada mesej mereka kepada sebut harga anda", // [Not in copy]
    exampleLabel: "Contoh. Harga katalog anda sendiri akan digunakan.",
    enquiryLabel: "Pertanyaan pelanggan", // [Not in copy]
    draftLabel: "Draf sebut harga", // [Not in copy]
    benefitsHeading: "Cara Quotebird membantu", // [Not in copy]
    approvalNeeded: "Perlu kelulusan", // [Not in copy]
    columns: { line: "Item", qty: "Kuantiti", price: "Harga seunit", note: "Catatan" }, // [Not in copy]
    pages: {
      building: {
        lead: "Sebut harga keseluruhan senarai sebelum pesaing anda membalas.",
        body: "Kontraktor menghantar senarai barang yang panjang di WhatsApp dan mahukan harga hari ini. Quotebird menukar senarai itu kepada sebut harga daripada katalog anda dalam beberapa minit.",
        problems: [
          "Senarai 40 barang ditaip satu demi satu",
          'Nama barang yang tidak sama dengan katalog ("paip 4 inci" lawan "PVC Pipe Class D 100mm")',
          "Kakitangan berbeza memberi harga berbeza",
          "Gambar senarai tulisan tangan dari tapak",
        ],
        benefits: [
          "Memadankan perkataan pelanggan dengan item katalog anda yang tepat.",
          "Menandakan maklumat yang tiada (saiz, warna, jenama) sebelum anda menghantar.",
          "Harga yang sama daripada setiap jurujual, setiap kali.",
          "Kontraktor tetap mendapat harga persetujuan mereka secara automatik.",
        ],
        // [Not in copy] notes in the example quote
        notes: {
          perBox: "Sekotak 10 unit",
          colour: "Warna tidak dinyatakan",
          delivery: "Penghantaran ke Klang: sahkan alamat dan caj penghantaran",
        },
      },
      service: {
        lead: "Upah, alat ganti dan lawatan tapak dalam satu sebut harga yang jelas.",
        body: "Penyaman udara, M&E, ubah suai, pembersihan, kawalan perosak: Quotebird menukar mesej pelanggan kepada sebut harga yang lengkap, dan memberitahu anda apa yang masih perlu ditanya.",
        problems: [
          "Pelanggan menerangkan masalah, bukan kerja yang perlu dibuat",
          "Juruteknik memberi harga di tempat, semuanya berbeza",
          "Diskaun diberi untuk menutup jualan, tanpa bertanya",
          "Sebut harga dihantar, tiada susulan",
        ],
        benefits: [
          "Menukar penerangan masalah kepada item perkhidmatan yang betul.",
          "Memberitahu soalan yang perlu ditanya sebelum anda memberi harga.",
          "Diskaun melebihi had anda dihantar kepada pemilik dahulu.",
          "Tarikh susulan untuk setiap sebut harga, supaya tiada kerja terlepas.",
        ],
        // [Not in copy] notes in the example quote
        notes: {
          leaking: "Untuk 2 unit yang bocor",
          brand: "Jenama pilihan tidak dinyatakan",
          piping: "Panjang paip tidak dinyatakan",
        },
      },
      distributors: {
        lead: "Harga yang betul untuk pelanggan yang betul, setiap kali.",
        body: "Katalog besar dan ramai pelanggan tetap dengan harga istimewa. Quotebird menggunakan harga persetujuan setiap pelanggan secara automatik dan menghalang diskaun yang tidak diluluskan.",
        problems: [
          "Beribu-ribu item, dengan nombor bahagian yang pelanggan tulis sedikit salah",
          "Harga istimewa untuk akaun utama disimpan dalam hamparan seseorang",
          "Margin hilang kerana diskaun yang tidak diluluskan",
          "Tiada gambaran apa yang telah disebut harga dan apa yang berjaya",
        ],
        benefits: [
          "Harga persetujuan setiap pelanggan, digunakan secara automatik.",
          "Import beribu-ribu item dari Excel.",
          "Peraturan kelulusan melindungi margin anda.",
          "Papan pemuka sebut harga yang menunggu, dihantar, berjaya dan gagal.",
        ],
        // [Not in copy] notes in the example quote
        notes: {
          agreed: "Harga persetujuan untuk ABC Industries (harga senarai RM 27.50)",
          extraDiscount: "Diskaun tambahan 10% (ditambah oleh jurujual)",
        },
      },
    },
  },

  pricing: {
    lead: "Pelan yang mudah. Produk penuh dalam setiap pelan.",
    body: "Bayar bulanan, atau bayar tahunan dan dapat 2 bulan percuma.",
    toggle: { monthly: "Bulanan", yearly: "Tahunan (2 bulan percuma)", label: "Tempoh bayaran" },
    banner: {
      lead: "Pilot percuma:",
      body: "10 syarikat pertama mendapat 3 bulan percuma, kemudian diskaun 50% untuk mana-mana pelan bagi tahun pertama. Tinggal {{PILOT_SLOTS_LEFT}} tempat.",
      cta: "Sertai pilot percuma",
    },
    plans: {
      starter: { name: "Starter", tagline: "Untuk pasukan kecil yang mahu lebih teratur", support: "E-mel dan WhatsApp" },
      growth: { name: "Growth", tagline: "Untuk pasukan jualan yang berkembang", support: "E-mel dan WhatsApp", badge: "Paling popular" },
      business: { name: "Business", tagline: "Untuk perniagaan sibuk dengan beberapa pasukan", support: "Sokongan keutamaan" },
    },
    // [Not in copy] the BM unit and row labels below
    perMonth: "/ bulan",
    perYear: "/ tahun",
    rows: { users: "Pengguna", quotes: "Sebut harga sebulan", aiReads: "Bacaan AI sebulan", support: "Sokongan" },
    button: "Sertai pilot percuma",
    includes:
      "Setiap pelan merangkumi kelulusan, harga pelanggan, PDF berjenama, import Excel, peranan pasukan dan log masuk dua langkah.",
    smallPrint: "Harga dalam Ringgit Malaysia, tidak termasuk SST jika berkenaan.",
    faqHeading: "Soalan tentang harga", // [Not in copy]
    faq: [
      {
        q: "Apakah itu bacaan AI?",
        a: "Satu pertanyaan yang dibaca oleh AI, sama ada mesej, PDF atau gambar. Menyediakan dan menyunting sebut harga sendiri tidak menggunakan bacaan AI.",
      },
      {
        q: "Bagaimana jika saya mencapai had?",
        a: "Bacaan AI ditetapkan semula setiap bulan, dan anda masih boleh menyediakan sebut harga secara manual. Anda boleh bertukar ke pelan yang lebih besar pada bila-bila masa.",
      },
      {
        q: "Bolehkah saya menukar pelan atau membatalkan?",
        a: "Boleh. Pelan bulanan boleh ditukar atau dibatalkan untuk bulan berikutnya. Data anda boleh dieksport pada bila-bila masa.",
      },
      {
        q: "Bagaimana saya membayar?",
        a: "Melalui pindahan bank buat masa ini. Kami akan menghantar invois.",
      },
    ],
  },

  pilot: {
    lead: "Sertai pilot Quotebird.",
    body: "Kami bekerjasama rapat dengan 10 syarikat Malaysia. Anda mendapat Quotebird percuma selama 3 bulan dan diskaun 50% untuk tahun pertama. Sebagai balasan, kami memohon maklum balas yang jujur dan beberapa contoh pertanyaan (maklumat peribadi akan dibuang) untuk menjadikan AI lebih baik bagi perniagaan Malaysia.",
    getHeading: "Apa yang anda dapat", // [Not in copy]
    get: [
      "Kami sediakan akaun anda bersama anda",
      "Kami import senarai harga dan pelanggan anda",
      "Talian WhatsApp terus kepada kami",
      "Akses awal kepada ciri baharu",
    ],
    fields: {
      name: "Nama anda*",
      company: "Nama syarikat*",
      whatsapp: "Nombor WhatsApp*",
      email: "E-mel kerja*",
      industry: "Industri*",
      quotesPerMonth: "Sebut harga sebulan*",
      currentMethod: "Bagaimana anda menyediakan sebut harga sekarang?",
      currentMethodPlaceholder: "cth. templat Excel, ditaip dalam Word, perisian perakaunan",
    },
    select: "Pilih…", // [Not in copy]
    industries: [
      { value: "building", label: "Bahan binaan dan perdagangan" },
      { value: "service", label: "Kontraktor perkhidmatan" },
      { value: "distributor", label: "Pengedar atau pembekal B2B" },
      { value: "other", label: "Lain-lain" },
    ],
    volumes: [
      { value: "under_20", label: "Bawah 20" },
      { value: "20_100", label: "20–100" },
      { value: "100_500", label: "100–500" },
      { value: "over_500", label: "Lebih 500" },
    ],
    consent: {
      before: "Saya bersetuju Quotebird boleh menggunakan maklumat ini untuk menghubungi saya mengenai pilot, seperti yang diterangkan dalam ",
      link: "Dasar privasi",
      after: ".",
    },
    submit: "Mohon untuk pilot",
    sending: "Menghantar…", // [Not in copy]
    errors: {
      required: "Sila isi ruangan ini.",
      whatsapp: "Sila masukkan nombor telefon bimbit Malaysia, cth. 012-345 6789.",
      email: "Sila masukkan alamat e-mel yang sah.",
      consent: "Sila tandakan kotak ini supaya kami boleh menghubungi anda.",
      failed: "Ada masalah dan permohonan anda tidak dihantar. Sila cuba lagi, atau WhatsApp kami.",
    },
  },

  thanks: {
    lead: "Terima kasih! Kami telah menerima permohonan anda.",
    body: "Kami akan menghubungi anda melalui WhatsApp dalam satu hari bekerja untuk mengatur panggilan ringkas. Untuk bermula lebih awal, sediakan senarai harga anda. Excel pun sudah memadai.",
  },

  security: {
    lead: "Harga anda adalah rahsia perniagaan anda.",
    body: "Begini cara kami melindunginya.",
    sections: [
      {
        lead: "Data anda diasingkan.",
        body: "Katalog, pelanggan dan sebut harga setiap syarikat diasingkan daripada syarikat lain pada peringkat pangkalan data. Kakitangan anda hanya melihat data syarikat anda.",
      },
      {
        lead: "Akses yang sesuai untuk setiap orang.",
        body: "Peranan pemilik, pentadbir, jualan, pelulus dan lihat sahaja. Pemilik dan pentadbir menggunakan log masuk dua langkah.",
      },
      {
        lead: "Rekod lengkap setiap perubahan.",
        body: "Kelulusan, perubahan harga, penghantaran dan maklum balas pelanggan direkodkan bersama siapa yang melakukannya dan bila. Sebut harga yang telah diluluskan tidak boleh diubah secara senyap; semakan semula akan mencipta versi baharu.",
      },
      {
        lead: "Cara kami menggunakan AI.",
        // [CONFIRM] Anthropic's commercial data-use terms before launch.
        body: "AI membaca pertanyaan untuk mencadangkan barang dan kuantiti. Ia tidak sekali-kali menetapkan harga atau jumlah, tidak meluluskan apa-apa dan tidak menghantar apa-apa. Pertanyaan diproses oleh Anthropic, pembekal AI kami, di bawah terma komersialnya, yang tidak membenarkan data anda digunakan untuk melatih model mereka.",
      },
      {
        lead: "Anda memiliki data anda.",
        body: "Eksport semuanya pada bila-bila masa. Jika anda berhenti, kami akan memadam data syarikat anda atas permintaan.",
      },
      {
        lead: "Di mana data anda disimpan.",
        // [CONFIRM at go-live] hosting region.
        body: "Dihoskan pada infrastruktur awan yang selamat di {{DATA_REGION}}, disulitkan semasa dihantar.",
      },
      { lead: "Ada soalan?", body: "E-mel {{EMAIL}}." },
    ],
  },

  about: {
    lead: "Dibina mengikut cara sebenar perniagaan Malaysia bekerja.",
    paragraphs: [
      "Kebanyakan PKS Malaysia mendapat kerja melalui WhatsApp dan e-mel, dan menetapkan harga berdasarkan fail Excel, sebut harga lama dan ingatan. Ia berkesan sehinggalah perniagaan berkembang. Kemudian sebut harga menjadi lambat, harga tidak konsisten dan diskaun terlepas pandang.",
      "Quotebird dibina untuk menyelesaikannya tanpa mengubah cara pelanggan menghubungi anda. AI melakukan kerja membaca dan menaip. Katalog anda menetapkan harga. Pasukan anda mengawal setiap sebut harga yang dihantar.",
      "Kami bermula dengan sekumpulan kecil syarikat pilot dan membina keseluruhan perjalanan, daripada mesej pertama hingga pembayaran, bersama mereka.",
    ],
    button: "Sertai pilot percuma",
  },

  contact: {
    lead: "Hubungi kami.",
    body: "Cara paling pantas untuk menghubungi kami ialah WhatsApp. Kami membalas dalam satu hari bekerja.",
    whatsapp: { label: "WhatsApp:", value: "{{WHATSAPP_NUMBER}}", button: "Sembang di WhatsApp" },
    email: { label: "E-mel:", value: "{{EMAIL}}" },
    pilot: { label: "Mahu mencuba?", button: "Sertai pilot percuma" },
  },

  // DRAFT for lawyer review (see the English file for the full note).
  privacy: {
    title: "Dasar privasi",
    updated: "Kemas kini terakhir: {{DATE}}",
    intro: [
      'Dasar ini menerangkan cara {{OPERATOR_NAME}} ("Quotebird", "kami") mengendalikan data peribadi yang dikumpul melalui quotebird.ai dan perkhidmatan Quotebird. Ia diterbitkan dalam Bahasa Inggeris dan Bahasa Malaysia.',
    ],
    sections: [
      {
        heading: "1. Siapa kami.",
        paras: ["Quotebird dikendalikan oleh {{OPERATOR_NAME}}, {{OPERATOR_ADDRESS}}. Hubungi: {{EMAIL}}."],
      },
      {
        heading: "2. Apa yang kami kumpul.",
        items: [
          "(a) Maklumat yang anda berikan, contohnya melalui borang pilot: nama, syarikat, nombor WhatsApp, e-mel, industri, cara anda menyediakan sebut harga sekarang.",
          "(b) Maklumat akaun pengguna Quotebird: nama, e-mel dan rekod log masuk.",
          "(c) Kandungan perniagaan yang dimasukkan oleh pelanggan kami ke dalam Quotebird. Ini termasuk maklumat hubungan dan pertanyaan pelanggan mereka sendiri, dan mungkin mengandungi data peribadi. Bagi kandungan tersebut, pelanggan kami menentukan apa yang dikumpul dan tujuannya, dan kami memprosesnya bagi pihak mereka.",
          "(d) Penggunaan asas laman web, diukur tanpa kuki.",
        ],
      },
      {
        heading: "3. Mengapa kami menggunakannya.",
        items: [
          "Untuk membalas anda dan menjalankan pilot.",
          "Untuk menyediakan, melindungi dan menyokong perkhidmatan.",
          "Untuk menambah baik perkhidmatan. Contoh pertanyaan hanya digunakan dengan persetujuan pelanggan, selepas maklumat peribadi dibuang.",
          "Untuk mematuhi kewajipan undang-undang.",
        ],
        after: ["Kami tidak menjual data peribadi."],
      },
      {
        heading: "4. Dengan siapa kami berkongsi.",
        paras: ["Hanya pembekal perkhidmatan yang membantu kami menjalankan Quotebird:"],
        items: [
          "pengehosan awan dan pangkalan data",
          "penghantaran e-mel",
          "pengehosan dan keselamatan laman web",
          "pembekal AI kami (Anthropic), yang memproses kandungan pertanyaan untuk membacanya",
        ],
        // [CONFIRM] transfer countries and safeguards.
        after: [
          "Mereka bertindak atas arahan kami. Sesetengahnya memproses data di luar Malaysia, {{TRANSFER_COUNTRIES}}, dengan perlindungan yang dikehendaki oleh undang-undang.",
        ],
      },
      {
        heading: "5. Adakah ia wajib?",
        paras: [
          "Ruangan bertanda * pada borang kami diperlukan untuk membalas anda. Jika tidak diberikan, kami tidak dapat memproses permohonan anda.",
        ],
      },
      {
        heading: "6. Tempoh simpanan.",
        items: [
          "Permohonan pilot: sehingga 24 bulan, atau sehingga anda meminta kami memadamnya.",
          "Data akaun dan perniagaan: selagi akaun aktif. Selepas ditutup, ia dipadam mengikut proses pemadaman data kami, melainkan undang-undang menghendaki kami menyimpannya.",
        ],
      },
      {
        heading: "7. Hak anda.",
        paras: ["Anda boleh:"],
        items: [
          "meminta akses kepada atau pembetulan data peribadi anda",
          "menarik balik persetujuan",
          "mengehadkan penggunaannya, contohnya untuk pemasaran",
          "meminta kami memindahkannya kepada anda dalam format yang boleh digunakan, jika diperuntukkan oleh undang-undang",
        ],
        after: ["E-mel {{EMAIL}}. Kami akan membalas dalam tempoh yang dikehendaki oleh undang-undang."],
      },
      {
        heading: "8. Keselamatan.",
        paras: [
          "Kami melindungi data dengan kawalan akses, pengasingan antara pelanggan, penyulitan semasa penghantaran, rekod audit dan log masuk dua langkah untuk pentadbir. Jika berlaku pelanggaran yang menjejaskan data peribadi anda, kami akan memaklumkan pihak berkuasa dan anda seperti yang dikehendaki oleh undang-undang.",
        ],
      },
      {
        heading: "9. Perubahan.",
        paras: ["Kami akan menerbitkan kemas kini di sini dan menukar tarikh di atas."],
      },
    ],
    contact: "",
  },

  // DRAFT for lawyer review. Pilot terms only.
  terms: {
    title: "Terma penggunaan: program pilot",
    updated: "Kemas kini terakhir: {{DATE}}",
    intro: [],
    sections: [
      {
        heading: "1. Perkhidmatan.",
        paras: [
          "{{OPERATOR_NAME}} menyediakan Quotebird, perisian untuk menyediakan dan mengurus sebut harga. Semasa pilot, ia disediakan secara percuma selama 3 bulan dari tarikh akaun anda bermula.",
        ],
      },
      {
        heading: "2. Selepas pilot.",
        items: [
          "Anda boleh memilih pelan berbayar pada 50% daripada harga yang disenaraikan untuk 12 bulan pertama.",
          "Kami tidak akan mengenakan caj tanpa persetujuan anda.",
          "Jika anda tidak memilih pelan, akses anda tamat dan anda boleh mengeksport data anda dalam tempoh 30 hari.",
        ],
      },
      {
        heading: "3. Tanggungjawab anda.",
        items: [
          "Anda bertanggungjawab ke atas harga, terma dan kandungan sebut harga yang anda hantar, dan perlu menyemak setiap sebut harga sebelum menghantarnya.",
          "AI Quotebird hanya mencadangkan barang dan kuantiti. Anda mesti menyemaknya.",
          "Pastikan maklumat log masuk anda selamat.",
        ],
      },
      {
        heading: "4. Data anda.",
        items: [
          "Anda memiliki data yang anda masukkan ke dalam Quotebird. Kami hanya menggunakannya untuk menyediakan perkhidmatan, seperti yang diterangkan dalam Dasar privasi kami.",
          "Jika ia mengandungi data peribadi pelanggan anda, anda bertanggungjawab memastikan terdapat asas yang sah untuk berkongsinya dengan kami.",
        ],
      },
      {
        heading: "5. Penggunaan yang dibenarkan.",
        paras: [
          "Jangan menyalahgunakan perkhidmatan, cuba mengakses data syarikat lain, atau menggunakannya untuk tujuan yang menyalahi undang-undang.",
        ],
      },
      {
        heading: "6. Sifat pilot.",
        items: [
          "Perkhidmatan pilot masih dalam penambahbaikan dan mungkin berubah.",
          'Kami berusaha untuk memastikan kebolehpercayaan, tetapi semasa pilot ia disediakan "seadanya".',
          "Setakat yang dibenarkan oleh undang-undang, liabiliti keseluruhan kami terhad kepada RM 1,000.",
        ],
      },
      {
        heading: "7. Penamatan.",
        paras: ["Mana-mana pihak boleh menamatkan pilot pada bila-bila masa dengan notis melalui e-mel."],
      },
      { heading: "8. Undang-undang.", paras: ["Terma ini tertakluk kepada undang-undang Malaysia."] },
    ],
    contact: "Hubungi: {{EMAIL}}.",
  },
};

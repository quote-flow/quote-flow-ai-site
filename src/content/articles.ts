// Helpful articles (MARKETING_SITE.md "Getting found on Google"). Drafts by Claude,
// 2026-10-29. Not in MARKETING_COPY.md: the owner reviews them, a native speaker reviews
// the BM, and every tax statement marked [CONFIRM] is checked against the Royal Malaysian
// Customs Department's MySST guidance before launch. General information, not tax advice.

export type ArticleBlock = { h?: string; p?: string[]; list?: string[] };
export type ArticleText = { slug: string; title: string; description: string; intro: string; blocks: ArticleBlock[] };
export type Article = { id: string; date: string; en: ArticleText; ms: ArticleText };

export const articleUi = {
  en: {
    indexTitle: "Articles",
    indexLead: "Practical guides to quoting for Malaysian businesses.",
    indexMetaTitle: "Quotation guides for Malaysian businesses | Quotebird",
    indexMetaDescription:
      "Practical guides on quotations for Malaysian SMEs: what to include, SST, and how quotations differ from invoices.",
    read: "Read →",
    updated: "Updated",
    disclaimer: "General information only, not tax or legal advice. Check the latest rules with the authorities or your accountant.",
    templateCta: "Try the free quotation template →",
    pilotCtaHeading: "Quote faster with Quotebird",
    pilotCtaBody: "Paste a WhatsApp message or email and Quotebird drafts the quotation from your own catalogue and prices.",
    pilotCtaButton: "Join the free pilot",
    back: "← All articles",
  },
  ms: {
    indexTitle: "Artikel",
    indexLead: "Panduan praktikal menyediakan sebut harga untuk perniagaan Malaysia.",
    indexMetaTitle: "Panduan sebut harga untuk perniagaan Malaysia | Quotebird",
    indexMetaDescription:
      "Panduan praktikal tentang sebut harga untuk PKS Malaysia: apa yang perlu ada, SST, dan beza sebut harga dengan invois.",
    read: "Baca →",
    updated: "Dikemas kini",
    disclaimer: "Maklumat umum sahaja, bukan nasihat cukai atau undang-undang. Semak peraturan terkini dengan pihak berkuasa atau akauntan anda.",
    templateCta: "Cuba templat sebut harga percuma →",
    pilotCtaHeading: "Sediakan sebut harga lebih pantas dengan Quotebird",
    pilotCtaBody: "Tampal mesej WhatsApp atau e-mel dan Quotebird menyediakan draf sebut harga daripada katalog dan harga anda sendiri.",
    pilotCtaButton: "Sertai pilot percuma",
    back: "← Semua artikel",
  },
} as const;

export const articles: Article[] = [
  {
    id: "include",
    date: "2026-10-29",
    en: {
      slug: "what-to-include-in-a-quotation",
      title: "What must a Malaysian quotation include?",
      description:
        "A checklist of what every quotation in Malaysia should show: business details, SSM and SST numbers, items, validity, tax and terms.",
      intro:
        "A quotation is often the first document a customer sees from your business. A clear one wins jobs and prevents arguments later. Here is what a good Malaysian quotation includes, and why each part matters.",
      blocks: [
        {
          h: "1. Your business details",
          p: [
            "Show your registered business or company name exactly as registered with SSM, with the registration number, your address, phone number and email. Customers, especially larger companies, use these to check who they are dealing with and to set you up as a supplier.",
          ],
        },
        {
          h: "2. Your SST registration number, if you have one",
          p: [
            "If your business is registered for Sales Tax or Service Tax, show the registration number. If you are not registered, do not show tax on the quotation.",
          ],
        },
        {
          h: "3. Quotation number and date",
          p: [
            "Give every quotation its own number, such as Q-0142, and the date it was issued. When the customer replies \"OK, proceed with your quote\", you both know exactly which version they mean.",
          ],
        },
        {
          h: "4. The customer's details",
          p: ["The customer's company name, address and the person it is addressed to. For site work, add the site address."],
        },
        {
          h: "5. Each item, clearly",
          p: ["List every product or service on its own line with:"],
          list: [
            "a clear description (brand, size, model or scope of work)",
            "the quantity and unit, such as pcs, bag, roll, m² or job",
            "the unit price and the line amount",
          ],
        },
        {
          h: "6. Discount, tax and total",
          p: [
            "Show the subtotal, any discount, the tax (if you are SST-registered) and the final total in RM. Make the total impossible to miss.",
          ],
        },
        {
          h: "7. How long the price is valid",
          p: [
            "Material and labour costs change. A validity period, for example 14 or 30 days, protects you from being held to an old price months later.",
          ],
        },
        {
          h: "8. Payment and delivery terms",
          list: [
            "deposit required, if any, and when the balance is due",
            "payment method, such as bank transfer",
            "delivery time, delivery charges and what is not included",
          ],
        },
        {
          h: "9. A way to accept",
          p: [
            "Add a space for the customer's name, signature and date, or a simple instruction such as \"Reply to confirm\". A clear acceptance turns the quotation into an agreed order.",
          ],
        },
        {
          h: "Common mistakes",
          list: [
            "different salespeople quoting different prices for the same item",
            "discounts given without the owner knowing",
            "no validity date, so old prices come back to haunt you",
            "unclear item names that don't match what is delivered",
            "no follow-up after sending",
          ],
        },
      ],
    },
    ms: {
      slug: "apa-perlu-ada-dalam-sebut-harga",
      title: "Apa yang perlu ada dalam sebut harga di Malaysia?",
      description:
        "Senarai semak untuk setiap sebut harga di Malaysia: maklumat perniagaan, nombor SSM dan SST, item, tempoh sah, cukai dan terma.",
      intro:
        "Sebut harga selalunya dokumen pertama yang pelanggan lihat daripada perniagaan anda. Sebut harga yang jelas membantu anda mendapat kerja dan mengelakkan pertikaian kemudian. Inilah yang perlu ada dalam sebut harga yang baik, dan mengapa setiap bahagian penting.",
      blocks: [
        {
          h: "1. Maklumat perniagaan anda",
          p: [
            "Tunjukkan nama perniagaan atau syarikat seperti yang didaftarkan dengan SSM, bersama nombor pendaftaran, alamat, nombor telefon dan e-mel. Pelanggan, terutamanya syarikat besar, menggunakannya untuk menyemak siapa anda dan mendaftarkan anda sebagai pembekal.",
          ],
        },
        {
          h: "2. Nombor pendaftaran SST, jika ada",
          p: [
            "Jika perniagaan anda berdaftar untuk Cukai Jualan atau Cukai Perkhidmatan, tunjukkan nombor pendaftarannya. Jika tidak berdaftar, jangan tunjukkan cukai dalam sebut harga.",
          ],
        },
        {
          h: "3. Nombor dan tarikh sebut harga",
          p: [
            "Beri setiap sebut harga nombornya sendiri, contohnya Q-0142, dan tarikh ia dikeluarkan. Apabila pelanggan membalas \"OK, teruskan\", kedua-dua pihak tahu versi mana yang dimaksudkan.",
          ],
        },
        {
          h: "4. Maklumat pelanggan",
          p: ["Nama syarikat pelanggan, alamat dan nama orang yang dituju. Untuk kerja di tapak, tambah alamat tapak."],
        },
        {
          h: "5. Setiap item dengan jelas",
          p: ["Senaraikan setiap produk atau perkhidmatan dalam baris sendiri dengan:"],
          list: [
            "keterangan yang jelas (jenama, saiz, model atau skop kerja)",
            "kuantiti dan unit, seperti unit, beg, gulung, m² atau kerja",
            "harga seunit dan amaun baris",
          ],
        },
        {
          h: "6. Diskaun, cukai dan jumlah",
          p: [
            "Tunjukkan jumlah kecil, diskaun jika ada, cukai (jika anda berdaftar SST) dan jumlah akhir dalam RM. Pastikan jumlahnya mudah dilihat.",
          ],
        },
        {
          h: "7. Tempoh harga sah",
          p: [
            "Kos bahan dan upah berubah. Tempoh sah, contohnya 14 atau 30 hari, melindungi anda daripada terikat dengan harga lama beberapa bulan kemudian.",
          ],
        },
        {
          h: "8. Terma bayaran dan penghantaran",
          list: [
            "deposit yang diperlukan, jika ada, dan bila baki perlu dibayar",
            "cara bayaran, seperti pindahan bank",
            "masa penghantaran, caj penghantaran dan apa yang tidak termasuk",
          ],
        },
        {
          h: "9. Cara untuk menerima",
          p: [
            "Sediakan ruang untuk nama, tandatangan dan tarikh pelanggan, atau arahan mudah seperti \"Balas untuk mengesahkan\". Penerimaan yang jelas menjadikan sebut harga itu pesanan yang dipersetujui.",
          ],
        },
        {
          h: "Kesilapan biasa",
          list: [
            "jurujual berbeza memberi harga berbeza untuk barang yang sama",
            "diskaun diberi tanpa pengetahuan pemilik",
            "tiada tarikh sah, jadi harga lama menimbulkan masalah",
            "nama item yang kabur dan tidak sama dengan barang yang dihantar",
            "tiada susulan selepas dihantar",
          ],
        },
      ],
    },
  },
  {
    id: "sst",
    date: "2026-10-29",
    en: {
      slug: "sst-on-quotations",
      title: "SST on quotations, explained",
      description:
        "When to show Sales Tax or Service Tax on a Malaysian quotation, how to calculate it, and common mistakes to avoid.",
      intro:
        "Getting tax wrong on a quotation causes awkward conversations later: either you absorb the tax yourself, or the customer feels misled. Here is a plain-language guide to showing SST on quotations in Malaysia.",
      blocks: [
        {
          h: "First: are you registered?",
          p: [
            // [CONFIRM] registration rules and thresholds against MySST before launch.
            "Only businesses registered with the Royal Malaysian Customs Department for Sales Tax or Service Tax may charge it. Registration generally becomes compulsory once your taxable sales pass a threshold set by Customs. If you are not registered, do not add SST to your quotations.",
          ],
        },
        {
          h: "Sales Tax and Service Tax are different",
          p: [
            // [CONFIRM] rates and categories against MySST before launch.
            "Sales Tax applies to certain goods manufactured in or imported into Malaysia. Service Tax applies to certain taxable services. The rate depends on the goods or the type of service, and some items are exempt. Check the rate for each of your products or services on the Customs MySST website, or with your accountant.",
          ],
        },
        {
          h: "How to show it on a quotation",
          list: [
            "show prices before tax for each line",
            "show the subtotal, then any discount",
            "show the tax amount and the rate, e.g. \"Service Tax 8%\"",
            "show the total including tax",
            "include your SST registration number in your business details",
          ],
        },
        {
          h: "A worked example",
          p: [
            "Say you quote RM 1,000.00 of taxable services with a RM 100.00 discount, at an example service tax rate of 8%:",
          ],
          list: [
            "Subtotal: RM 1,000.00",
            "Discount: RM 100.00",
            "Taxable amount: RM 900.00",
            "Service Tax (8%): RM 72.00",
            "Total: RM 972.00",
          ],
        },
        {
          p: [
            "Apply the discount before calculating tax, round the tax to the nearest sen, and use the rate that actually applies to your service.",
          ],
        },
        {
          h: "Mixed quotations",
          p: [
            "If one quotation contains both taxable and non-taxable items, mark which lines are taxed so the customer can see how the tax was worked out. Different items may also carry different rates.",
          ],
        },
        {
          h: "A quotation is not a tax invoice",
          p: [
            "SST is accounted for on your invoice, not on the quotation. The quotation shows the customer what the tax will be, so the final invoice holds no surprises.",
          ],
        },
        {
          h: "How Quotebird handles it",
          p: [
            "In Quotebird you set whether your business is SST-registered and how each catalogue item is taxed. The system applies your settings and calculates every total exactly. The AI never decides tax.",
          ],
        },
      ],
    },
    ms: {
      slug: "sst-dalam-sebut-harga",
      title: "SST dalam sebut harga, diterangkan",
      description:
        "Bila perlu menunjukkan Cukai Jualan atau Cukai Perkhidmatan dalam sebut harga di Malaysia, cara mengiranya, dan kesilapan biasa.",
      intro:
        "Silap mengira cukai dalam sebut harga boleh menimbulkan masalah kemudian: sama ada anda menanggung cukai itu sendiri, atau pelanggan rasa tertipu. Ini panduan mudah untuk menunjukkan SST dalam sebut harga di Malaysia.",
      blocks: [
        {
          h: "Pertama: adakah anda berdaftar?",
          p: [
            // [CONFIRM] registration rules and thresholds against MySST before launch.
            "Hanya perniagaan yang berdaftar dengan Jabatan Kastam Diraja Malaysia untuk Cukai Jualan atau Cukai Perkhidmatan boleh mengenakannya. Pendaftaran biasanya wajib apabila jualan bercukai anda melebihi had yang ditetapkan oleh Kastam. Jika anda tidak berdaftar, jangan tambah SST dalam sebut harga.",
          ],
        },
        {
          h: "Cukai Jualan dan Cukai Perkhidmatan adalah berbeza",
          p: [
            // [CONFIRM] rates and categories against MySST before launch.
            "Cukai Jualan dikenakan ke atas barang tertentu yang dikilangkan di atau diimport ke Malaysia. Cukai Perkhidmatan dikenakan ke atas perkhidmatan bercukai tertentu. Kadarnya bergantung pada jenis barang atau perkhidmatan, dan sesetengah item dikecualikan. Semak kadar bagi setiap produk atau perkhidmatan anda di laman web MySST Kastam, atau dengan akauntan anda.",
          ],
        },
        {
          h: "Cara menunjukkannya dalam sebut harga",
          list: [
            "tunjukkan harga sebelum cukai bagi setiap baris",
            "tunjukkan jumlah kecil, kemudian diskaun jika ada",
            "tunjukkan amaun dan kadar cukai, cth. \"Cukai Perkhidmatan 8%\"",
            "tunjukkan jumlah termasuk cukai",
            "masukkan nombor pendaftaran SST dalam maklumat perniagaan anda",
          ],
        },
        {
          h: "Contoh pengiraan",
          p: [
            "Katakan anda menyebut harga perkhidmatan bercukai RM 1,000.00 dengan diskaun RM 100.00, pada contoh kadar cukai perkhidmatan 8%:",
          ],
          list: [
            "Jumlah kecil: RM 1,000.00",
            "Diskaun: RM 100.00",
            "Amaun bercukai: RM 900.00",
            "Cukai Perkhidmatan (8%): RM 72.00",
            "Jumlah: RM 972.00",
          ],
        },
        {
          p: [
            "Tolak diskaun sebelum mengira cukai, bundarkan cukai kepada sen yang terdekat, dan gunakan kadar yang benar-benar berkenaan dengan perkhidmatan anda.",
          ],
        },
        {
          h: "Sebut harga bercampur",
          p: [
            "Jika satu sebut harga mengandungi item bercukai dan tidak bercukai, tandakan baris yang dikenakan cukai supaya pelanggan nampak cara cukai dikira. Item berbeza juga mungkin mempunyai kadar berbeza.",
          ],
        },
        {
          h: "Sebut harga bukan invois cukai",
          p: [
            "SST diambil kira dalam invois anda, bukan dalam sebut harga. Sebut harga menunjukkan kepada pelanggan berapa cukainya, supaya invois akhir tidak mengejutkan.",
          ],
        },
        {
          h: "Cara Quotebird mengendalikannya",
          p: [
            "Dalam Quotebird anda tetapkan sama ada perniagaan anda berdaftar SST dan cara setiap item katalog dicukai. Sistem menggunakan tetapan anda dan mengira setiap jumlah dengan tepat. AI tidak pernah menentukan cukai.",
          ],
        },
      ],
    },
  },
  {
    id: "vs-invoice",
    date: "2026-10-29",
    en: {
      slug: "quotation-vs-invoice",
      title: "Quotation vs invoice: what's the difference?",
      description:
        "Quotation, invoice, delivery order, receipt: what each document is for in a Malaysian business, and when to send it.",
      intro:
        "Quotations and invoices look similar, but they do very different jobs. Mixing them up leads to confusion over prices, payment and tax. Here's how they differ and how they fit together.",
      blocks: [
        {
          h: "A quotation is an offer",
          p: [
            "A quotation tells the customer what you will supply and at what price, before they commit. It is sent before the work or delivery, it has a validity period, and the customer can accept, negotiate or decline it. No payment is due because of a quotation.",
          ],
        },
        {
          h: "An invoice is a request for payment",
          p: [
            "An invoice is sent after the customer has agreed, usually on delivery or when work is done, or as a deposit invoice. It states what is owed and when it must be paid, and it is the document your accounts and tax records are based on.",
          ],
        },
        {
          h: "Side by side",
          list: [
            "Purpose: a quotation offers a price; an invoice asks for payment",
            "Timing: a quotation comes before the sale; an invoice comes after agreement or delivery",
            "Can it change? A quotation can be revised; an invoice should be corrected with a credit or debit note, not edited",
            "Tax: a quotation shows the expected tax; an invoice is where SST is actually charged",
            "Records: invoices go into your accounts; quotations show your sales pipeline",
          ],
        },
        {
          h: "The usual order of documents",
          list: [
            "Quotation: the offer",
            "Purchase order or written acceptance from the customer",
            "Delivery order: when goods are delivered",
            "Invoice: the request for payment",
            "Receipt: proof that payment was received",
          ],
        },
        {
          h: "E-invoicing is about invoices",
          p: [
            // [CONFIRM] e-invoicing phase dates and scope against LHDN before launch.
            "Malaysia's e-invoicing system, run by LHDN through MyInvois, applies to invoices and related documents such as credit notes, not to quotations. Check with LHDN or your accountant when e-invoicing applies to your business.",
          ],
        },
        {
          h: "Tip: turn accepted quotations into orders",
          p: [
            "Keep the quotation number on everything that follows. When the customer accepts quotation Q-0142, your delivery order and invoice should refer to it, so everyone can trace the price back to what was agreed.",
          ],
        },
      ],
    },
    ms: {
      slug: "sebut-harga-vs-invois",
      title: "Sebut harga vs invois: apa bezanya?",
      description:
        "Sebut harga, invois, pesanan penghantaran, resit: fungsi setiap dokumen dalam perniagaan Malaysia, dan bila perlu dihantar.",
      intro:
        "Sebut harga dan invois nampak serupa, tetapi fungsinya sangat berbeza. Mencampuradukkannya boleh menimbulkan kekeliruan tentang harga, bayaran dan cukai. Ini perbezaannya dan cara kedua-duanya berkait.",
      blocks: [
        {
          h: "Sebut harga ialah tawaran",
          p: [
            "Sebut harga memberitahu pelanggan apa yang akan anda bekalkan dan pada harga berapa, sebelum mereka bersetuju. Ia dihantar sebelum kerja atau penghantaran, mempunyai tempoh sah, dan pelanggan boleh menerima, berunding atau menolaknya. Tiada bayaran perlu dibuat kerana sebut harga.",
          ],
        },
        {
          h: "Invois ialah permintaan bayaran",
          p: [
            "Invois dihantar selepas pelanggan bersetuju, biasanya semasa penghantaran atau selepas kerja siap, atau sebagai invois deposit. Ia menyatakan jumlah yang perlu dibayar dan bila, dan menjadi asas rekod akaun dan cukai anda.",
          ],
        },
        {
          h: "Perbandingan",
          list: [
            "Tujuan: sebut harga menawarkan harga; invois meminta bayaran",
            "Masa: sebut harga sebelum jualan; invois selepas persetujuan atau penghantaran",
            "Boleh diubah? Sebut harga boleh disemak semula; invois patut dibetulkan dengan nota kredit atau debit, bukan disunting",
            "Cukai: sebut harga menunjukkan anggaran cukai; invois ialah tempat SST sebenarnya dikenakan",
            "Rekod: invois masuk ke akaun anda; sebut harga menunjukkan potensi jualan anda",
          ],
        },
        {
          h: "Susunan dokumen yang biasa",
          list: [
            "Sebut harga: tawaran",
            "Pesanan belian atau penerimaan bertulis daripada pelanggan",
            "Pesanan penghantaran: semasa barang dihantar",
            "Invois: permintaan bayaran",
            "Resit: bukti bayaran diterima",
          ],
        },
        {
          h: "E-invois berkaitan dengan invois",
          p: [
            // [CONFIRM] e-invoicing phase dates and scope against LHDN before launch.
            "Sistem e-invois Malaysia, dikendalikan oleh LHDN melalui MyInvois, terpakai kepada invois dan dokumen berkaitan seperti nota kredit, bukan kepada sebut harga. Semak dengan LHDN atau akauntan anda bila e-invois terpakai kepada perniagaan anda.",
          ],
        },
        {
          h: "Petua: jadikan sebut harga yang diterima sebagai pesanan",
          p: [
            "Kekalkan nombor sebut harga dalam semua dokumen seterusnya. Apabila pelanggan menerima sebut harga Q-0142, pesanan penghantaran dan invois anda patut merujuk kepadanya, supaya semua orang boleh menjejak harga kembali kepada apa yang dipersetujui.",
          ],
        },
      ],
    },
  },
];

export const articlePath = (a: Article, locale: "en" | "ms") =>
  locale === "en" ? `/articles/${a.en.slug}/` : `/ms/artikel/${a.ms.slug}/`;

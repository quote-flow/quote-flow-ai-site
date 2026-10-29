// Example enquiries and drafted quotes for the industry pages (MARKETING_COPY.md §2).
// The enquiry text is a sample customer message, kept the same in both languages.
// Product names are catalogue names, so they stay as written. Notes are looked up in the
// locale file by key. Prices are illustrations only.

export type IndustryKey =
  | "building"
  | "service"
  | "distributors"
  | "renovation"
  | "electrical"
  | "printing"
  | "cleaning"
  | "pest";

export type ExampleLine = {
  item?: string;
  itemNote?: string; // line text taken from the locale notes instead of the catalogue
  qty?: string;
  price?: string;
  note?: string; // key into content.industry.pages[industry].notes
  flag?: boolean; // missing detail: shown as a yellow flag
  approval?: boolean; // shows the "Approval needed" badge
};

export type Example = {
  channel: "whatsapp" | "email";
  subject?: string;
  enquiry: string[];
  lines: ExampleLine[];
};

export const examples: Record<IndustryKey, Example> = {
  renovation: {
    channel: "whatsapp",
    enquiry: [
      "Hi, my condo in Cheras need reno.",
      "Kitchen cabinet top and bottom about 10ft, change 3 rooms to vinyl floor, paint whole unit.",
      "Can give quote?",
    ],
    lines: [
      {
        item: "Kitchen cabinet, top and bottom (per ft run)",
        qty: "10 ft",
        price: "RM 450.00",
        note: "finish",
        flag: true,
      },
      { item: "Vinyl flooring, supply and install", qty: "360 sq ft", price: "RM 6.50", note: "sizes", flag: true },
      { item: "Painting, whole unit (3-room condo)", qty: "1 job", price: "RM 2,800.00", note: "package" },
      { item: "Hacking and disposal of old cabinet", qty: "1 job", price: "RM 600.00" },
    ],
  },
  electrical: {
    channel: "whatsapp",
    enquiry: [
      "Boss, shoplot in Puchong need wiring.",
      "12 lighting point, 8 power point 13A, 1 DB box 3 phase.",
      "Also want 4 aircond point. When can come see?",
    ],
    lines: [
      { item: "Lighting point wiring", qty: "12 point", price: "RM 85.00" },
      { item: "13A power point wiring", qty: "8 point", price: "RM 110.00" },
      {
        item: "3-phase distribution board, supply and install",
        qty: "1 set",
        price: "RM 1,850.00",
        note: "ways",
        flag: true,
      },
      { item: "Aircond power point with isolator", qty: "4 point", price: "RM 180.00", note: "hp", flag: true },
    ],
  },
  printing: {
    channel: "email",
    subject: "Quotation for printing",
    enquiry: [
      "Hi, we need 2,000 pcs A5 flyers (2 sides), name cards for 3 staff (100 each), and 1 shop signboard 10ft x 3ft with lighting. Need by next Friday.",
      "Thanks. Marketing, XYZ Cafe",
    ],
    lines: [
      { item: "A5 flyer, 2 sides, 128gsm art paper", qty: "2,000 pcs", price: "RM 0.18", note: "qty" },
      { item: "Name card, 2 sides, 310gsm", qty: "3 box", price: "RM 45.00", note: "box" },
      {
        item: "Signboard 10 × 3 ft, aluminium composite with LED",
        qty: "1 unit",
        price: "RM 2,600.00",
        note: "artwork",
        flag: true,
      },
      { itemNote: "discount", approval: true },
    ],
  },
  cleaning: {
    channel: "whatsapp",
    enquiry: [
      "Hi, our office in Bangsar about 2,500 sqft.",
      "Need cleaning 3 times a week. Also one-time carpet deep clean before CNY.",
      "How much per month?",
    ],
    lines: [
      {
        item: "Office cleaning, 3 visits a week (up to 3,000 sq ft)",
        qty: "1 month",
        price: "RM 1,650.00",
        note: "package",
      },
      {
        item: "Carpet deep cleaning, shampoo and extraction",
        qty: "2,500 sq ft",
        price: "RM 0.60",
        note: "area",
        flag: true,
      },
      { item: "Cleaning supplies and consumables", qty: "1 month", price: "RM 120.00" },
      { itemNote: "discount", approval: true },
    ],
  },
  pest: {
    channel: "whatsapp",
    enquiry: [
      "Hello, my restaurant in Subang got cockroach and rat problem.",
      "Need monthly treatment. Can send someone to check?",
    ],
    lines: [
      { item: "Cockroach treatment, gel baiting and spraying", qty: "12 visit", price: "RM 180.00", note: "monthly" },
      { item: "Rodent control, bait stations and monitoring", qty: "12 visit", price: "RM 150.00", note: "monthly" },
      { item: "Initial inspection and service report", qty: "1 job", price: "RM 100.00", note: "size", flag: true },
    ],
  },
  building: {
    channel: "whatsapp",
    enquiry: [
      "Hi boss, pls quote:",
      "20 bag cement 50kg",
      '10 pcs 4" pvc pipe class D',
      "5 box 13A switch socket",
      "3 roll 2.5mm wire",
      "Deliver Klang site, by Fri can?",
    ],
    lines: [
      { item: "Portland Cement 50kg", qty: "20 bag", price: "RM 21.50" },
      { item: "PVC Pipe Class D 100mm × 6m", qty: "10 pcs", price: "RM 38.00" },
      { item: "13A Twin Switch Socket Outlet", qty: "5 box", price: "RM 96.00", note: "perBox" },
      { item: "2.5mm² PVC Cable, 90m roll", qty: "3 roll", price: "RM 189.00", note: "colour", flag: true },
      { note: "delivery", flag: true },
    ],
  },
  service: {
    channel: "whatsapp",
    enquiry: [
      "Hi, need servicing for 6 units aircond 1.5hp at our office in PJ. 2 units leaking water.",
      "Also quote 1 new 2hp inverter with installation.",
    ],
    lines: [
      { item: "General service, wall-mounted 1.0–1.5hp", qty: "6 unit", price: "RM 80.00" },
      { item: "Chemical wash, wall-mounted 1.0–1.5hp", qty: "2 unit", price: "RM 180.00", note: "leaking" },
      { item: "Inverter air conditioner 2.0hp", qty: "1 unit", price: "RM 2,450.00", note: "brand", flag: true },
      {
        item: "Standard installation, up to 10ft piping",
        qty: "1 job",
        price: "RM 350.00",
        note: "piping",
        flag: true,
      },
    ],
  },
  distributors: {
    channel: "email",
    subject: "RFQ: packaging materials",
    enquiry: [
      "Dear Sales, please quote: 50 rolls stretch film 500mm × 23mic, 200 carton box 18×12×12 (double wall), 20 rolls OPP tape 48mm clear. Delivery to our Shah Alam warehouse.",
      "Thank you. Purchasing, ABC Industries",
    ],
    lines: [
      { item: "Stretch Film 500mm × 23mic", qty: "50 roll", price: "RM 24.00", note: "agreed" },
      { item: "Carton Box 18×12×12in, double wall", qty: "200 pcs", price: "RM 3.20" },
      { item: "OPP Tape 48mm × 100m, clear", qty: "20 roll", price: "RM 3.90" },
      { itemNote: "extraDiscount", approval: true },
    ],
  },
};

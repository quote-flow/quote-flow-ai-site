// Example enquiries and drafted quotes for the industry pages (MARKETING_COPY.md §2).
// The enquiry text is a sample customer message, kept the same in both languages.
// Product names are catalogue names, so they stay as written. Notes are looked up in the
// locale file by key. Prices are illustrations only.

export type IndustryKey = "building" | "service" | "distributors";

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
      { item: "Standard installation, up to 10ft piping", qty: "1 job", price: "RM 350.00", note: "piping", flag: true },
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

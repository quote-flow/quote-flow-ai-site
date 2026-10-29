// English copy. Source: quoteflow-my/docs/MARKETING_COPY.md (final text, 2026-10-29).
// Markup inside strings: *italic*, **bold**, {{PLACEHOLDER}} (shown as written).
// Strings marked "[Not in copy]" are small interface labels the copy doc did not cover;
// they were written for the site and should be checked along with the rest.

export const en = {
  locale: "en",
  htmlLang: "en-MY",
  langSwitch: { label: "BM", name: "Bahasa Malaysia" },

  nav: {
    howItWorks: "How it works",
    industries: "Industries",
    pricing: "Pricing",
    security: "Security",
    contact: "Contact",
    cta: "Join the free pilot",
    menu: "Menu", // [Not in copy]
    home: "Quotebird home", // [Not in copy] screen-reader label for the logo
  },

  footer: {
    tagline: "Quotebird: quotations for Malaysian businesses.",
    links: {
      pricing: "Pricing",
      security: "Security",
      about: "About",
      contact: "Contact",
      privacy: "Privacy policy",
      terms: "Terms of use",
    },
    whatsapp: "WhatsApp us",
    copyright: "© 2026 {{OPERATOR_NAME}}. All rights reserved.",
  },

  whatsappFloat: {
    label: "Chat with us",
    message: "Hi Quotebird, I'd like to know more.",
  },

  banner: {
    text: "Free pilot for 10 Malaysian companies: 3 months free, then 50% off your first year.",
    cta: "Join now →",
    dismiss: "Dismiss", // [Not in copy]
  },

  ui: {
    skip: "Skip to content", // [Not in copy]
  },

  meta: {
    home: {
      title: "Quotebird | Quotation software for Malaysian SMEs",
      description:
        "Turn WhatsApp and email enquiries into accurate quotations in minutes. Your catalogue, your prices, your approvals. Free pilot for Malaysian businesses.",
    },
    building: {
      title: "Quotation software for building and hardware suppliers | Quotebird",
      description:
        "Turn long WhatsApp item lists into accurate quotations in minutes, using your own prices.",
    },
    service: {
      title: "Quotation software for service contractors | Quotebird",
      description:
        "Aircond, M&E, renovation, cleaning: quote labour and parts accurately in minutes, with approvals for discounts.",
    },
    distributors: {
      title: "Quotation software for distributors and B2B suppliers | Quotebird",
      description:
        "Large catalogues, agreed customer prices and approval rules, applied correctly on every quotation.",
    },
    pricing: {
      title: "Pricing | Quotebird",
      description:
        "Plans from RM 99 a month. Free 3-month pilot, then 50% off your first year.",
    },
    pilot: {
      title: "Join the free pilot | Quotebird",
      description: "3 months free, then 50% off your first year. We set it up with you.",
    },
    security: {
      title: "Security and privacy | Quotebird",
      description: "How Quotebird protects your prices, customers and quotations.",
    },
    // [Not in copy] meta for the pages below
    thanks: {
      title: "Thank you | Quotebird",
      description: "We've got your pilot application.",
    },
    about: {
      title: "About | Quotebird",
      description:
        "Why Quotebird exists: quotations built for the way Malaysian businesses really work.",
    },
    contact: {
      title: "Contact | Quotebird",
      description: "Talk to Quotebird on WhatsApp or by email. We reply within one working day.",
    },
    privacy: {
      title: "Privacy policy | Quotebird",
      description: "How Quotebird handles personal data under Malaysia's PDPA.",
    },
    terms: {
      title: "Terms of use | Quotebird",
      description: "Terms of use for the Quotebird pilot programme.",
    },
  },

  home: {
    hero: {
      headline: "Every enquiry, quoted in minutes.",
      subline:
        "Paste a WhatsApp message, an email or a photo of a list. Quotebird drafts the quotation from *your* catalogue at *your* prices. Your team checks it, approves it, and the customer accepts online.",
      primary: "Join the free pilot",
      secondary: "See how it works",
      smallPrint: "Free for 3 months. No card needed.",
    },
    problem: {
      heading: "Quoting shouldn't take half your day.",
      points: [
        {
          lead: "Enquiries everywhere.",
          body: "WhatsApp, email, phone photos of handwritten lists. Someone has to read every one and type it out again.",
        },
        {
          lead: "Prices in someone's head.",
          body: "Or in an old Excel file. Two salespeople, two different prices for the same item.",
        },
        {
          lead: "Discounts nobody approved.",
          body: "By the time the boss sees the quote, the customer already has it.",
        },
        {
          lead: "Quotes that go quiet.",
          body: "Sent, then forgotten. No one follows up, and the job goes to a competitor.",
        },
      ],
    },
    howItWorks: {
      heading: "From enquiry to accepted quote in three steps.",
      steps: [
        {
          lead: "Paste or upload the enquiry.",
          body: "Copy the WhatsApp message or email, or upload a PDF or a photo. No need to retype anything.",
        },
        {
          lead: "Quotebird drafts the quote.",
          body: "It reads the items and quantities, matches each one to your catalogue at your price, and flags anything missing, such as a size, a brand or a delivery address.",
        },
        {
          lead: "Approve, send, get a yes.",
          body: "Check the draft, send it by email or share the link, and your customer accepts or declines online. You see it the moment they do.",
        },
      ],
    },
    trust: {
      heading: "AI never sets your prices.",
      body: "Quotebird's AI reads the enquiry. That's all it does. Every price comes from your own catalogue, or from someone in your team who is allowed to change it. Totals, discounts and tax are calculated exactly by the system, never guessed by AI. Discounts above your limit wait for a manager's approval before the customer sees them.",
      points: [
        "Prices only from your catalogue or authorised staff",
        "Exact calculations, to the sen",
        "Approval rules you set",
        "Every change recorded",
      ],
    },
    features: {
      heading: "Everything your team needs to quote properly.",
      items: [
        {
          title: "Your catalogue",
          body: "Products and services with your prices and units. Import it from Excel in minutes.",
        },
        {
          title: "Customer prices",
          body: "Agreed prices for regular customers are applied automatically.",
        },
        {
          title: "Approvals",
          body: "Set a discount limit. Anything above it goes to a manager first.",
        },
        {
          title: "Branded PDF",
          body: "Your logo, your terms, your validity period, on every quotation.",
        },
        {
          title: "Send and track",
          body: "Email the quote or share a link. The customer accepts or declines online.",
        },
        {
          title: "Follow-ups",
          body: "Set a follow-up date on every quote so none go quiet.",
        },
        {
          title: "Versions and history",
          body: "Revise a quote without losing the old one. Every change is recorded.",
        },
        { title: "Team roles", body: "Owner, admin, sales, approver and view-only access." },
        {
          title: "Dashboard",
          body: "Quotes waiting for approval, sent, won and lost, at a glance.",
        },
        { title: "Secure sign-in", body: "Two-step sign-in for owners and admins." },
      ],
    },
    comingSoon: {
      heading: "Coming soon",
      body: "We're building the rest of the journey, from first message to payment.",
      items: [
        {
          lead: "Automatic WhatsApp and email intake.",
          body: "Enquiries arrive in Quotebird by themselves.",
        },
        {
          lead: "Online payment.",
          body: "Customers pay a deposit or in full by FPX, DuitNow or card, straight into your own account.",
        },
        { lead: "AI sales insights.", body: "One click to see why you're winning or losing." },
        { lead: "Accounting export.", body: "Send records to your accounting software." },
      ],
    },
    industries: {
      heading: "Built for businesses that quote every day.",
      cards: [
        {
          key: "building",
          lead: "Building and trade suppliers.",
          body: "Long item lists on WhatsApp, quoted before your competitor replies.",
        },
        {
          key: "service",
          lead: "Service contractors.",
          body: "Labour, parts and site visits in one clear quotation.",
        },
        {
          key: "distributors",
          lead: "Distributors.",
          body: "Big catalogues and agreed customer prices, applied correctly every time.",
        },
      ],
      other: "Quote something else? If you send quotations, Quotebird works for you.",
      otherLink: "Talk to us →",
    },
    pricingTeaser: {
      heading: "Simple monthly plans, from RM 99.",
      body: "Every plan includes the full product. Pilot companies get 3 months free, then 50% off the first year.",
      link: "See pricing →",
    },
    faq: {
      heading: "Questions", // [Not in copy]
      items: [
        {
          q: "Will the AI make up prices?",
          a: "No. The AI only reads the enquiry. Prices come from your catalogue or from staff you allow to change them, and the system calculates every total exactly.",
        },
        {
          q: "What kinds of enquiries can it read?",
          a: "Text copied from WhatsApp or email, PDF files, and photos or screenshots (JPG or PNG), including photos of handwritten lists. It works best in English and Bahasa Malaysia. We're testing Chinese and mixed-language messages with our pilot companies.",
        },
        {
          q: "Do my customers need to change anything?",
          a: "No. They keep messaging you the way they do today. You paste the enquiry into Quotebird, and they receive a professional quotation by email or link.",
        },
        {
          q: "Does it connect to WhatsApp automatically?",
          a: "Not yet. Today you copy the message in, which takes seconds. Automatic WhatsApp and email intake is coming soon.",
        },
        {
          q: "Can my customers pay through Quotebird?",
          a: "Not yet. Online payment straight into your own account is coming soon.",
        },
        {
          q: "How does it handle SST?",
          a: "You set whether your business is registered for SST, and how each catalogue item is taxed. Quotebird applies your settings. It never guesses.",
        },
        {
          q: "Can I bring my existing price list?",
          a: "Yes. Import your products, services and customers from Excel or CSV.",
        },
        {
          q: "Is my data safe?",
          a: "Each company's data is kept completely separate. Every change is recorded, and you can export or delete your data at any time.",
          link: { text: "Read about security →", to: "security" },
        },
        {
          q: "What happens after the free pilot?",
          a: "You choose a plan and pay 50% of the price for your first year. We never charge you automatically. If Quotebird isn't for you, export your data and walk away.",
        },
      ],
    },
    finalCta: {
      heading: "Quote faster from next week.",
      body: "We're taking 10 Malaysian companies into the free pilot. We set it up with you, import your price list, and get your team quoting.",
      button: "Join the free pilot",
    },
  },

  industry: {
    soundFamiliar: "Sound familiar?",
    exampleHeading: "From their message to your quote", // [Not in copy]
    exampleLabel: "Example. Your own catalogue prices are used.",
    enquiryLabel: "Customer enquiry", // [Not in copy]
    draftLabel: "Draft quotation", // [Not in copy]
    benefitsHeading: "How Quotebird helps", // [Not in copy]
    approvalNeeded: "Approval needed",
    columns: { line: "Line", qty: "Qty", price: "Unit price", note: "Note" },
    pages: {
      building: {
        lead: "Quote the whole list before your competitor replies.",
        body: "Contractors send long item lists on WhatsApp and expect a price today. Quotebird turns the list into a quotation from your catalogue in minutes.",
        problems: [
          "40-item lists typed out by hand, line by line",
          'Item names that never match your catalogue ("4 inch pipe" vs "PVC Pipe Class D 100mm")',
          "Different staff quoting different prices",
          "Photos of handwritten lists from site",
        ],
        benefits: [
          "Matches the customer's words to your exact catalogue items.",
          "Flags missing details (size, colour, brand) before you send.",
          "Same price from every salesperson, every time.",
          "Repeat contractors get their agreed prices automatically.",
        ],
        notes: {
          perBox: "Per box of 10",
          colour: "Colour not stated",
          delivery: "Delivery to Klang: confirm address and delivery charge",
        },
      },
      service: {
        lead: "Labour, parts and site visits in one clear quote.",
        body: "Aircond, M&E, renovation, cleaning, pest control: Quotebird turns a customer's message into a complete quotation, and tells you what you still need to ask.",
        problems: [
          "Customers describe the problem, not the job",
          "Technicians give prices on the spot, all different",
          "Discounts given to close the deal, without asking",
          "Quotes sent, never followed up",
        ],
        benefits: [
          "Turns a description of the problem into the right service lines.",
          "Tells you which questions to ask before you quote.",
          "Discounts above your limit go to the owner first.",
          "A follow-up date on every quote, so jobs don't slip away.",
        ],
        notes: {
          leaking: "For the 2 leaking units",
          brand: "Brand preference not stated",
          piping: "Piping length not stated",
        },
      },
      distributors: {
        lead: "The right price for the right customer, every time.",
        body: "Big catalogues and many regular customers on special prices. Quotebird applies each customer's agreed prices automatically and stops discounts nobody approved.",
        problems: [
          "Thousands of items, with part numbers customers get slightly wrong",
          "Special prices for key accounts kept in someone's spreadsheet",
          "Margin lost to discounts no one signed off",
          "No view of what's been quoted and what's been won",
        ],
        benefits: [
          "Agreed prices per customer, applied automatically.",
          "Import thousands of items from Excel.",
          "Approval rules protect your margin.",
          "A dashboard of quotes waiting, sent, won and lost.",
        ],
        notes: {
          agreed: "Agreed price for ABC Industries (list RM 27.50)",
          extraDiscount: "Extra 10% discount (added by salesperson)",
        },
      },
    },
  },

  pricing: {
    lead: "Simple plans. The full product on every one.",
    body: "Pay monthly, or pay yearly and get 2 months free.",
    toggle: { monthly: "Monthly", yearly: "Yearly (2 months free)", label: "Billing period" },
    banner: {
      lead: "Free pilot:",
      body: "the first 10 companies get 3 months free, then 50% off any plan for their first year. {{PILOT_SLOTS_LEFT}} places left.",
      cta: "Join the free pilot",
    },
    plans: {
      starter: { name: "Starter", tagline: "For small teams getting organised", support: "Email and WhatsApp" },
      growth: { name: "Growth", tagline: "For growing sales teams", support: "Email and WhatsApp", badge: "Most popular" },
      business: { name: "Business", tagline: "For busy, multi-team businesses", support: "Priority support" },
    },
    perMonth: "/ month",
    perYear: "/ year",
    rows: { users: "Users", quotes: "Quotes per month", aiReads: "AI reads per month", support: "Support" },
    button: "Join the free pilot",
    includes:
      "Every plan includes approvals, customer prices, branded PDFs, Excel import, team roles and two-step sign-in.",
    smallPrint: "Prices in Malaysian Ringgit, excluding SST where applicable.",
    faqHeading: "Pricing questions", // [Not in copy]
    faq: [
      {
        q: "What is an AI read?",
        a: "One enquiry read by the AI, whether a message, a PDF or a photo. Creating and editing quotes yourself doesn't use AI reads.",
      },
      {
        q: "What if I reach my limit?",
        a: "AI reads reset every month, and you can still quote by hand. You can move to a bigger plan at any time.",
      },
      {
        q: "Can I change plans or cancel?",
        a: "Yes. Monthly plans can be changed or cancelled for the next month. Your data can be exported at any time.",
      },
      { q: "How do I pay?", a: "By bank transfer for now. We'll send an invoice." },
    ],
  },

  pilot: {
    lead: "Join the Quotebird pilot.",
    body: "We're working closely with 10 Malaysian companies. You get Quotebird free for 3 months and 50% off your first year. In return we ask for honest feedback and a few sample enquiries (we remove personal details) to make the AI better for Malaysian businesses.",
    getHeading: "What you get", // heading text taken from the copy's section name
    get: [
      "We set up your account with you",
      "We import your price list and customers",
      "A direct WhatsApp line to us",
      "First access to new features",
    ],
    fields: {
      name: "Your name*",
      company: "Company name*",
      whatsapp: "WhatsApp number*",
      email: "Work email*",
      industry: "Industry*",
      quotesPerMonth: "Quotations per month*",
      currentMethod: "How do you quote today?",
      currentMethodPlaceholder: "e.g. Excel template, typed in Word, accounting software",
    },
    select: "Select…", // [Not in copy]
    industries: [
      { value: "building", label: "Building and trade supplies" },
      { value: "service", label: "Service contractor" },
      { value: "distributor", label: "Distributor or B2B supplier" },
      { value: "other", label: "Other" },
    ],
    volumes: [
      { value: "under_20", label: "Under 20" },
      { value: "20_100", label: "20–100" },
      { value: "100_500", label: "100–500" },
      { value: "over_500", label: "Over 500" },
    ],
    consent: {
      before: "I agree that Quotebird may use these details to contact me about the pilot, as described in the ",
      link: "Privacy policy",
      after: ".",
    },
    submit: "Apply for the pilot",
    sending: "Sending…", // [Not in copy]
    errors: {
      required: "Please fill this in.",
      whatsapp: "Please enter a Malaysian mobile number, e.g. 012-345 6789.",
      email: "Please enter a valid email address.",
      consent: "Please tick the box so we can contact you.",
      failed: "Something went wrong and your application wasn't sent. Please try again, or WhatsApp us.",
    },
  },

  thanks: {
    lead: "Thank you! We've got your application.",
    body: "We'll WhatsApp you within one working day to arrange a short call. To get a head start, have your price list ready. Excel is perfect.",
  },

  security: {
    lead: "Your prices are your business.",
    body: "Here's how we protect them.",
    sections: [
      {
        lead: "Your data is kept separate.",
        body: "Every company's catalogue, customers and quotations are isolated from every other company's at the database level. Your staff only see your company's data.",
      },
      {
        lead: "The right access for each person.",
        body: "Owner, admin, sales, approver and view-only roles. Owners and admins use two-step sign-in.",
      },
      {
        lead: "A full record of changes.",
        body: "Approvals, price changes, sending and customer responses are recorded with who did it and when. Approved quotations can't be changed silently; a revision creates a new version.",
      },
      {
        lead: "How we use AI.",
        // [CONFIRM] Anthropic's commercial data-use terms before launch.
        body: "The AI reads enquiries to suggest items and quantities. It never sets prices or totals, never approves anything, and never sends anything. Enquiries are processed by Anthropic, our AI provider, under its commercial terms, which do not allow your data to be used to train its models.",
      },
      {
        lead: "You own your data.",
        body: "Export everything at any time. If you leave, we delete your company's data on request.",
      },
      {
        lead: "Where your data is stored.",
        // [CONFIRM at go-live] hosting region.
        body: "Hosted on secured cloud infrastructure in {{DATA_REGION}}, encrypted in transit.",
      },
      { lead: "Questions?", body: "Email {{EMAIL}}." },
    ],
  },

  about: {
    lead: "Built for the way Malaysian businesses really work.",
    paragraphs: [
      "Most Malaysian SMEs win work through WhatsApp and email, and price it from Excel files, old quotations and memory. It works until the business grows. Then quotes slow down, prices drift and discounts slip through.",
      "Quotebird was built to fix that without changing how your customers reach you. The AI does the reading and the typing. Your catalogue sets the prices. Your team stays in control of every quotation that goes out.",
      "We're starting with a small group of pilot companies and building the rest of the journey, from first message to payment, together with them.",
    ],
    button: "Join the free pilot",
  },

  contact: {
    lead: "Talk to us.",
    body: "The fastest way to reach us is WhatsApp. We reply within one working day.",
    whatsapp: { label: "WhatsApp:", value: "{{WHATSAPP_NUMBER}}", button: "Chat on WhatsApp" },
    email: { label: "Email:", value: "{{EMAIL}}" },
    pilot: { label: "Want to try it?", button: "Join the free pilot" },
  },

  // DRAFT for lawyer review. This is written to cover the notice requirements of the
  // Personal Data Protection Act 2010, as amended in 2024, for the marketing site and the
  // pilot. It is not legal advice. Have a Malaysian lawyer review it before the first paid
  // customer, and when the Sdn Bhd replaces the founder as operator.
  privacy: {
    title: "Privacy policy",
    updated: "Last updated: {{DATE}}",
    intro: [
      'This policy explains how {{OPERATOR_NAME}} ("Quotebird", "we") handles personal data collected through quotebird.ai and the Quotebird service. It is published in English and Bahasa Malaysia.',
    ],
    sections: [
      {
        heading: "1. Who we are.",
        paras: ["Quotebird is operated by {{OPERATOR_NAME}}, {{OPERATOR_ADDRESS}}. Contact: {{EMAIL}}."],
      },
      {
        heading: "2. What we collect.",
        items: [
          "(a) Details you give us, for example through the pilot form: name, company, WhatsApp number, email, industry, how you quote today.",
          "(b) Account details of people who use Quotebird: name, email and sign-in records.",
          "(c) Business content that our customers put into Quotebird. This includes their own customers' contact details and enquiries, and it may contain personal data. For that content, our customer decides what is collected and why, and we process it on their behalf.",
          "(d) Basic website usage, measured without cookies.",
        ],
      },
      {
        heading: "3. Why we use it.",
        items: [
          "To respond to you and run the pilot.",
          "To provide, secure and support the service.",
          "To improve the service. Sample enquiries are only used with the customer's agreement, with personal details removed.",
          "To meet legal obligations.",
        ],
        after: ["We do not sell personal data."],
      },
      {
        heading: "4. Who we share it with.",
        paras: ["Only service providers that help us run Quotebird:"],
        items: [
          "cloud hosting and database",
          "email delivery",
          "website hosting and security",
          "our AI provider (Anthropic), which processes enquiry content to read it",
        ],
        // [CONFIRM] transfer countries and safeguards.
        after: [
          "They act on our instructions. Some of them process data outside Malaysia, {{TRANSFER_COUNTRIES}}, with safeguards required by law.",
        ],
      },
      {
        heading: "5. Is it required?",
        paras: [
          "The fields marked * on our forms are needed to respond to you. If you don't provide them, we can't process your application.",
        ],
      },
      {
        heading: "6. How long we keep it.",
        items: [
          "Pilot applications: up to 24 months, or until you ask us to delete them.",
          "Account and business data: while the account is active. After closure it is deleted as described in our data-deletion process, unless the law requires us to keep it.",
        ],
      },
      {
        heading: "7. Your rights.",
        paras: ["You may:"],
        items: [
          "ask to access or correct your personal data",
          "withdraw consent",
          "limit how we use it, for example for marketing",
          "ask us to transfer it to you in a usable format, where the law provides",
        ],
        after: ["Email {{EMAIL}}. We will respond within the time the law requires."],
      },
      {
        heading: "8. Security.",
        paras: [
          "We protect data with access controls, separation between customers, encryption in transit, audit records and two-step sign-in for administrators. If a breach affects your personal data, we will notify the authorities and you as the law requires.",
        ],
      },
      {
        heading: "9. Changes.",
        paras: ["We'll post updates here and change the date above."],
      },
    ],
    contact: "",
  },

  // DRAFT for lawyer review. These are pilot terms only. Full subscription terms are
  // needed before the first paid customer, under the Sdn Bhd.
  terms: {
    title: "Terms of use: pilot programme",
    updated: "Last updated: {{DATE}}",
    intro: [] as string[],
    sections: [
      {
        heading: "1. The service.",
        paras: [
          "{{OPERATOR_NAME}} provides Quotebird, software for preparing and managing quotations. During the pilot it is provided free of charge for 3 months from your account start date.",
        ],
      },
      {
        heading: "2. After the pilot.",
        items: [
          "You may choose a paid plan at 50% of the listed price for your first 12 months.",
          "We will not charge you without your agreement.",
          "If you don't choose a plan, your access ends and you may export your data within 30 days.",
        ],
      },
      {
        heading: "3. Your responsibilities.",
        items: [
          "You are responsible for the prices, terms and content of quotations you send, and for checking every quotation before sending it.",
          "Quotebird's AI suggests items and quantities only. You must review them.",
          "Keep your sign-in details secure.",
        ],
      },
      {
        heading: "4. Your data.",
        items: [
          "You own the data you put into Quotebird. We use it only to provide the service, as described in our Privacy policy.",
          "Where it contains your customers' personal data, you are responsible for having a lawful basis to share it with us.",
        ],
      },
      {
        heading: "5. Acceptable use.",
        paras: [
          "Don't misuse the service, try to access other companies' data, or use it for unlawful purposes.",
        ],
      },
      {
        heading: "6. Pilot nature.",
        items: [
          "The pilot service is still being improved and may change.",
          'We aim for reliability, but during the pilot it is provided "as is".',
          "To the extent the law allows, our total liability is limited to RM 1,000.",
        ],
      },
      {
        heading: "7. Ending.",
        paras: ["Either side may end the pilot at any time with notice by email."],
      },
      { heading: "8. Law.", paras: ["These terms are governed by the laws of Malaysia."] },
    ],
    contact: "Contact: {{EMAIL}}.",
  },
};

export type Content = typeof en;

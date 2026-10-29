// Site-wide values. Anything in {{DOUBLE_BRACES}} is not decided yet and is shown on the
// page exactly as written, so it is easy to spot before launch.

export const SITE_URL = "https://quotebird.ai";
export const WHATSAPP_NUMBER = "{{WHATSAPP_NUMBER}}";
export const EMAIL = "{{EMAIL}}";
export const OPERATOR_NAME = "{{OPERATOR_NAME}}";
export const PILOT_SLOTS_LEFT = "{{PILOT_SLOTS_LEFT}}";

export type Locale = "en" | "ms";

/** Every page, with its English and BM path (from MARKETING_COPY.md). */
export const routes = {
  home: { en: "/", ms: "/ms/" },
  building: { en: "/building-suppliers/", ms: "/ms/pembekal-bahan-binaan/" },
  service: { en: "/service-contractors/", ms: "/ms/kontraktor-perkhidmatan/" },
  distributors: { en: "/distributors/", ms: "/ms/pengedar/" },
  pricing: { en: "/pricing/", ms: "/ms/harga/" },
  pilot: { en: "/pilot/", ms: "/ms/pilot/" },
  thanks: { en: "/pilot/thanks/", ms: "/ms/pilot/terima-kasih/" },
  security: { en: "/security/", ms: "/ms/keselamatan/" },
  about: { en: "/about/", ms: "/ms/tentang-kami/" },
  contact: { en: "/contact/", ms: "/ms/hubungi/" },
  privacy: { en: "/privacy/", ms: "/ms/privasi/" },
  terms: { en: "/terms/", ms: "/ms/terma/" },
} as const;

export type RouteKey = keyof typeof routes;

export function href(key: RouteKey, locale: Locale) {
  return routes[key][locale];
}

export function whatsappHref(message: string) {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${digits || WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const PLANS = [
  { id: "starter", monthly: 99, yearly: 990, users: 3, quotes: 100, aiReads: 100 },
  { id: "growth", monthly: 249, yearly: 2490, users: 10, quotes: 500, aiReads: 500 },
  { id: "business", monthly: 499, yearly: 4990, users: 25, quotes: 2000, aiReads: 2000 },
] as const;

// The app that receives pilot sign-ups, and the public Turnstile site key.
// Set at build time; see .env.example.
export const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || "https://app.quotebird.ai";
export const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "TURNSTILE_SITE_KEY_PLACEHOLDER";

// Version label of the privacy policy that pilot applicants agree to. Change it whenever
// the policy changes.
export const PRIVACY_VERSION = "2026-10-29";

// The pilot form needs the app's sign-up endpoint. Until the app is live, the pilot page
// shows a WhatsApp button instead. Set NEXT_PUBLIC_PILOT_FORM=on to show the form.
export const PILOT_FORM_ENABLED = process.env.NEXT_PUBLIC_PILOT_FORM === "on";

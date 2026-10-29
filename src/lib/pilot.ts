// The one place the pilot form talks to the outside world.
//
// TODO(backend): replace the body with a POST to the app's public, rate-limited pilot
// endpoint, sending the Cloudflare Turnstile token with it. That endpoint is being built
// separately. Until then this only logs, and the form moves on to the thank-you page.

export type PilotApplication = {
  name: string;
  company: string;
  whatsapp: string; // normalised to +60…
  email: string;
  industry: "building" | "service" | "distributor" | "other";
  quotes_per_month: "under_20" | "20_100" | "100_500" | "over_500";
  current_method: string;
  consent: true;
  locale: "en" | "ms";
};

export async function submitPilotApplication(application: PilotApplication): Promise<void> {
  console.info("[pilot] application (not sent: backend endpoint not connected yet)", application);
}

/** Malaysian mobile numbers: 01x-xxx xxxx (8 or 9 digits after 01), with or without +60. */
export function normaliseMalaysianMobile(input: string): string | null {
  const digits = input.replace(/[\s\-().]/g, "");
  const m = /^(?:\+?60|0)(1\d{8,9})$/.exec(digits);
  return m ? `+60${m[1]}` : null;
}

export function isValidEmail(input: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.trim());
}

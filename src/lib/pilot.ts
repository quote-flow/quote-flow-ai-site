// The one place the pilot form talks to the outside world: the app's public sign-up
// endpoint (quoteflow-my, API_CONTRACT §11.30).

import { APP_ORIGIN, PRIVACY_VERSION } from "@/content/site";

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

export type SubmitResult =
  | { kind: "ok" }
  | { kind: "fields"; fields: Record<string, string> } // English server messages, keyed by field
  | { kind: "turnstile" } // bot check failed: reset the widget and retry
  | { kind: "rate_limited" }
  | { kind: "closed" } // sign-ups not open yet (production without Turnstile)
  | { kind: "network" }
  | { kind: "failed" };

export async function submitPilotApplication(
  application: PilotApplication,
  turnstileToken: string,
): Promise<SubmitResult> {
  let res: Response;
  try {
    res = await fetch(`${APP_ORIGIN}/api/v1/public/pilot-signups`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "omit",
      body: JSON.stringify({ ...application, consent_version: PRIVACY_VERSION, turnstile_token: turnstileToken }),
    });
  } catch {
    return { kind: "network" };
  }
  if (res.status === 202) return { kind: "ok" };
  if (res.status === 429) return { kind: "rate_limited" };
  if (res.status === 503) return { kind: "closed" };
  if (res.status === 422) {
    const body = await res.json().catch(() => null);
    const fields: Record<string, string> = body?.error?.fields ?? {};
    if (fields.turnstile_token) return { kind: "turnstile" };
    if (Object.keys(fields).length) return { kind: "fields", fields };
  }
  return { kind: "failed" };
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

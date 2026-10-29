"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { Content } from "@/content/en";
import type { Locale } from "@/content/site";
import { isValidEmail, normaliseMalaysianMobile, submitPilotApplication, type PilotApplication } from "@/lib/pilot";

type Field = "name" | "company" | "whatsapp" | "email" | "industry" | "quotes_per_month" | "current_method" | "consent";
type Errors = Partial<Record<Field, string>>;

const ORDER: Field[] = ["name", "company", "whatsapp", "email", "industry", "quotes_per_month", "current_method", "consent"];

export function PilotForm({
  c,
  locale,
  privacyHref,
  thanksHref,
}: {
  c: Content["pilot"];
  locale: Locale;
  privacyHref: string;
  thanksHref: string;
}) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [failed, setFailed] = useState(false);
  const [sending, setSending] = useState(false);

  function validate(fd: FormData): { errors: Errors; data?: PilotApplication } {
    const v = (k: string) => String(fd.get(k) ?? "").trim();
    const e: Errors = {};
    const name = v("name");
    const company = v("company");
    if (name.length < 2) e.name = c.errors.required;
    if (company.length < 2) e.company = c.errors.required;
    const wa = v("whatsapp");
    const waNorm = normaliseMalaysianMobile(wa);
    if (!wa) e.whatsapp = c.errors.required;
    else if (!waNorm) e.whatsapp = c.errors.whatsapp;
    const email = v("email");
    if (!email) e.email = c.errors.required;
    else if (!isValidEmail(email)) e.email = c.errors.email;
    if (!v("industry")) e.industry = c.errors.required;
    if (!v("quotes_per_month")) e.quotes_per_month = c.errors.required;
    if (fd.get("consent") !== "on") e.consent = c.errors.consent;
    if (Object.keys(e).length) return { errors: e };
    return {
      errors: e,
      data: {
        name: name.slice(0, 100),
        company: company.slice(0, 150),
        whatsapp: waNorm!,
        email,
        industry: v("industry") as PilotApplication["industry"],
        quotes_per_month: v("quotes_per_month") as PilotApplication["quotes_per_month"],
        current_method: v("current_method").slice(0, 500),
        consent: true,
        locale,
      },
    };
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setFailed(false);
    const { errors: e, data } = validate(new FormData(ev.currentTarget));
    setErrors(e);
    if (!data) {
      const first = ORDER.find((f) => e[f]);
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setSending(true);
    try {
      await submitPilotApplication(data);
      router.push(thanksHref);
    } catch {
      setFailed(true);
      setSending(false);
    }
  }

  const err = (f: Field) =>
    errors[f] ? (
      <p id={`${f}-error`} className="field-error">
        {errors[f]}
      </p>
    ) : null;
  const aria = (f: Field) => ({
    "aria-invalid": errors[f] ? true : undefined,
    "aria-describedby": errors[f] ? `${f}-error` : undefined,
  });
  const label = (s: string) => {
    // Labels end in "*" for required fields; show the star visually, announce "required" via the input.
    const req = s.endsWith("*");
    return (
      <>
        {req ? s.slice(0, -1) : s}
        {req ? (
          <span aria-hidden="true" className="text-[#a8261b]">
            *
          </span>
        ) : null}
      </>
    );
  };

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="name">{label(c.fields.name)}</label>
          <input id="name" name="name" type="text" autoComplete="name" required minLength={2} maxLength={100} {...aria("name")} />
          {err("name")}
        </div>
        <div className="field">
          <label htmlFor="company">{label(c.fields.company)}</label>
          <input id="company" name="company" type="text" autoComplete="organization" required minLength={2} maxLength={150} {...aria("company")} />
          {err("company")}
        </div>
        <div className="field">
          <label htmlFor="whatsapp">{label(c.fields.whatsapp)}</label>
          <input id="whatsapp" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" placeholder="012-345 6789" required {...aria("whatsapp")} />
          {err("whatsapp")}
        </div>
        <div className="field">
          <label htmlFor="email">{label(c.fields.email)}</label>
          <input id="email" name="email" type="email" autoComplete="email" required {...aria("email")} />
          {err("email")}
        </div>
        <div className="field">
          <label htmlFor="industry">{label(c.fields.industry)}</label>
          <select id="industry" name="industry" required defaultValue="" {...aria("industry")}>
            <option value="" disabled>
              {c.select}
            </option>
            {c.industries.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {err("industry")}
        </div>
        <div className="field">
          <label htmlFor="quotes_per_month">{label(c.fields.quotesPerMonth)}</label>
          <select id="quotes_per_month" name="quotes_per_month" required defaultValue="" {...aria("quotes_per_month")}>
            <option value="" disabled>
              {c.select}
            </option>
            {c.volumes.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {err("quotes_per_month")}
        </div>
      </div>
      <div className="field">
        <label htmlFor="current_method">{label(c.fields.currentMethod)}</label>
        <textarea id="current_method" name="current_method" maxLength={500} placeholder={c.fields.currentMethodPlaceholder} />
      </div>
      <div className="field">
        <div className="consent">
          <input id="consent" name="consent" type="checkbox" required {...aria("consent")} />
          <label htmlFor="consent" style={{ fontWeight: 400, margin: 0 }}>
            {c.consent.before}
            <a className="link" href={privacyHref} target="_blank" rel="noopener">
              {c.consent.link}
            </a>
            {c.consent.after}
            <span aria-hidden="true" className="text-[#a8261b]">
              *
            </span>
          </label>
        </div>
        {err("consent")}
      </div>
      {failed ? (
        <p className="form-alert" role="alert">
          {c.errors.failed}
        </p>
      ) : null}
      <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={sending}>
        {sending ? c.sending : c.submit}
      </button>
    </form>
  );
}

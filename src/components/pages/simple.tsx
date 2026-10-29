import { getContent } from "@/lib/content";
import { rich } from "@/lib/rich";
import { EMAIL, href, PILOT_FORM_ENABLED, whatsappHref, type Locale } from "@/content/site";
import { SiteShell } from "../site-shell";
import { CheckList, PageHero } from "../sections";
import { PilotForm } from "../pilot-form";
import { Mail, Shield, WhatsAppGlyph } from "../icons";

export function PilotPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const p = c.pilot;
  return (
    <SiteShell locale={locale} page="pilot">
      <section className="grid-bg">
        <div className="wrap grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_1.35fr] lg:items-start">
          <div>
            <h1 className="h1" style={{ fontSize: "clamp(32px, 5.5vw, 48px)" }}>
              {p.lead}
            </h1>
            <p className="lede mt-5">{p.body}</p>
            <h2 className="h3 mt-10">{p.getHeading}</h2>
            <CheckList items={p.get} className="mt-4" />
          </div>
          <div className="panel p-6 md:p-8">
            {PILOT_FORM_ENABLED ? (
              <PilotForm c={p} locale={locale} privacyHref={href("privacy", locale)} thanksHref={href("thanks", locale)} />
            ) : (
              <div className="py-4 text-center">
                <span className="icon-tile mx-auto" style={{ width: 56, height: 56, borderRadius: 999, color: "#1fa855" }}>
                  <WhatsAppGlyph size={28} />
                </span>
                <h2 className="h2 mt-5">{p.whatsappApply.heading}</h2>
                <p className="lede mx-auto mt-3">{p.whatsappApply.body}</p>
                <a
                  className="btn mt-7 w-full sm:w-auto"
                  style={{ background: "#1fa855", color: "#fff" }}
                  href={whatsappHref(p.whatsappApply.message)}
                  rel="noopener"
                >
                  <WhatsAppGlyph size={20} />
                  {p.whatsappApply.button}
                </a>
                <p className="muted mt-5">{rich(p.whatsappApply.email)}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

export function ThanksPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  return (
    <SiteShell locale={locale} page="thanks">
      <section className="grid-bg">
        <div className="wrap py-20 md:py-28">
          <div className="panel mx-auto max-w-[640px] p-8 text-center md:p-12">
            <span className="icon-tile mx-auto mb-6" style={{ width: 56, height: 56, borderRadius: 999 }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <h1 className="h2">{c.thanks.lead}</h1>
            <p className="lede mx-auto mt-4">{c.thanks.body}</p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

export function SecurityPage({ locale }: { locale: Locale }) {
  const c = getContent(locale).security;
  return (
    <SiteShell locale={locale} page="security">
      <PageHero lead={c.lead} body={c.body} />
      <section>
        <div className="wrap section grid gap-5 md:grid-cols-2">
          {c.sections.map((s) => (
            <div key={s.lead} className="panel flex gap-4 p-6">
              <span className="icon-tile">
                <Shield />
              </span>
              <div>
                <h2 className="h3">{s.lead}</h2>
                <p className="muted mt-2">{rich(s.body)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

export function AboutPage({ locale }: { locale: Locale }) {
  const c = getContent(locale).about;
  return (
    <SiteShell locale={locale} page="about">
      <PageHero lead={c.lead} />
      <section className="white">
        <div className="wrap section">
          <div className="max-w-[720px] space-y-5 text-[18px]" style={{ color: "#2d4757" }}>
            {c.paragraphs.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <a className="btn btn-primary mt-10" href={href("pilot", locale)}>
            {c.button}
          </a>
        </div>
      </section>
    </SiteShell>
  );
}

export function ContactPage({ locale }: { locale: Locale }) {
  const all = getContent(locale);
  const c = all.contact;
  return (
    <SiteShell locale={locale} page="contact">
      <PageHero lead={c.lead} body={c.body} />
      <section>
        <div className="wrap section grid gap-5 md:grid-cols-3">
          <div className="panel flex flex-col p-6">
            <span className="icon-tile" style={{ color: "#1fa855" }}>
              <WhatsAppGlyph size={20} />
            </span>
            <h2 className="h3 mt-4">{c.whatsapp.label}</h2>
            <p className="mt-1 flex-1">{rich(c.whatsapp.value)}</p>
            <a className="btn btn-primary mt-5" href={whatsappHref(all.whatsappFloat.message)} rel="noopener">
              {c.whatsapp.button}
            </a>
          </div>
          <div className="panel flex flex-col p-6">
            <span className="icon-tile">
              <Mail />
            </span>
            <h2 className="h3 mt-4">{c.email.label}</h2>
            <p className="mt-1 flex-1">
              <a className="link" href={`mailto:${EMAIL}`}>
                {rich(c.email.value)}
              </a>
            </p>
          </div>
          <div className="panel flex flex-col p-6">
            <span className="icon-tile">
              <Shield />
            </span>
            <h2 className="h3 mt-4">{c.pilot.label}</h2>
            <p className="flex-1" />
            <a className="btn btn-secondary mt-5" href={href("pilot", locale)}>
              {c.pilot.button}
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

export function LegalPage({ locale, doc }: { locale: Locale; doc: "privacy" | "terms" }) {
  const c = getContent(locale)[doc];
  return (
    <SiteShell locale={locale} page={doc}>
      <section className="white">
        <div className="wrap section">
          <article className="prose-legal max-w-[760px]">
            <h1 className="h2">{c.title}</h1>
            <p className="small muted mt-2">{rich(c.updated)}</p>
            <div className="mt-8">
              {c.intro.map((t) => (
                <p key={t}>{rich(t)}</p>
              ))}
            </div>
            {c.sections.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                {"paras" in s && s.paras ? s.paras.map((t) => <p key={t}>{rich(t)}</p>) : null}
                {"items" in s && s.items ? (
                  <ul>
                    {s.items.map((t) => (
                      <li key={t}>{rich(t)}</li>
                    ))}
                  </ul>
                ) : null}
                {"after" in s && s.after ? s.after.map((t) => <p key={t}>{rich(t)}</p>) : null}
              </section>
            ))}
            {c.contact ? <p className="mt-8">{rich(c.contact)}</p> : null}
          </article>
        </div>
      </section>
    </SiteShell>
  );
}

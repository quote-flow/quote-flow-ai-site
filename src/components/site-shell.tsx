import type { ReactNode } from "react";
import { getContent } from "@/lib/content";
import { rich } from "@/lib/rich";
import { EMAIL, href, routes, whatsappHref, type Locale, type RouteKey } from "@/content/site";
import { Wordmark } from "./logo";
import { Menu, WhatsAppGlyph } from "./icons";
import { PilotBannerDismiss } from "./pilot-banner";
import { Motion } from "./motion";

export function SiteShell({ locale, page, children }: { locale: Locale; page: RouteKey; children: ReactNode }) {
  const c = getContent(locale);
  const other: Locale = locale === "en" ? "ms" : "en";
  const home = href("home", locale);
  const nav = [
    { label: c.nav.howItWorks, to: `${home}#how-it-works` },
    { label: c.nav.industries, to: `${home}#industries` },
    { label: c.nav.pricing, to: href("pricing", locale) },
    { label: c.nav.security, to: href("security", locale) },
    { label: c.nav.contact, to: href("contact", locale) },
  ];
  const langSwitch = (
    <a
      className="lang"
      href={routes[page][other]}
      hrefLang={other === "ms" ? "ms-MY" : "en-MY"}
      lang={other}
      aria-label={c.langSwitch.name}
    >
      {c.langSwitch.label}
    </a>
  );

  return (
    <>
      <a className="skip-link" href="#main">
        {c.ui.skip}
      </a>

      <div className="pilot-banner">
        <div className="wrap flex items-center justify-between gap-3 py-1.5">
          <p className="py-1.5">
            {c.banner.text}{" "}
            <a href={href("pilot", locale)}>{c.banner.cta}</a>
          </p>
          <PilotBannerDismiss label={c.banner.dismiss} />
        </div>
      </div>

      <header className="site-header">
        <div className="wrap relative flex h-[68px] items-center justify-between gap-4">
          <a href={home} aria-label={c.nav.home}>
            <Wordmark />
          </a>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((n) => (
              <a key={n.to} className="nav-link" href={n.to}>
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            {langSwitch}
            <a className="btn btn-primary btn-sm" href={href("pilot", locale)}>
              {c.nav.cta}
            </a>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            {langSwitch}
            <details className="mobile-menu">
              <summary className="lang" aria-label={c.nav.menu}>
                <Menu />
              </summary>
              <div className="menu-sheet">
                <nav aria-label="Main">
                  {nav.map((n) => (
                    <a key={n.to} className="nav-link" href={n.to}>
                      {n.label}
                    </a>
                  ))}
                </nav>
                <a className="btn btn-primary mt-5 w-full" href={href("pilot", locale)}>
                  {c.nav.cta}
                </a>
              </div>
            </details>
          </div>
        </div>
        <div id="scroll-progress" aria-hidden="true" />
      </header>

      <main id="main">{children}</main>
      <Motion />

      <footer className="dark">
        <div className="wrap grid gap-8 py-12 md:grid-cols-[1.2fr_2fr]">
          <div className="space-y-3">
            <Wordmark dark />
            <p className="muted" style={{ color: "#8da8ba" }}>
              {c.footer.tagline}
            </p>
          </div>
          <div className="space-y-6">
            <ul className="flex flex-wrap gap-x-6 gap-y-3" style={{ listStyle: "none" }}>
              {(["pricing", "security", "about", "contact", "privacy", "terms"] as const).map((k) => (
                <li key={k}>
                  <a className="hover:text-white" style={{ color: "var(--ink-text)" }} href={href(k, locale)}>
                    {c.footer.links[k]}
                  </a>
                </li>
              ))}
            </ul>
            <p style={{ color: "var(--ink-text)" }}>
              <a className="link" href={whatsappHref(c.whatsappFloat.message)} rel="noopener">
                {c.footer.whatsapp}
              </a>{" "}
              · <a className="link" href={`mailto:${EMAIL}`}>{rich(EMAIL)}</a>
            </p>
            <p className="small" style={{ color: "#8da8ba" }}>
              {rich(c.footer.copyright)}
            </p>
          </div>
        </div>
      </footer>

      <a className="wa-float" href={whatsappHref(c.whatsappFloat.message)} rel="noopener" aria-label={c.whatsappFloat.label}>
        <WhatsAppGlyph />
        <span>{c.whatsappFloat.label}</span>
      </a>
    </>
  );
}

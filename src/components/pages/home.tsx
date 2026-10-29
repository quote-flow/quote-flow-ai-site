import { getContent } from "@/lib/content";
import { rich } from "@/lib/rich";
import { href, PLANS, SITE_URL, type Locale } from "@/content/site";
import { SiteShell } from "../site-shell";
import { Faq, FinalCta } from "../sections";
import { IndustryExample } from "../industry-example";
import { Arrow, FeatureIcon, Shield } from "../icons";

function StructuredData({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Quotebird",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${SITE_URL}${href("home", locale)}`,
    description: c.meta.home.description,
    inLanguage: ["en-MY", "ms-MY"],
    offers: PLANS.map((p) => ({
      "@type": "Offer",
      name: c.pricing.plans[p.id].name,
      price: p.monthly.toFixed(2),
      priceCurrency: "MYR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: p.monthly.toFixed(2),
        priceCurrency: "MYR",
        unitCode: "MON",
        valueAddedTaxIncluded: false,
      },
      url: `${SITE_URL}${href("pricing", locale)}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function HomePage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const h = c.home;

  return (
    <SiteShell locale={locale} page="home">
      <StructuredData locale={locale} />

      {/* Hero */}
      <section className="grid-bg border-b">
        <div className="wrap grid gap-12 py-14 md:py-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-center">
          <div>
            <h1 className="h1">{h.hero.headline}</h1>
            <p className="lede mt-6">{rich(h.hero.subline)}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn btn-primary" href={href("pilot", locale)}>
                {h.hero.primary}
              </a>
              <a className="btn btn-secondary" href="#how-it-works">
                {h.hero.secondary}
              </a>
            </div>
            <p className="small muted mt-4">{h.hero.smallPrint}</p>
          </div>
          <div className="lg:pl-4">
            <IndustryExample industry="building" locale={locale} compact />
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="white border-b">
        <div className="wrap section">
          <h2 className="h2 max-w-[760px]">{h.problem.heading}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {h.problem.points.map((p) => (
              <div key={p.lead} className="panel p-6">
                <h3 className="h3">{p.lead}</h3>
                <p className="muted mt-2">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-b">
        <div className="wrap section">
          <h2 className="h2 max-w-[760px]">{h.howItWorks.heading}</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3" style={{ listStyle: "none" }}>
            {h.howItWorks.steps.map((s, i) => (
              <li key={s.lead} className="panel p-6">
                <span className="step-num">{i + 1}</span>
                <h3 className="h3 mt-4">{s.lead}</h3>
                <p className="muted mt-2">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Trust block */}
      <section className="dark grid-dark">
        <div className="wrap section grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <span className="icon-tile mb-6">
              <Shield />
            </span>
            <h2 className="h2">{h.trust.heading}</h2>
            <p className="lede mt-5">{h.trust.body}</p>
          </div>
          <ul className="space-y-3" style={{ listStyle: "none" }}>
            {h.trust.points.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 rounded-xl border px-5 py-4"
                style={{ borderColor: "#397181", background: "#102f3f" }}
              >
                <span style={{ color: "var(--cyan)" }}>✓</span>
                <span style={{ color: "#e4eef5", fontWeight: 600 }}>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Features */}
      <section className="white border-b">
        <div className="wrap section">
          <h2 className="h2 max-w-[760px]">{h.features.heading}</h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {h.features.items.map((f, i) => (
              <div key={f.title} className="flex gap-4">
                <span className="icon-tile">
                  <FeatureIcon index={i} />
                </span>
                <div>
                  <h3 className="h3">{f.title}</h3>
                  <p className="muted mt-1">{f.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Coming soon: only labelled future work may appear here (honesty rule). */}
          <div className="mt-14 rounded-2xl p-6 md:p-8 dark">
            <div className="flex flex-wrap items-center gap-3">
              <span className="badge badge-soon">{h.comingSoon.heading}</span>
              <p style={{ color: "var(--ink-text)" }}>{h.comingSoon.body}</p>
            </div>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2" style={{ listStyle: "none" }}>
              {h.comingSoon.items.map((it) => (
                <li key={it.lead}>
                  <strong style={{ color: "#f2fafc" }}>{it.lead}</strong>{" "}
                  <span style={{ color: "var(--ink-text)" }}>{it.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="border-b">
        <div className="wrap section">
          <h2 className="h2 max-w-[760px]">{h.industries.heading}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {h.industries.cards.map((card) => (
              <a
                key={card.key}
                href={href(card.key as "building" | "service" | "distributors", locale)}
                className="panel group flex flex-col p-6 transition-colors hover:border-[#9fbccb]"
              >
                <h3 className="h3">{card.lead}</h3>
                <p className="muted mt-2 flex-1">{card.body}</p>
                <span className="mt-5 text-[var(--primary)] transition-transform group-hover:translate-x-1">
                  <Arrow />
                </span>
              </a>
            ))}
          </div>
          <p className="mt-8">
            {h.industries.other}{" "}
            <a className="link" href={href("contact", locale)}>
              {h.industries.otherLink}
            </a>
          </p>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="white border-b">
        <div className="wrap section">
          <div className="panel grid-bg flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <h2 className="h2">{h.pricingTeaser.heading}</h2>
              <p className="lede mt-3">{h.pricingTeaser.body}</p>
            </div>
            <a className="btn btn-secondary shrink-0" href={href("pricing", locale)}>
              {h.pricingTeaser.link}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="wrap section">
          <Faq heading={h.faq.heading} items={h.faq.items} locale={locale} />
        </div>
      </section>

      <FinalCta locale={locale} />
    </SiteShell>
  );
}

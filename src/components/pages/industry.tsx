import { getContent } from "@/lib/content";
import { href, type Locale } from "@/content/site";
import type { IndustryKey } from "@/content/examples";
import { SiteShell } from "../site-shell";
import { CheckList, FinalCta } from "../sections";
import { IndustryExample } from "../industry-example";
import { Alert } from "../icons";
import { HeroTitle } from "../hero-title";
import { ScrollFill } from "../scroll-fill";

export function IndustryPage({ industry, locale }: { industry: IndustryKey; locale: Locale }) {
  const c = getContent(locale);
  const p = c.industry.pages[industry];
  const card = c.home.industries.cards.find((x) => x.key === industry);

  return (
    <SiteShell locale={locale} page={industry}>
      {/* 1. Hero */}
      <section className="grid-bg border-b">
        <div className="wrap py-14 md:py-20">
          {card ? <p className="eyebrow mb-4">{card.lead.replace(/\.$/, "")}</p> : null}
          <HeroTitle text={p.lead} className="h1 max-w-[860px]" />
          <p className="lede mt-6">{p.body}</p>
          <a className="btn btn-primary mt-8" href={href("pilot", locale)}>
            {c.nav.cta}
          </a>
        </div>
      </section>

      {/* 2. Sound familiar? */}
      <section className="white border-b">
        <div className="wrap section">
          <h2 className="h2">{c.industry.soundFamiliar}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2" style={{ listStyle: "none" }}>
            {p.problems.map((t) => (
              <li key={t} className="panel flex gap-3 p-5">
                <span className="mt-0.5 text-[#b7791f]">
                  <Alert size={18} />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Example enquiry beside the drafted quote */}
      <section className="border-b">
        <ScrollFill>
          <div className="wrap section">
            <h2 className="h2 mb-10">{c.industry.exampleHeading}</h2>
            <IndustryExample industry={industry} locale={locale} />
          </div>
        </ScrollFill>
      </section>

      {/* 4. Benefits */}
      <section className="white">
        <div className="wrap section grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <h2 className="h2">{c.industry.benefitsHeading}</h2>
          <CheckList items={p.benefits} className="text-[17px]" />
        </div>
      </section>

      {/* 5. Final call to action from the home page */}
      <FinalCta locale={locale} />
    </SiteShell>
  );
}

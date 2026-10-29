import { getContent } from "@/lib/content";
import { rich } from "@/lib/rich";
import { href, type Locale } from "@/content/site";
import { SiteShell } from "../site-shell";
import { Faq, PageHero } from "../sections";
import { PricingPlans } from "../pricing-plans";
import { faqPage, JsonLd } from "@/lib/schema";

export function PricingPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const p = c.pricing;
  const pilot = href("pilot", locale);

  return (
    <SiteShell locale={locale} page="pricing">
      <JsonLd data={faqPage(p.faq)} />
      <PageHero lead={p.lead} body={p.body}>
        <div className="panel mt-8 flex flex-col gap-4 border-l-4 p-5 sm:flex-row sm:items-center sm:justify-between" style={{ borderLeftColor: "var(--primary)" }}>
          <p>
            <strong>{p.banner.lead}</strong> {rich(p.banner.body)}
          </p>
          <a className="btn btn-primary btn-sm shrink-0" href={pilot}>
            {p.banner.cta}
          </a>
        </div>
      </PageHero>

      <section>
        <div className="wrap section">
          <PricingPlans c={p} pilotHref={pilot} />
          <p className="mx-auto mt-10 max-w-[720px] text-center">{p.includes}</p>
          <p className="small muted mt-3 text-center">{p.smallPrint}</p>
        </div>
      </section>

      <section className="white border-t">
        <div className="wrap section">
          <Faq heading={p.faqHeading} items={p.faq} locale={locale} />
        </div>
      </section>
    </SiteShell>
  );
}

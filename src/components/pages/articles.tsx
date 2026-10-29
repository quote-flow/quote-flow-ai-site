import type { Metadata } from "next";
import { rich } from "@/lib/rich";
import { JsonLd } from "@/lib/schema";
import { articlePath, articles, articleUi, type Article } from "@/content/articles";
import { href, routes, SITE_URL, type Locale } from "@/content/site";
import { SiteShell } from "../site-shell";
import { CheckList, PageHero } from "../sections";
import { HeroTitle } from "../hero-title";

const dateLabel = (iso: string, locale: Locale) =>
  new Date(iso).toLocaleDateString(locale === "ms" ? "ms-MY" : "en-MY", { day: "numeric", month: "long", year: "numeric" });

export function articlesIndexMetadata(locale: Locale): Metadata {
  const u = articleUi[locale];
  return {
    title: { absolute: u.indexMetaTitle },
    description: u.indexMetaDescription,
    alternates: {
      canonical: routes.articles[locale],
      languages: { "en-MY": routes.articles.en, "ms-MY": routes.articles.ms, "x-default": routes.articles.en },
    },
    openGraph: { type: "website", siteName: "Quotebird", title: u.indexMetaTitle, description: u.indexMetaDescription, url: `${SITE_URL}${routes.articles[locale]}`, images: [{ url: locale === "ms" ? "/og-ms.png" : "/og-en.png", width: 1200, height: 630 }] },
  };
}

export function articleMetadata(a: Article, locale: Locale): Metadata {
  const t = a[locale];
  const title = `${t.title} | Quotebird`;
  return {
    title: { absolute: title },
    description: t.description,
    alternates: {
      canonical: articlePath(a, locale),
      languages: { "en-MY": articlePath(a, "en"), "ms-MY": articlePath(a, "ms"), "x-default": articlePath(a, "en") },
    },
    openGraph: { type: "article", siteName: "Quotebird", title, description: t.description, url: `${SITE_URL}${articlePath(a, locale)}`, publishedTime: a.date, images: [{ url: locale === "ms" ? "/og-ms.png" : "/og-en.png", width: 1200, height: 630 }] },
  };
}

export function ArticlesIndex({ locale }: { locale: Locale }) {
  const u = articleUi[locale];
  return (
    <SiteShell locale={locale} page="articles">
      <PageHero lead={u.indexTitle} body={u.indexLead} />
      <section>
        <div className="wrap section grid gap-5 md:grid-cols-3">
          {articles.map((a) => (
            <a key={a.id} href={articlePath(a, locale)} className="panel group flex flex-col p-6">
              <p className="label">{dateLabel(a.date, locale)}</p>
              <h2 className="h3 mt-3" style={{ fontSize: 20 }}>
                {a[locale].title}
              </h2>
              <p className="muted mt-2 flex-1">{a[locale].description}</p>
              <span className="link mt-5">{u.read}</span>
            </a>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

export function ArticlePage({ article: a, locale }: { article: Article; locale: Locale }) {
  const u = articleUi[locale];
  const t = a[locale];
  const other: Locale = locale === "en" ? "ms" : "en";
  return (
    <SiteShell locale={locale} page="articles" altHref={articlePath(a, other)}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: t.title,
          description: t.description,
          inLanguage: locale === "ms" ? "ms-MY" : "en-MY",
          datePublished: a.date,
          dateModified: a.date,
          mainEntityOfPage: `${SITE_URL}${articlePath(a, locale)}`,
          author: { "@id": `${SITE_URL}/#organization` },
          publisher: { "@id": `${SITE_URL}/#organization` },
        }}
      />
      <article>
        <header className="grid-bg border-b">
          <div className="wrap py-14 md:py-20">
            <a className="link small" href={href("articles", locale)}>
              {u.back}
            </a>
            <HeroTitle text={t.title} className="h1 mt-5 max-w-[860px]" style={{ fontSize: "clamp(32px, 5.5vw, 52px)" }} />
            <p className="label mt-5">
              {u.updated} {dateLabel(a.date, locale)}
            </p>
          </div>
        </header>
        <div className="white">
          <div className="wrap section">
            <div className="prose-article max-w-[720px]">
              <p className="lede">{rich(t.intro)}</p>
              {t.blocks.map((b, i) => (
                <section key={i}>
                  {b.h ? <h2>{b.h}</h2> : null}
                  {b.p?.map((p) => <p key={p}>{rich(p)}</p>)}
                  {b.list ? <CheckList items={b.list} className="mt-4" /> : null}
                </section>
              ))}
              <p className="small muted mt-10 border-t pt-5">{u.disclaimer}</p>
              <a className="link mt-6 inline-block" href={href("template", locale)}>
                {u.templateCta}
              </a>
            </div>
          </div>
        </div>
      </article>
      <section className="dark grid-dark">
        <div className="wrap section text-center">
          <h2 className="h2 mx-auto max-w-[720px]">{u.pilotCtaHeading}</h2>
          <p className="lede mx-auto mt-4">{u.pilotCtaBody}</p>
          <a className="btn btn-primary mt-8" href={href("pilot", locale)}>
            {u.pilotCtaButton}
          </a>
        </div>
      </section>
    </SiteShell>
  );
}

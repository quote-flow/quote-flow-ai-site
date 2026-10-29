import { getContent } from "./content";
import { routes, SITE_URL, type Locale, type RouteKey } from "@/content/site";

// Structured data (schema.org JSON-LD) that helps Google show rich results.

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const url = (key: RouteKey, locale: Locale) => `${SITE_URL}${routes[key][locale]}`;

export function organization(locale: Locale) {
  const c = getContent(locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Quotebird",
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/apple-touch-icon.png`,
        description: c.footer.tagline,
        areaServed: { "@type": "Country", name: "Malaysia" },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Quotebird",
        url: `${SITE_URL}/`,
        inLanguage: ["en-MY", "ms-MY"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}

export function faqPage(items: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumb(page: RouteKey, locale: Locale) {
  const names = getContent(locale).pageNames;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: names.home, item: url("home", locale) },
      { "@type": "ListItem", position: 2, name: names[page], item: url(page, locale) },
    ],
  };
}

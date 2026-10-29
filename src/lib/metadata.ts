import type { Metadata } from "next";
import { getContent } from "./content";
import { routes, SITE_URL, type Locale, type RouteKey } from "@/content/site";

type MetaKey = keyof ReturnType<typeof getContent>["meta"];

/** Title, description, canonical URL and the EN/BM hreflang pair for one page. */
export function pageMetadata(key: RouteKey & MetaKey, locale: Locale, opts: { noindex?: boolean } = {}): Metadata {
  const { title, description } = getContent(locale).meta[key];
  const path = routes[key][locale];
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
      languages: {
        "en-MY": routes[key].en,
        "ms-MY": routes[key].ms,
        "x-default": routes[key].en,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Quotebird",
      title,
      description,
      url: `${SITE_URL}${path}`,
      locale: locale === "ms" ? "ms_MY" : "en_MY",
      images: [{ url: locale === "ms" ? "/og-ms.png" : "/og-en.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description },
    robots: opts.noindex ? { index: false, follow: true } : undefined,
  };
}

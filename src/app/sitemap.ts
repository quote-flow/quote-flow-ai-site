import type { MetadataRoute } from "next";
import { routes, SITE_URL, type RouteKey } from "@/content/site";
import { articlePath, articles } from "@/content/articles";

export const dynamic = "force-static";

const EXCLUDE: RouteKey[] = ["thanks"];

export default function sitemap(): MetadataRoute.Sitemap {
  return (Object.keys(routes) as RouteKey[])
    .filter((k) => !EXCLUDE.includes(k))
    .flatMap((k) =>
      (["en", "ms"] as const).map((loc) => ({
        url: `${SITE_URL}${routes[k][loc]}`,
        changeFrequency: "monthly" as const,
        priority: k === "home" ? 1 : k === "privacy" || k === "terms" ? 0.3 : 0.8,
        alternates: {
          languages: { "en-MY": `${SITE_URL}${routes[k].en}`, "ms-MY": `${SITE_URL}${routes[k].ms}` },
        },
      })),
    )
    .concat(
      articles.flatMap((a) =>
        (["en", "ms"] as const).map((loc) => ({
          url: `${SITE_URL}${articlePath(a, loc)}`,
          changeFrequency: "monthly" as const,
          priority: 0.7,
          alternates: {
            languages: { "en-MY": `${SITE_URL}${articlePath(a, "en")}`, "ms-MY": `${SITE_URL}${articlePath(a, "ms")}` },
          },
        })),
      ),
    );
}

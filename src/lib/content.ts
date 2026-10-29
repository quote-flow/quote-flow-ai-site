import { en, type Content } from "@/content/en";
import { ms } from "@/content/ms";
import type { Locale } from "@/content/site";

export function getContent(locale: Locale): Content {
  return locale === "ms" ? ms : en;
}

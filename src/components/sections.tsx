import type { ReactNode } from "react";
import { getContent } from "@/lib/content";
import { rich } from "@/lib/rich";
import { href, type Locale, type RouteKey } from "@/content/site";
import { Check } from "./icons";
import { HeroTitle } from "./hero-title";

export function PageHero({ eyebrow, lead, body, children }: { eyebrow?: string; lead: string; body?: string; children?: ReactNode }) {
  return (
    <section className="grid-bg border-b">
      <div className="wrap py-14 md:py-20">
        {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
        <HeroTitle text={lead} className="h1 max-w-[860px]" />
        {body ? <p className="lede mt-5">{rich(body)}</p> : null}
        {children}
      </div>
    </section>
  );
}

export function CheckList({ items, className = "" }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={`check-list space-y-3 ${className}`} style={{ listStyle: "none" }}>
      {items.map((t) => (
        <li key={t}>
          <Check className="text-[var(--primary)]" />
          <span>{rich(t)}</span>
        </li>
      ))}
    </ul>
  );
}

export function Faq({
  heading,
  items,
  locale,
}: {
  heading: string;
  items: readonly { q: string; a: string; link?: { text: string; to: string } }[];
  locale: Locale;
}) {
  return (
    <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
      <h2 className="h2">{heading}</h2>
      <div className="faq border-t">
        {items.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p className="answer">
              {rich(f.a)}{" "}
              {f.link ? (
                <a className="link" href={href(f.link.to as RouteKey, locale)}>
                  {f.link.text}
                </a>
              ) : null}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}

export function FinalCta({ locale }: { locale: Locale }) {
  const c = getContent(locale).home.finalCta;
  return (
    <section className="dark grid-dark">
      <div className="wrap section text-center">
        <h2 className="h2 mx-auto max-w-[720px]">{c.heading}</h2>
        <p className="lede mx-auto mt-4">{c.body}</p>
        <a className="btn btn-primary mt-8" href={href("pilot", locale)}>
          {c.button}
        </a>
      </div>
    </section>
  );
}

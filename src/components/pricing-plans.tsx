"use client";

import { useEffect, useRef, useState } from "react";
import { Tilt } from "./tilt";
import { reducedMotion } from "./scroll-progress";
import type { Content } from "@/content/en";
import { PLANS } from "@/content/site";

const rm = (n: number) => `RM ${n.toLocaleString("en-MY")}`;

/** Counts from the previous amount to the new one when the billing period changes. */
function CountUp({ value }: { value: number }) {
  const [shown, setShown] = useState(value);
  const from = useRef(value);
  useEffect(() => {
    if (reducedMotion()) return setShown(value);
    const start = performance.now();
    const a = from.current;
    let raf = 0;
    const step = (t: number) => {
      const k = Math.min(1, (t - start) / 700);
      const e = 1 - Math.pow(1 - k, 3);
      setShown(Math.round(a + (value - a) * e));
      if (k < 1) raf = requestAnimationFrame(step);
      else from.current = value;
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return <>{rm(shown)}</>;
}

export function PricingPlans({ c, pilotHref }: { c: Content["pricing"]; pilotHref: string }) {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <div className="mb-10 flex justify-center">
        <div className="toggle" role="group" aria-label={c.toggle.label}>
          <button type="button" aria-pressed={!yearly} onClick={() => setYearly(false)}>
            {c.toggle.monthly}
          </button>
          <button type="button" aria-pressed={yearly} onClick={() => setYearly(true)}>
            {c.toggle.yearly}
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
        {PLANS.map((p) => {
          const plan = c.plans[p.id];
          const badge = "badge" in plan ? plan.badge : undefined;
          return (
            <Tilt key={p.id} drift={false} className="plan-tilt">
            <section
              aria-labelledby={`plan-${p.id}`}
              className={`panel flex h-full flex-col p-6 md:p-8 ${badge ? "plan-popular" : ""}`}
            >
              <div className="flex items-center justify-between gap-3">
                <h2 id={`plan-${p.id}`} className="h3" style={{ fontSize: 20 }}>
                  {plan.name}
                </h2>
                {badge ? <span className="badge badge-popular">{badge}</span> : null}
              </div>
              <p className="muted mt-1">{plan.tagline}</p>
              <p className="mt-6" aria-live="polite">
                <span className="price"><CountUp value={yearly ? p.yearly : p.monthly} /></span>{" "}
                <span className="muted">{yearly ? c.perYear : c.perMonth}</span>
              </p>
              <dl className="plan-rows mt-6 flex-1">
                <div>
                  <dt>{c.rows.users}</dt>
                  <dd>{p.users.toLocaleString("en-MY")}</dd>
                </div>
                <div>
                  <dt>{c.rows.quotes}</dt>
                  <dd>{p.quotes.toLocaleString("en-MY")}</dd>
                </div>
                <div>
                  <dt>{c.rows.aiReads}</dt>
                  <dd>{p.aiReads.toLocaleString("en-MY")}</dd>
                </div>
                <div>
                  <dt>{c.rows.support}</dt>
                  <dd>{plan.support}</dd>
                </div>
              </dl>
              <a className={`btn mt-8 w-full ${badge ? "btn-primary" : "btn-secondary"}`} href={pilotHref}>
                {c.button}
              </a>
            </section>
            </Tilt>
          );
        })}
      </div>
    </>
  );
}

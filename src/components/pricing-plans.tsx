"use client";

import { useState } from "react";
import type { Content } from "@/content/en";
import { PLANS } from "@/content/site";

const rm = (n: number) => `RM ${n.toLocaleString("en-MY")}`;

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
            <section
              key={p.id}
              aria-labelledby={`plan-${p.id}`}
              className={`panel flex flex-col p-6 md:p-8 ${badge ? "plan-popular" : ""}`}
            >
              <div className="flex items-center justify-between gap-3">
                <h2 id={`plan-${p.id}`} className="h3" style={{ fontSize: 20 }}>
                  {plan.name}
                </h2>
                {badge ? <span className="badge badge-popular">{badge}</span> : null}
              </div>
              <p className="muted mt-1">{plan.tagline}</p>
              <p className="mt-6" aria-live="polite">
                <span className="price">{rm(yearly ? p.yearly : p.monthly)}</span>{" "}
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
          );
        })}
      </div>
    </>
  );
}

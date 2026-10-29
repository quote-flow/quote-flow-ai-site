"use client";

import { useEffect, useMemo, useState } from "react";
import type { Content } from "@/content/en";

type Line = { description: string; qty: string; unit: string; price: string };
type State = {
  company: string;
  reg: string;
  address: string;
  phone: string;
  email: string;
  sst: string;
  customer: string;
  customerAddress: string;
  attention: string;
  number: string;
  date: string;
  validUntil: string;
  lines: Line[];
  discount: string;
  taxRate: string;
  terms: string;
};

// Money is handled in whole sen so totals are exact.
const toSen = (s: string) => {
  const n = Number(String(s).replace(/,/g, ""));
  return Number.isFinite(n) ? Math.round(n * 100) : 0;
};
const toQty = (s: string) => {
  const n = Number(String(s).replace(/,/g, ""));
  return Number.isFinite(n) ? n : 0;
};
const rm = (sen: number) =>
  (sen / 100).toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const iso = (d: Date) => d.toISOString().slice(0, 10);
const STORAGE_KEY = "qb-template-v1";

function initial(c: Content["template"]): State {
  const today = new Date();
  const valid = new Date(today.getTime() + 30 * 864e5);
  return {
    company: "",
    reg: "",
    address: "",
    phone: "",
    email: "",
    sst: "",
    customer: "",
    customerAddress: "",
    attention: "",
    number: c.defaults.number,
    date: iso(today),
    validUntil: iso(valid),
    lines: [{ description: "", qty: "1", unit: c.defaults.unit, price: "" }],
    discount: "",
    taxRate: "",
    terms: c.defaults.terms,
  };
}

export function QuoteTemplate({ c }: { c: Content["template"] }) {
  const [s, setS] = useState<State>(() => initial(c));
  const [loaded, setLoaded] = useState(false);

  // Remember the draft in this browser only, so a refresh doesn't lose it.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setS({ ...initial(c), ...JSON.parse(saved) });
    } catch {}
    setLoaded(true);
  }, [c]);
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    } catch {}
  }, [s, loaded]);

  const set = (k: keyof State) => (e: { target: { value: string } }) => setS((p) => ({ ...p, [k]: e.target.value }));
  const setLine = (i: number, k: keyof Line, v: string) =>
    setS((p) => ({ ...p, lines: p.lines.map((l, j) => (j === i ? { ...l, [k]: v } : l)) }));

  const totals = useMemo(() => {
    const amounts = s.lines.map((l) => Math.round(toQty(l.qty) * toSen(l.price)));
    const subtotal = amounts.reduce((a, b) => a + b, 0);
    const discount = Math.min(Math.max(0, toSen(s.discount)), subtotal);
    const rate = Math.max(0, toQty(s.taxRate));
    const tax = Math.round(((subtotal - discount) * rate) / 100);
    return { amounts, subtotal, discount, rate, tax, total: subtotal - discount + tax };
  }, [s]);

  function downloadCsv() {
    const q = (v: string) => `"${String(v).replace(/"/g, '""')}"`;
    const rows: string[][] = [
      [c.docTitle],
      [c.fields.company, s.company],
      [c.fields.reg, s.reg],
      [c.fields.sst, s.sst],
      [c.fields.customer, s.customer],
      [c.fields.number, s.number],
      [c.fields.date, s.date],
      [c.fields.validUntil, s.validUntil],
      [],
      [c.fields.description, c.fields.qty, c.fields.unit, c.fields.price, c.fields.amount],
      ...s.lines.map((l, i) => [l.description, l.qty, l.unit, rm(toSen(l.price)), rm(totals.amounts[i])]),
      [],
      [c.subtotal, "", "", "", rm(totals.subtotal)],
      [c.fields.discount, "", "", "", rm(totals.discount)],
      [`${c.tax} (${totals.rate}%)`, "", "", "", rm(totals.tax)],
      [c.total, "", "", "", rm(totals.total)],
      [],
      [c.fields.terms, s.terms],
    ];
    const csv = "﻿" + rows.map((r) => r.map(q).join(",")).join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    a.download = `${s.number || "quotation"}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  const field = (k: keyof State, label: string, type = "text", wide = false) => (
    <div className={`field ${wide ? "sm:col-span-2" : ""}`}>
      <label htmlFor={`t-${k}`}>{label}</label>
      <input id={`t-${k}`} type={type} value={s[k] as string} onChange={set(k)} />
    </div>
  );

  return (
    <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:items-start">
      {/* Editor */}
      <div className="no-print min-w-0 space-y-6">
        <fieldset className="panel p-5 md:p-6">
          <legend className="h3 px-1">{c.sections.you}</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            {field("company", c.fields.company)}
            {field("reg", c.fields.reg)}
            {field("address", c.fields.address, "text", true)}
            {field("phone", c.fields.phone, "tel")}
            {field("email", c.fields.email, "email")}
            {field("sst", c.fields.sst, "text", true)}
          </div>
        </fieldset>

        <fieldset className="panel p-5 md:p-6">
          <legend className="h3 px-1">{c.sections.customer}</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            {field("customer", c.fields.customer)}
            {field("attention", c.fields.attention)}
            {field("customerAddress", c.fields.customerAddress, "text", true)}
          </div>
        </fieldset>

        <fieldset className="panel p-5 md:p-6">
          <legend className="h3 px-1">{c.sections.details}</legend>
          <div className="grid gap-4 sm:grid-cols-3">
            {field("number", c.fields.number)}
            {field("date", c.fields.date, "date")}
            {field("validUntil", c.fields.validUntil, "date")}
          </div>
        </fieldset>

        <fieldset className="panel p-5 md:p-6">
          <legend className="h3 px-1">{c.sections.items}</legend>
          <div className="space-y-4">
            {s.lines.map((l, i) => (
              <div key={i} className="tpl-line">
                <div className="field tpl-desc">
                  <label htmlFor={`d-${i}`}>{c.fields.description}</label>
                  <input id={`d-${i}`} type="text" value={l.description} onChange={(e) => setLine(i, "description", e.target.value)} />
                </div>
                <div className="field">
                  <label htmlFor={`q-${i}`}>{c.fields.qty}</label>
                  <input id={`q-${i}`} type="text" inputMode="decimal" value={l.qty} onChange={(e) => setLine(i, "qty", e.target.value)} />
                </div>
                <div className="field">
                  <label htmlFor={`u-${i}`}>{c.fields.unit}</label>
                  <input id={`u-${i}`} type="text" value={l.unit} onChange={(e) => setLine(i, "unit", e.target.value)} />
                </div>
                <div className="field">
                  <label htmlFor={`p-${i}`}>{c.fields.price}</label>
                  <input id={`p-${i}`} type="text" inputMode="decimal" value={l.price} onChange={(e) => setLine(i, "price", e.target.value)} />
                </div>
                <div className="tpl-amount">
                  <span className="label">{c.fields.amount}</span>
                  <span className="num">{rm(totals.amounts[i])}</span>
                </div>
                {s.lines.length > 1 ? (
                  <button
                    type="button"
                    className="tpl-remove"
                    aria-label={`${c.removeLine} ${i + 1}`}
                    onClick={() => setS((p) => ({ ...p, lines: p.lines.filter((_, j) => j !== i) }))}
                  >
                    ×
                  </button>
                ) : null}
              </div>
            ))}
          </div>
          <button
            type="button"
            className="btn btn-secondary btn-sm mt-4"
            onClick={() => setS((p) => ({ ...p, lines: [...p.lines, { description: "", qty: "1", unit: c.defaults.unit, price: "" }] }))}
          >
            {c.addLine}
          </button>
        </fieldset>

        <fieldset className="panel p-5 md:p-6">
          <legend className="h3 px-1">{c.sections.totals}</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            {field("discount", c.fields.discount)}
            <div className="field">
              <label htmlFor="t-taxRate">{c.fields.taxRate}</label>
              <input id="t-taxRate" type="text" inputMode="decimal" value={s.taxRate} onChange={set("taxRate")} aria-describedby="tax-hint" />
              <p id="tax-hint" className="small muted mt-1">
                {c.fields.taxHint}
              </p>
            </div>
          </div>
          <div className="field mt-4">
            <label htmlFor="t-terms">{c.fields.terms}</label>
            <textarea id="t-terms" value={s.terms} onChange={set("terms")} />
          </div>
        </fieldset>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button type="button" className="btn btn-primary" onClick={() => window.print()}>
            {c.print}
          </button>
          <button type="button" className="btn btn-secondary" onClick={downloadCsv}>
            {c.csv}
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => setS(initial(c))}>
            {c.clear}
          </button>
        </div>
        <p className="small muted">{c.printHint}</p>
      </div>

      {/* Live preview, which is also exactly what gets printed */}
      <div className="min-w-0 xl:sticky xl:top-24">
        <p className="label no-print mb-2">{c.preview}</p>
        <article className="quote-doc print-area">
          <header className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="doc-company">{s.company || c.fields.company}</p>
              {s.reg ? <p>{s.reg}</p> : null}
              {s.address ? <p>{s.address}</p> : null}
              <p>{[s.phone, s.email].filter(Boolean).join(" · ")}</p>
              {s.sst ? (
                <p>
                  SST: {s.sst}
                </p>
              ) : null}
            </div>
            <div className="text-right">
              <p className="doc-title">{c.docTitle}</p>
              <p>
                {c.fields.number}: <strong>{s.number}</strong>
              </p>
              <p>
                {c.fields.date}: {s.date}
              </p>
              <p>
                {c.fields.validUntil}: {s.validUntil}
              </p>
            </div>
          </header>

          <div className="mt-6">
            <p className="doc-label">{c.to}</p>
            <p>
              <strong>{s.customer || c.fields.customer}</strong>
            </p>
            {s.attention ? (
              <p>
                {c.fields.attention}: {s.attention}
              </p>
            ) : null}
            {s.customerAddress ? <p>{s.customerAddress}</p> : null}
          </div>

          <div className="doc-scroll mt-6">
          <table className="doc-table">
            <thead>
              <tr>
                <th>#</th>
                <th>{c.fields.description}</th>
                <th className="r">{c.fields.qty}</th>
                <th>{c.fields.unit}</th>
                <th className="r">{c.fields.price}</th>
                <th className="r">{c.fields.amount}</th>
              </tr>
            </thead>
            <tbody>
              {s.lines.map((l, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{l.description}</td>
                  <td className="r">{l.qty}</td>
                  <td>{l.unit}</td>
                  <td className="r">{rm(toSen(l.price))}</td>
                  <td className="r">{rm(totals.amounts[i])}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>

          <dl className="doc-totals">
            <div>
              <dt>{c.subtotal}</dt>
              <dd>{rm(totals.subtotal)}</dd>
            </div>
            {totals.discount ? (
              <div>
                <dt>{c.fields.discount}</dt>
                <dd>−{rm(totals.discount)}</dd>
              </div>
            ) : null}
            {totals.rate ? (
              <div>
                <dt>
                  {c.tax} ({totals.rate}%)
                </dt>
                <dd>{rm(totals.tax)}</dd>
              </div>
            ) : null}
            <div className="grand">
              <dt>{c.total} (RM)</dt>
              <dd>{rm(totals.total)}</dd>
            </div>
          </dl>

          {s.terms ? (
            <div className="mt-6">
              <p className="doc-label">{c.fields.terms}</p>
              <p style={{ whiteSpace: "pre-wrap" }}>{s.terms}</p>
            </div>
          ) : null}

          <div className="doc-sign">
            <div>
              <span />
              <p>{c.preparedBy}</p>
            </div>
            <div>
              <span />
              <p>{c.acceptance}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

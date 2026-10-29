import { getContent } from "@/lib/content";
import { examples, type IndustryKey } from "@/content/examples";
import type { Locale } from "@/content/site";
import { Alert } from "./icons";

/** The sample enquiry (WhatsApp bubble or email card) next to the drafted quote. */
export function IndustryExample({ industry, locale, compact = false }: { industry: IndustryKey; locale: Locale; compact?: boolean }) {
  const c = getContent(locale).industry;
  const notes = c.pages[industry].notes as Record<string, string>;
  const ex = examples[industry];

  return (
    <div className={`grid gap-5 ${compact ? "compact" : "lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start"}`}>
      <figure className="m-0">
        <figcaption className="label mb-2">{c.enquiryLabel}</figcaption>
        {ex.channel === "whatsapp" ? (
          <div className="wa">
            <div className="wa-top">
              <span className="wa-avatar" aria-hidden="true">
                ●
              </span>
              WhatsApp
            </div>
            <div className="wa-bubble" lang="en">
              {ex.enquiry.map((l, i) => (
                <div key={i}>{l}</div>
              ))}
              <span className="wa-time">10:42</span>
            </div>
          </div>
        ) : (
          <div className="panel overflow-hidden" lang="en">
            <div className="panel-heading">
              <span className="label">Email</span>
            </div>
            {ex.subject ? (
              <div className="mail-row">
                <span className="label">Subject</span>
                <strong>{ex.subject}</strong>
              </div>
            ) : null}
            <div className="space-y-3 p-[18px] text-[15px]">
              {ex.enquiry.map((l, i) => (
                <p key={i}>{l}</p>
              ))}
            </div>
          </div>
        )}
      </figure>

      <figure className="m-0">
        <figcaption className="label mb-2">{c.draftLabel}</figcaption>
        <div className="panel overflow-hidden">
          <table className="quote-table">
            <thead>
              <tr>
                <th scope="col">{c.columns.line}</th>
                <th scope="col" className="num">{c.columns.qty}</th>
                <th scope="col" className="num">{c.columns.price}</th>
                <th scope="col">{c.columns.note}</th>
              </tr>
            </thead>
            <tbody>
              {ex.lines.map((l, i) => (
                <tr key={i} className={l.approval ? "approval-row" : l.flag ? "flag-row" : undefined}>
                  <td className="item">{l.item ?? (l.itemNote ? notes[l.itemNote] : "")}</td>
                  <td className="num">{l.qty ?? ""}</td>
                  <td className="num unit">{l.price ?? ""}</td>
                  <td className="note">
                    {l.approval ? (
                      <span className="badge badge-approval">{c.approvalNeeded}</span>
                    ) : l.note && l.flag ? (
                      <span className="flag">
                        <Alert />
                        {notes[l.note]}
                      </span>
                    ) : l.note ? (
                      <span className="muted">{notes[l.note]}</span>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="small muted mt-2">{c.exampleLabel}</p>
      </figure>
    </div>
  );
}

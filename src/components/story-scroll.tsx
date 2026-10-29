"use client";

import { useEffect, useRef, useState } from "react";
import type { Content } from "@/content/en";
import { examples } from "@/content/examples";
import { onScrollFrame, pinnedProgress, reducedMotion } from "./scroll-progress";

type Props = {
  heading: string;
  steps: Content["home"]["howItWorks"]["steps"];
  story: Content["home"]["story"];
  notes: Record<string, string>;
  columns: Content["industry"]["columns"];
};

/**
 * "How it works" as a pinned story: the section stays on screen while the visitor scrolls
 * through the three steps, and the picture changes with each one. Without JavaScript or
 * with reduced motion it is a plain list of the three steps beside the final picture.
 */
export function StoryScroll({ heading, steps, story, notes, columns }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(1);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    if (reducedMotion()) return;
    setPinned(true);
    return onScrollFrame(() => ref.current && setP(pinnedProgress(ref.current)));
  }, []);

  const step = pinned ? Math.min(2, Math.floor(p * 3.2)) : 2;
  const within = pinned ? Math.min(1, Math.max(0, p * 3.2 - step)) : 1;
  const ex = examples.building;
  const lines = ex.lines;
  const shownLines = step === 0 ? 0 : step === 1 ? Math.ceil(within * lines.length * 1.4) : lines.length;

  return (
    <div ref={ref} className={pinned ? "story story-pinned" : "story"}>
      <div className="story-sticky">
        <div className="wrap grid h-full items-center gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-14">
          <div>
            <h2 className="h2 story-heading">{heading}</h2>
            <ol className="mt-8 space-y-2" style={{ listStyle: "none" }}>
              {steps.map((s, i) => (
                <li key={s.lead} className={`story-step ${i === step ? "active" : i < step ? "done" : ""}`}>
                  <span className="story-num">{i + 1}</span>
                  <div>
                    <h3 className="h3">{s.lead}</h3>
                    <p className="story-body muted mt-1">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            {pinned ? (
              <div className="story-bar" aria-hidden="true">
                <span style={{ transform: `scaleX(${p})` }} />
              </div>
            ) : null}
          </div>

          <div className="story-stage" aria-hidden="true">
            {/* Scene 1: the enquiry arrives */}
            <div className={`story-msg ${step >= 0 ? "on" : ""} ${step >= 1 ? "shrink" : ""}`}>
              <div className="wa">
                <div className="wa-top">
                  <span className="wa-avatar">●</span> WhatsApp · {story.newMessage}
                </div>
                <div className="wa-bubble" lang="en">
                  {ex.enquiry.map((l, i) => (
                    <div key={i}>{l}</div>
                  ))}
                  <span className="wa-time">10:42</span>
                  {step === 1 ? <span className="scanline" /> : null}
                </div>
              </div>
            </div>

            {/* Scenes 2–3: the quote builds itself, then gets approved and accepted */}
            <div className={`story-quote ${step >= 1 ? "on" : ""}`}>
              <div className="panel overflow-hidden">
                <div className="panel-heading">
                  <span className="label">{story.quoteNo}</span>
                  <span className={`story-status ${step >= 2 ? "ok" : ""}`}>
                    {step >= 2 ? story.approved : step === 1 ? story.reading : ""}
                  </span>
                </div>
                <table className="quote-table">
                  <thead>
                    <tr>
                      <th>{columns.line}</th>
                      <th className="num">{columns.qty}</th>
                      <th className="num">{columns.price}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lines.map((l, i) => (
                      <tr key={i} className={`story-line ${i < shownLines ? "in" : ""} ${l.flag ? "flag-row" : ""}`}>
                        <td className="item">
                          {l.item ?? ""}
                          {l.flag && l.note ? (
                            <div className="mt-1">
                              <span className="flag">⚠ {notes[l.note]}</span>
                            </div>
                          ) : null}
                        </td>
                        <td className="num">{l.qty ?? ""}</td>
                        <td className="num unit">{l.price ?? ""}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="story-foot">
                  <span className="label">{step >= 1 ? story.matched : ""}</span>
                </div>
              </div>
              <div className={`stamp ${step >= 2 && within > 0.35 ? "on" : ""}`}>✓ {story.accepted}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

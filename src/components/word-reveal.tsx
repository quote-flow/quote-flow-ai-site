"use client";

import { useEffect, useRef, useState } from "react";
import { onScrollFrame, pinnedProgress, reducedMotion } from "./scroll-progress";

/** Big dark statement whose words light up one by one as the visitor scrolls. */
export function WordReveal({ heading, body, points }: { heading: string; body: string; points: readonly string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(1);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    if (reducedMotion()) return;
    setPinned(true);
    return onScrollFrame(() => ref.current && setP(pinnedProgress(ref.current)));
  }, []);

  const words = body.split(" ");
  const lit = pinned ? Math.floor(Math.min(1, p * 1.25) * words.length) : words.length;
  const headScale = pinned ? 0.86 + Math.min(1, p * 4) * 0.14 : 1;

  return (
    <div ref={ref} className={`dark grid-dark ${pinned ? "reveal-pinned" : ""}`}>
      <div className="reveal-sticky">
        <div className="wrap py-20">
          <h2
            className="giant"
            style={{ transform: `scale(${headScale})`, opacity: pinned ? 0.35 + Math.min(1, p * 4) * 0.65 : 1 }}
          >
            {heading}
          </h2>
          <p className="reveal-body mt-8">
            {words.map((w, i) => (
              <span key={i} className={i < lit ? "lit" : ""}>
                {w}{" "}
              </span>
            ))}
          </p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2" style={{ listStyle: "none" }}>
            {points.map((pt, i) => (
              <li
                key={pt}
                className={`trust-chip ${!pinned || p > 0.55 + i * 0.08 ? "on" : ""}`}
              >
                <span style={{ color: "var(--cyan)" }}>✓</span> {pt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { onScrollFrame, pinnedProgress, reducedMotion } from "./scroll-progress";

// On phones the section is not pinned (CSS), so progress follows it through the screen.
function flowProgress(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  return Math.min(1, Math.max(0, (window.innerHeight * 0.85 - r.top) / (r.height * 0.75)));
}

/**
 * Pins its content while the visitor scrolls, and reveals the drafted quote's lines one
 * by one as they go. Without JavaScript or with reduced motion, everything just shows.
 */
export function ScrollFill({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    if (reducedMotion()) return;
    setPinned(true);
    const el = ref.current!;
    return onScrollFrame(() => {
      const rows = Array.from(el.querySelectorAll<HTMLElement>(".quote-table tbody tr"));
      const p = el.offsetHeight > window.innerHeight * 1.5 ? pinnedProgress(el) : flowProgress(el);
      const shown = Math.round(Math.min(1, p * 1.35) * rows.length);
      rows.forEach((r, i) => r.classList.toggle("in", i < shown));
      el.style.setProperty("--fill", String(p));
    });
  }, []);

  return (
    <div ref={ref} className={pinned ? "fill-pinned" : ""}>
      <div className="fill-sticky">{children}</div>
    </div>
  );
}

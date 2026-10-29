// 0 → 1 as an element scrolls through the viewport (top of el at viewport top → bottom of
// el at viewport bottom). Used by pinned, scroll-driven sections.
export function pinnedProgress(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  const total = r.height - window.innerHeight;
  if (total <= 0) return 0;
  return Math.min(1, Math.max(0, -r.top / total));
}

export function onScrollFrame(fn: () => void) {
  let frame = 0;
  const handler = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(fn);
  };
  handler();
  window.addEventListener("scroll", handler, { passive: true });
  window.addEventListener("resize", handler);
  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("scroll", handler);
    window.removeEventListener("resize", handler);
  };
}

export const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

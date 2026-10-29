"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { onScrollFrame, reducedMotion } from "./scroll-progress";

/** Leans its content towards the mouse in 3D and lets it drift with scroll. */
export function Tilt({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    let rx = 0,
      ry = 0,
      drift = 0;
    const apply = () => {
      el.style.transform = `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(${drift}px)`;
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = el.getBoundingClientRect();
      ry = ((e.clientX - (r.left + r.width / 2)) / r.width) * 10;
      rx = -((e.clientY - (r.top + r.height / 2)) / r.height) * 8;
      apply();
    };
    const onLeave = () => {
      rx = ry = 0;
      apply();
    };
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    const off = onScrollFrame(() => {
      drift = Math.min(window.scrollY, 900) * -0.12;
      apply();
    });
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      off();
    };
  }, []);
  return (
    <div ref={ref} className="tilt">
      {children}
    </div>
  );
}

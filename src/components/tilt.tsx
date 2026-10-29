"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { onScrollFrame, reducedMotion } from "./scroll-progress";

/** Leans its content towards the mouse in 3D and lets it drift with scroll. */
export function Tilt({ children, drift: withDrift = true, className = "" }: { children: ReactNode; drift?: boolean; className?: string }) {
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
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      // Only lean while the mouse is near this element.
      if (!withDrift && (Math.abs(dx) > 0.7 || Math.abs(dy) > 0.7)) {
        rx = ry = 0;
      } else {
        ry = dx * 10;
        rx = -dy * 8;
      }
      apply();
    };
    const onLeave = () => {
      rx = ry = 0;
      apply();
    };
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    const off = onScrollFrame(() => {
      drift = withDrift ? Math.min(window.scrollY, 900) * -0.12 : 0;
      apply();
    });
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      off();
    };
  }, [withDrift]);
  return (
    <div ref={ref} className={`tilt ${className}`}>
      {children}
    </div>
  );
}

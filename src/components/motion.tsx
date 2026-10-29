"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Scroll animations without a library. Elements fade and rise into view as they are
// scrolled to; siblings follow one after another. Nothing is hidden unless this script
// runs (the CSS only applies under html.motion), and people who ask their device for
// reduced motion get no animation at all.
const TARGETS = [
  "main section h2",
  "main section .lede",
  "main .panel",
  "main .check-list li",
  "main .faq details",
  "main ol > li",
  "main .icon-tile + div",
  "main .quote-table tbody tr",
  "main .wa-bubble",
].join(",");

export function Motion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("motion");

    // Smooth, gliding scroll (also for in-page links like "See how it works").
    const lenis = new Lenis({ lerp: 0.09, anchors: { offset: -80 } });
    let raf = 0;
    const tick = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const els = Array.from(document.querySelectorAll<HTMLElement>(TARGETS)).filter(
      (el) => !el.closest(".story, .reveal-pinned, .tilt"),
    );
    for (const el of els) {
      const parent = el.parentElement;
      const index = parent ? Array.from(parent.children).indexOf(el) : 0;
      el.style.setProperty("--i", String(Math.min(index, 8)));
      el.classList.add("reveal");
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.classList.add("in");
            io.unobserve(el);
            // Once revealed, drop the reveal classes so hover effects respond instantly.
            if (el.tagName !== "TR") {
              el.addEventListener(
                "transitionend",
                (t) => t.target === el && t.propertyName === "transform" && el.classList.remove("reveal", "in"),
              );
            }
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));

    // Thin progress line under the header.
    const bar = document.getElementById("scroll-progress");
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = root.scrollHeight - window.innerHeight;
        bar?.style.setProperty("transform", `scaleX(${max > 0 ? window.scrollY / max : 0})`);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return null;
}

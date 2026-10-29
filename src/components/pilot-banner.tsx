"use client";

import type { Content } from "@/content/en";

// Dismissal is remembered for the browser tab only (sessionStorage, no cookies). The
// inline script in the root layout hides the banner before first paint on later pages.
export function PilotBannerDismiss({ label }: { label: Content["banner"]["dismiss"] }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => {
        document.documentElement.classList.add("no-banner");
        try {
          sessionStorage.setItem("qb-banner", "0");
        } catch {}
      }}
    >
      ×
    </button>
  );
}

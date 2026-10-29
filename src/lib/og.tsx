import { ImageResponse } from "next/og";

// Social preview image (1200×630), rendered once at build time.
export function ogImage(headline: string, sub: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0a1c29 0%, #0b293c 60%, #075466 100%)",
          color: "#f2fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="64" height="64" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#0c758a" /><circle cx="23" cy="24" r="11" fill="none" stroke="#fff" strokeWidth="5.5" /><path d="M29 30 39 36 33 26Z" fill="#71e8ec" /><circle cx="26.5" cy="20.5" r="2.2" fill="#fff" /></svg>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 800, letterSpacing: -1.5 }}>
            Quote<span style={{ color: "#71e8ec" }}>bird</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 800, letterSpacing: -2.5, lineHeight: 1.05, maxWidth: 1000 }}>{headline}</div>
          <div style={{ fontSize: 30, color: "#c0d0db", maxWidth: 960 }}>{sub}</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

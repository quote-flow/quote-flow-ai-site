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
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(145deg, #138399, #075466)",
              border: "2px solid #5edce7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            Q
          </div>
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

import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (<svg width="180" height="180" viewBox="0 0 48 48"><rect width="48" height="48" rx="0" fill="#0c758a" /><circle cx="23" cy="24" r="11" fill="none" stroke="#fff" strokeWidth="5.5" /><path d="M29 30 39 36 33 26Z" fill="#71e8ec" /><circle cx="26.5" cy="20.5" r="2.2" fill="#fff" /></svg>),
    { width: 180, height: 180 },
  );
}

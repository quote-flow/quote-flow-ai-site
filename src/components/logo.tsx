// Quotebird mark: a bold Q whose tail is a beak, with an eye inside (option C).
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="qb-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#138399" />
          <stop offset="1" stopColor="#075466" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#qb-g)" />
      <circle cx="23" cy="24" r="11" fill="none" stroke="#fff" strokeWidth="5.5" />
      <path d="M29 30 39 36 33 26Z" fill="#71e8ec" />
      <circle cx="26.5" cy="20.5" r="2.2" fill="#fff" />
    </svg>
  );
}

export function Wordmark({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark />
      <span
        style={{ fontSize: 21, fontWeight: 750, letterSpacing: "-0.7px", color: dark ? "#f2fafc" : "var(--foreground)" }}
      >
        Quote<span style={{ color: dark ? "var(--cyan)" : "var(--primary)" }}>bird</span>
      </span>
    </span>
  );
}

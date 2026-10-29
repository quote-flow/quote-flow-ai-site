// Quotebird mark: a chat bubble (where enquiries arrive) holding a small bird.
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="qb-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#138399" />
          <stop offset="1" stopColor="#075466" />
        </linearGradient>
      </defs>
      <path
        d="M8 2.5h16a6 6 0 0 1 6 6v10a6 6 0 0 1-6 6H14.5l-6.2 5.1c-.6.5-1.5 0-1.4-.8l.6-4.4A6 6 0 0 1 2 18.5v-10a6 6 0 0 1 6-6Z"
        fill="url(#qb-g)"
      />
      <path
        d="M7.5 18.6c3.4.2 6.3-1 7.9-4.1a5 5 0 0 1 9.4 1.2l2.6.7-2.6.9c-1 3.2-4 5.1-7.6 4.9-4-.2-7.1-1.4-9.7-3.6Z"
        fill="#fff"
      />
      <circle cx="21.2" cy="14.6" r="1.05" fill="#075466" />
      <path d="M13.2 17.9c1.4 1.2 3.4 1.6 5.4 1.1" stroke="#9cf2f3" strokeWidth="1.3" fill="none" strokeLinecap="round" />
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

import { Fragment, type ReactNode } from "react";

// Renders the small markup used in the content files: **bold**, *italic* and
// {{PLACEHOLDER}} (kept visible exactly as written).
const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*|\{\{[A-Z_]+\}\})/g;

export function rich(text: string): ReactNode {
  return text.split(TOKEN).map((part, i) => {
    if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("{{")) return <span key={i} className="ph">{part}</span>;
    if (part.startsWith("*") && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}

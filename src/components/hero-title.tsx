import { Fragment } from "react";

/** Page headline that arrives word by word (animation in globals.css, under html.motion). */
export function HeroTitle({ text, className = "h1", style }: { text: string; className?: string; style?: React.CSSProperties }) {
  return (
    <h1 className={`${className} hero-title`} style={style}>
      {text.split(" ").map((w, i) => (
        <Fragment key={i}>
          <span className="word" style={{ ["--i" as string]: i }}>
            {w}
          </span>{" "}
        </Fragment>
      ))}
    </h1>
  );
}

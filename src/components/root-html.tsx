import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { SITE_URL } from "@/content/site";
import "@/app/globals.css";

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: "/icon.svg", apple: "/apple-touch-icon.png" },
};

export const rootViewport: Viewport = {
  themeColor: "#096d81",
  width: "device-width",
  initialScale: 1,
};

// Cloudflare Web Analytics: cookieless, so no consent banner is needed. Set
// NEXT_PUBLIC_CF_BEACON_TOKEN at build time; with no token the script is left out.
const CF_TOKEN = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN || "";

const hideBannerIfDismissed =
  "try{if(sessionStorage.getItem('qb-banner')==='0')document.documentElement.classList.add('no-banner')}catch(e){}";

export function RootHtml({ lang, children }: { lang: string; children: ReactNode }) {
  return (
    <html lang={lang}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: hideBannerIfDismissed }} />
      </head>
      <body>
        {children}
        {CF_TOKEN ? (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: CF_TOKEN })}
          />
        ) : null}
      </body>
    </html>
  );
}

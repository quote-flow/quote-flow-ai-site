import { ms } from "@/content/ms";
import { ogImage } from "@/lib/og";

export const dynamic = "force-static";

export function GET() {
  return ogImage(ms.home.hero.headline, ms.home.hero.smallPrint);
}

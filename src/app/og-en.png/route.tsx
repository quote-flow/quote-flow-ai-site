import { en } from "@/content/en";
import { ogImage } from "@/lib/og";

export const dynamic = "force-static";

export function GET() {
  return ogImage(en.home.hero.headline, en.home.hero.smallPrint);
}

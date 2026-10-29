import { pageMetadata } from "@/lib/metadata";
import { AboutPage } from "@/components/pages/simple";

export const metadata = pageMetadata("about", "ms");

export default function Page() {
  return <AboutPage locale="ms" />;
}

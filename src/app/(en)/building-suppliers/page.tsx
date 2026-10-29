import { pageMetadata } from "@/lib/metadata";
import { IndustryPage } from "@/components/pages/industry";

export const metadata = pageMetadata("building", "en");

export default function Page() {
  return <IndustryPage industry="building" locale="en" />;
}

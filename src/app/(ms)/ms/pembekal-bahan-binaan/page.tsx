import { pageMetadata } from "@/lib/metadata";
import { IndustryPage } from "@/components/pages/industry";

export const metadata = pageMetadata("building", "ms");

export default function Page() {
  return <IndustryPage industry="building" locale="ms" />;
}

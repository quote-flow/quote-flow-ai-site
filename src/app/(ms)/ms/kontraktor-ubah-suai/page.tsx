import { pageMetadata } from "@/lib/metadata";
import { IndustryPage } from "@/components/pages/industry";

export const metadata = pageMetadata("renovation", "ms");

export default function Page() {
  return <IndustryPage industry="renovation" locale="ms" />;
}

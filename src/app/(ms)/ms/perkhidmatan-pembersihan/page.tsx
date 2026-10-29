import { pageMetadata } from "@/lib/metadata";
import { IndustryPage } from "@/components/pages/industry";

export const metadata = pageMetadata("cleaning", "ms");

export default function Page() {
  return <IndustryPage industry="cleaning" locale="ms" />;
}

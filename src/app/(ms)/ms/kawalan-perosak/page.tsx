import { pageMetadata } from "@/lib/metadata";
import { IndustryPage } from "@/components/pages/industry";

export const metadata = pageMetadata("pest", "ms");

export default function Page() {
  return <IndustryPage industry="pest" locale="ms" />;
}

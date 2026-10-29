import { pageMetadata } from "@/lib/metadata";
import { IndustryPage } from "@/components/pages/industry";

export const metadata = pageMetadata("electrical", "ms");

export default function Page() {
  return <IndustryPage industry="electrical" locale="ms" />;
}

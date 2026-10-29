import { pageMetadata } from "@/lib/metadata";
import { IndustryPage } from "@/components/pages/industry";

export const metadata = pageMetadata("distributors", "ms");

export default function Page() {
  return <IndustryPage industry="distributors" locale="ms" />;
}

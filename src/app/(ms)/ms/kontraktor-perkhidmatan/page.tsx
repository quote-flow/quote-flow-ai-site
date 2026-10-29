import { pageMetadata } from "@/lib/metadata";
import { IndustryPage } from "@/components/pages/industry";

export const metadata = pageMetadata("service", "ms");

export default function Page() {
  return <IndustryPage industry="service" locale="ms" />;
}

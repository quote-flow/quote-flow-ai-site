import { pageMetadata } from "@/lib/metadata";
import { IndustryPage } from "@/components/pages/industry";

export const metadata = pageMetadata("electrical", "en");

export default function Page() {
  return <IndustryPage industry="electrical" locale="en" />;
}

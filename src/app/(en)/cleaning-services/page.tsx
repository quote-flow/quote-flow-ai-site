import { pageMetadata } from "@/lib/metadata";
import { IndustryPage } from "@/components/pages/industry";

export const metadata = pageMetadata("cleaning", "en");

export default function Page() {
  return <IndustryPage industry="cleaning" locale="en" />;
}

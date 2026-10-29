import { pageMetadata } from "@/lib/metadata";
import { IndustryPage } from "@/components/pages/industry";

export const metadata = pageMetadata("printing", "en");

export default function Page() {
  return <IndustryPage industry="printing" locale="en" />;
}

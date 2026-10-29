import { pageMetadata } from "@/lib/metadata";
import { TemplatePage } from "@/components/pages/simple";

export const metadata = pageMetadata("template", "en");

export default function Page() {
  return <TemplatePage locale="en" />;
}

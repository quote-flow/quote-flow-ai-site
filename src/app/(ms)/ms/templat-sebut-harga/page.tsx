import { pageMetadata } from "@/lib/metadata";
import { TemplatePage } from "@/components/pages/simple";

export const metadata = pageMetadata("template", "ms");

export default function Page() {
  return <TemplatePage locale="ms" />;
}

import { pageMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/pages/simple";

export const metadata = pageMetadata("privacy", "ms");

export default function Page() {
  return <LegalPage locale="ms" doc="privacy" />;
}

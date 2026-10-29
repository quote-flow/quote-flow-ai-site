import { pageMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/pages/simple";

export const metadata = pageMetadata("privacy", "en");

export default function Page() {
  return <LegalPage locale="en" doc="privacy" />;
}

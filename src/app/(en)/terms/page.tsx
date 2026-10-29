import { pageMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/pages/simple";

export const metadata = pageMetadata("terms", "en");

export default function Page() {
  return <LegalPage locale="en" doc="terms" />;
}

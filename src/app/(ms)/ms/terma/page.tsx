import { pageMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/pages/simple";

export const metadata = pageMetadata("terms", "ms");

export default function Page() {
  return <LegalPage locale="ms" doc="terms" />;
}

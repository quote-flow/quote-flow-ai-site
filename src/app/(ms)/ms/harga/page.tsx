import { pageMetadata } from "@/lib/metadata";
import { PricingPage } from "@/components/pages/pricing";

export const metadata = pageMetadata("pricing", "ms");

export default function Page() {
  return <PricingPage locale="ms" />;
}

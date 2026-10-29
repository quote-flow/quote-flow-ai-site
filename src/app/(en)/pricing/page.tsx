import { pageMetadata } from "@/lib/metadata";
import { PricingPage } from "@/components/pages/pricing";

export const metadata = pageMetadata("pricing", "en");

export default function Page() {
  return <PricingPage locale="en" />;
}

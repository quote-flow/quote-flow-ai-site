import { pageMetadata } from "@/lib/metadata";
import { SecurityPage } from "@/components/pages/simple";

export const metadata = pageMetadata("security", "en");

export default function Page() {
  return <SecurityPage locale="en" />;
}

import { pageMetadata } from "@/lib/metadata";
import { SecurityPage } from "@/components/pages/simple";

export const metadata = pageMetadata("security", "ms");

export default function Page() {
  return <SecurityPage locale="ms" />;
}

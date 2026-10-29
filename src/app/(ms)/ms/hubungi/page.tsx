import { pageMetadata } from "@/lib/metadata";
import { ContactPage } from "@/components/pages/simple";

export const metadata = pageMetadata("contact", "ms");

export default function Page() {
  return <ContactPage locale="ms" />;
}

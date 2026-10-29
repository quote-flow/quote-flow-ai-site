import { pageMetadata } from "@/lib/metadata";
import { ContactPage } from "@/components/pages/simple";

export const metadata = pageMetadata("contact", "en");

export default function Page() {
  return <ContactPage locale="en" />;
}

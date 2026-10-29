import { pageMetadata } from "@/lib/metadata";
import { PilotPage } from "@/components/pages/simple";

export const metadata = pageMetadata("pilot", "en");

export default function Page() {
  return <PilotPage locale="en" />;
}

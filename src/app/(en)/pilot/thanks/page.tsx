import { pageMetadata } from "@/lib/metadata";
import { ThanksPage } from "@/components/pages/simple";

export const metadata = pageMetadata("thanks", "en", { noindex: true });

export default function Page() {
  return <ThanksPage locale="en" />;
}

import { pageMetadata } from "@/lib/metadata";
import { HomePage } from "@/components/pages/home";

export const metadata = pageMetadata("home", "ms");

export default function Page() {
  return <HomePage locale="ms" />;
}

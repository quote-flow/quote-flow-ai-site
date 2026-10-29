import { ArticlesIndex, articlesIndexMetadata } from "@/components/pages/articles";

export const metadata = articlesIndexMetadata("en");

export default function Page() {
  return <ArticlesIndex locale="en" />;
}

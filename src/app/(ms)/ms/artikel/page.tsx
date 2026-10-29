import { ArticlesIndex, articlesIndexMetadata } from "@/components/pages/articles";

export const metadata = articlesIndexMetadata("ms");

export default function Page() {
  return <ArticlesIndex locale="ms" />;
}

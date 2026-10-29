import { notFound } from "next/navigation";
import { ArticlePage, articleMetadata } from "@/components/pages/articles";
import { articles } from "@/content/articles";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.en.slug }));
}

const find = (slug: string) => articles.find((a) => a.en.slug === slug);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const a = find((await params).slug);
  return a ? articleMetadata(a, "en") : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const a = find((await params).slug);
  if (!a) notFound();
  return <ArticlePage article={a} locale="en" />;
}

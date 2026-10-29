import type { ReactNode } from "react";
import { RootHtml, rootMetadata, rootViewport } from "@/components/root-html";

export const metadata = rootMetadata;
export const viewport = rootViewport;

export default function Layout({ children }: { children: ReactNode }) {
  return <RootHtml lang="ms-MY">{children}</RootHtml>;
}

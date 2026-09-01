import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResourceArticleView from "@/components/resources/ResourceArticleView";
import {
  getArticlesByAudience,
  getResourceArticle,
} from "@/lib/resources";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getArticlesByAudience("employees").map((article) => ({
    slug: article.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getResourceArticle(slug);
  if (!article) {
    return { title: "Article Not Found | ALIC Group Solutions" };
  }
  return {
    title: `${article.title} | ALIC Group Solutions — Atlanta Life Insurance Company`,
    description: article.excerpt,
  };
}

export default async function EmployeeResourceArticlePage({
  params,
}: PageProps) {
  const { slug } = await params;
  const article = getResourceArticle(slug);
  if (!article || article.audience !== "employees") notFound();

  return (
    <main className="flex-1">
      <ResourceArticleView article={article} />
    </main>
  );
}

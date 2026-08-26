import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsroomArticleView from "@/components/newsroom/NewsroomArticleView";
import { getAllArticles, getArticle } from "@/lib/newsroom";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    return { title: "Article Not Found | ALIC Group Solutions" };
  }
  return {
    title: `${article.title} | ALIC Group Solutions — Atlanta Life Insurance Company`,
    description: article.excerpt,
  };
}

export default async function NewsroomArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <main className="flex-1">
      <NewsroomArticleView article={article} />
    </main>
  );
}

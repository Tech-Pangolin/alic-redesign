import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LbBlogArticleView from "@/components/studio/LbBlogArticleView";
import { getAllLbBlogPosts, getLbBlogPost } from "@/lib/lb-blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllLbBlogPosts().map((post) => ({ slug: post.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getLbBlogPost(slug);
  if (!post) {
    return { title: "Article Not Found | LiveBalanced Studio" };
  }
  return {
    title: `${post.title} | LiveBalanced Studio — Atlanta Life Insurance Company`,
    description: post.excerpt,
  };
}

export default async function LbBlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getLbBlogPost(slug);
  if (!post) notFound();

  return (
    <main className="flex-1">
      <LbBlogArticleView post={post} />
    </main>
  );
}

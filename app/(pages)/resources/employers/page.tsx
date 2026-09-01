import type { Metadata } from "next";
import ArticleGrid from "@/components/shared/ArticleCard";
import PageHeader from "@/components/shared/PageHeader";
import {
  getArticlesByAudience,
  getResourceArticlePath,
} from "@/lib/resources";

export const metadata: Metadata = {
  title: "Employer Resources | ALIC Group Solutions — Atlanta Life Insurance Company",
  description:
    "Strategies, perspectives, and tools for HR teams and organizational decision-makers — from building stronger wellness programs to understanding group life insurance and reinsurance.",
};

const articles = getArticlesByAudience("employers").map((article) => ({
  key: article.id,
  category: article.category,
  title: article.title,
  description: article.excerpt,
  href: getResourceArticlePath(article),
}));

export default function EmployersResourcesPage() {
  return (
    <main className="flex-1 bg-alic-cream">
      <PageHeader
        title="Resources for Employers"
        subheadline="Strategies, perspectives, and tools for the teams shaping how organizations support their people."
      />
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <p className="max-w-3xl font-sans text-base leading-relaxed text-alic-navy/85">
          HR teams, procurement professionals, and organizational
          decision-makers carry the responsibility of building and maintaining
          the programs that support an entire workforce. Atlanta Life brings
          resources to those teams — not as a sales pitch, but as a genuine
          investment in the knowledge and strategies that make that work more
          effective. Every article here is tailored to the real challenges
          organizations face and informed by how we think about and approach the
          work we do together.
        </p>
        <div className="mt-12">
          <ArticleGrid articles={articles} />
        </div>
      </section>
    </main>
  );
}

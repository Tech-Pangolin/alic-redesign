import type { Metadata } from "next";
import ArticleGrid from "@/components/shared/ArticleCard";
import PageHeader from "@/components/shared/PageHeader";
import {
  getArticlesByAudience,
  getResourceArticlePath,
} from "@/lib/resources";

export const metadata: Metadata = {
  title: "Employee Resources | ALIC Group Solutions — Atlanta Life Insurance Company",
  description:
    "Practical tools and guidance for employees — from navigating open enrollment and understanding your benefits to financial wellness and workplace mental health resources.",
};

const articles = getArticlesByAudience("employees").map((article) => ({
  key: article.id,
  category: article.category,
  title: article.title,
  description: article.excerpt,
  href: getResourceArticlePath(article),
}));

export default function EmployeesResourcesPage() {
  return (
    <main className="flex-1 bg-alic-cream">
      <PageHeader
        title="Resources for Employees"
        subheadline="Tools, guidance, and perspectives to help you navigate your benefits, your well-being, and your workplace."
      />
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <p className="max-w-3xl font-sans text-base leading-relaxed text-alic-navy/85">
          Whether you are starting a new job, evaluating your benefits,
          navigating a workplace challenge, or simply looking to better
          understand the resources available to you — this is where Atlanta Life
          brings relevant, practical information directly to you. Every article
          and resource here is designed to be genuinely useful, grounded in what
          we know, and tailored to the real questions employees face.
        </p>
        <div className="mt-12">
          <ArticleGrid articles={articles} />
        </div>
      </section>
    </main>
  );
}

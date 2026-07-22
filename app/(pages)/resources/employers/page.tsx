import type { Metadata } from "next";
import ArticleGrid, { type Article } from "@/components/shared/ArticleCard";
import PageHeader from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Employer Resources | ALIC Group Solutions — Atlanta Life Insurance Company",
  description:
    "Strategies, perspectives, and tools for HR teams and organizational decision-makers — from building stronger wellness programs to understanding group life insurance and reinsurance.",
};

const articles: Article[] = [
  {
    category: "Wellness Strategy",
    title: "How to Build a Stronger Employee Wellness Program",
    description:
      "A strong wellness program does more than check a box. Here is a framework for building one that actually serves your people and strengthens your organization.",
  },
  {
    category: "Insurance",
    title:
      "What HR Teams Should Know About Group Life Insurance and Reinsurance",
    description:
      "Group life insurance is a cornerstone employee benefit — but how it works behind the scenes is often misunderstood. Here is what HR professionals need to know.",
  },
  {
    category: "Mental Health",
    title:
      "Supporting Your Workforce Through Mental Health Challenges — A Guide for Employers",
    description:
      "Mental health in the workplace is one of the defining challenges of our time. Here is how organizations can respond with clarity, care, and effective systems.",
  },
  {
    category: "Wellness Strategy",
    title: "What to Look for in a Wellness Solutions Partner",
    description:
      "Choosing a wellness partner is a significant decision. Here is how to evaluate your options and identify the partnership that will genuinely serve your organization.",
  },
  {
    category: "Benefits Strategy",
    title: "How to Evaluate Your Organization's Benefits Strategy",
    description:
      "A benefits strategy that served your organization five years ago may not serve it today. Here is how to assess where you are and identify where to grow.",
  },
  {
    category: "Health & Productivity",
    title:
      "Health and Productivity — What the Data Says About Employee Well-Being and Business Outcomes",
    description:
      "The connection between employee well-being and organizational performance is well-documented. Here is what the research shows and what it means for how you invest in your people.",
  },
  {
    category: "Thought Leadership",
    title: "DMEC 2026 — Workplace Mental Health Solutions for HR Teams",
    description:
      "Atlanta Life presented at DMEC 2026 on workplace mental health — sharing strategies, insights, and solutions for HR teams navigating this critical area. Here are the key takeaways.",
  },
  {
    category: "Thought Leadership",
    title: "IBI Chicago 2026 — Presentation Topic TBD",
    description:
      "To be added following the conference.",
  },
  {
    category: "Thought Leadership",
    title: "EBLF 2026 — Presentation Topic TBD",
    description: "To be added following the conference.",
  },
];

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

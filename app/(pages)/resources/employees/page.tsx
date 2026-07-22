import type { Metadata } from "next";
import ArticleGrid, { type Article } from "@/components/shared/ArticleCard";
import PageHeader from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Employee Resources | ALIC Group Solutions — Atlanta Life Insurance Company",
  description:
    "Practical tools and guidance for employees — from navigating open enrollment and understanding your benefits to financial wellness and workplace mental health resources.",
};

const articles: Article[] = [
  {
    category: "Benefits",
    title: "How to Navigate Open Enrollment",
    description:
      "Open enrollment can feel overwhelming. Here is a straightforward guide to understanding your options, asking the right questions, and making decisions that work for you.",
  },
  {
    category: "Benefits",
    title: "How to Evaluate Your Benefits Package When Starting a New Job",
    description:
      "A new job comes with a lot of decisions. Knowing what to look for in a benefits package — and what questions to ask — can make a significant difference in the long run.",
  },
  {
    category: "Mental Health",
    title:
      "What to Do When You Are Experiencing a Mental Health Challenge at Work",
    description:
      "Mental health challenges affect people across every industry and every role. Here is practical guidance on understanding your options and accessing the support available to you.",
  },
  {
    category: "Workplace",
    title: "What Return to Work Looks Like After a Leave of Absence",
    description:
      "Returning to work after medical, family, or mental health leave is a transition that requires planning and support. Here is what to expect and how to prepare.",
  },
  {
    category: "Insurance",
    title: "Understanding Your Life Insurance Benefits",
    description:
      "Life insurance is one of the most important benefits your employer can offer — and one of the least understood. Here is what your coverage means and why it matters.",
  },
  {
    category: "Financial Wellness",
    title: "Financial Wellness Basics — What Every Employee Should Know",
    description:
      "From managing day-to-day expenses to planning for the future, financial wellness starts with understanding the fundamentals. Here is where to begin.",
  },
];

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

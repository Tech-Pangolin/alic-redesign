import type { Metadata } from "next";
import Link from "next/link";
import ArticleGrid, { type Article } from "@/components/shared/ArticleCard";
import PageHeader from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Carrier & Broker Resources | ALIC Group Solutions — Atlanta Life Insurance Company",
  description:
    "Educational resources and continuing education opportunities for carriers, brokers, and financial industry professionals working alongside Atlanta Life.",
};

const articles: Article[] = [
  {
    category: "Education",
    title: "Continuing Education and Why It Matters for Brokers",
    description:
      "The insurance and benefits landscape continues to evolve. Here is why continuing education is one of the most valuable investments a broker can make — and how Atlanta Life supports it.",
    href: "/resources/carriers-brokers/ce-courses",
  },
  {
    category: "Reinsurance",
    title: "Understanding Reinsurance Partnerships — What Carriers Should Know",
    description:
      "Reinsurance partnerships offer carriers meaningful opportunities to manage risk and expand capacity. Here is what to understand before entering one.",
  },
  {
    category: "Wellness Solutions",
    title: "How Group Wellness Solutions Strengthen Carrier Relationships",
    description:
      "Wellness solutions are becoming an increasingly important part of the group benefits conversation. Here is how carriers and brokers can leverage them to deepen client relationships.",
  },
];

export default function CarriersBrokersResourcesPage() {
  return (
    <main className="flex-1 bg-alic-cream">
      <PageHeader
        title="Resources for Carriers & Brokers"
        subheadline="Educational resources, industry perspectives, and continuing education opportunities for the professionals who serve our markets."
      />
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <p className="max-w-3xl font-sans text-base leading-relaxed text-alic-navy/85">
          Atlanta Life values the professionals who work within the insurance and
          financial services industry alongside us. This section is built for
          carriers, brokers, and financial industry professionals — bringing
          relevant education, industry perspectives, and opportunities to deepen
          expertise. Everything here is designed to strengthen the work you do and
          the value you bring to the clients and organizations you serve.
        </p>
        <div className="mt-12">
          <ArticleGrid articles={articles} />
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 rounded-2xl border border-alic-navy/10 bg-white p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-2xl font-normal text-alic-navy">
              Continuing Education Courses
            </h2>
            <p className="mt-2 max-w-xl font-sans text-sm leading-relaxed text-alic-navy/80">
              Certified continuing education opportunities for brokers and
              financial industry professionals.
            </p>
          </div>
          <Link
            href="/resources/carriers-brokers/ce-courses"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-alic-gold px-6 py-3 font-sans font-semibold text-alic-navy transition-opacity hover:opacity-90"
          >
            View CE Courses <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import CeCourseGrid from "@/components/resources/CeCourseGrid";
import PageHeader from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title:
    "Continuing Education Courses | ALIC Group Solutions — Atlanta Life Insurance Company",
  description:
    "Atlanta Life Insurance Company offers certified continuing education opportunities for brokers, agents, and financial industry professionals in workplace health, productivity, disability management, and group benefits.",
};

export default function CeCoursesPage() {
  return (
    <main className="flex-1 bg-alic-cream">
      <PageHeader title="Continuing Education Courses" />

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="font-sans text-base leading-relaxed text-alic-navy/85">
            Atlanta Life Insurance Company offers certified continuing education
            opportunities for brokers, agents, and financial industry
            professionals — designed to deepen expertise in workplace health,
            productivity, disability management, and the evolving landscape of
            group benefits. Courses are available in both in-person and virtual
            formats.
          </p>
        </div>

        <div className="mt-12">
          <CeCourseGrid />
        </div>

        <div className="mt-14">
          <Link
            href="/resources/carriers-brokers"
            className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-alic-navy transition-colors hover:text-alic-gold"
          >
            <span aria-hidden="true">←</span> Back to Carriers & Brokers
          </Link>
        </div>
      </section>
    </main>
  );
}

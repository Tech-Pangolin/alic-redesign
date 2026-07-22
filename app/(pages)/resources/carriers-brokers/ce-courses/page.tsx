import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import SignupForm from "@/components/shared/SignupForm";

export const metadata: Metadata = {
  title:
    "Continuing Education Courses | ALIC Group Solutions — Atlanta Life Insurance Company",
  description:
    "Atlanta Life offers certified continuing education courses for brokers and financial industry professionals — practical, relevant, and designed to strengthen your expertise.",
};

export default function CeCoursesPage() {
  return (
    <main className="flex-1 bg-alic-cream">
      <PageHeader
        title="Continuing Education Courses"
        subheadline="Atlanta Life offers certified continuing education opportunities for brokers and financial industry professionals — built to deepen expertise and strengthen the value you bring to the people you serve."
      />

      <section className="mx-auto w-full max-w-4xl px-6 py-16 md:px-10 md:py-20">
        <h2 className="font-serif text-3xl font-normal text-alic-navy md:text-4xl">
          CE Courses
        </h2>
        <p className="mt-6 font-sans text-base leading-relaxed text-alic-navy/85">
          Atlanta Life is committed to the ongoing development of the
          professionals who work within our markets. Our continuing education
          courses are designed for brokers, agents, and financial industry
          professionals — offering certified learning opportunities that are
          relevant, practical, and directly connected to the work of group
          benefits and wellness solutions.
        </p>

        <div className="mt-10 rounded-2xl border border-dashed border-alic-navy/25 bg-white/60 p-8 text-center">
          <p className="font-sans text-base text-alic-navy/70">
            Course listings will be added here as CE offerings are confirmed and
            approved. Each course will display its name, description, credit
            hours, and certification type with a registration option.
          </p>
        </div>
      </section>

      <section className="bg-white/60">
        <div className="mx-auto w-full max-w-2xl px-6 py-16 md:px-10 md:py-20">
          <h2 className="font-serif text-3xl font-normal text-alic-navy md:text-4xl">
            Course Registration
          </h2>
          <p className="mt-3 font-sans text-base text-alic-navy/80">
            Register your interest and we&apos;ll follow up with details.
          </p>
          <div className="mt-8">
            <SignupForm
              formName="CE Course Registration"
              buttonText="Register"
              fields={[
                {
                  name: "name",
                  label: "Full name",
                  required: true,
                  autoComplete: "name",
                },
                { name: "license", label: "License number", required: true },
                { name: "state", label: "State", required: true },
                {
                  name: "email",
                  label: "Email address",
                  type: "email",
                  required: true,
                  autoComplete: "email",
                },
                { name: "course", label: "Course selection" },
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

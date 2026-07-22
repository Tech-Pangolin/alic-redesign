import type { Metadata } from "next";
import SignupForm from "@/components/shared/SignupForm";
import Carousel from "@/components/ui/Carousel";

export const metadata: Metadata = {
  title:
    "LiveBalanced™ Studio | Wellness Content Hub — Atlanta Life Insurance Company",
  description:
    "LiveBalanced™ Studio is Atlanta Life's wellness content hub — home to the Executive Brief newsletter, expert-led MasterClass sessions, Focus Groups, and the LB Blog.",
};

const featured = [
  "Featured content one",
  "Featured content two",
  "Featured content three",
  "Featured content four",
];

const blogPosts = [
  "Blog post one",
  "Blog post two",
  "Blog post three",
  "Blog post four",
];

function ComingSoon() {
  return (
    <span className="inline-flex items-center rounded-full border border-alic-gold/60 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wide text-alic-gold">
      Coming Soon
    </span>
  );
}

export default function LiveBalancedStudioPage() {
  return (
    <main className="flex-1 bg-alic-deep text-alic-cream">
      <header className="mx-auto w-full max-w-6xl px-6 pt-16 md:px-10 md:pt-20">
        <h1 className="font-serif text-4xl font-normal leading-tight md:text-5xl">
          LiveBalanced&trade; Studio
        </h1>
        <p className="mt-3 font-sans text-lg text-alic-cream/80 md:text-xl">
          Wellness content, expert conversations, and resources — all in one
          place.
        </p>
      </header>

      <section className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10 md:py-16">
        <Carousel label="Featured content" dark>
          {featured.map((title) => (
            <article
              key={title}
              className="flex w-80 shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-alic-cream/15 bg-alic-navy"
            >
              <div className="h-44 w-full bg-alic-cream/10" aria-hidden="true" />
              <div className="flex flex-1 flex-col p-6">
                <span className="font-sans text-xs font-semibold uppercase tracking-wide text-alic-gold">
                  Featured
                </span>
                <h3 className="mt-2 font-serif text-lg font-normal">{title}</h3>
                <p className="mt-2 flex-1 font-sans text-sm text-alic-cream/70">
                  Featured content to be populated as it is published.
                </p>
              </div>
            </article>
          ))}
        </Carousel>
      </section>

      <section className="border-t border-alic-cream/10">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-20">
          <div>
            <h2 className="font-serif text-3xl font-normal md:text-4xl">
              The LiveBalanced&trade; Executive Brief
            </h2>
            <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-alic-cream/80">
              <p>
                The LiveBalanced&trade; Executive Brief is our wellness
                newsletter — written for the leaders, HR professionals, and
                decision-makers who shape how organizations support their people.
              </p>
              <p>
                Each edition brings focused, relevant perspectives on the topics
                that matter most across the four pillars of wellness. From expert
                commentary and research-backed insights to updates on what
                Atlanta Life is building — the Brief is designed to inform without
                overwhelming and to be genuinely useful in the real work of
                organizational leadership.
              </p>
              <p>It arrives regularly. It respects your time.</p>
            </div>
          </div>
          <div className="rounded-2xl bg-alic-navy p-8">
            <SignupForm
              dark
              formName="LiveBalanced Studio — Executive Brief"
              buttonText="Subscribe"
              fields={[
                {
                  name: "firstName",
                  label: "First name",
                  required: true,
                  autoComplete: "given-name",
                },
                {
                  name: "lastName",
                  label: "Last name",
                  required: true,
                  autoComplete: "family-name",
                },
                {
                  name: "email",
                  label: "Email address",
                  type: "email",
                  required: true,
                  autoComplete: "email",
                },
                {
                  name: "organization",
                  label: "Organization",
                  autoComplete: "organization",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-alic-cream/10">
        <div className="mx-auto w-full max-w-4xl px-6 py-16 md:px-10 md:py-20">
          <div className="flex flex-wrap items-center gap-4">
            <h2 className="font-serif text-3xl font-normal md:text-4xl">
              LiveBalanced&trade; MasterClass
            </h2>
            <ComingSoon />
          </div>
          <p className="mt-6 font-sans text-base leading-relaxed text-alic-cream/80">
            The LiveBalanced&trade; MasterClass Series brings expert-led
            conversations on wellness, leadership, and the topics shaping
            organizational health today. Each session is filmed with our expert
            partners and published for on-demand viewing — a virtual,
            podcast-style format designed to inform, challenge, and inspire the
            professionals doing this work every day.
          </p>
        </div>
      </section>

      <section className="border-t border-alic-cream/10">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-20">
          <div>
            <div className="flex flex-wrap items-center gap-4">
              <h2 className="font-serif text-3xl font-normal md:text-4xl">
                LiveBalanced&trade; Focus Groups
              </h2>
              <ComingSoon />
            </div>
            <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-alic-cream/80">
              <p>
                LiveBalanced&trade; Focus Groups are live, expert-led sessions
                open to the public — bringing professionals together around the
                wellness topics that matter most to the organizations and
                communities we serve. Each session is an opportunity to learn,
                engage, and connect with others navigating the same challenges.
              </p>
              <p>
                Focus groups are open to all. Sign up below to be notified when
                sessions are scheduled and to reserve your spot.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-alic-navy p-8">
            <SignupForm
              dark
              formName="LiveBalanced Studio — Focus Groups"
              buttonText="Sign up"
              fields={[
                {
                  name: "firstName",
                  label: "First name",
                  required: true,
                  autoComplete: "given-name",
                },
                {
                  name: "lastName",
                  label: "Last name",
                  required: true,
                  autoComplete: "family-name",
                },
                {
                  name: "email",
                  label: "Email address",
                  type: "email",
                  required: true,
                  autoComplete: "email",
                },
                {
                  name: "organization",
                  label: "Organization",
                  autoComplete: "organization",
                },
                { name: "role", label: "Role", autoComplete: "organization-title" },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-alic-cream/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <h2 className="font-serif text-3xl font-normal md:text-4xl">LB Blog</h2>
          <p className="mt-3 font-sans text-base text-alic-cream/80">
            Perspectives on wellness from the experts driving the work.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((title) => (
              <article
                key={title}
                className="flex flex-col overflow-hidden rounded-2xl border border-alic-cream/15 bg-alic-navy"
              >
                <div className="h-36 w-full bg-alic-cream/10" aria-hidden="true" />
                <div className="flex flex-1 flex-col p-5">
                  <span className="font-sans text-xs font-semibold uppercase tracking-wide text-alic-gold">
                    Category
                  </span>
                  <h3 className="mt-2 font-serif text-base font-normal">
                    {title}
                  </h3>
                  <p className="mt-2 flex-1 font-sans text-sm text-alic-cream/70">
                    Content to be provided and inserted here.
                  </p>
                  <span className="mt-3 font-sans text-sm font-semibold text-alic-gold">
                    Read more →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

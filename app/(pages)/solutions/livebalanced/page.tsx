import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";
import PillarBoxes, { type Pillar } from "@/components/shared/PillarBoxes";

export const metadata: Metadata = {
  title:
    "LiveBalanced™ | Holistic Wellness Solutions — Atlanta Life Insurance Company",
  description:
    "LiveBalanced™ is Atlanta Life's flagship wellness platform built on four pillars — physical, mental, financial, and social wellness — designed to help organizations support their people fully and meaningfully.",
};

const pillars: Pillar[] = [
  {
    id: "physical-wellness",
    name: "Physical Wellness",
    description:
      "Through LiveBalanced™, we connect organizations with physical wellness resources and digital tools that support the health and vitality of their workforce — helping people show up fully and perform at their best.",
    stats: [
      {
        value:
          "50% of employers offering physical wellness resources report measurable improvements in productivity.",
        source: "Bank of America Workplace Benefits Report, 2022",
      },
      {
        value:
          "73% of return-to-work programs reduce lost workday cases significantly.",
        source: "New York State Department of Labor",
      },
    ],
  },
  {
    id: "mental-wellness",
    name: "Mental Wellness",
    description:
      "LiveBalanced™ brings specialized expertise and advisory support to help organizations strengthen their workplace mental health systems — through our partnership with Dr. Kristin Tugman and a suite of tools designed to improve mental health outcomes for the people within them.",
    stats: [
      {
        value: "57% of workers report burnout.",
        source: "American Psychological Association, Work in America Survey",
      },
      {
        value:
          "Mental health challenges cost the U.S. economy approximately $282 billion annually.",
        source: "Yale University",
      },
      {
        value: "1 in 4 adults will experience a mental health condition.",
        source: "Johns Hopkins Medicine",
      },
    ],
  },
  {
    id: "financial-wellness",
    name: "Financial Wellness",
    description:
      "Through LiveBalanced™, we equip organizations with financial wellness resources — including access to earned wage tools and financial education — giving employees the practical support they need to reduce financial stress and build greater stability.",
    stats: [
      {
        value: "57% of employees say they are stressed about their finances.",
        source: "PwC, 2026 Employee Financial Wellness Survey",
      },
      {
        value: "49% say their compensation isn't keeping up with costs.",
        source: "PwC, 2026 Employee Financial Wellness Survey",
      },
      {
        value:
          "Only 54% of large employers currently offer financial wellness programs.",
        source: "Bank of America Workplace Benefits Report, via SHRM",
      },
    ],
  },
  {
    id: "social-wellness",
    name: "Social Wellness",
    description:
      "LiveBalanced™ supports the social dimension of well-being by helping organizations cultivate purpose, connection, and a sense of belonging within their workforce — recognizing that the strength of a team is inseparable from the health of the relationships within it.",
  },
];

const costStats = [
  {
    value: "$1,685",
    label: "per employee lost annually due to absenteeism.",
    source: "CDC Foundation",
  },
  {
    value: "$530B",
    label: "lost annually due to unproductive time and impaired performance.",
    source: "Integrated Benefits Institute (IBI)",
  },
  {
    value: "7%",
    label: "of employees say they feel truly productive.",
    source: "ElectroIQ",
  },
];

const digitalPartners = [
  {
    name: "Mellie",
    description:
      "Mellie is a caregiving support platform that helps family caregivers plan, manage, and coordinate care for older adults and loved ones with special needs. Through personalized care plans, dedicated care coordinators, and an easy-to-use app, Mellie gives employees the support they need to navigate one of life's most demanding responsibilities.",
  },
  {
    name: "Goodpath",
    description:
      "Goodpath is a whole-person care platform that delivers personalized, clinically supported programs for chronic conditions — including musculoskeletal pain, mental health, sleep, and digestive health. By addressing the full health picture rather than isolated symptoms, Goodpath helps employees feel better and organizations perform stronger.",
  },
  {
    name: "Express Wages",
    description:
      "Express Wages is an earned wage access platform that gives employees on-demand access to the wages they have already earned — before their scheduled payday. By reducing financial stress and providing greater flexibility over pay, Express Wages supports workforce stability and financial well-being.",
  },
];

export default function LiveBalancedPage() {
  return (
    <main className="flex-1 bg-alic-cream">
      <PageHeader
        title="LiveBalanced&trade;"
        subheadline="A health and productivity solution built for the organizations and people we serve."
      />

      <section
        id="what-is-lb"
        className="mx-auto w-full max-w-4xl scroll-mt-28 px-6 py-16 md:px-10 md:py-20"
      >
        <h2 className="font-serif text-3xl font-normal text-alic-navy md:text-4xl">
          What is LiveBalanced&trade;
        </h2>
        <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-alic-navy/85">
          <p>
            LiveBalanced&trade; is Atlanta Life&rsquo;s flagship health and
            productivity solution — a consultative platform built around the
            understanding that every organization is different, every workforce
            has distinct needs, and real wellness requires attention to the full
            picture of human well-being.
          </p>
          <p>
            We work directly with leadership teams, HR professionals, and people
            managers — listening first, then bringing solutions that fit. We
            arrive ready to understand what an organization has built and
            committed to helping them take it further.
          </p>
          <p>
            LiveBalanced&trade; is organized around four pillars — physical,
            mental, financial, and social wellness — each representing a critical
            dimension of well-being. Together they form a framework that reflects
            how people actually live and what organizations need to truly support
            them.
          </p>
        </div>
      </section>

      <section
        id="the-four-pillars"
        className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 pb-16 md:px-10 md:pb-20"
      >
        <h2 className="font-serif text-3xl font-normal text-alic-navy md:text-4xl">
          The Four Pillars
        </h2>
        <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-alic-navy/85">
          Each pillar of LiveBalanced&trade; represents a distinct dimension of
          well-being — and a specific area where Atlanta Life brings solutions,
          expertise, and resources to the organizations we serve.
        </p>
        <div className="mt-10">
          <PillarBoxes pillars={pillars} />
        </div>

        <div className="mt-14 rounded-2xl border border-alic-navy/10 bg-white p-8">
          <h3 className="font-serif text-2xl font-normal text-alic-navy">
            The cost of not investing
          </h3>
          <dl className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {costStats.map((stat) => (
              <div key={stat.value}>
                <dt className="font-serif text-4xl font-normal text-alic-gold">
                  {stat.value}
                </dt>
                <dd className="mt-2 font-sans text-sm leading-relaxed text-alic-navy/80">
                  {stat.label}
                  <span className="mt-1 block text-xs text-alic-navy/55">
                    — {stat.source}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        id="our-approach"
        className="mx-auto w-full max-w-4xl scroll-mt-28 px-6 pb-16 md:px-10 md:pb-20"
      >
        <h2 className="font-serif text-3xl font-normal text-alic-navy md:text-4xl">
          Our Approach
        </h2>
        <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-alic-navy/85">
          <p>
            Every LiveBalanced&trade; engagement begins with a conversation. We
            take time to understand an organization&rsquo;s existing programs, its
            people&rsquo;s needs, and the areas where our solutions can make the most
            meaningful difference. From there we develop a tailored approach —
            drawing from across the LiveBalanced&trade; platform to elevate what
            is already working and address what calls for something more.
          </p>
          <p>
            Our work is with leadership and people management teams. We equip
            organizations with the tools, resources, and expertise to support
            their people. The relationship is with the organization. The impact
            is felt by everyone within it.
          </p>
        </div>
      </section>

      <section
        id="expert-partners"
        className="scroll-mt-28 bg-white/60"
      >
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-20">
          <div>
            <h2 className="font-serif text-3xl font-normal text-alic-navy md:text-4xl">
              Expert Partners
            </h2>
            <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-alic-navy/85">
              <p>
                LiveBalanced&trade; is strengthened by the expertise of leading
                professionals in workplace wellness. Our expert partners bring
                deep knowledge, research-backed perspective, and real-world
                experience to the organizations we serve — elevating the quality
                and impact of everything we do.
              </p>
              <p className="font-serif text-xl text-alic-navy">
                Dr. Kristin Tugman
                <span className="mt-1 block font-sans text-sm text-alic-navy/70">
                  Workplace Mental Health &amp; Health Productivity Consultant
                </span>
              </p>
              <p>
                Dr. Kristin Tugman is the driving force behind the mental
                wellness pillar of LiveBalanced&trade;. A specialist in workplace
                mental health and health productivity, Dr. Tugman brings rigorous
                expertise and genuine care to the organizations we serve. She
                provides thought leadership, strategic advisement, and direct
                support to our clients — helping them develop and strengthen the
                mental health systems their people depend on. Through her work,
                Atlanta Life is able to bring meaningful, expert-led solutions to
                the workplace mental health and health productivity space.
              </p>
              <p>
                We are actively expanding our expert partner network across all
                four wellness pillars as LiveBalanced&trade; continues to grow.
              </p>
            </div>
          </div>
          <div
            className="min-h-[20rem] rounded-2xl bg-alic-warm/50"
            aria-hidden="true"
          />
        </div>
      </section>

      <section
        id="digital-partners"
        className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 py-16 md:px-10 md:py-20"
      >
        <h2 className="font-serif text-3xl font-normal text-alic-navy md:text-4xl">
          Digital Partners
        </h2>
        <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-alic-navy/85">
          LiveBalanced&trade; extends its reach through partnerships with proven
          digital wellness platforms — also referred to as point solutions and
          value-adds to the LiveBalanced&trade; platform. Each partner was
          selected for the quality of their offering and the alignment of their
          mission with ours.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {digitalPartners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col rounded-2xl border border-alic-navy/10 bg-white p-6"
            >
              <div
                className="mb-4 h-16 w-32 rounded-md bg-alic-warm/50"
                aria-hidden="true"
              />
              <h3 className="font-serif text-xl font-normal text-alic-navy">
                {partner.name}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-alic-navy/80">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-alic-navy text-alic-cream">
        <div className="mx-auto w-full max-w-4xl px-6 py-16 text-center md:px-10 md:py-20">
          <h2 className="font-serif text-3xl font-normal md:text-4xl">
            Ready to bring LiveBalanced&trade; to your organization?
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-alic-gold px-8 py-4 font-sans text-lg font-semibold text-alic-navy transition-opacity hover:opacity-90"
            >
              Partner with us <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="#our-approach"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-alic-cream/40 px-8 py-4 font-sans text-lg font-semibold text-alic-cream transition-colors hover:bg-alic-cream/10"
            >
              Learn how it works <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

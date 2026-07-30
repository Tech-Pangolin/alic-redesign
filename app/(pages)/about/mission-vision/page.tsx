import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import PillarBoxes, { type Pillar } from "@/components/shared/PillarBoxes";
import Collapsible from "@/components/ui/Collapsible";

export const metadata: Metadata = {
  title: "Mission & Vision | ALIC Group Solutions — Atlanta Life Insurance Company",
  description:
    "Atlanta Life is driven by a singular mission — to create legacy for people and their families. Discover the values, vision, and wellness philosophy that guide everything we do.",
};

const coreValues = [
  {
    name: "Purpose",
    body: "We do not operate without intention. Every solution we build, every partnership we enter, and every initiative we pursue is connected to a reason that precedes the transaction. Purpose shows up as the discipline of asking why — and being honest about the answer.",
  },
  {
    name: "Integrity",
    body: "We say what we mean and do what we say. In an industry built on trust, integrity is the minimum — and we hold ourselves to it in every relationship and at every level of the work.",
  },
  {
    name: "Community",
    body: "We are not separate from the communities we serve. We are part of them. That has been true since 1905 and it remains true today. Our commitment to community shapes how we build, who we partner with, and where we invest our energy.",
  },
  {
    name: "Excellence",
    body: "We bring our full capability to every relationship — as a standard, not a performance. The people and organizations we serve deserve the best of what we can offer. We are committed to continuing to grow so that what we offer keeps getting better.",
  },
];

const iconClassName = "h-16 w-16";

function DumbbellIcon() {
  return (
    <svg
      className={iconClassName}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z" />
      <path d="m2.5 21.5 1.4-1.4" />
      <path d="m20.1 3.9 1.4-1.4" />
      <path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z" />
      <path d="m9.6 14.4 4.8-4.8" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg
      className={iconClassName}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.023 8.875A4 4 0 0 0 2.5 10.5" />
      <path d="M20.977 8.875A4 4 0 0 1 21.5 10.5" />
      <path d="M12 18.5V20" />
      <path d="M12 13a2 2 0 0 1 0-4" />
      <path d="M10 13a2 2 0 1 0 4 0" />
    </svg>
  );
}

function DollarSignIcon() {
  return (
    <svg
      className={iconClassName}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg
      className={iconClassName}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const pillars: Pillar[] = [
  {
    name: "Physical Wellness",
    href: "/solutions/livebalanced",
    icon: <DumbbellIcon />,
    description:
      "The health and vitality of your people is foundational to everything your organization does. When people feel physically well, they show up more fully — more present, more capable, and more able to contribute at their best.",
  },
  {
    name: "Mental Wellness",
    href: "/solutions/livebalanced",
    icon: <BrainIcon />,
    description:
      "Mental health is not separate from performance, productivity, or purpose. It is inseparable from all three. Supporting mental wellness in the workplace is one of the most meaningful investments an organization can make in its people.",
  },
  {
    name: "Financial Wellness",
    href: "/solutions/livebalanced",
    icon: <DollarSignIcon />,
    description:
      "Financial stress is one of the most pervasive challenges facing today's workforce. Equipping people with the tools, knowledge, and access they need to secure their financial futures is an act of genuine organizational care.",
  },
  {
    name: "Social Wellness",
    href: "/solutions/livebalanced",
    icon: <PeopleIcon />,
    description:
      "People need purpose, connection, and a sense of belonging to something beyond themselves. Social wellness recognizes that we do not thrive in isolation — and that organizations play a meaningful role in cultivating that connection.",
  },
];

export default function MissionVisionPage() {
  return (
    <main className="flex-1 bg-alic-cream">
      <PageHeader
        title="Mission & Vision"
        subheadline="What we believe shapes everything we do. These are not aspirations. They are the standards we hold ourselves to."
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <h2 className="font-serif text-3xl font-normal text-alic-navy md:text-4xl">
          Our Mission &amp; Vision
        </h2>
        <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-alic-navy/85">
          <p>
            Atlanta Life Insurance Company was founded on a singular conviction —
            that every person and their family deserves access to the financial
            tools, life insurance opportunities, and resources that make legacy
            possible. That conviction has guided this organization for more than
            120 years. It guides us still.
          </p>
          <p>
            Our mission is to create legacy for people and their families. Not
            legacy as an abstract idea, but as something real and achievable —
            the ability to protect what you have built, provide for those who
            come after you, and leave something meaningful behind.
          </p>
          <p>
            Our vision is an Atlanta Life that continues to grow in reach and
            relevance — expanding access to life insurance, financial resources,
            and the education that empowers people to make informed decisions
            about their futures. We are building toward a world where more
            people, in more communities, across this country have the tools to
            secure what matters most to them and to those they love.
          </p>
          <p>
            That vision is the direct continuation of what Alonzo Herndon started
            in 1905. We carry it forward with the same sense of purpose.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-4 md:px-10">
        <Collapsible id="core-values" title="Core Values">
          <p className="font-sans text-base leading-relaxed text-alic-navy/85">
            The values below are not statements we display. They are the
            standards we operate by — in every relationship, every solution, and
            every decision we make.
          </p>
          <dl className="mt-6 space-y-6">
            {coreValues.map((value) => (
              <div key={value.name}>
                <dt className="font-serif text-xl font-normal text-alic-navy">
                  {value.name}
                </dt>
                <dd className="mt-1 font-sans text-base leading-relaxed text-alic-navy/85">
                  {value.body}
                </dd>
              </div>
            ))}
          </dl>
        </Collapsible>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <h2 className="text-center font-serif text-3xl font-normal text-alic-navy md:text-4xl">
          Our Approach to Wellness
        </h2>
        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center font-sans text-base leading-relaxed text-alic-navy/85">
          <p>
            Legacy requires capacity. A person cannot build something lasting
            when critical dimensions of their well-being are unaddressed. That is
            why Atlanta Life centers wellness in the solutions we bring to the
            people and organizations we serve — as a framework for understanding
            what people actually need to thrive.
          </p>
          <p>
            Our approach to wellness is organized around four pillars — each
            representing a distinct and essential dimension of well-being for the
            people and organizations we serve. Together they form the foundation
            of LiveBalanced&trade;, our flagship wellness platform.
          </p>
        </div>
        <div className="mt-10">
          <PillarBoxes pillars={pillars} />
        </div>
        <p className="mt-4 text-center font-sans text-sm text-alic-navy/60">
          Hover or focus a pillar to reveal more, then continue to
          LiveBalanced&trade;.
        </p>
      </section>
    </main>
  );
}

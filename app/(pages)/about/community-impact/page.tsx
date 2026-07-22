import type { Metadata } from "next";
import Link from "next/link";
import ArticleGrid, { type Article } from "@/components/shared/ArticleCard";
import PageHeader from "@/components/shared/PageHeader";
import Carousel from "@/components/ui/Carousel";

export const metadata: Metadata = {
  title: "Community Impact | ALIC Group Solutions — Atlanta Life Insurance Company",
  description:
    "Atlanta Life is committed to the communities it serves — through purposeful initiatives, strategic partnerships, and ongoing support of the Alonzo & Norris B. Herndon Foundation.",
};

const featured = [
  {
    name: "Pearls of Purpose Foundation — Mother & Daughter Scholarship Luncheon",
    brief:
      "A celebration of legacy and scholarship honoring the bonds between mothers and daughters — with special guests Angelina and Zahara Jolie.",
  },
  {
    name: "Strength in the City — National Wellness Tour",
    brief:
      "Atlanta Life served as lead sponsor and financial education partner for a nationwide wellness tour connecting communities through fitness, mindfulness, and well-being.",
  },
  {
    name: "Sweet Auburn Stories — Honoring Ambassador Andrew Young",
    brief:
      "An intimate evening at Hammonds House Museum celebrating the life and legacy of Ambassador Andrew Young, former Mayor of Atlanta and U.S. Ambassador to the United Nations.",
  },
];

const newsroom: Article[] = [
  {
    category: "Event",
    title:
      "Pearls of Purpose Foundation Mother & Daughter Scholarship Luncheon",
    description:
      "Atlanta Life was proud to support the Pearls of Purpose Foundation's Scholarship Mother Daughter Luncheon — an event centered on legacy, scholarship, and the bonds that shape the next generation. Special guests Angelina and Zahara Jolie joined mothers and daughters in a celebration of purpose and possibility.",
  },
  {
    category: "Partnership",
    title:
      "Strength in the City National Wellness Tour — Atlanta Life as Lead Sponsor",
    description:
      "For the second consecutive year, Atlanta Life served as lead sponsor and financial education and resources partner for the Strength in the City National Wellness Tour — a nationwide movement connecting communities through fitness, mindfulness, and recovery experiences.",
  },
  {
    category: "Event",
    title: "Sweet Auburn Stories — An Evening Honoring Ambassador Andrew Young",
    description:
      "Atlanta Life partnered with Sweet Auburn Stories and Royce Bable for a special event at the historic Hammonds House Museum — honoring the life and legacy of Ambassador Andrew Young, with Atlanta Mayor Andre Dickens in attendance.",
  },
];

export default function CommunityImpactPage() {
  return (
    <main className="flex-1 bg-alic-cream">
      <PageHeader
        title="Community Impact"
        subheadline="This work has always been about people. Not just the organizations that employ them — the communities that shape them."
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <h2 className="font-serif text-3xl font-normal text-alic-navy md:text-4xl">
          Featured Initiatives
        </h2>
        <div className="mt-8">
          <Carousel label="Featured initiatives">
            {featured.map((item) => (
              <article
                key={item.name}
                className="flex w-80 shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-alic-navy/10 bg-white shadow-sm"
              >
                <div
                  className="h-44 w-full bg-alic-warm/50"
                  aria-hidden="true"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-lg font-normal leading-snug text-alic-navy">
                    {item.name}
                  </h3>
                  <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-alic-navy/80">
                    {item.brief}
                  </p>
                  <Link
                    href="#community-newsroom"
                    className="mt-4 inline-flex items-center gap-2 font-sans font-semibold text-alic-navy transition-colors hover:text-alic-gold"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 pb-16 md:px-10 md:pb-20">
        <h2 className="font-serif text-3xl font-normal text-alic-navy md:text-4xl">
          Our Commitment
        </h2>
        <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-alic-navy/85">
          <p>
            Atlanta Life was built to serve people and communities. That has
            guided this organization since 1905 and it remains central to how we
            operate today.
          </p>
          <p>
            Community engagement is central to how we define the work itself.
            Through purposeful initiatives, strategic partnerships, and ongoing
            investment in the communities we are part of, we show up consistently
            and with intention.
          </p>
          <p>
            We are a company that was built to serve community. That
            responsibility has never left us.
          </p>
        </div>
      </section>

      <section
        id="community-newsroom"
        className="scroll-mt-28 bg-white/60"
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <h2 className="font-serif text-3xl font-normal text-alic-navy md:text-4xl">
            Community Newsroom
          </h2>
          <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-alic-navy/80">
            Stories from the work — events, partnerships, press, and the moments
            that reflect who we are in community.
          </p>
          <div className="mt-10">
            <ArticleGrid articles={newsroom} />
          </div>
        </div>
      </section>
    </main>
  );
}

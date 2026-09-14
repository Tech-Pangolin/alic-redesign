import type { Metadata } from "next";
import ContentArticleCard from "@/components/shared/ContentArticleCard";
import PageHeader from "@/components/shared/PageHeader";
import Carousel from "@/components/ui/Carousel";
import {
  CATEGORY_COLORS,
  getRecentArticles,
} from "@/lib/newsroom";

export const metadata: Metadata = {
  title: "Community Impact | ALIC Group Solutions — Atlanta Life Insurance Company",
  description:
    "Atlanta Life is committed to the communities it serves — through purposeful initiatives, strategic partnerships, and ongoing support of the Alonzo & Norris B. Herndon Foundation.",
};

const featured = getRecentArticles(3);

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
            {featured.map((article) => (
              <ContentArticleCard
                key={article.id}
                category={article.category}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                href={`/about/newsroom/${article.id}`}
                headerColor={CATEGORY_COLORS[article.category]}
                imageSrc={article.heroImage}
                linkLabel="Learn more"
                className="w-80 shrink-0 snap-start"
              />
            ))}
          </Carousel>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-10 md:pb-20">
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
    </main>
  );
}

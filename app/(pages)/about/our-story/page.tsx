import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";
import Collapsible from "@/components/ui/Collapsible";

export const metadata: Metadata = {
  title: "Our Story | ALIC Group Solutions — Atlanta Life Insurance Company",
  description:
    "The story of Atlanta Life — from Alonzo Herndon's vision and the 1905 founding to the legacy the company carries forward today.",
};

export default function OurStoryPage() {
  return (
    <main className="flex-1 bg-alic-cream">
      <PageHeader
        title="Our Story"
        subheadline="Every organization has a reason for being. Ours has never wavered."
      />

      <section className="mx-auto w-full max-w-4xl px-6 py-16 md:px-10 md:py-20">
        <Collapsible id="herndons-vision" title="Herndon's Vision">
          <div className="space-y-4 font-sans text-base leading-relaxed text-alic-navy/85">
            <p>
              Our story begins with Alonzo Franklin Herndon — born on June 26,
              1858, in Walton County, Georgia. Emancipated at the end of the
              Civil War, Herndon built his future through skill, discipline, and
              an extraordinary business instinct.
            </p>
            <p>
              He entered the barbering trade and eventually settled in Atlanta,
              where he built one of the most successful barbering enterprises in
              the city — owning three barbershops, including a celebrated
              establishment at 66 Peachtree Street that served some of Atlanta&rsquo;s
              most prominent clientele. He invested his earnings wisely in
              Atlanta real estate, accumulating wealth at a scale that had never
              been achieved by a Black man in the city&rsquo;s history. Alonzo Herndon
              became Atlanta&rsquo;s first Black millionaire.
            </p>
            <p>
              But his ambition extended beyond personal success. Herndon
              understood the value of financial security and what it meant for a
              family to have something to protect, something to build on, and
              something to leave behind. That understanding — more than anything
              else — is what gave rise to Atlanta Life.
            </p>
          </div>
        </Collapsible>

        <Collapsible id="the-founding-1905" title="The Founding 1905">
          <div className="space-y-4 font-sans text-base leading-relaxed text-alic-navy/85">
            <p>
              In 1905, Herndon was approached by prominent community leaders —
              among them Reverend Peter Bryant of Wheat Street Baptist Church —
              to take over a financially struggling community self-help
              organization called the Atlanta Benevolent and Protective
              Association. At the time, African American families in the United
              States did not have access to life insurance and financial
              services through established institutions.
            </p>
            <p>
              Herndon stepped in. He purchased the association for $140,
              deposited $5,000 with the state of Georgia — becoming the first
              company in the state to meet the new regulatory capital
              requirement — and subsequently acquired two additional
              organizations: the Royal Mutual Insurance Company and the National
              Laborers&rsquo; Protective Union.
            </p>
            <p>
              On September 21, 1905, he consolidated all three into the Atlanta
              Mutual Insurance Association. It was the beginning of something far
              larger than any of its parts.
            </p>
            <p>
              Herndon grew the organization with discipline and purpose —
              building a professional sales force, expanding into multiple
              states, and strengthening the broader landscape of Black-owned
              financial institutions across the country. By 1916, Atlanta Mutual
              reorganized as a stock company. By 1922, it was reincorporated as
              the Atlanta Life Insurance Company — one of only five Black-owned
              insurance companies in the nation to hold legal reserve status at
              the time.
            </p>
            <p>
              Alonzo Herndon passed away on July 21, 1927. His son, Norris B.
              Herndon — a Harvard MBA graduate and one of only two Black students
              in his class in 1921 — assumed leadership and continued to grow the
              company in both financial strength and community impact. In 1952,
              Norris established the Alonzo F. and Norris B. Herndon Foundation, a
              private foundation dedicated to advancing the Herndon legacy through
              education, mentorship, and entrepreneurship. The Foundation has
              since contributed more than five million dollars to churches,
              nonprofits, and educational institutions.
            </p>
            <p>
              The vision Alonzo Herndon carried into that first office in 1905 —
              that every person and their family deserves the means to build
              something lasting — became the foundation of everything Atlanta
              Life has stood for since.
            </p>
          </div>
        </Collapsible>

        <Collapsible id="legacy-today" title="Legacy Today">
          <div className="space-y-4 font-sans text-base leading-relaxed text-alic-navy/85">
            <p>
              Atlanta Life Insurance Company has operated continuously since 1905
              — through more than 120 years of economic shifts, industry
              evolution, and the changing needs of the people and communities it
              serves. The mission that gave rise to this company has never
              required revision. It has only grown more relevant.
            </p>
            <p>
              In 2023, Atlanta Life entered a new chapter. The company was
              acquired by Atlanta Life Holdings, a minority-owned insurance
              holding company committed to restoring the heritage of the brand
              and expanding its reach. Earvin &ldquo;Magic&rdquo; Johnson became a beneficial
              owner of Atlanta Life through a partnership with his EquiTrust Life
              Insurance Company. The Herndon Foundation retained a minority equity
              stake — ensuring that the legacy of the founding family remains
              connected to the company&rsquo;s future.
            </p>
            <p>
              Atlanta Life reentered the market with renewed leadership, restored
              focus, and the same founding conviction: that people and their
              families deserve access to the financial tools, life insurance
              opportunities, and resources that make legacy possible.
            </p>
            <p>
              Today, Atlanta Life operates through two divisions. Our Individual
              division serves people and families directly through life insurance
              products and personal financial services. Our Group Solutions
              division works with corporations, government agencies, educational
              institutions, and other organizations — bringing solutions that
              elevate how they support the people within them.
            </p>
            <p>
              The name has endured. The mission has endured. And the work — over
              a century in — continues.
            </p>
          </div>
        </Collapsible>
      </section>

      <section className="bg-alic-navy text-alic-cream">
        <div className="mx-auto w-full max-w-4xl px-6 py-16 text-center md:px-10 md:py-20">
          <h2 className="font-serif text-3xl font-normal md:text-4xl">
            The mission behind the story —
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-lg text-alic-cream/85">
            Learn what drives us, what we stand for, and how we define the work
            ahead.
          </p>
          <Link
            href="/about/mission-vision"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-alic-gold px-8 py-4 font-sans text-lg font-semibold text-alic-navy transition-opacity hover:opacity-90"
          >
            Our mission &amp; vision <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

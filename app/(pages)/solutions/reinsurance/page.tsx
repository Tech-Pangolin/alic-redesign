import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Reinsurance | How Atlanta Life Works — ALIC Group Solutions",
  description:
    "Learn how Atlanta Life Insurance Company uses reinsurance to enter markets, build carrier relationships, and deliver LiveBalanced™ wellness solutions to organizations across the country.",
};

export default function ReinsurancePage() {
  return (
    <main className="flex-1 bg-alic-cream">
      <PageHeader
        title="Reinsurance"
        subheadline="Understanding how Atlanta Life enters markets, builds relationships, and delivers solutions to the organizations we serve."
      />

      <section
        id="what-is-reinsurance"
        className="mx-auto w-full max-w-4xl scroll-mt-28 px-6 py-16 md:px-10 md:py-20"
      >
        <h2 className="font-serif text-3xl font-normal text-alic-navy md:text-4xl">
          What is Reinsurance
        </h2>
        <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-alic-navy/85">
          <p>
            Reinsurance is a practice in which one insurance company — known as
            the reinsurer — assumes a portion of the risk carried by another
            insurance company, known as the ceding company or carrier. In
            exchange for assuming that risk, the reinsurer receives a portion of
            the premiums the carrier collects from its policyholders.
          </p>
          <p>
            In the United States, reinsurance is a foundational mechanism of the
            insurance industry. It allows carriers to manage their exposure,
            stabilize their financial performance, and expand their capacity to
            serve more policyholders. For the policyholders themselves — the
            individuals, families, and organizations holding insurance policies —
            the reinsurance arrangement operates in the background and does not
            affect their coverage or their relationship with their carrier.
          </p>
          <p>
            Reinsurance agreements are formal contracts, commonly referred to as
            reinsurance treaties, that define the terms of the risk-sharing
            arrangement between the carrier and the reinsurer — including the
            percentage of risk assumed, the premiums shared, and the conditions
            under which claims are handled.
          </p>
        </div>
      </section>

      <section
        id="how-it-works-at-atlanta-life"
        className="scroll-mt-28 bg-white/60"
      >
        <div className="mx-auto w-full max-w-4xl px-6 py-16 md:px-10 md:py-20">
          <h2 className="font-serif text-3xl font-normal text-alic-navy md:text-4xl">
            How it Works at Atlanta Life
          </h2>
          <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-alic-navy/85">
            <p>
              Atlanta Life participates in the group life insurance market
              through reinsurance. Rather than issuing group life insurance
              policies directly, Atlanta Life enters into reinsurance agreements
              with the carriers that do — assuming a defined portion of the risk
              those carriers hold on behalf of their group clients.
            </p>
            <p>
              Those group clients — corporations, government agencies,
              educational institutions, and other organizations — maintain their
              existing relationship and coverage with their carrier. Atlanta
              Life&rsquo;s role in the arrangement is separate from and does not alter
              that relationship or the benefits those organizations provide to
              their people.
            </p>
            <p>
              What the reinsurance agreement does create is a connection — between
              Atlanta Life and the organizations those carriers serve. Through
              that connection, Atlanta Life is able to extend the solutions and
              resources of the LiveBalanced&trade; platform directly to those
              organizations, as a complement to the group life coverage their
              carrier already provides.
            </p>
            <p>
              This is how Atlanta Life brings its mission to scale — entering
              markets through the credibility of established carrier
              relationships and delivering meaningful solutions to the
              organizations and people on the other side of those relationships.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-alic-navy text-alic-cream">
        <div className="mx-auto w-full max-w-4xl px-6 py-16 text-center md:px-10 md:py-20">
          <h2 className="font-serif text-3xl font-normal md:text-4xl">
            Want to learn more about partnering with Atlanta Life?
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-alic-gold px-8 py-4 font-sans text-lg font-semibold text-alic-navy transition-opacity hover:opacity-90"
            >
              Partner with us <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/solutions/livebalanced"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-alic-cream/40 px-8 py-4 font-sans text-lg font-semibold text-alic-cream transition-colors hover:bg-alic-cream/10"
            >
              Explore LiveBalanced&trade; <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

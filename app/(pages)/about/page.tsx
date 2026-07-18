import type { Metadata } from "next";
import AboutCta from "@/components/about/AboutCta";
import HistoryIntro from "@/components/about/HistoryIntro";
import OurStory from "@/components/about/OurStory";
import ThenAndNow from "@/components/about/ThenAndNow";
import Timeline from "@/components/about/Timeline";

export const metadata: Metadata = {
    title: "About | Atlanta Life Insurance Company",
    description:
        "Learn the history, foundation, and enduring mission behind Atlanta Life Insurance Company.",
};

export default function AboutPage() {
    return (
        <main className="flex-1 bg-alic-cream">
            <OurStory />
            <HistoryIntro />
            <Timeline />
            <ThenAndNow />
            <AboutCta />
        </main>
    );
}

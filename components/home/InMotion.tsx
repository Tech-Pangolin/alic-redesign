import Link from "next/link";
import ImagePlaceholder from "@/components/home/ImagePlaceholder";
import styles from "./InMotion.module.css";

const stories = [
    {
        title: "Atlanta Life & Rajah Caruth",
        subtitle: "NASCAR Daytona International Speedway",
        label: "Story 1",
    },
    {
        title: "Atlanta Life Hosts Author Tayari Jones – Exclusive Interview, Book Signing and Q&A",
        subtitle: null,
        label: "Story 2",
    },
    {
        title: "Atlanta Life at inaugural HBCU Aware Fest",
        subtitle: null,
        label: "Story 3",
    },
    {
        title: "Atlanta Life Power Home Remodeling Financial Literacy Education Event",
        subtitle: null,
        label: "Story 4",
    },
] as const;

export default function InMotion() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.intro}>
                    <p className={styles.eyebrow}>In motion</p>
                    <h2 className={styles.heading}>Always moving, always present.</h2>
                    <p className={styles.body}>
                        From conference stages to community gatherings, from published insights to
                        partnerships that extend our reach — Atlanta Life Group Solutions remains
                        active in the spaces that matter. This is a look at what we&apos;ve been
                        building lately.
                    </p>
                </div>

                <ul className={styles.grid}>
                    {stories.map((story) => (
                        <li key={story.label} className={styles.card}>
                            <ImagePlaceholder label={story.label} aspect="4/3" />
                            <h3 className={styles.cardTitle}>{story.title}</h3>
                            {story.subtitle ? (
                                <p className={styles.cardSubtitle}>{story.subtitle}</p>
                            ) : null}
                            <Link href="#" className={styles.storyCta}>
                                View story
                                <span aria-hidden="true">→</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <p className={styles.newsroom}>
                    <Link href="#" className={styles.newsroomLink}>
                        Visit our newsroom for all stories
                    </Link>
                </p>
            </div>
        </section>
    );
}

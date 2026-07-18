import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import styles from "./AboutCta.module.css";

const solutionImages = [
    "/about/solutions1.avif",
    "/about/solutions2.avif",
    "/about/solutions3.avif",
    "/about/solutions4.avif",
    "/about/solutions5.avif",
];

export default function AboutCta() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <Reveal>
                    <h2 className={styles.heading}>
                        The mission that started in 1905 continues to evolve. What
                        drives it has never changed
                    </h2>
                </Reveal>
                <Reveal delay={120}>
                    <p className={styles.body}>Now that you know who we are —</p>
                </Reveal>
                <Reveal delay={220}>
                    <Link href="/solutions" className={styles.cta}>
                        Explore our solutions
                        <span aria-hidden="true">↗</span>
                    </Link>
                </Reveal>
            </div>

            <div className={styles.arc}>
                {solutionImages.map((src, index) => (
                    <div key={src} className={styles.arcItem}>
                        <Reveal variant="image" delay={320 + index * 100}>
                            <Image
                                src={src}
                                alt={`Atlanta Life solutions ${index + 1}`}
                                width={300}
                                height={300}
                                className={styles.arcImage}
                            />
                        </Reveal>
                    </div>
                ))}
            </div>
        </section>
    );
}

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import styles from "./OurStory.module.css";

export default function OurStory() {
    return (
        <section className={styles.section} aria-labelledby="our-story-heading">
            <div className={styles.inner}>
                <div className={styles.copy}>
                    <Reveal>
                        <h1 id="our-story-heading" className={styles.heading}>
                            Our Story
                        </h1>
                    </Reveal>
                    <Reveal delay={120}>
                        <p className={styles.body}>
                            Every organization has a reason for being. Ours has never
                            wavered.
                        </p>
                    </Reveal>
                </div>

                <Reveal variant="image" delay={220} className={styles.media}>
                    <span className={styles.accent} aria-hidden="true" />
                    <Image
                        src="/about/ourStory.avif"
                        alt="Atlanta Life history and legacy"
                        width={917}
                        height={454}
                        className={styles.image}
                        priority
                    />
                </Reveal>
            </div>
        </section>
    );
}

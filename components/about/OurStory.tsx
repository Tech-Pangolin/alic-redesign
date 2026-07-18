import Image from "next/image";
import styles from "./OurStory.module.css";

export default function OurStory() {
    return (
        <section className={styles.section} aria-labelledby="our-story-heading">
            <div className={styles.inner}>
                <div className={styles.copy}>
                    <h1 id="our-story-heading" className={styles.heading}>
                        Our Story
                    </h1>
                    <p className={styles.body}>
                        Every organization has a reason for being. Ours has never
                        wavered.
                    </p>
                </div>

                <div className={styles.media}>
                    <span className={styles.accent} aria-hidden="true" />
                    <Image
                        src="/about/ourStory.avif"
                        alt="Atlanta Life history and legacy"
                        width={917}
                        height={454}
                        className={styles.image}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}

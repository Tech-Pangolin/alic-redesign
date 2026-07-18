import Image from "next/image";
import styles from "./OurStory.module.css";

export default function OurStory() {
    return (
        <section className={styles.section} aria-labelledby="our-story-heading">
            <div className={styles.accentBar} aria-hidden="true" />
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
                    <Image
                        src="/about/ourStory.avif"
                        alt="Atlanta Life history and legacy"
                        width={1200}
                        height={900}
                        className={styles.image}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}

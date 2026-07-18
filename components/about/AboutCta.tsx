import Image from "next/image";
import Link from "next/link";
import styles from "./AboutCta.module.css";

export default function AboutCta() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <h2 className={styles.heading}>
                    The mission that started in 1905 continues to evolve. What
                    drives it has never changed
                </h2>
                <p className={styles.body}>Now that you know who we are —</p>
                <Link href="/solutions" className={styles.cta}>
                    Explore our solutions
                </Link>
                <div className={styles.media}>
                    <Image
                        src="/about/solutions5.avif"
                        alt="Atlanta skyline"
                        width={1200}
                        height={800}
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
}

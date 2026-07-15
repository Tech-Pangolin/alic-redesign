import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.column1}>
                    <h1 className={styles.title}>
                        Over a century of purpose with one enduring mission.
                    </h1>
                    <p className={styles.body}>
                        We believe organizations are only as strong as the people within them.
                        Everything we do is built around that truth — the solutions we bring, the
                        partnerships we build, the communities we invest in. It has been that way
                        since 1905. It remains that way today.
                    </p>
                </div>

                <div className={styles.column2}>
                    <Image
                        src="/hero/hero-image.png"
                        alt="Atlanta Life Group Solutions"
                        width={505}
                        height={422}
                        priority
                        className={styles.heroImage}
                    />
                </div>

                <div className={styles.column3}>
                    <Link href="#foundation" className={styles.cta}>
                        See what drives us
                        <span aria-hidden="true">↗</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

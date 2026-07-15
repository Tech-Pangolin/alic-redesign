import Link from "next/link";
import CtaButton from "@/components/shared/CtaButton";
import styles from "./Purpose.module.css";

export default function Purpose() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <h2 className={styles.heading}>
                    Over a century of purpose. The right partner for what&apos;s next.
                </h2>
                <p className={styles.body}>
                    A mission this enduring. Solutions this intentional. A commitment to people and
                    community this deep. Partnering with Atlanta Life Group Solutions means aligning
                    with an organization that knows exactly who it is — and brings that clarity to
                    every relationship it builds.
                </p>
                <div className={styles.actions}>
                    <CtaButton text="Partner with us" />
                    <Link href="/about" className={styles.secondaryCta}>
                        Learn how it works
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

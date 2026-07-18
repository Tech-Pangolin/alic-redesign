import styles from "./ThenAndNow.module.css";

export default function ThenAndNow() {
    return (
        <section className={styles.section} aria-labelledby="then-and-now-heading">
            <div className={styles.inner}>
                <p className={styles.label}>Then &amp; Now</p>
                <h2 id="then-and-now-heading" className={styles.heading}>
                    The world has changed. The mission has not.
                </h2>
                <p className={styles.body}>
                    More than 120 years have passed since Alonzo Herndon organized
                    this company. The landscape of American business, finance, and
                    community life looks different today than it did in 1905 — in
                    many ways, profoundly so. And yet the questions Atlanta Life
                    was built to answer remain.
                </p>
                <div className={styles.questions}>
                    <p>
                        How do families protect what they&apos;ve worked for?
                    </p>
                    <p>
                        How do organizations truly support the people who power
                        them?
                    </p>
                    <p>
                        How does a company remain committed to community while
                        growing to meet the demands of a changing world?
                    </p>
                </div>
                <p className={styles.body}>
                    We have spent more than a century refining our answers to
                    those questions. Today, Atlanta Life Insurance Company brings
                    that accumulated understanding into partnership with the
                    corporations, institutions, and organizations shaping modern
                    American life — with solutions built for this moment, and a
                    mission that has never needed updating.
                </p>
            </div>
        </section>
    );
}

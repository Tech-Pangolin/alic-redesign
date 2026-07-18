import styles from "./HistoryIntro.module.css";

export default function HistoryIntro() {
    return (
        <section className={styles.section} aria-labelledby="history-heading">
            <div className={styles.inner}>
                <h2 id="history-heading" className={styles.heading}>
                    History &amp;
                    <br />
                    foundation
                </h2>
                <p className={styles.body}>
                    The story of Atlanta Life Insurance Company begins with the
                    story of a man who built something lasting — and a family
                    that ensured it would endure. From a single act of purpose
                    in 1905, this company has grown into one of the most
                    significant financial institutions in American history.
                </p>
            </div>
        </section>
    );
}

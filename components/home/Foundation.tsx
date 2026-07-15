import styles from "./Foundation.module.css";

export default function Foundation() {
    return (
        <section id="foundation" className={styles.section}>
            <div className={styles.inner}>
                <h2 className={styles.title}>
                    Some things don&apos;t change. For us, that&apos;s intentional.
                </h2>
                <div className={styles.copy}>
                    <p>
                        Atlanta Life Insurance Company was founded with a singular purpose — to
                        give families the means to protect what they had built and secure what
                        they hoped to leave behind. That purpose has carried this organization for
                        more than a century.
                    </p>
                    <p>
                        Atlanta Life Group Solutions carries it forward today. We partner with
                        corporations, government agencies, educational institutions, and other
                        organizations — bringing solutions, expertise, and a depth of commitment
                        that is inseparable from who we are.
                    </p>
                </div>

                <div className={styles.frame}>
                    <p className={styles.label}>Our foundation</p>
                </div>
            </div>
        </section>
    );
}

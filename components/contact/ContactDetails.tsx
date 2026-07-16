import styles from "./ContactDetails.module.css";

const details = [
    {
        label: "Address",
        value: "600 Peachtree St NE Suite 2350, Atlanta, GA 30308",
    },
    {
        label: "Tel",
        value: "(888) 407-3209",
        href: "tel:+18884073209",
    },
    {
        label: "Email",
        value: "groupsolutions@atlantalife.com",
        href: "mailto:groupsolutions@atlantalife.com",
    },
] as const;

export default function ContactDetails() {
    return (
        <section className={styles.section} aria-label="Contact information">
            <div className={styles.card}>
                <ul className={styles.list}>
                    {details.map((item) => (
                        <li key={item.label} className={styles.item}>
                            <h2 className={styles.label}>{item.label}</h2>
                            <p className={styles.value}>
                                {"href" in item ? (
                                    <a href={item.href} className={styles.link}>
                                        {item.value}
                                    </a>
                                ) : (
                                    item.value
                                )}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

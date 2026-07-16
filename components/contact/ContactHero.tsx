import styles from "./ContactHero.module.css";

export default function ContactHero() {
    return (
        <section className={styles.section} aria-labelledby="contact-heading">
            <h1 id="contact-heading" className={styles.heading}>
                Let&apos;s Begin the Conversation
            </h1>
            <p className={styles.body}>
                We invite you to reach out and discover how a more mindful
                approach to group benefits can help your organization.
            </p>
        </section>
    );
}

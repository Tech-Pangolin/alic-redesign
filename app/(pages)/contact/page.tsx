import type { Metadata } from "next";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import styles from "@/components/contact/ContactLayout.module.css";

export const metadata: Metadata = {
    title: "Contact | Atlanta Life Insurance Company",
    description:
        "Reach out to Atlanta Life Group Solutions and discover how a more mindful approach to group benefits can help your organization.",
};

export default function ContactPage() {
    return (
        <main className="flex-1 bg-alic-cream">
            <div className={styles.layout}>
                <div className={styles.left}>
                    <ContactHero />
                    <ContactDetails />
                </div>
                <div className={styles.right}>
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}

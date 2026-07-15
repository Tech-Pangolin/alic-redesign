import Link from "next/link";
import ImagePlaceholder from "@/components/home/ImagePlaceholder";
import styles from "./Work.module.css";

const offerings = [
    {
        title: "LiveBalanced™",
        body: "Our flagship wellness platform built on four pillars — physical, mental, financial, and social. A comprehensive framework for organizations committed to the full well-being of their people.",
        cta: "Explore LiveBalanced™",
        href: "/solutions",
        imageLabel: "LiveBalanced image",
    },
    {
        title: "Expert Advisory",
        body: "We bring leading professionals in workplace wellness alongside our clients — experts whose knowledge shapes stronger programs and drives better outcomes for the people within them.",
        cta: "Meet our advisors",
        href: "/solutions",
        imageLabel: "Expert Advisory image",
    },
    {
        title: "Tools & Resources",
        body: "We are committed to meeting organizations with the tools and resources that reflect how we live and work now. We invest in access — practical, modern, and tech-forward.",
        cta: "Explore our tools",
        href: "/resources",
        imageLabel: "Tools & Resources image",
    },
    {
        title: "Thought Leadership & Education",
        body: "In partnership with field experts, we bring relevant research, informed perspectives, and educational content to the professionals and organizations we serve. We believe informed communities are stronger.",
        cta: "Visit our resources",
        href: "/resources",
        imageLabel: "Thought Leadership image",
    },
    {
        title: "Community Engagement",
        body: "Through purposeful initiatives, strategic partnerships, and ongoing investment in the communities we serve, we honor the founding conviction that has guided Atlanta Life from the beginning.",
        cta: "See our impact",
        href: "/about",
        imageLabel: "Community Engagement image",
    },
] as const;

export default function Work() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.intro}>
                    <p className={styles.eyebrow}>Our work</p>
                    <h2 className={styles.heading}>
                        Helping organizations support their people meaningfully.
                    </h2>
                </div>

                <ul className={styles.list}>
                    {offerings.map((item) => (
                        <li key={item.title} className={styles.item}>
                            <ImagePlaceholder
                                label={item.imageLabel}
                                aspect="3/2"
                                tone="warm"
                            />
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.body}>{item.body}</p>
                            <Link href={item.href} className={styles.cta}>
                                {item.cta}
                                <span aria-hidden="true">→</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

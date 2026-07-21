import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import styles from "./Work.module.css";

const offerings = [
  {
    title: "LiveBalanced™",
    body: "Our flagship wellness platform built on four pillars — physical, mental, financial, and social. A comprehensive framework for organizations committed to the full well-being of their people.",
    cta: "Explore LiveBalanced™",
    href: "/solutions",
    image: "/work/ourWork1.png",
    imageLeft: true,
  },
  {
    title: "Expert Advisory",
    body: "We bring leading professionals in workplace wellness alongside our clients — experts whose knowledge shapes stronger programs and drives better outcomes for the people within them.",
    cta: "Meet our advisors",
    href: "/solutions",
    image: "/work/ourWork2.jpg",
    imageLeft: false,
  },
  {
    title: "Tools & Resources",
    body: "We are committed to meeting organizations with the tools and resources that reflect how we live and work now. We invest in access — practical, modern, and tech-forward.",
    cta: "Explore our tools",
    href: "/resources",
    image: "/work/ourWork3.png",
    imageLeft: true,
  },
  {
    title: "Thought Leadership & Education",
    body: "In partnership with field experts, we bring relevant research, informed perspectives, and educational content to the professionals and organizations we serve. We believe informed communities are stronger.",
    cta: "Visit our resources",
    href: "/resources",
    image: "/work/ourWork4.jpg",
    imageLeft: false,
  },
  {
    title: "Community Engagement",
    body: "Through purposeful initiatives, strategic partnerships, and ongoing investment in the communities we serve, we honor the founding conviction that has guided Atlanta Life from the beginning.",
    cta: "See our impact",
    href: "/about",
    image: "/work/ourWork5.png",
    imageLeft: true,
  },
] as const;

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
          <h2 className={styles.heading}>
            Helping organizations support their people meaningfully.
          </h2>
        </Reveal>

        <ul className={styles.list}>
          {offerings.map((item) => (
            <li
              key={item.title}
              className={`${styles.row} ${item.imageLeft ? styles.imageLeft : styles.imageRight}`}
            >
              <div className={styles.media}>
                <Reveal variant="image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={960}
                    height={720}
                    className={styles.image}
                  />
                </Reveal>
              </div>
              <div className={styles.copy}>
                <Reveal delay={100}>
                  <h3 className={styles.title}>{item.title}</h3>
                </Reveal>
                <Reveal delay={200}>
                  <p className={styles.body}>{item.body}</p>
                </Reveal>
                <Reveal delay={300}>
                  <Link href={item.href} className={styles.cta}>
                    {item.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                </Reveal>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

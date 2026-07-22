import Image from "next/image";
import CtaButton from "@/components/shared/CtaButton";
import StoryCard from "@/components/shared/StoryCard";
import Reveal from "@/components/ui/Reveal";
import styles from "./InMotion.module.css";

const stories = [
  {
    text: "Atlanta Life & Rajah Caruth\nNASCAR Daytona International Speedway",
    href: "/about/community-impact",
    image: "/inmotion/inmotion-nascar.png",
    alt: "Atlanta Life and Rajah Caruth at NASCAR Daytona International Speedway",
    layout: "nascar",
  },
  {
    text: "Atlanta Life Hosts Author Tayari Jones – Exclusive Interview, Book Signing and Q&A",
    href: "/about/community-impact",
    image: "/inmotion/inmotion-3women.avif",
    alt: "Atlanta Life Hosts Author Tayari Jones",
    layout: "topRight",
  },
  {
    text: "Atlanta Life Power Home Remodeling Financial Literacy Education Event",
    href: "/about/community-impact",
    image: "/inmotion/inmontion-speaker.avif",
    alt: "Atlanta Life Power Home Remodeling Financial Literacy Education Event",
    layout: "bottomLeft",
  },
  {
    text: "Atlanta Life at inaugural HBCU Aware Fest",
    href: "/about/community-impact",
    image: "/inmotion/inmotion-million.avif",
    alt: "Atlanta Life at inaugural HBCU Aware Fest",
    layout: "bottomRight",
  },
] as const;

const imageSize = {
  nascar: { width: 475, height: 405 },
  topRight: { width: 360, height: 340 },
  bottomLeft: { width: 400, height: 340 },
  bottomRight: { width: 575, height: 340 },
  default: { width: 900, height: 700 },
} as const;

const layoutClass = {
  nascar: styles.cellNascar,
  topRight: styles.cellTopRight,
  bottomLeft: styles.cellBottomLeft,
  bottomRight: styles.cellBottomRight,
  default: "",
} as const;

export default function InMotion() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <Reveal>
            <p className={styles.eyebrow}>In motion</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className={styles.heading}>Always moving, always present.</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className={styles.body}>
              From conference stages to community gatherings, from published
              insights to partnerships that extend our reach — Atlanta Life
              Group Solutions remains active in the spaces that matter. This is
              a look at what we&apos;ve been building lately.
            </p>
          </Reveal>
        </div>

        <ul className={styles.grid}>
          {stories.map((story, index) => (
            <li
              key={story.image}
              className={`${styles.cell} ${layoutClass[story.layout]}`}
            >
              <Reveal variant="image" delay={index * 100}>
                <div className={styles.featureStack}>
                  <div className={styles.storyCardWrap}>
                    <StoryCard text={story.text} href={story.href} />
                  </div>
                  <div className={styles.photoWrap}>
                    <Image
                      src={story.image}
                      alt={story.alt}
                      width={imageSize[story.layout].width}
                      height={imageSize[story.layout].height}
                      className={styles.photo}
                    />
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className={styles.newsroom}>
          <Reveal delay={200}>
            <CtaButton
              text="Visit our newsroom for all stories"
              href="/about/community-impact"
              className={styles.newsroomCta}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

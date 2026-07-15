import Image from "next/image";
import CtaButton from "@/components/shared/CtaButton";
import StoryCard from "@/components/shared/StoryCard";
import styles from "./InMotion.module.css";

const stories = [
    {
        text: "Atlanta Life & Rajah Caruth\nNASCAR Daytona International Speedway",
        href: "/newsroom",
        image: "/inmotion/inmotion-nascar.png",
        alt: "Atlanta Life and Rajah Caruth at NASCAR Daytona International Speedway",
        layout: "nascar",
    },
    {
        text: "Atlanta Life Hosts Author Tayari Jones – Exclusive Interview, Book Signing and Q&A",
        href: "/newsroom",
        image: "/inmotion/inmotion-3women.avif",
        alt: "Atlanta Life Hosts Author Tayari Jones",
        layout: "topRight",
    },
    {
        text: "Atlanta Life Power Home Remodeling Financial Literacy Education Event",
        href: "/newsroom",
        image: "/inmotion/inmontion-speaker.avif",
        alt: "Atlanta Life Power Home Remodeling Financial Literacy Education Event",
        layout: "bottomLeft",
    },
    {
        text: "Atlanta Life at inaugural HBCU Aware Fest",
        href: "/newsroom",
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
                    <p className={styles.eyebrow}>In motion</p>
                    <h2 className={styles.heading}>Always moving, always present.</h2>
                    <p className={styles.body}>
                        From conference stages to community gatherings, from published insights to
                        partnerships that extend our reach — Atlanta Life Group Solutions remains
                        active in the spaces that matter. This is a look at what we&apos;ve been
                        building lately.
                    </p>
                </div>

                <ul className={styles.grid}>
                    {stories.map((story) => (
                        <li
                            key={story.image}
                            className={`${styles.cell} ${layoutClass[story.layout]}`}
                        >
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
                        </li>
                    ))}
                </ul>

                <div className={styles.newsroom}>
                    <CtaButton
                        text="Visit our newsroom for all stories"
                        href="/newsroom"
                        className={styles.newsroomCta}
                    />
                </div>
            </div>
        </section>
    );
}

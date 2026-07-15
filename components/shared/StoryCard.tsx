import CtaButton from "@/components/shared/CtaButton";
import styles from "./StoryCard.module.css";

type StoryCardProps = {
    text: string;
    href: string;
};

export default function StoryCard({ text, href }: StoryCardProps) {
    return (
        <div className={styles.card}>
            <p className={styles.title}>{text}</p>
            <CtaButton text="View Story" href={href} arrow />
        </div>
    );
}

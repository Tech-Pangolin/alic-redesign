import styles from "./ImagePlaceholder.module.css";

const aspectClass = {
    "6/5": styles.ratio65,
    "3/2": styles.ratio32,
    "4/3": styles.ratio43,
    "16/10": styles.ratio1610,
} as const;

type Aspect = keyof typeof aspectClass;

type ImagePlaceholderProps = {
    label: string;
    aspect?: Aspect;
    tone?: "default" | "warm";
};

export default function ImagePlaceholder({
    label,
    aspect = "16/10",
    tone = "default",
}: ImagePlaceholderProps) {
    return (
        <div
            role="img"
            aria-label={label}
            className={`${styles.root} ${aspectClass[aspect]} ${tone === "warm" ? styles.warm : ""}`}
        >
            <span className={styles.label}>{label}</span>
        </div>
    );
}

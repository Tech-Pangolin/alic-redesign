"use client";

import {
    type CSSProperties,
    type ReactNode,
    useEffect,
    useRef,
    useState,
} from "react";
import styles from "./Reveal.module.css";

type RevealVariant = "fadeUp" | "image";

type RevealProps = {
    children: ReactNode;
    variant?: RevealVariant;
    delay?: number;
    className?: string;
};

export default function Reveal({
    children,
    variant = "fadeUp",
    delay = 0,
    className = "",
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            // eslint-disable-next-line react-hooks/set-state-in-effect -- reduced-motion users skip the scroll animation and show content immediately
            setInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                setInView(true);
                observer.unobserve(entry.target);
            },
            { threshold: 0.15 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const variantClass =
        variant === "image" ? styles.image : styles.fadeUp;

    return (
        <div
            ref={ref}
            className={`${styles.root} ${variantClass} ${inView ? styles.inView : ""} ${className}`.trim()}
            style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
        >
            {children}
        </div>
    );
}

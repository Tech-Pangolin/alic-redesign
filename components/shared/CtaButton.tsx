import Link from "next/link";

export default function CtaButton({
    text = "Partner With Us",
    href = "/contact",
    arrow = true,
    className,
    onClick,
}: {
    text?: string;
    href?: string;
    arrow?: boolean;
    className?: string;
    onClick?: () => void;
}) {
    return (
        <Link
            href={href}
            className={`inline-flex items-center justify-center gap-2 rounded-full bg-alic-gold px-5 py-2.5 text-center text-sm font-semibold text-alic-navy ${className ?? ""}`}
            onClick={onClick}
        >
            {text}
            {arrow ? <span aria-hidden="true">→</span> : null}
        </Link>
    );
}

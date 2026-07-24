import Link from "next/link";

const sizeClasses = {
    default:
        "gap-3 px-[1.875rem] py-[0.9375rem] text-[1.3125rem]",
    compact:
        "gap-1.5 whitespace-nowrap px-3.5 py-2 text-sm sm:px-4 sm:py-2.5 sm:text-[0.9375rem] lg:gap-3 lg:px-[1.875rem] lg:py-[0.9375rem] lg:text-[1.3125rem]",
} as const;

export default function CtaButton({
    text = "Partner With Us",
    href = "/contact",
    arrow = true,
    size = "default",
    className,
    onClick,
}: {
    text?: string;
    href?: string;
    arrow?: boolean;
    size?: keyof typeof sizeClasses;
    className?: string;
    onClick?: () => void;
}) {
    return (
        <Link
            href={href}
            className={`inline-flex items-center justify-center rounded-full bg-alic-gold text-center font-semibold text-alic-navy ${sizeClasses[size]} ${className ?? ""}`}
            onClick={onClick}
        >
            {text}
            {arrow ? <span aria-hidden="true">→</span> : null}
        </Link>
    );
}

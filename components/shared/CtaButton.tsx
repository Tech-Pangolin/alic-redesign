import Link from "next/link";

export default function CtaButton({
    text = 'Partner With Us',
    arrow = true,
    className,
    onClick,
}: {
    text?: string;
    arrow?: boolean;
    className?: string;
    onClick?: () => void;
}) {
    return (
        <Link 
            href="/contact" 
            className={`inline-flex items-center gap-2 rounded-full bg-alic-gold px-4 py-2.5 text-sm font-semibold text-alic-navy ${className}`} 
            onClick={onClick}>

            {text}{arrow ? <span aria-hidden="true">→</span> : null}
        </Link>
    );
}   
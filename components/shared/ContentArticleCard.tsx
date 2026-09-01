import Link from "next/link";

export type ContentArticleCardProps = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
  headerColor: string;
  variant?: "light" | "dark";
  linkLabel?: string;
  className?: string;
};

export default function ContentArticleCard({
  category,
  title,
  excerpt,
  date,
  href,
  headerColor,
  variant = "light",
  linkLabel = "View article",
  className = "",
}: ContentArticleCardProps) {
  const isDark = variant === "dark";

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-2xl ${
        isDark
          ? "border border-alic-cream/15 bg-alic-navy"
          : "border border-alic-navy/10 bg-white shadow-sm transition-shadow hover:shadow-md"
      } ${className}`}
    >
      <Link href={href} className="block" aria-hidden="true" tabIndex={-1}>
        <div
          className="relative h-36 w-full shrink-0"
          style={{ backgroundColor: headerColor }}
        >
          <div className="absolute inset-x-0 bottom-0 h-1 bg-alic-gold" />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <span className="font-sans text-xs font-semibold uppercase tracking-wide text-alic-gold">
          {category}
        </span>
        <h3
          className={`mt-2 font-serif font-normal leading-snug ${
            isDark ? "text-base text-alic-cream" : "text-xl text-alic-navy"
          }`}
        >
          <Link
            href={href}
            className="transition-colors hover:text-alic-gold"
          >
            {title}
          </Link>
        </h3>
        <p
          className={`mt-2 flex-1 font-sans text-sm leading-relaxed ${
            isDark ? "text-alic-cream/70" : "text-alic-navy/80"
          }`}
        >
          {excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <time
            className={`font-sans text-sm ${
              isDark ? "text-alic-cream/60" : "text-alic-navy/60"
            }`}
          >
            {date}
          </time>
          <Link
            href={href}
            className={`inline-flex items-center gap-1.5 font-sans text-sm font-semibold transition-colors hover:text-alic-gold ${
              isDark ? "text-alic-gold" : "text-alic-navy"
            }`}
          >
            {linkLabel} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

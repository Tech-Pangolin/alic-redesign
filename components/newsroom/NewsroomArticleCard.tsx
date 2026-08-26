import Link from "next/link";
import {
  CATEGORY_COLORS,
  type NewsroomArticle,
} from "@/lib/newsroom";

export default function NewsroomArticleCard({
  id,
  category,
  title,
  excerpt,
  date,
}: NewsroomArticle) {
  const headerColor = CATEGORY_COLORS[category];
  const href = `/about/newsroom/${id}`;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-alic-navy/10 bg-white shadow-sm transition-shadow hover:shadow-md">
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
        <h3 className="mt-2 font-serif text-xl font-normal leading-snug text-alic-navy">
          <Link
            href={href}
            className="transition-colors hover:text-alic-gold"
          >
            {title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-alic-navy/80">
          {excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <time className="font-sans text-sm text-alic-navy/60">{date}</time>
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-alic-navy transition-colors hover:text-alic-gold"
          >
            View article <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

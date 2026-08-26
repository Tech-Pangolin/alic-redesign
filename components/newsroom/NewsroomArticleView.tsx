import Image from "next/image";
import Link from "next/link";
import {
  CATEGORY_COLORS,
  type NewsroomArticle,
} from "@/lib/newsroom";

export default function NewsroomArticleView({
  article,
}: {
  article: NewsroomArticle;
}) {
  const headerColor = CATEGORY_COLORS[article.category];
  const meta = [article.date, article.location].filter(Boolean).join(" · ");

  return (
    <article className="bg-alic-cream">
      <div className="mx-auto w-full max-w-6xl px-6 pt-8 md:px-10 md:pt-10">
        <Link
          href="/about/newsroom"
          className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-alic-navy transition-colors hover:text-alic-gold"
        >
          <span aria-hidden="true">←</span> Newsroom
        </Link>
      </div>

      <div className="mx-auto mt-6 w-full max-w-6xl px-6 md:px-10">
        <div className="relative h-40 w-full overflow-hidden rounded-2xl md:h-48">
          {article.heroImage ? (
            <Image
              src={article.heroImage}
              alt=""
              fill
              priority
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{ backgroundColor: headerColor }}
              aria-hidden="true"
            />
          )}
          <div className="absolute inset-x-0 bottom-0 h-1 bg-alic-gold" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-3xl px-6 py-10 md:px-10 md:py-14">
        <p className="font-sans text-xs font-semibold uppercase tracking-wide text-alic-gold">
          {article.category}
        </p>
        <h1 className="mt-3 font-serif text-3xl font-normal leading-tight text-alic-navy md:text-4xl">
          {article.title}
        </h1>
        {meta ? (
          <p className="mt-3 font-sans text-sm text-alic-navy/60">{meta}</p>
        ) : null}
        {article.tags?.length ? (
          <p className="mt-2 font-sans text-xs text-alic-navy/50">
            {article.tags.join(" · ")}
          </p>
        ) : null}

        <div className="mt-10 space-y-10">
          {article.sections.map((section, index) => (
            <section key={section.heading ?? `intro-${index}`}>
              {section.heading ? (
                <h2 className="font-serif text-2xl font-normal text-alic-navy">
                  {section.heading}
                </h2>
              ) : null}
              <div
                className={`space-y-4 font-sans text-base leading-relaxed text-alic-navy/85 ${
                  section.heading ? "mt-4" : ""
                }`}
              >
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={`${index}-${pIndex}`}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 border-t border-alic-navy/10 pt-8">
          <Link
            href="/about/newsroom"
            className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-alic-navy transition-colors hover:text-alic-gold"
          >
            <span aria-hidden="true">←</span> Back to Newsroom
          </Link>
        </div>
      </div>
    </article>
  );
}

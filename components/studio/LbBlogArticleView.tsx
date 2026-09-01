import Link from "next/link";
import { LB_BLOG_COLOR, type LbBlogPost } from "@/lib/lb-blog";

export default function LbBlogArticleView({ post }: { post: LbBlogPost }) {
  return (
    <article className="bg-alic-deep text-alic-cream">
      <div className="mx-auto w-full max-w-6xl px-6 pt-8 md:px-10 md:pt-10">
        <Link
          href="/solutions/livebalanced-studio"
          className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-alic-cream transition-colors hover:text-alic-gold"
        >
          <span aria-hidden="true">←</span> LiveBalanced Studio
        </Link>
      </div>

      <div className="mx-auto mt-6 w-full max-w-6xl px-6 md:px-10">
        <div className="relative h-40 w-full overflow-hidden rounded-2xl md:h-48">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: LB_BLOG_COLOR }}
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-alic-gold" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-3xl px-6 py-10 md:px-10 md:py-14">
        <p className="font-sans text-xs font-semibold uppercase tracking-wide text-alic-gold">
          {post.category}
        </p>
        <h1 className="mt-3 font-serif text-3xl font-normal leading-tight md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 font-sans text-sm text-alic-cream/60">
          {post.date} · {post.author}
        </p>

        <div className="mt-10 space-y-10">
          {post.sections.map((section, index) => (
            <section key={section.heading ?? `intro-${index}`}>
              {section.heading ? (
                <h2 className="font-serif text-2xl font-normal text-alic-cream">
                  {section.heading}
                </h2>
              ) : null}
              <div
                className={`space-y-4 font-sans text-base leading-relaxed text-alic-cream/85 ${
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

        <div className="mt-14 border-t border-alic-cream/10 pt-8">
          <Link
            href="/solutions/livebalanced-studio"
            className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-alic-cream transition-colors hover:text-alic-gold"
          >
            <span aria-hidden="true">←</span> Back to LiveBalanced Studio
          </Link>
        </div>
      </div>
    </article>
  );
}

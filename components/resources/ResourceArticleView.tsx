import Link from "next/link";
import {
  AUDIENCE_COLORS,
  AUDIENCE_HUB_PATHS,
  AUDIENCE_LABELS,
  type ResourceArticle,
  type ResourceSection,
  type ResourceSubsection,
} from "@/lib/resources";

function renderSubsection(subsection: ResourceSubsection) {
  return (
    <div key={subsection.heading} className="mt-6">
      <h3 className="font-serif text-xl font-normal text-alic-navy">
        {subsection.heading}
      </h3>
      {subsection.paragraphs?.length ? (
        <div className="mt-3 space-y-4 font-sans text-base leading-relaxed text-alic-navy/85">
          {subsection.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      ) : null}
      {subsection.bullets?.length ? (
        <ul className="mt-3 list-disc space-y-2 pl-5 font-sans text-base leading-relaxed text-alic-navy/85">
          {subsection.bullets.map((bullet) => (
            <li key={bullet.slice(0, 40)}>{bullet}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function renderSection(section: ResourceSection, index: number) {
  return (
    <section key={section.heading ?? `intro-${index}`}>
      {section.heading ? (
        <h2 className="font-serif text-2xl font-normal text-alic-navy">
          {section.heading}
        </h2>
      ) : null}
      {section.paragraphs?.length ? (
        <div
          className={`space-y-4 font-sans text-base leading-relaxed text-alic-navy/85 ${
            section.heading ? "mt-4" : ""
          }`}
        >
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      ) : null}
      {section.bullets?.length ? (
        <ul
          className={`list-disc space-y-2 pl-5 font-sans text-base leading-relaxed text-alic-navy/85 ${
            section.heading || section.paragraphs?.length ? "mt-4" : ""
          }`}
        >
          {section.bullets.map((bullet) => (
            <li key={bullet.slice(0, 40)}>{bullet}</li>
          ))}
        </ul>
      ) : null}
      {section.subsections?.length ? (
        <div className={section.heading ? "mt-2" : ""}>
          {section.subsections.map((subsection) =>
            renderSubsection(subsection),
          )}
        </div>
      ) : null}
    </section>
  );
}

export default function ResourceArticleView({
  article,
}: {
  article: ResourceArticle;
}) {
  const headerColor = AUDIENCE_COLORS[article.audience];
  const hubPath = AUDIENCE_HUB_PATHS[article.audience];
  const hubLabel = AUDIENCE_LABELS[article.audience];

  return (
    <article className="bg-alic-cream">
      <div className="mx-auto w-full max-w-6xl px-6 pt-8 md:px-10 md:pt-10">
        <Link
          href={hubPath}
          className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-alic-navy transition-colors hover:text-alic-gold"
        >
          <span aria-hidden="true">←</span> {hubLabel}
        </Link>
      </div>

      <div className="mx-auto mt-6 w-full max-w-6xl px-6 md:px-10">
        <div className="relative h-40 w-full overflow-hidden rounded-2xl md:h-48">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: headerColor }}
            aria-hidden="true"
          />
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

        <div className="mt-10 space-y-10">
          {article.sections.map((section, index) =>
            renderSection(section, index),
          )}
        </div>

        {article.cta ? (
          <div className="mt-10">
            <Link
              href={article.cta.href}
              className="inline-flex items-center gap-2 rounded-full bg-alic-navy px-6 py-3 font-sans text-sm font-semibold text-alic-cream transition-opacity hover:opacity-90"
            >
              {article.cta.label} <span aria-hidden="true">→</span>
            </Link>
          </div>
        ) : null}

        {article.disclaimer ? (
          <p className="mt-10 border-t border-alic-navy/10 pt-8 font-sans text-sm italic leading-relaxed text-alic-navy/70">
            {article.disclaimer}
          </p>
        ) : null}

        {article.sources?.length ? (
          <div className="mt-8">
            <h2 className="font-serif text-xl font-normal text-alic-navy">
              Sources
            </h2>
            <ul className="mt-4 space-y-2">
              {article.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-alic-navy underline decoration-alic-navy/30 underline-offset-2 transition-colors hover:text-alic-gold hover:decoration-alic-gold"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-14 border-t border-alic-navy/10 pt-8">
          <Link
            href={hubPath}
            className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-alic-navy transition-colors hover:text-alic-gold"
          >
            <span aria-hidden="true">←</span> Back to {hubLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}

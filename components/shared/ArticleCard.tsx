import Link from "next/link";

export type Article = {
  category: string;
  title: string;
  description: string;
  href?: string;
};

export function ArticleCard({
  category,
  title,
  description,
  href = "#",
}: Article) {
  return (
    <article className="flex flex-col rounded-2xl border border-alic-navy/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <span className="font-sans text-xs font-semibold uppercase tracking-wide text-alic-gold">
        {category}
      </span>
      <h3 className="mt-3 font-serif text-xl font-normal text-alic-navy">
        {title}
      </h3>
      <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-alic-navy/80">
        {description}
      </p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-2 font-sans font-semibold text-alic-navy transition-colors hover:text-alic-gold"
      >
        Read more <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

export default function ArticleGrid({ articles }: { articles: Article[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard key={article.title} {...article} />
      ))}
    </div>
  );
}

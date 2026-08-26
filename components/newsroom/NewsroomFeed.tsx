"use client";

import { useState } from "react";
import NewsroomArticleCard from "@/components/newsroom/NewsroomArticleCard";
import {
  NEWSROOM_CATEGORIES,
  type NewsroomArticle,
  type NewsroomCategory,
} from "@/lib/newsroom";

type FilterCategory = "all" | NewsroomCategory;

const FILTER_OPTIONS: { value: FilterCategory; label: string }[] = [
  { value: "all", label: "All articles" },
  ...NEWSROOM_CATEGORIES.map((category) => ({
    value: category as FilterCategory,
    label: category,
  })),
];

export default function NewsroomFeed({
  articles,
}: {
  articles: NewsroomArticle[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FilterCategory>("all");

  const normalized = query.trim().toLowerCase();
  const filtered = articles.filter((article) => {
    const matchesCategory =
      category === "all" || article.category === category;
    if (!matchesCategory) return false;
    if (!normalized) return true;
    return (
      article.title.toLowerCase().includes(normalized) ||
      article.excerpt.toLowerCase().includes(normalized)
    );
  });

  return (
    <div>
      <label className="sr-only" htmlFor="newsroom-search">
        Search articles by keyword
      </label>
      <input
        id="newsroom-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search articles by keyword..."
        className="w-full rounded-full border-2 border-alic-navy/15 bg-white px-5 py-3 font-sans text-base text-alic-navy outline-none transition-colors placeholder:text-alic-navy/45 focus:border-alic-gold"
      />

      <div
        className="mt-6 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter by category"
      >
        {FILTER_OPTIONS.map((option) => {
          const active = category === option.value;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={active}
              onClick={() => setCategory(option.value)}
              className={`rounded-full px-4 py-2 font-sans text-sm font-medium transition-colors ${
                active
                  ? "bg-alic-navy text-alic-cream"
                  : "border border-alic-navy/20 bg-transparent text-alic-navy hover:border-alic-navy/40 hover:bg-alic-warm/30"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <p className="mt-6 font-sans text-sm text-alic-navy/60" aria-live="polite">
        Showing {filtered.length}{" "}
        {filtered.length === 1 ? "article" : "articles"}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <NewsroomArticleCard key={article.id} {...article} />
          ))}
        </div>
      ) : (
        <p className="mt-8 font-sans text-base text-alic-navy/70">
          No articles match your search. Try a different keyword or category.
        </p>
      )}
    </div>
  );
}

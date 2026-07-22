"use client";

import { useRef, type ReactNode } from "react";

type CarouselProps = {
  children: ReactNode;
  label?: string;
  dark?: boolean;
};

export default function Carousel({ children, label, dark = false }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByDir = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  const buttonClass = dark
    ? "inline-flex h-11 w-11 items-center justify-center rounded-full border border-alic-cream/30 text-alic-cream transition-colors hover:bg-alic-cream hover:text-alic-navy"
    : "inline-flex h-11 w-11 items-center justify-center rounded-full border border-alic-navy/20 text-alic-navy transition-colors hover:bg-alic-navy hover:text-alic-cream";

  return (
    <div className="relative" role="region" aria-label={label} aria-roledescription="carousel">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
      >
        {children}
      </div>
      <div className="mt-2 flex gap-3">
        <button
          type="button"
          onClick={() => scrollByDir(-1)}
          aria-label="Previous"
          className={buttonClass}
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          onClick={() => scrollByDir(1)}
          aria-label="Next"
          className={buttonClass}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}

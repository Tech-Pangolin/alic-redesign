import type { Metadata } from "next";
import Image from "next/image";
import NewsroomFeed from "@/components/newsroom/NewsroomFeed";
import { newsroomArticles } from "@/lib/newsroom";

export const metadata: Metadata = {
  title: "Newsroom | ALIC Group Solutions — Atlanta Life Insurance Company",
  description:
    "Stories from Atlanta Life Group Solutions — community events, corporate partnerships, industry conferences, and company updates.",
};

export default function NewsroomPage() {
  return (
    <main className="flex-1 bg-alic-cream">
      <section className="relative isolate flex min-h-[14rem] w-full items-center justify-center overflow-hidden md:min-h-[18rem]">
        <Image
          src="/inmotion/inmotion-3women.avif"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-alic-navy/65" aria-hidden="true" />
        <h1 className="relative z-10 px-6 text-center font-serif text-4xl font-normal text-white md:text-5xl lg:text-6xl">
          Newsroom
        </h1>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10 md:py-16">
        <NewsroomFeed articles={newsroomArticles} />
      </section>
    </main>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { getCoursesByStatus, type CeCourseStatus } from "@/lib/ce-courses";

type Tab = CeCourseStatus;

const TAB_OPTIONS: { value: Tab; label: string }[] = [
  { value: "upcoming", label: "Upcoming" },
  { value: "past", label: "Past" },
];

function CeCourseCard({ course }: { course: ReturnType<typeof getCoursesByStatus>[number] }) {
  if (course.isPlaceholder) {
    return (
      <article className="flex flex-col rounded-2xl border border-dashed border-alic-navy/25 bg-white/60 p-6">
        <span className="font-sans text-xs font-semibold uppercase tracking-wide text-alic-navy/50">
          {course.format}
        </span>
        <h3 className="mt-3 font-serif text-xl font-normal text-alic-navy/50">
          {course.title}
        </h3>
        <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-alic-navy/50">
          Course details appear here as new CE opportunities are confirmed and
          added.
        </p>
      </article>
    );
  }

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-alic-navy/10 bg-white shadow-sm">
      <div className="h-1 bg-alic-gold" aria-hidden="true" />
      <div className="flex flex-1 flex-col p-6">
        <span className="font-sans text-xs font-semibold uppercase tracking-wide text-alic-gold">
          {course.format}
        </span>
        <h3 className="mt-3 font-serif text-xl font-normal text-alic-navy">
          {course.title}
        </h3>
        {course.dateTime ? (
          <p className="mt-2 font-sans text-sm font-medium text-alic-navy/80">
            {course.dateTime}
          </p>
        ) : null}
        {course.presenter ? (
          <p className="mt-1 font-sans text-sm text-alic-navy/70">
            {course.presenter}
          </p>
        ) : null}
        {course.host ? (
          <p className="font-sans text-sm text-alic-navy/70">{course.host}</p>
        ) : null}
        {course.description ? (
          <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-alic-navy/80">
            {course.description}
          </p>
        ) : null}
        {course.ceuCredits ? (
          <div className="mt-4 rounded-xl bg-alic-warm/40 px-4 py-3">
            <p className="font-sans text-xs font-semibold uppercase tracking-wide text-alic-navy/60">
              CEU Credits
            </p>
            <p className="mt-1 font-sans text-sm text-alic-navy/85">
              {course.ceuCredits}
            </p>
          </div>
        ) : null}
        {course.registerUrl ? (
          <Link
            href={course.registerUrl}
            className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-alic-navy px-6 py-3 font-sans text-sm font-semibold text-alic-cream transition-opacity hover:opacity-90"
          >
            Register now
          </Link>
        ) : null}
      </div>
    </article>
  );
}

export default function CeCourseGrid() {
  const [tab, setTab] = useState<Tab>("upcoming");
  const courses = getCoursesByStatus(tab);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter courses by timeframe"
      >
        {TAB_OPTIONS.map((option) => {
          const active = tab === option.value;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={active}
              onClick={() => setTab(option.value)}
              className={`rounded-full px-5 py-2.5 font-sans text-sm font-medium transition-colors ${
                active
                  ? "bg-alic-navy text-alic-cream"
                  : "border border-alic-navy/20 bg-white text-alic-navy hover:border-alic-navy/40 hover:bg-alic-warm/30"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <p className="mt-6 font-sans text-sm text-alic-navy/60" aria-live="polite">
        {tab === "upcoming"
          ? "Showing upcoming courses"
          : "Showing past courses"}
      </p>

      {courses.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-alic-navy/10 bg-white p-10 text-center">
          <p className="font-sans text-base text-alic-navy/70">
            No past courses yet.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CeCourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}

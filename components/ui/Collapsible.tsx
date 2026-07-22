"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type CollapsibleProps = {
  id: string;
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
};

export default function Collapsible({
  id,
  title,
  defaultOpen = false,
  children,
}: CollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const openIfHash = () => {
      if (window.location.hash === `#${id}`) {
        setOpen(true);
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    openIfHash();
    window.addEventListener("hashchange", openIfHash);
    return () => window.removeEventListener("hashchange", openIfHash);
  }, [id]);

  return (
    <div ref={ref} id={id} className="scroll-mt-28 border-b border-alic-navy/15">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-serif text-2xl font-normal text-alic-navy md:text-3xl">
          {title}
        </span>
        <span aria-hidden="true" className="text-3xl leading-none text-alic-gold">
          {open ? "\u2212" : "+"}
        </span>
      </button>
      <div id={`${id}-panel`} hidden={!open} className="pb-8">
        {children}
      </div>
    </div>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";

export type PillarStat = {
  value: string;
  source?: string;
};

export type Pillar = {
  id?: string;
  name: string;
  description: string;
  href?: string;
  stats?: PillarStat[];
  icon?: ReactNode;
};

export default function PillarBoxes({ pillars }: { pillars: Pillar[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {pillars.map((pillar) => (
        <div
          key={pillar.name}
          id={pillar.id}
          tabIndex={0}
          className="group relative flex min-h-[17rem] scroll-mt-28 flex-col overflow-hidden rounded-2xl bg-alic-navy p-6 text-alic-cream outline-none transition-colors duration-300 hover:bg-alic-deep focus-visible:bg-alic-deep focus-visible:ring-2 focus-visible:ring-alic-gold"
        >
          <div className="flex items-center gap-3">
            {pillar.icon ? (
              <span aria-hidden="true" className="text-alic-gold">
                {pillar.icon}
              </span>
            ) : null}
            <h3 className="font-serif text-xl font-normal">{pillar.name}</h3>
          </div>

          <div className="mt-4 flex-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 group-focus-visible:opacity-100 group-target:opacity-100">
            <p className="text-sm leading-relaxed text-alic-cream/85">
              {pillar.description}
            </p>
            {pillar.stats?.length ? (
              <ul className="mt-3 space-y-2">
                {pillar.stats.map((stat) => (
                  <li key={stat.value} className="text-xs text-alic-cream/70">
                    <span className="font-semibold text-alic-gold">
                      {stat.value}
                    </span>
                    {stat.source ? ` — ${stat.source}` : null}
                  </li>
                ))}
              </ul>
            ) : null}
            {pillar.href ? (
              <Link
                href={pillar.href}
                className="mt-4 inline-flex items-center gap-2 font-sans text-sm font-semibold text-alic-gold hover:underline"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

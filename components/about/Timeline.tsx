"use client";

import Image from "next/image";
import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Reveal from "@/components/ui/Reveal";
import styles from "./Timeline.module.css";

type ImageVariant = "portrait" | "banner" | "wide" | "tall" | "wideAlt";

type TimelineEntry = {
  year: string;
  title: string;
  body: string;
  image: string;
  imageLeft: boolean;
  variant?: ImageVariant;
};

type ConnectorGeometry = {
  top: number;
  left: number;
  height: number;
};

const TEXT_INSET_PX = 30;

const variantConfig: Record<
  ImageVariant,
  { width: number; height: number; className: string }
> = {
  portrait: { width: 600, height: 625, className: styles.imagePortrait },
  banner: { width: 600, height: 750, className: styles.imageBanner },
  wide: { width: 840, height: 640, className: styles.imageWide },
  tall: { width: 450, height: 750, className: styles.imageTall },
  wideAlt: { width: 837, height: 639, className: styles.imageWideAlt },
};

const entries: TimelineEntry[] = [
  {
    year: "1858",
    title: "Alonzo Franklin Herndon is born",
    body: "Alonzo Franklin Herndon is born on June 26, 1858, in Walton County, Georgia. He is emancipated at the end of the Civil War.",
    image: "/about/alonzo-herndon.avif",
    imageLeft: true,
    variant: "portrait",
  },
  {
    year: "1870s – 1890s",
    title: "Building a fortune in Atlanta",
    body: "Herndon learns the barbering trade and relocates to Atlanta, where he builds one of the most successful barbering enterprises in the city — eventually owning three barbershops, including a renowned establishment at 66 Peachtree Street. He invests his earnings in Atlanta real estate and becomes the wealthiest African American in the city and the first African American millionaire in the south.",
    image: "/about/crystal-palace.avif",
    imageLeft: true,
    variant: "banner",
  },
  {
    year: "1905",
    title: "Atlanta Life is founded",
    body: "African American families in the United States did not have access to life insurance and financial services from established institutions at the time. Recognizing that need, Herndon acquires the Atlanta Benevolent and Protective Association for $140, consolidates it with two additional organizations, and on September 21, 1905, formally establishes the Atlanta Mutual Insurance Association — the company that would become Atlanta Life Insurance Company.",
    image: "/about/atlanta-life-insurance-salesmen.avif",
    imageLeft: true,
    variant: "wide",
  },
  {
    year: "1922",
    title: "Atlanta Life Insurance Company",
    body: "The company is reincorporated as the Atlanta Life Insurance Company — one of only five Black-owned insurance companies in the nation to hold legal reserve status at the time.",
    image: "/about/atlanta-life-insurance-company.avif",
    imageLeft: true,
    variant: "wide",
  },
  {
    year: "1927 – 1952",
    title: "Norris B. Herndon carries the legacy forward",
    body: "Upon Alonzo's passing in 1927, his son Norris B. Herndon — a Harvard MBA graduate — assumes leadership. Under his stewardship Atlanta Life continues to grow. In 1952, Norris establishes the Alonzo F. and Norris B. Herndon Foundation, dedicated to education, mentorship, and entrepreneurship. The Foundation has since contributed more than five million dollars to churches, nonprofits, and educational institutions.",
    image: "/about/Norris-Bumstead-Herndon.avif",
    imageLeft: true,
    variant: "tall",
  },
  {
    year: "2023",
    title: "A new chapter. The same conviction.",
    body: "Atlanta Life Insurance Company was acquired by Atlanta Life Holdings — a minority-owned insurance holding company — and reentered the market with renewed leadership, restored focus, and the same founding mission that has guided this organization since 1905. With the partnership of Earvin \"Magic\" Johnson and his EquiTrust Life Insurance Company, Atlanta Life stepped forward with expanded resources and a clear commitment to building on what the Herndon family began. The mission remains unchanged. The momentum is new.",
    image: "/about/a-new-chapter.avif",
    imageLeft: true,
    variant: "wideAlt",
  },
];

export default function Timeline() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const copyRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [connectors, setConnectors] = useState<ConnectorGeometry[]>([]);

  const updateConnectors = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const wrapRect = wrap.getBoundingClientRect();
    const next: ConnectorGeometry[] = [];

    for (let i = 0; i < entries.length - 1; i++) {
      const from = copyRefs.current[i];
      const to = copyRefs.current[i + 1];
      if (!from || !to) continue;

      const fromRect = from.getBoundingClientRect();
      const toRect = to.getBoundingClientRect();
      const top = fromRect.bottom - wrapRect.top + TEXT_INSET_PX;
      const bottom = toRect.top - wrapRect.top - TEXT_INSET_PX;
      const height = bottom - top;
      if (height <= 0) continue;

      next.push({
        top,
        left: fromRect.left - wrapRect.left + fromRect.width / 2,
        height,
      });
    }

    setConnectors(next);
  }, []);

  useLayoutEffect(() => {
    updateConnectors();

    const wrap = wrapRef.current;
    const list = listRef.current;
    if (!wrap || !list) return;

    const observer = new ResizeObserver(() => updateConnectors());
    observer.observe(wrap);
    observer.observe(list);
    copyRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    const images = list.querySelectorAll("img");
    images.forEach((img) => img.addEventListener("load", updateConnectors));
    window.addEventListener("resize", updateConnectors);

    return () => {
      observer.disconnect();
      images.forEach((img) =>
        img.removeEventListener("load", updateConnectors),
      );
      window.removeEventListener("resize", updateConnectors);
    };
  }, [updateConnectors]);

  return (
    <section className={styles.section} aria-label="The founding">
      <div className={styles.inner}>
        <div ref={wrapRef} className={styles.listWrap}>
          <div className={styles.connectors} aria-hidden="true">
            {connectors.map((connector, index) => (
              <div
                key={`connector-${index}`}
                className={styles.connector}
                style={{
                  top: connector.top,
                  left: connector.left,
                  height: connector.height,
                }}
              />
            ))}
          </div>

          <ul ref={listRef} className={styles.list}>
            {entries.map((entry, index) => {
              const variant = entry.variant
                ? variantConfig[entry.variant]
                : undefined;

              return (
                <li
                  key={entry.year}
                  className={`${styles.row} ${entry.imageLeft ? styles.imageLeft : styles.imageRight}`}
                >
                  <div className={styles.media}>
                    <Reveal variant="image">
                      <Image
                        src={entry.image}
                        alt={entry.title}
                        width={variant?.width ?? 1200}
                        height={variant?.height ?? 800}
                        className={`${styles.image} ${variant?.className ?? ""}`}
                      />
                    </Reveal>
                  </div>

                  <div
                    className={styles.copy}
                    ref={(node) => {
                      copyRefs.current[index] = node;
                    }}
                  >
                    <Reveal delay={100}>
                      <h3 className={styles.year}>{entry.year}</h3>
                    </Reveal>
                    <Reveal delay={200}>
                      <p className={styles.title}>{entry.title}</p>
                    </Reveal>
                    <Reveal delay={300}>
                      <p className={styles.body}>{entry.body}</p>
                    </Reveal>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

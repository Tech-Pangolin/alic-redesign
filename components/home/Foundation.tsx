import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import styles from "./Foundation.module.css";

export default function Foundation() {
  return (
    <section id="foundation" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.column1}>
          <Reveal variant="image" className={styles.media}>
            <span className={styles.accent} aria-hidden="true" />
            <Image
              src="/foundation/foundation-left.png"
              alt="Atlanta Life foundation"
              width={640}
              height={800}
              className={styles.image}
            />
          </Reveal>
        </div>

        <div className={styles.column2}>
          <Reveal>
            <h2 className={styles.title}>
              Some things don&apos;t change. For us, that&apos;s intentional.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className={styles.copy}>
              <p>
                Atlanta Life Insurance Company was founded with a singular
                purpose — to give families the means to protect what they had
                built and secure what they hoped to leave behind. That purpose
                has carried this organization for more than a century.
              </p>
              <p>
                Atlanta Life Group Solutions carries it forward today. We
                partner with corporations, government agencies, educational
                institutions, and other organizations — bringing solutions,
                expertise, and a depth of commitment that is inseparable from
                who we are.
              </p>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <Link href="#work" className={styles.cta}>
              See What Drives Us
              <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>

        <div className={styles.column3}>
          <Reveal variant="image" delay={220} className={styles.media}>
            <span className={styles.accentLeft} aria-hidden="true" />
            <Image
              src="/foundation/foundation-right.png"
              alt="Atlanta Life community"
              width={640}
              height={800}
              className={styles.image}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

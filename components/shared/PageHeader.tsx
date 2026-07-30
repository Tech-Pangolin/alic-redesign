import Image from "next/image";

type PageHeaderProps = {
  title: string;
  subheadline?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function PageHeader({
  title,
  subheadline,
  imageSrc = "/hero/hero-image.png",
  imageAlt = "Atlanta Life Group Solutions",
}: PageHeaderProps) {
  return (
    <section
      className="relative isolate w-full overflow-hidden bg-alic-navy"
      style={{ backgroundImage: "var(--alic-mesh-image)" }}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-4 px-6 py-5 md:grid-cols-2 md:gap-6 md:px-10 md:py-7">
        <div>
          <h1 className="font-serif text-2xl font-normal leading-tight text-alic-gold md:text-3xl lg:text-4xl">
            {title}
          </h1>
          {subheadline ? (
            <p className="mt-1.5 max-w-2xl font-sans text-sm leading-relaxed text-white md:mt-2 md:text-base">
              {subheadline}
            </p>
          ) : null}
        </div>

        <div className="flex w-full items-center justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={190}
            height={159}
            priority
            sizes="(max-width: 1024px) 40vw, 190px"
            className="h-auto w-full max-w-[140px] object-contain sm:max-w-[160px] lg:max-w-[190px]"
          />
        </div>
      </div>
    </section>
  );
}

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
  imageSrc,
  imageAlt = "",
}: PageHeaderProps) {
  return (
    <section
      className="relative isolate w-full overflow-hidden bg-alic-navy text-alic-cream"
      style={imageSrc ? undefined : { backgroundImage: "var(--alic-mesh-image)" }}
    >
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <div
            className="absolute inset-0 -z-10 bg-alic-navy/65"
            aria-hidden="true"
          />
        </>
      ) : null}
      <div className="mx-auto w-full px-10 py-20 md:py-28">
        <h1 className="font-serif text-4xl font-normal leading-tight md:text-6xl">
          {title}
        </h1>
        {subheadline ? (
          <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed text-alic-cream/85 md:text-xl">
            {subheadline}
          </p>
        ) : null}
      </div>
    </section>
  );
}

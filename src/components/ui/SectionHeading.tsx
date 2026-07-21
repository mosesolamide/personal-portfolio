import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mx-auto max-w-2xl ${isCenter ? "text-center" : "text-left"}`}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 text-3xl font-semibold sm:text-4xl lg:text-5xl">
          {title} {highlight && <span className="accent-text">{highlight}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}

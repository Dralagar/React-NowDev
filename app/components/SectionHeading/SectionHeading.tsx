import Reveal from "../Reveal/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {

  const alignment =
    align === "center"
      ? "text-center mx-auto"
      : "text-left";

  return (
    <Reveal className={`max-w-3xl mb-12 ${alignment} ${className}`}>

      {eyebrow && (
        <p className="
          text-sm
          font-semibold
          uppercase
          tracking-[0.15em]
          text-blue
          mb-4
        ">
          {eyebrow}
        </p>
      )}

      <h2 className="
        text-3xl
        md:text-4xl
        font-bold
        leading-tight
        text-navy
      ">
        {title}
      </h2>

      {description && (
        <p className="
          mt-5
          text-lg
          text-gray
          leading-relaxed
        ">
          {description}
        </p>
      )}
    </Reveal>
  );
}
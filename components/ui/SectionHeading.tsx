import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-14", align === "center" && "text-center flex flex-col items-center")}>
      <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
        <span className="h-px w-5 bg-accent" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 max-w-xl text-[15px] leading-relaxed text-muted", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}

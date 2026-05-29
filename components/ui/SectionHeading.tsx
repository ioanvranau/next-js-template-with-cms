import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

/** Eyebrow + title + optional intro, left-aligned by default. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        centered && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow tone="accent">{eyebrow}</Eyebrow>}
      <h2 className="font-display text-display text-text">{title}</h2>
      {intro && <p className="text-text-muted">{intro}</p>}
    </div>
  );
}

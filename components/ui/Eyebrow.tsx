import { cn } from "@/lib/cn";

/** Small uppercase label above a heading. */
export function Eyebrow({
  children,
  className,
  tone = "muted",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "muted" | "accent";
}) {
  return (
    <p
      className={cn(
        "text-eyebrow uppercase",
        tone === "accent" ? "text-accent" : "text-text-dim",
        className,
      )}
    >
      {children}
    </p>
  );
}

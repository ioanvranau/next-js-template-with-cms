import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Variant = "bg" | "elevated" | "warm";

/**
 * Vertical page section with consistent rhythm + a background variant.
 * Alternate `bg` / `warm` down the page for visual separation.
 * Pass `containerClassName=""`-style overrides, or `bare` to skip the Container.
 */
export function Section({
  children,
  variant = "bg",
  className,
  containerClassName,
  bare = false,
  id,
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  containerClassName?: string;
  bare?: boolean;
  id?: string;
}) {
  const bg =
    variant === "elevated"
      ? "bg-bg-elevated"
      : variant === "warm"
        ? "bg-bg-warm"
        : "bg-bg";
  return (
    <section
      id={id}
      className={cn("py-20 text-text md:py-28 lg:py-36", bg, className)}
    >
      {bare ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}

import { cn } from "@/lib/cn";

/** Centered max-width wrapper with responsive horizontal padding. */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-shell px-5 md:px-8 lg:px-12",
        className,
      )}
    >
      {children}
    </div>
  );
}

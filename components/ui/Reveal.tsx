"use client";
import { cn } from "@/lib/cn";
import { useInView } from "@/lib/useInView";

/**
 * Fades + lifts its children into view on scroll. Honors prefers-reduced-motion
 * (the transition is neutralized globally in globals.css). `delay` in ms.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out",
        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

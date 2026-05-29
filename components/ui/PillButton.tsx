import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "accent" | "outline";
type Common = {
  children: React.ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
};
type AsLink = Common & {
  href: string;
  type?: never;
  onClick?: never;
  name?: never;
  value?: never;
};
type AsButton = Common & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
  name?: string;
  value?: string;
};

const base =
  "inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide " +
  "transition-[background-color,color,transform] duration-200 ease-out active:scale-[0.97] min-h-11";

const variants: Record<Variant, string> = {
  accent: "bg-accent text-bg-elevated hover:bg-accent-hover",
  outline: "border border-accent text-accent hover:bg-accent hover:text-bg-elevated",
};

/** Pill-shaped button that renders as <Link> when given `href`, else <button>. */
export function PillButton(props: AsLink | AsButton) {
  const { children, variant = "accent", withArrow = false, className } = props;
  const classes = cn(base, variants[variant], className);
  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" aria-hidden />}
    </>
  );
  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      name={props.name}
      value={props.value}
      className={classes}
    >
      {content}
    </button>
  );
}

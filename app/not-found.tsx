import { Section } from "@/components/ui/Section";
import { PillButton } from "@/components/ui/PillButton";

export default function NotFound() {
  return (
    <Section variant="bg" className="flex min-h-[60vh] items-center">
      <div className="flex flex-col items-start gap-5">
        <p className="font-display text-display text-accent">404</p>
        <h1 className="font-display text-title text-text">
          Pagina nu a fost găsită
        </h1>
        <p className="max-w-prose text-text-muted">
          Ne pare rău, pagina căutată nu există sau a fost mutată.
        </p>
        <PillButton href="/" variant="accent" withArrow>
          Înapoi acasă
        </PillButton>
      </div>
    </Section>
  );
}

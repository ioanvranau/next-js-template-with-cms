import { site } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";

/*
 * HOME PAGE — starter hero only.
 * This is intentionally minimal. Build the real homepage by adding section
 * components under components/home/ (Hero, Services, Testimonials, CtaBanner…)
 * and composing them here. See docs/conventions.md → "Adding a home section".
 */
export default function Home() {
  return (
    <Section variant="bg" className="min-h-[70vh] flex items-center">
      <Reveal className="flex max-w-3xl flex-col gap-6">
        <Eyebrow tone="accent">{site.tagline}</Eyebrow>
        <h1 className="font-display text-hero text-text">{site.brand}</h1>
        <p className="max-w-prose text-lg text-text-muted">{site.description}</p>
        <div className="mt-2 flex flex-wrap gap-4">
          <PillButton href="/contact" variant="accent" withArrow>
            Contactează-ne
          </PillButton>
          <PillButton href="/despre" variant="outline">
            Despre noi
          </PillButton>
        </div>
      </Reveal>
    </Section>
  );
}

import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = pageMetadata(
  "Despre",
  `Despre ${site.brand}.`,
);

/* Starter "Despre" page — replace the placeholder copy with the real story. */
export default function DesprePage() {
  return (
    <Section variant="bg">
      <SectionHeading eyebrow="Despre noi" title={site.brand} />
      <div className="mt-8 flex max-w-prose flex-col gap-4 text-text-muted">
        <p>
          Aici scrieți povestea firmei: cine sunteți, ce faceți și de ce.
          Înlocuiți acest text cu conținut real.
        </p>
      </div>
    </Section>
  );
}

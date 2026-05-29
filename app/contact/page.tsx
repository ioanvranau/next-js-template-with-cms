import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = pageMetadata(
  "Contact",
  `Contactați ${site.brand} — telefon, email și formular.`,
);

export default function ContactPage() {
  return (
    <Section variant="bg">
      <SectionHeading
        eyebrow="Contact"
        title="Hai să vorbim"
        intro="Completați formularul sau folosiți datele de contact de mai jos."
      />

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <ContactForm />

        <ul className="flex flex-col gap-5 text-text-muted">
          <li className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-accent" />
            <a href={`tel:${site.phone}`} className="hover:text-text">
              {site.phoneDisplay}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-accent" />
            <a href={`mailto:${site.email}`} className="hover:text-text">
              {site.email}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-accent" />
            {site.address}
          </li>
          <li className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-accent" />
            {site.program}
          </li>
        </ul>
      </div>
    </Section>
  );
}

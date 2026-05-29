import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site, nav } from "@/data/site";
import { Container } from "@/components/ui/Container";

/** Site footer. Reads brand/contact/social from data/site.ts. */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-bg-warm text-text">
      <Container className="grid gap-10 py-16 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <span className="font-display text-xl font-semibold">{site.brand}</span>
          <p className="text-sm text-text-muted">{site.tagline}</p>
          <div className="mt-2 flex gap-4 text-sm">
            {site.social.facebook && (
              <a href={site.social.facebook} className="text-text-muted hover:text-accent">
                Facebook
              </a>
            )}
            {site.social.instagram && (
              <a href={site.social.instagram} className="text-text-muted hover:text-accent">
                Instagram
              </a>
            )}
          </div>
        </div>

        <nav className="flex flex-col gap-2 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-text-muted hover:text-text">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm text-text-muted">
          <a href={`tel:${site.phone}`} className="flex items-center gap-2 hover:text-text">
            <Phone className="h-4 w-4" /> {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-text">
            <Mail className="h-4 w-4" /> {site.email}
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" /> {site.address}
          </span>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-line py-6 text-xs text-text-dim md:flex-row md:justify-between">
        <span>
          © {year} {site.brand}. Toate drepturile rezervate.
        </span>
      </Container>
    </footer>
  );
}

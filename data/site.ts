import type { NavItem } from "./types";

/**
 * SINGLE SOURCE OF TRUTH for business identity.
 * On a new project, this is the first file to edit (see docs/START-HERE.md).
 * Everything — layout metadata, Navbar, Footer, contact page, emails — reads
 * from here, so you never hard-code the brand/phone anywhere else.
 */
export const site = {
  brand: "Numele Firmei", // full brand, e.g. "Total Parquet"
  brandShort: "Firma", // short form used in nav logo / email subject
  tagline: "Subtitlu scurt despre ce faceți",
  description:
    "Descriere de o frază pentru SEO și Open Graph. Apare ca meta description implicită.",

  phone: "+40700000000", // tel: link (no spaces)
  phoneDisplay: "0700 000 000", // human-readable
  email: "contact@example.ro",
  address: "Strada Exemplu nr. 1, Oraș, Județ",
  program: "Lu–Vi 09:00–18:00",

  social: {
    facebook: "", // leave "" to hide the link
    instagram: "",
  },

  // Public URL — also settable via NEXT_PUBLIC_SITE_URL (env wins). Used by
  // sitemap.ts / robots.ts.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.ro",
} as const;

/** Primary navigation. Used by Navbar, Footer and sitemap.ts. */
export const nav: NavItem[] = [
  { href: "/", label: "Acasă" },
  { href: "/despre", label: "Despre" },
  { href: "/contact", label: "Contact" },
];

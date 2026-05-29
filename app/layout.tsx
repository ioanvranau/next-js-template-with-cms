import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Navbar } from "@/components/nav/Navbar";
import { Footer } from "@/components/nav/Footer";

// DISPLAY (headings) + SANS (body). Swap these two for a different feel — the
// CSS variable names (--font-display-src / --font-sans-src) are wired into
// globals.css, so only change the import + config here, not the CSS.
const display = Playfair_Display({
  variable: "--font-display-src",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans-src",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} · ${site.tagline}`,
    template: `%s · ${site.brand}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ro"
      className={`${display.variable} ${sans.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-bg font-sans text-text antialiased">
        <a href="#main" className="skip-link">
          Sari la conținut
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

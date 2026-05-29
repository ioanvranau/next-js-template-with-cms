"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site, nav } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { PillButton } from "@/components/ui/PillButton";
import { cn } from "@/lib/cn";

/** Sticky top nav. Links come from data/site.ts `nav`. */
export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="font-display text-xl font-semibold text-text">
          {site.brandShort}
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              {item.label}
            </Link>
          ))}
          <PillButton href={`tel:${site.phone}`} variant="accent">
            {site.phoneDisplay}
          </PillButton>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-text md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile panel */}
      <div
        className={cn(
          "overflow-hidden border-line bg-bg transition-[max-height] duration-300 md:hidden",
          open ? "max-h-96 border-b" : "max-h-0",
        )}
      >
        <Container className="flex flex-col gap-4 py-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-text-muted transition-colors hover:text-text"
            >
              {item.label}
            </Link>
          ))}
          <PillButton href={`tel:${site.phone}`} variant="accent" className="w-fit">
            {site.phoneDisplay}
          </PillButton>
        </Container>
      </div>
    </header>
  );
}

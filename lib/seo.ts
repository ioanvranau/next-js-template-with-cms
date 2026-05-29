import type { Metadata } from "next";
import { site } from "@/data/site";

/**
 * Per-page metadata helper. The page <title> is composed via the template in
 * app/layout.tsx, so pass just the page title here (e.g. "Despre noi").
 */
export function pageMetadata(title: string, description?: string): Metadata {
  return {
    title,
    description: description ?? site.description,
    openGraph: {
      title,
      description: description ?? site.description,
      type: "website",
    },
  };
}

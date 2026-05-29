import type { MetadataRoute } from "next";
import { site, nav } from "@/data/site";

/** Generates /sitemap.xml from the nav routes. Add dynamic routes as needed. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return nav.map((item) => ({
    url: new URL(item.href, site.url).toString(),
    lastModified: now,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}

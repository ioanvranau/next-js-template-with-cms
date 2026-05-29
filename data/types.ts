/**
 * Shared content shapes. These are the seam for a future CMS — when content
 * migrates out of data/*.ts into a CMS, these types stay (the CMS query just
 * has to return them). See docs/cms.md.
 */

export interface NavItem {
  href: string;
  label: string;
}

/** A service / offering card. */
export interface Service {
  slug: string;
  title: string;
  description: string;
  /** lucide-react icon name, resolved where rendered. */
  icon?: string;
}

export interface Testimonial {
  author: string;
  text: string;
  role?: string;
}

/** A portfolio / project entry (common on these presentation sites). */
export interface Project {
  slug: string;
  title: string;
  cover: string;
  gallery?: string[];
  description?: string;
  meta?: Record<string, string | number>;
}

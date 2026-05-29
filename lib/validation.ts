import { z } from "zod";

// Accepts Romanian formats: 0712 345 678, +40 712 345 678, 0712.345.678, etc.
const phoneRegex = /^(?:\+?40|0)?\s?[1-9](?:[\s.-]?\d){8}$/;

/**
 * Generic contact-form schema. Add/remove fields per project — keep the
 * `website` honeypot (must stay empty) for basic spam protection.
 */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Numele este obligatoriu (minim 2 caractere)."),
  phone: z
    .string()
    .trim()
    .min(1, "Telefonul este obligatoriu.")
    .refine(
      (v) => phoneRegex.test(v.replace(/[\s.-]/g, "")),
      "Număr de telefon invalid.",
    ),
  email: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine(
      (v) => !v || z.string().email().safeParse(v).success,
      "Email invalid.",
    ),
  message: z
    .string()
    .trim()
    .max(2000, "Mesajul este prea lung (max 2000 caractere).")
    .optional()
    .or(z.literal("")),
  // Honeypot — real users leave this empty; bots tend to fill it.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

"use server";

import { contactSchema } from "@/lib/validation";
import { sendContactEmail } from "@/lib/email";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
};

/** Server Action backing <ContactForm />. Validates, then sends via Resend. */
export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    message: formData.get("message"),
    website: formData.get("website"), // honeypot
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "");
      if (key && !errors[key]) errors[key] = issue.message;
    }
    return { status: "error", message: "Verificați câmpurile.", errors };
  }

  // Honeypot tripped — pretend success, send nothing.
  if (parsed.data.website) return { status: "success" };

  try {
    await sendContactEmail({
      name: parsed.data.name,
      phone: parsed.data.phone,
      email: parsed.data.email || undefined,
      message: parsed.data.message || undefined,
    });
    return { status: "success", message: "Mesaj trimis. Vă mulțumim!" };
  } catch (err) {
    console.error("Contact email failed:", err);
    return {
      status: "error",
      message:
        "Momentan nu putem trimite mesajul. Sunați-ne sau încercați mai târziu.",
    };
  }
}

"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { FormField } from "./FormField";
import { PillButton } from "@/components/ui/PillButton";

const initial: ContactState = { status: "idle" };

/** Contact form wired to the submitContact Server Action via useActionState. */
export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initial);

  if (state.status === "success") {
    return (
      <p className="rounded-lg border border-success/40 bg-success/10 px-4 py-6 text-center text-text">
        {state.message ?? "Mesaj trimis. Vă mulțumim!"}
      </p>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <FormField label="Nume" name="name" required error={state.errors?.name} />
      <FormField label="Telefon" name="phone" type="tel" required error={state.errors?.phone} />
      <FormField label="Email" name="email" type="email" error={state.errors?.email} />
      <FormField label="Mesaj" name="message" textarea error={state.errors?.message} />

      {/* Honeypot — hidden from users, visible to bots. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      {state.status === "error" && state.message && (
        <p className="text-sm text-error">{state.message}</p>
      )}

      <PillButton type="submit" variant="accent" withArrow>
        {pending ? "Se trimite…" : "Trimite mesajul"}
      </PillButton>
    </form>
  );
}

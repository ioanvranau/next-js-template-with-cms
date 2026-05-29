import { Resend } from "resend";
import { site } from "@/data/site";

let resend: Resend | undefined;

function getResend(): Resend {
  if (!resend) resend = new Resend(process.env.RESEND_API_KEY);
  return resend;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Sends a contact-form lead via Resend. Throws if env is not configured — the
 * caller (Server Action) catches and returns a friendly error to the UI.
 *
 * NOTE: `from` uses Resend's shared `onboarding@resend.dev` sender, which works
 * immediately without DNS. Before launch, verify the client's domain in Resend
 * and switch `from` to e.g. `Site <contact@yourdomain.ro>`.
 */
export async function sendContactEmail(p: {
  name: string;
  phone: string;
  email?: string;
  message?: string;
}): Promise<void> {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  const to = process.env.CONTACT_TO_EMAIL;
  if (!to) {
    throw new Error("CONTACT_TO_EMAIL is not configured");
  }

  const rows: [string, string][] = [
    ["Nume", p.name],
    ["Telefon", p.phone],
    ["Email", p.email || "—"],
    ["Mesaj", p.message || "—"],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  const html = `<!DOCTYPE html>
<html lang="ro"><head><meta charset="utf-8" /></head>
<body style="font-family:sans-serif;color:#1a1a1a;margin:0;padding:0">
  <div style="max-width:560px;margin:32px auto;padding:0 16px">
    <h2 style="margin:0 0 20px;font-size:22px">Lead nou de pe ${escapeHtml(site.brand)}</h2>
    <table style="border-collapse:collapse;width:100%;font-size:14px"><tbody>
      ${rows
        .map(
          ([k, v]) => `<tr>
        <td style="padding:10px 12px;border:1px solid #e0e0e0;background:#f9f9f9;font-weight:600;width:130px">${k}</td>
        <td style="padding:10px 12px;border:1px solid #e0e0e0;white-space:pre-wrap">${escapeHtml(v)}</td>
      </tr>`,
        )
        .join("")}
    </tbody></table>
  </div>
</body></html>`;

  await getResend().emails.send({
    from: `${site.brandShort} Site <onboarding@resend.dev>`,
    to,
    replyTo: p.email || undefined,
    subject: `Lead nou: ${p.name}`,
    text,
    html,
  });
}

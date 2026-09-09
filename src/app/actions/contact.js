"use server";

import { site } from "@/lib/site";

const MAX = { name: 100, phone: 30, email: 150, area: 100, message: 2000, service: 60 };

function clean(value, max) {
  return String(value ?? "")
    .replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, " ")
    .trim()
    .slice(0, max);
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

export async function submitContact(prevState, formData) {
  // Honeypot: bots fill hidden fields, humans never see it.
  if (clean(formData.get("company"), 200)) {
    return { status: "ok", message: "", errors: {} };
  }

  const data = {
    name: clean(formData.get("name"), MAX.name),
    phone: clean(formData.get("phone"), MAX.phone),
    email: clean(formData.get("email"), MAX.email),
    area: clean(formData.get("area"), MAX.area),
    service: clean(formData.get("service"), MAX.service),
    message: clean(formData.get("message"), MAX.message),
    source: clean(formData.get("source"), 80),
  };

  const errors = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  const digits = data.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) errors.phone = "Enter a phone number we can call or WhatsApp.";
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "That email does not look right.";

  if (Object.keys(errors).length) {
    return { status: "error", message: "Please check the highlighted fields.", errors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL || `Valam Gardens Website <onboarding@resend.dev>`;
  const to = process.env.CONTACT_TO_EMAIL || site.email;

  const rows = [
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email || "—"],
    ["Service", data.service || "Not sure yet"],
    ["Area", data.area || "—"],
    ["Source", data.source],
  ];
  const text = [
    "New enquiry from valamgardens.com",
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    data.message || "—",
  ].join("\n");
  const html = `<h2 style="font-family:Georgia,serif">New enquiry from valamgardens.com</h2>
<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px">
${rows.map(([k, v]) => `<tr><td style="color:#666">${k}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`).join("")}
</table>
<p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(data.message || "—")}</p>`;

  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY missing; enquiry logged only.\n" + text);
    return { status: "ok", message: "", errors: {} };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email || undefined,
        subject: `Enquiry: ${data.service || "General"} from ${data.name}`,
        text,
        html,
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error("[contact] Resend error", res.status, body);
      throw new Error("send failed");
    }
    return { status: "ok", message: "", errors: {} };
  } catch (err) {
    return {
      status: "error",
      message: `We could not send your message just now. Please call or WhatsApp ${site.phoneDisplay}.`,
      errors: {},
    };
  }
}

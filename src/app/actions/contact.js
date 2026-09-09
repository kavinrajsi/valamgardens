"use server";

import { headers } from "next/headers";
import { site } from "@/lib/site";

const MAX = { name: 100, phone: 30, email: 150, area: 100, message: 2000, service: 60 };

/* Attribution arrives as one JSON blob from the browser. It is entirely
   attacker-controlled, so it is capped before parsing, parsed defensively,
   and then read through an allowlist — anything not named here is dropped. */
const ATTRIBUTION_MAX_BYTES = 4000;
const ATTRIBUTION_KEYS = [
  "first_referrer",
  "first_landing",
  "first_at",
  "last_referrer",
  "submit_page",
  "previous_page",
];
const PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "msclkid",
  "ttclid",
  "li_fat_id",
  "twclid",
  "irclickid",
];

/* Bots fill forms instantly. Client-supplied and therefore a signal rather
   than proof, which is why it only ever drops silently. */
const MIN_FILL_MS = 2000;

function clean(value, max) {
  return String(value ?? "")
    .replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, " ")
    .trim()
    .slice(0, max);
}

/** Campaign parameters from one side of the attribution blob. */
function readParams(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const out = {};
  for (const key of PARAM_KEYS) {
    const cleaned = clean(value[key], 300);
    if (cleaned) out[key] = cleaned;
  }
  return out;
}

/**
 * Parse the attribution blob. Returns an empty object for anything malformed,
 * oversized, or the wrong shape — attribution is never worth failing an
 * enquiry over.
 */
function readAttribution(raw) {
  const text = String(raw ?? "");
  if (!text || text.length > ATTRIBUTION_MAX_BYTES) return {};

  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    return {};
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};

  const out = {};
  for (const key of ATTRIBUTION_KEYS) {
    const cleaned = clean(parsed[key], 300);
    if (cleaned) out[key] = cleaned;
  }
  out.first_params = readParams(parsed.first_params);
  out.last_params = readParams(parsed.last_params);
  return out;
}

function formatParams(params) {
  const entries = Object.entries(params || {});
  return entries.length ? entries.map(([k, v]) => `${k}=${v}`).join(", ") : "";
}

/** "Name <a@x.com>,Name2 <b@x.com>" env var -> ["Name <a@x.com>", "Name2 <b@x.com>"] */
function parseAddressList(value) {
  return (value || "")
    .split(",")
    .map((addr) => addr.trim())
    .filter(Boolean);
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

export async function submitContact(prevState, formData) {
  /* Honeypots: bots fill hidden fields, humans never see them. Both drop
     silently with a fake success, so a bot learns nothing from the response. */
  if (clean(formData.get("company"), 200) || clean(formData.get("website"), 200)) {
    return { status: "ok", message: "", errors: {} };
  }

  /* Submitted faster than a person can type. Only enforced when the browser
     actually reported a time, so a missing value never blocks a real person. */
  const elapsed = Number.parseInt(clean(formData.get("elapsed"), 12), 10);
  if (Number.isFinite(elapsed) && elapsed >= 0 && elapsed < MIN_FILL_MS) {
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

  /* Request metadata. `headers()` is async in Next 16 — synchronous access
     was removed, not merely deprecated.

     CAVEAT: x-forwarded-for is a client-settable header. It is trustworthy
     here only because the platform overwrites it at the edge. If this ever
     moves to a host that does not, the value becomes attacker-controlled and
     must not be used for rate limiting, blocking, or anything else that
     grants or denies access. */
  const h = await headers();
  const forwarded = clean(h.get("x-forwarded-for"), 200);
  const meta = {
    ip: (forwarded.split(",")[0] || "").trim() || clean(h.get("x-real-ip"), 60) || "—",
    userAgent: clean(h.get("user-agent"), 300) || "—",
  };
  const attribution = readAttribution(formData.get("attribution"));

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL || `Valam Gardens Website <onboarding@resend.dev>`;
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const cc = parseAddressList(process.env.CONTACT_CC_EMAIL);
  const bcc = parseAddressList(process.env.CONTACT_BCC_EMAIL);

  const rows = [
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email || "—"],
    ["Service", data.service || "Not sure yet"],
    ["Area", data.area || "—"],
    ["Source", data.source],
  ];
  /* Attribution sits after the message, not folded into `rows`: whoever
     reads this wants the enquiry first and the machine data second. */
  const metaRows = [
    ["Submitted from", attribution.submit_page],
    ["Previous page", attribution.previous_page],
    ["Referrer this visit", attribution.last_referrer],
    ["Campaign now", formatParams(attribution.last_params)],
    ["First landed on", attribution.first_landing],
    ["First referrer", attribution.first_referrer],
    ["First campaign", formatParams(attribution.first_params)],
    ["First seen", attribution.first_at],
    ["IP address", meta.ip],
    ["Browser", meta.userAgent],
  ].filter(([, v]) => v);

  const text = [
    "New enquiry from valamgardens.com",
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    data.message || "—",
    "",
    "— Where they came from —",
    ...metaRows.map(([k, v]) => `${k}: ${v}`),
  ].join("\n");
  const html = `<h2 style="font-family:Georgia,serif">New enquiry from valamgardens.com</h2>
<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px">
${rows.map(([k, v]) => `<tr><td style="color:#666">${k}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`).join("")}
</table>
<p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(data.message || "—")}</p>
<h3 style="font-family:Georgia,serif;font-size:15px;color:#666;border-top:1px solid #ddd;padding-top:12px">Where they came from</h3>
<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:13px;color:#444">
${metaRows.map(([k, v]) => `<tr><td style="color:#888">${k}</td><td>${escapeHtml(v)}</td></tr>`).join("")}
</table>`;

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
        cc: cc.length ? cc : undefined,
        bcc: bcc.length ? bcc : undefined,
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

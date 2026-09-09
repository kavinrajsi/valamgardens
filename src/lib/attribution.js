/**
 * Where an enquiry came from: campaign parameters, referrer and page trail.
 *
 * Browser-only, no cookies, no dependencies. Two storages with two different
 * lifetimes, deliberately:
 *
 *   localStorage   first touch — the campaign that originally found them,
 *                  kept for WINDOW_DAYS so an ad clicked on Monday still
 *                  explains an enquiry sent on Wednesday.
 *   sessionStorage this visit — the referrer and page trail for the session
 *                  they are actually in.
 *
 * Both are needed. First touch alone loses today's referrer on every return
 * visit; session alone loses the campaign the moment the tab closes.
 *
 * Every access is guarded: Safari private mode throws on storage, and an
 * enquiry must never fail because attribution did.
 */

const FIRST_KEY = "valam.attr.first";
const REFERRER_KEY = "valam.attr.referrer";
const TRAIL_KEY = "valam.attr.trail";
const WINDOW_DAYS = 30;

/* utm_* plus the click IDs the ad platforms actually set. Google splits its
   own across three depending on the surface: gclid for Search and Display,
   gbraid and wbraid for iOS app and web-to-app journeys. */
const PARAMS = [
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

const MAX_VALUE = 300;

function read(storage, key) {
  try {
    const raw = window[storage].getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function write(storage, key, value) {
  try {
    window[storage].setItem(key, JSON.stringify(value));
  } catch {
    /* Private mode, quota, or storage disabled. Attribution is optional. */
  }
}

/** Campaign parameters present in a query string, trimmed and capped. */
function paramsFrom(search) {
  const query = new URLSearchParams(search);
  const found = {};
  for (const key of PARAMS) {
    const value = query.get(key);
    if (value) found[key] = value.slice(0, MAX_VALUE);
  }
  return found;
}

/** document.referrer, but only when it points somewhere other than here. */
function externalReferrer() {
  const ref = document.referrer;
  if (!ref) return "";
  try {
    if (new URL(ref).host === window.location.host) return "";
  } catch {
    return "";
  }
  return ref.slice(0, MAX_VALUE);
}

function expired(record) {
  if (!record || typeof record.at !== "number") return true;
  return Date.now() - record.at > WINDOW_DAYS * 24 * 60 * 60 * 1000;
}

/**
 * Runs once per page load. Seeds the first-touch record if there is not
 * already an unexpired one — that "if" is the whole of what makes it first
 * touch — and records this session's referrer.
 */
export function captureEntry() {
  if (typeof window === "undefined") return;

  const stored = read("localStorage", FIRST_KEY);
  if (expired(stored)) {
    write("localStorage", FIRST_KEY, {
      at: Date.now(),
      params: paramsFrom(window.location.search),
      referrer: externalReferrer(),
      landing: `${window.location.pathname}${window.location.search}`.slice(0, MAX_VALUE),
    });
  }

  /* Per session, and only once: on later pages document.referrer is the
     previous page of this site, which the trail already covers. */
  if (read("sessionStorage", REFERRER_KEY) === null) {
    write("sessionStorage", REFERRER_KEY, externalReferrer());
  }
}

/**
 * Shifts the page trail. Two slots, not one: a single "current page" cannot
 * also answer "which page was I on before", because writing the current path
 * would overwrite the previous one before the form ever reads it.
 */
export function notePage(pathname) {
  if (typeof window === "undefined") return;
  const trail = read("sessionStorage", TRAIL_KEY) || {};
  if (trail.current === pathname) return;
  write("sessionStorage", TRAIL_KEY, {
    previous: trail.current || "",
    current: pathname,
  });
}

/**
 * Everything known at submit time. Read here rather than during render:
 * storage does not exist during SSR, and touching it in render would
 * mismatch hydration.
 */
export function readAttribution() {
  if (typeof window === "undefined") return {};

  const first = read("localStorage", FIRST_KEY) || {};
  const trail = read("sessionStorage", TRAIL_KEY) || {};
  const sessionReferrer = read("sessionStorage", REFERRER_KEY);

  return {
    first_params: first.params || {},
    first_referrer: first.referrer || "",
    first_landing: first.landing || "",
    first_at: first.at ? new Date(first.at).toISOString() : "",
    last_params: paramsFrom(window.location.search),
    last_referrer: typeof sessionReferrer === "string" ? sessionReferrer : "",
    submit_page: `${window.location.pathname}${window.location.search}`.slice(0, MAX_VALUE),
    previous_page: trail.previous || "",
  };
}

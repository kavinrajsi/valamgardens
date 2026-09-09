"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureEntry, notePage } from "@/lib/attribution";

/**
 * Seeds attribution on arrival and keeps the page trail current.
 *
 * Mounted once in layout.js with the other chrome. Renders nothing, holds no
 * state, and never blocks: every storage access inside src/lib/attribution.js
 * is guarded, so a browser that refuses storage simply produces an enquiry
 * without attribution rather than an enquiry that fails.
 */
export default function AttributionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    captureEntry();
  }, []);

  useEffect(() => {
    notePage(pathname);
  }, [pathname]);

  return null;
}

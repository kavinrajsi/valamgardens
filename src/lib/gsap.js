"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText, CustomEase);

/* Mirrors --ease: cubic-bezier(0.2, 0.7, 0.2, 1) in src/styles/tokens.css */
export const EASE = CustomEase.create("brand", "M0,0 C0.2,0.7 0.2,1 1,1");

/* Default ScrollTrigger start for reveals */
export const START = "top 85%";

export const NO_MOTION = "(prefers-reduced-motion: reduce)";
export const MOTION = "(prefers-reduced-motion: no-preference)";
export const DESKTOP = "(min-width: 992px) and (prefers-reduced-motion: no-preference)";

export { gsap, useGSAP, ScrollTrigger, ScrollSmoother, SplitText };

import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Standard Aceternity UI utility for conditionally merging Tailwind classes.
 * It intelligently handles clsx boolean logic and automatically resolves
 * tailwind CSS conflicts via tailwind-merge.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import fs from "node:fs";
import path from "node:path";
import { links } from "@/data/portfolio";

/**
 * Returns the CV URL if the PDF exists in /public, otherwise null.
 * Runs at build time, so the Download CV buttons switch on as soon as the file is deployed.
 */
export function getCvHref(): string | null {
  if (!links.cv) return null;
  const file = path.join(process.cwd(), "public", links.cv.replace(/^\//, ""));
  return fs.existsSync(file) ? links.cv : null;
}

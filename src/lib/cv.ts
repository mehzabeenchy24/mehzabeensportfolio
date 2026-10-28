import fs from "node:fs";
import path from "node:path";
import { links, photo } from "@/data/portfolio";

/** True when a file path like "/docs/x.pdf" exists inside /public. Evaluated at build time. */
export function publicFileExists(href: string): boolean {
  if (!href || !href.startsWith("/")) return false;
  const root = path.join(process.cwd(), "public");
  const file = path.join(root, href);
  if (!file.startsWith(root)) return false;
  return fs.existsSync(file);
}

/** Returns the CV URL if the PDF exists in /public, otherwise null (so the button is hidden). */
export function getCvHref(): string | null {
  return publicFileExists(links.cv) ? links.cv : null;
}

/** Finds the profile photo (jpg, jpeg, png or webp) in /public/images, or null. */
export function getPhotoSrc(): string | null {
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    const href = `${photo.basePath}.${ext}`;
    if (publicFileExists(href)) return href;
  }
  return null;
}

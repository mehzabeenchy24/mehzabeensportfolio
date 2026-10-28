"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/data/portfolio";
import { CvButton } from "./ui";

export default function Navbar({ cvHref }: { cvHref: string | null }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // Elevated border once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!elements.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`no-print sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-line bg-ivory/90 backdrop-blur-md"
          : "border-transparent bg-ivory/0"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between px-6 sm:px-10"
      >
        <a
          href="#top"
          className="font-serif text-[1.3rem] leading-none tracking-[-0.005em] text-navy"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {nav.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative py-1 text-[0.9rem] transition-colors hover:text-navy ${
                      isActive ? "text-navy" : "text-muted"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-teal transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
          <CvButton href={cvHref} className="!py-2 !text-[0.85rem]" />
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-ivory lg:hidden">
          <ul className="mx-auto flex max-w-[1180px] flex-col px-6 py-3 sm:px-10">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-line last:border-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 font-serif text-[1.4rem] text-navy"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <CvButton href={cvHref} className="w-full" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

import { ArrowDown, Briefcase, GitBranch, Link2, Mail } from "lucide-react";
import { hero, links, site } from "@/data/portfolio";
import Reveal from "./Reveal";
import { Button, Container, CvButton, Eyebrow } from "./ui";

export default function Hero({ cvHref }: { cvHref: string | null }) {
  return (
    <section id="top" aria-labelledby="hero-heading" className="hairlines relative border-b border-line">
      <Container className="pb-20 pt-16 sm:pb-28 sm:pt-24 lg:pb-32 lg:pt-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <Reveal>
              <Eyebrow>{hero.label}</Eyebrow>
            </Reveal>

            <Reveal delay={80}>
              <h1
                id="hero-heading"
                className="mt-7 font-serif text-[2.9rem] leading-[1.04] tracking-[-0.02em] text-navy sm:text-[4.4rem] lg:text-[5.4rem]"
              >
                {hero.headline.before}{" "}
                <em className="italic text-teal">{hero.headline.emphasis}</em>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-9 max-w-[38rem] space-y-5 text-[1.08rem] leading-[1.75] text-charcoal">
                {hero.intro.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-7 border-t border-line-strong/70 pt-4 text-[0.86rem] tracking-[0.02em] text-muted">
                {hero.descriptor}
              </p>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Button href="#research">
                  Explore Research
                  <ArrowDown size={16} aria-hidden="true" />
                </Button>
                <CvButton href={cvHref} variant="outline" label="Download Academic CV" />
              </div>

              <ul className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-[0.92rem]">
                {links.github && (
                  <li>
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted transition-colors hover:text-navy"
                    >
                      <GitBranch size={16} aria-hidden="true" />
                      GitHub
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                )}
                <li>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted transition-colors hover:text-navy"
                  >
                    <Link2 size={16} aria-hidden="true" />
                    LinkedIn
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
                {links.professional && (
                  <li>
                    <a
                      href={links.professional}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted transition-colors hover:text-navy"
                    >
                      <Briefcase size={16} aria-hidden="true" />
                      Professional portfolio
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                )}
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2 text-muted transition-colors hover:text-navy"
                  >
                    <Mail size={16} aria-hidden="true" />
                    Email
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:col-span-4 lg:pt-3">
            <aside aria-label="At a glance" className="border-t border-navy pt-5">
              <p className="font-serif text-[1.35rem] italic text-navy">At a glance</p>
              <dl className="mt-5 divide-y divide-line">
                {hero.glance.map((row) => (
                  <div key={row.label} className="py-4">
                    <dt className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-teal-ink">
                      {row.label}
                    </dt>
                    <dd className="mt-1.5 text-[0.97rem] leading-snug text-charcoal">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

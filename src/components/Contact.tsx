import { GitBranch, Link2, Mail } from "lucide-react";
import { contact, links, site } from "@/data/portfolio";
import Reveal from "./Reveal";
import { Button, Container, CvButton, Eyebrow, InlineLink } from "./ui";

export default function Contact({ cvHref }: { cvHref: string | null }) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Contact</Eyebrow>
            <h2
              id="contact-heading"
              className="mt-4 max-w-[34rem] font-serif text-[2.3rem] leading-[1.1] tracking-[-0.015em] text-navy sm:text-[3.3rem]"
            >
              {contact.heading}
            </h2>
            <p className="mt-7 max-w-[34rem] text-[1.08rem] leading-[1.8]">{contact.body}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={`mailto:${site.email}`}>
                <Mail size={16} aria-hidden="true" />
                Email me
              </Button>
              <CvButton href={cvHref} variant="outline" label="Academic CV" />
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <dl className="divide-y divide-line border-y border-line">
              <div className="py-5">
                <dt className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-teal-ink">Email</dt>
                <dd className="mt-1.5 break-all text-[1.05rem]">
                  <InlineLink href={`mailto:${site.email}`}>{site.email}</InlineLink>
                </dd>
              </div>
              <div className="py-5">
                <dt className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-teal-ink">LinkedIn</dt>
                <dd className="mt-1.5 text-[1.05rem]">
                  <InlineLink href={links.linkedin} icon={<Link2 size={16} aria-hidden="true" />}>
                    mehzabeen-chy
                  </InlineLink>
                </dd>
              </div>
              <div className="py-5">
                <dt className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-teal-ink">GitHub</dt>
                <dd className="mt-1.5 text-[1.05rem]">
                  <InlineLink href={links.github} icon={<GitBranch size={16} aria-hidden="true" />}>
                    {links.github ? links.github.replace(/^https?:\/\/(www\.)?/, "") : "GitHub profile"}
                  </InlineLink>
                </dd>
              </div>
              <div className="py-5">
                <dt className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-teal-ink">Location</dt>
                <dd className="mt-1.5 text-[1.05rem] text-charcoal">{site.location}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

import { about } from "@/data/portfolio";
import Reveal from "./Reveal";
import { Container, Eyebrow, SectionHeading } from "./ui";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-b border-line py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading id="about-heading" eyebrow="About">
                {about.heading}
              </SectionHeading>
            </Reveal>

            <Reveal delay={100} className="mt-12">
              <Eyebrow>Education</Eyebrow>
              <ol className="relative mt-6 space-y-8 border-l border-line-strong pl-7">
                {about.education.map((e) => (
                  <li key={e.degree} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[33px] top-2 h-2.5 w-2.5 rounded-full border-2 border-teal bg-ivory"
                    />
                    <h3 className="font-serif text-[1.35rem] leading-snug text-navy">{e.degree}</h3>
                    <p className="mt-1 text-[0.97rem] text-charcoal">{e.institution}</p>
                    <p className="mt-0.5 text-[0.9rem] text-muted">{e.detail}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-3">
            <div className="space-y-6 text-[1.08rem] leading-[1.8]">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 60}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <blockquote className="mt-12 border-l-2 border-teal pl-6">
                <p className="font-serif text-[1.45rem] italic leading-[1.4] text-navy">{about.positioning}</p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

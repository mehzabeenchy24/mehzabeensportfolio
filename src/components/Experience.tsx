import { experience } from "@/data/portfolio";
import Reveal from "./Reveal";
import { Container, SectionHeading } from "./ui";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-b border-line bg-sage-soft py-24 sm:py-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading id="experience-heading" eyebrow="Professional experience">
              {experience.heading}
            </SectionHeading>
            <div className="mt-7 max-w-[30rem] space-y-4 text-[1.03rem] leading-[1.75]">
              {experience.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <ol className="lg:col-span-7">
            {experience.roles.map((r, i) => (
              <Reveal as="li" key={r.company} delay={i * 80} className="border-t border-navy/25 py-8 first:border-t-0 first:pt-0 lg:first:pt-2">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-serif text-[1.9rem] leading-tight text-navy">{r.company}</h3>
                  <p className="text-[0.92rem] font-medium text-teal-ink">{r.role}</p>
                </div>
                <p className="mt-4 max-w-[36rem] text-[1rem] leading-[1.75]">{r.summary}</p>
                <p className="mt-5 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-teal-ink">Relevant work</p>
                <ul className="mt-2.5 flex flex-wrap gap-2" aria-label={`Relevant work at ${r.company}`}>
                  {r.themes.map((t) => (
                    <li key={t} className="rounded-full border border-navy/20 bg-ivory/70 px-3 py-1 text-[0.8rem] text-charcoal">
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

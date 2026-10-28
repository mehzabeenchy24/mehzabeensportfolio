import { skills } from "@/data/portfolio";
import Reveal from "./Reveal";
import { Container, SectionHeading, Tag } from "./ui";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-b border-line py-24 sm:py-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionHeading id="skills-heading" eyebrow="Skills">
              {skills.heading}
            </SectionHeading>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5">
            <p className="text-[1.02rem] leading-[1.75] text-muted">{skills.intro}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:mt-20">
          {skills.groups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 2) * 90} as="article" className="border-t border-navy pt-6">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-teal-ink">{g.note}</p>
              <h3 className="mt-2 font-serif text-[1.6rem] leading-tight text-navy">{g.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

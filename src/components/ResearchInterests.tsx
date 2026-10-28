import { interests } from "@/data/portfolio";
import Reveal from "./Reveal";
import { Container } from "./ui";

export default function ResearchInterests() {
  return (
    <section id="interests" aria-labelledby="interests-heading" className="border-b border-line bg-navy py-24 text-ivory sm:py-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#9CC7C4]">Research interests</p>
            <h2
              id="interests-heading"
              className="mt-4 font-serif text-[2.1rem] leading-[1.12] tracking-[-0.01em] text-ivory sm:text-[2.75rem]"
            >
              {interests.heading}
            </h2>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5">
            <p className="text-[1.02rem] leading-[1.75] text-ivory/75">{interests.intro}</p>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ivory/15 bg-ivory/15 sm:grid-cols-2 lg:mt-20">
          {interests.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 2) * 90} className="bg-navy p-8 sm:p-10">
              <p aria-hidden="true" className="font-serif text-[1.1rem] italic text-[#9CC7C4]">
                0{i + 1}
              </p>
              <h3 className="mt-4 font-serif text-[1.65rem] leading-[1.2] text-ivory">{item.title}</h3>
              <p className="mt-3 max-w-[26rem] text-[1rem] leading-[1.7] text-ivory/75">{item.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

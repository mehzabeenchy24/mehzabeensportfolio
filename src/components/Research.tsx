import { ArrowRight, Check, FileText } from "lucide-react";
import { dentalComposition, projects, type Project, type ProjectStatusKind } from "@/data/portfolio";
import Reveal from "./Reveal";
import { publicFileExists } from "@/lib/cv";
import { Container, Eyebrow, InlineLink, SectionHeading, Tag } from "./ui";

const statusStyles: Record<ProjectStatusKind, { badge: string; dot: string }> = {
  manuscript: { badge: "border-teal/40 bg-sage text-navy", dot: "bg-teal" },
  review: { badge: "border-teal/50 bg-sage text-navy", dot: "bg-teal-ink" },
  thesis: { badge: "border-navy/30 bg-navy text-ivory", dot: "bg-ivory" },
  development: { badge: "border-line-strong bg-paper text-navy", dot: "bg-teal-ink" },
};

function StatusBadge({ kind, children }: { kind: ProjectStatusKind; children: React.ReactNode }) {
  const s = statusStyles[kind];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.78rem] font-medium ${s.badge}`}
    >
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {children}
    </span>
  );
}

function Meta({ project }: { project: Project }) {
  const rows: { label: string; value: string }[] = [{ label: "My role", value: project.role }];
  if (project.affiliation) rows.push({ label: "Research lab", value: project.affiliation });
  if (project.supervisor) rows.push({ label: project.supervisor.label, value: project.supervisor.name });
  if (project.dataset) rows.push({ label: "Dataset", value: project.dataset });
  return (
    <dl className="divide-y divide-line-strong/60">
      {rows.map((r) => (
        <div key={r.label} className="py-3.5 first:pt-0">
          <dt className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-teal-ink">{r.label}</dt>
          <dd className="mt-1 text-[0.95rem] leading-snug text-navy">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function BulletList({ items, columns = false }: { items: string[]; columns?: boolean }) {
  return (
    <ul className={`mt-4 gap-x-8 gap-y-2.5 ${columns ? "sm:grid sm:grid-cols-2" : "space-y-2.5"}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[0.97rem] leading-snug text-charcoal">
          <Check size={15} aria-hidden="true" className="mt-1 shrink-0 text-teal" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h4 className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-navy">{children}</h4>;
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tags">
      {items.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </ul>
  );
}

function Sections({ items }: { items?: Project["sections"] }) {
  if (!items?.length) return null;
  return (
    <div className="mt-8 space-y-7">
      {items.map((sec) => (
        <div key={sec.title}>
          <SubHeading>{sec.title}</SubHeading>
          <BulletList items={sec.items} />
        </div>
      ))}
    </div>
  );
}

function Notes({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return (
    <div className="mt-6 space-y-1">
      {items.map((n) => (
        <p key={n} className="text-[0.85rem] leading-snug text-muted">
          {n}
        </p>
      ))}
    </div>
  );
}

function ResultsBlock({ results }: { results?: string[] }) {
  if (!results?.length) return null;
  return (
    <div className="mt-8 rounded-xl border border-teal/30 bg-sage-soft p-5">
      <SubHeading>Results</SubHeading>
      <BulletList items={results} />
    </div>
  );
}

function Links({ project }: { project: Project }) {
  const links = project.links.filter((l) => l.href);
  // A document button appears only when its PDF is actually present in /public.
  const docs = (project.documents ?? []).filter((d) => publicFileExists(d.href));
  if (!links.length && !docs.length) return null;
  return (
    <ul className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 text-[0.93rem]">
      {docs.map((d) => (
        <li key={d.href}>
          <a
            href={d.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-navy/25 px-4 py-2 text-[0.88rem] font-medium text-navy transition-colors hover:border-navy hover:bg-navy/5"
          >
            <FileText size={15} aria-hidden="true" />
            {d.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
      {links.map((l) => (
        <li key={l.label}>
          <InlineLink href={l.href}>{l.label}</InlineLink>
        </li>
      ))}
    </ul>
  );
}

/** Proportion of image types, using the counts described in the manuscript draft. No images shown. */
function DentalComposition() {
  const { periapical, panoramic } = dentalComposition;
  const total = periapical + panoramic;
  const pct = (n: number) => `${(n / total) * 100}%`;
  return (
    <figure className="mt-8">
      <div
        role="img"
        aria-label={`Dataset composition: ${periapical} periapical and ${panoramic} panoramic radiographs, ${total} in total`}
        className="flex h-3 overflow-hidden rounded-full bg-line"
      >
        <div className="bg-navy" style={{ width: pct(periapical) }} />
        <div className="bg-teal" style={{ width: pct(panoramic) }} />
      </div>
      <figcaption className="mt-3 flex flex-wrap items-start justify-between gap-x-8 gap-y-3 text-[0.9rem]">
        <span className="flex items-baseline gap-2">
          <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-sm bg-navy" />
          <span className="font-serif text-[1.5rem] leading-none text-navy">{periapical}</span>
          <span className="text-muted">periapical X-rays</span>
        </span>
        <span className="flex items-baseline gap-2">
          <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-sm bg-teal" />
          <span className="font-serif text-[1.5rem] leading-none text-navy">{panoramic}</span>
          <span className="text-muted">panoramic (OPG) images</span>
        </span>
        <span className="text-muted">≈ {total.toLocaleString("en-US")} radiographs in the manuscript draft</span>
      </figcaption>
    </figure>
  );
}

/** Numbered, dashed outline: shows the planned methodology without implying anything is finished. */
function PlannedMethod({ items }: { items: string[] }) {
  return (
    <div className="mt-7">
      <SubHeading>Research interests &amp; planned methodology</SubHeading>
      <ol className="mt-5 space-y-0">
        {items.map((item, i) => (
          <li key={item} className="relative flex gap-4 pb-4 last:pb-0">
            {i < items.length - 1 && (
              <span aria-hidden="true" className="absolute left-[13px] top-7 h-[calc(100%-1.25rem)] border-l border-dashed border-line-strong" />
            )}
            <span
              aria-hidden="true"
              className="z-10 flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full border border-dashed border-teal bg-paper text-[0.72rem] font-medium text-teal-ink"
            >
              {i + 1}
            </span>
            <span className="pt-0.5 text-[0.97rem] leading-snug text-charcoal">{item}</span>
          </li>
        ))}
      </ol>
      <p className="mt-5 text-[0.82rem] text-muted">Planned components. Work has not started and no findings are claimed.</p>
    </div>
  );
}

function WorkflowStrip() {
  const steps = ["Data", "Preprocessing", "Models", "Evaluation", "Prototype"];
  return (
    <ol aria-label="Project workflow" className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-2">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-2">
          <span className="rounded-md border border-line-strong bg-paper px-2.5 py-1 text-[0.8rem] text-navy">{s}</span>
          {i < steps.length - 1 && <ArrowRight size={14} aria-hidden="true" className="text-teal" />}
        </li>
      ))}
    </ol>
  );
}

function Disclaimer({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <p className="mt-7 border-l-2 border-teal pl-4 font-serif text-[1.15rem] italic leading-snug text-navy">
      {text}
    </p>
  );
}

/** Project 01: the wide, featured layout with a tinted meta column. */
function FeaturedProject({ project }: { project: Project }) {
  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="grid overflow-hidden rounded-2xl border border-line-strong/70 bg-paper lg:grid-cols-12"
    >
      <div className="border-b border-line bg-sage-soft p-7 sm:p-10 lg:col-span-4 lg:border-b-0 lg:border-r">
        <p aria-hidden="true" className="font-serif text-[4.5rem] leading-none text-teal/70">
          {project.index}
        </p>
        <Eyebrow className="mt-6">{project.category}</Eyebrow>
        <div className="mt-4">
          <StatusBadge kind={project.statusKind}>{project.status}</StatusBadge>
        </div>
        <div className="mt-8">
          <Meta project={project} />
        </div>
        {project.contributions && (
          <div className="mt-8 border-t border-line-strong/60 pt-6">
            <SubHeading>My contributions</SubHeading>
            <BulletList items={project.contributions} />
          </div>
        )}
      </div>

      <div className="p-7 sm:p-10 lg:col-span-8 lg:p-12">
        <h3
          id={`${project.id}-title`}
          className="font-serif text-[1.8rem] leading-[1.18] tracking-[-0.01em] text-navy sm:text-[2.3rem]"
        >
          {project.title}
        </h3>
        <p className="mt-5 max-w-[40rem] text-[1.03rem] leading-[1.75]">{project.overview}</p>

        <DentalComposition />

        <div className="mt-9">
          <SubHeading>{project.focusLabel}</SubHeading>
          <BulletList items={project.focus} columns />
        </div>

        <Sections items={project.sections} />

        <Tags items={project.tools} />
        <ResultsBlock results={project.results} />
        <Notes items={project.notes} />
        <Links project={project} />
      </div>
    </article>
  );
}

/** Projects 02 and 03: compact layouts, each with its own honest visual. */
function CompactProject({ project, tint }: { project: Project; tint?: boolean }) {
  const isPlanned = project.id === "ovarian-biomarkers";
  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className={`flex h-full flex-col rounded-2xl border border-line-strong/70 p-7 sm:p-9 ${
        tint ? "bg-sage-soft" : "bg-paper"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <p aria-hidden="true" className="font-serif text-[3.2rem] leading-none text-teal/70">
          {project.index}
        </p>
        <StatusBadge kind={project.statusKind}>{project.status}</StatusBadge>
      </div>

      <Eyebrow className="mt-6">{project.category}</Eyebrow>
      <h3
        id={`${project.id}-title`}
        className="mt-3 font-serif text-[1.65rem] leading-[1.2] tracking-[-0.01em] text-navy sm:text-[1.95rem]"
      >
        {project.title}
      </h3>
      <p className="mt-4 text-[1rem] leading-[1.75]">{project.overview}</p>

      <div className="mt-7 border-y border-line-strong/60 py-5">
        <Meta project={project} />
      </div>

      {isPlanned ? (
        <PlannedMethod items={project.focus} />
      ) : (
        <>
          <WorkflowStrip />
          <div className="mt-7">
            <SubHeading>{project.focusLabel}</SubHeading>
            <BulletList items={project.focus} />
          </div>
        </>
      )}

      <Sections items={project.sections} />

      <Disclaimer text={project.disclaimer} />
      <ResultsBlock results={project.results} />

      <div className="mt-auto">
        <Tags items={project.tools} />
        <Notes items={project.notes} />
        <Links project={project} />
      </div>
    </article>
  );
}

export default function Research() {
  const [dental, ovarian, breast] = projects;
  return (
    <section id="research" aria-labelledby="research-heading" className="border-b border-line bg-ivory py-24 sm:py-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionHeading id="research-heading" eyebrow="Featured research">
              Research and projects, labelled with where they actually stand.
            </SectionHeading>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5">
            <p className="text-[1.02rem] leading-[1.75] text-muted">
              One collaborative manuscript in preparation, one accepted thesis proposal, and one hands-on
              machine learning project with a proposal under review. Results will be added here as they become available.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 space-y-6 lg:mt-20 lg:space-y-8">
          <Reveal>
            <FeaturedProject project={dental} />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <Reveal className="h-full">
              <CompactProject project={ovarian} />
            </Reveal>
            <Reveal delay={100} className="h-full">
              <CompactProject project={breast} tint />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

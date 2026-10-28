import { ArrowUpRight, Download } from "lucide-react";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1180px] px-6 sm:px-10 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-[0.72rem] font-medium uppercase tracking-[0.18em] text-teal-ink ${className}`}>
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="mt-4 font-serif text-[2.1rem] leading-[1.12] tracking-[-0.01em] text-navy sm:text-[2.75rem]"
      >
        {children}
      </h2>
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full border border-line-strong bg-paper/60 px-3 py-1 text-[0.8rem] leading-5 text-charcoal">
      {children}
    </li>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[0.9rem] font-medium transition-colors duration-200";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  external?: boolean;
};

export function Button({ href, children, variant = "solid", className = "", external }: ButtonProps) {
  const style =
    variant === "solid"
      ? "bg-navy text-ivory hover:bg-teal-ink"
      : "border border-navy/25 text-navy hover:border-navy hover:bg-navy/5";
  return (
    <a
      href={href}
      className={`${buttonBase} ${style} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

/** Download CV action. Renders a clearly disabled state until the PDF exists in /public/cv. */
export function CvButton({
  href,
  variant = "solid",
  label = "Download CV",
  className = "",
}: {
  href: string | null;
  variant?: "solid" | "outline";
  label?: string;
  className?: string;
}) {
  if (!href) {
    return (
      <span
        role="link"
        aria-disabled="true"
        title="CV will be available soon"
        className={`${buttonBase} cursor-not-allowed border border-line-strong text-muted ${className}`}
      >
        <Download size={16} aria-hidden="true" />
        {label}
        <span className="sr-only"> (not yet available)</span>
      </span>
    );
  }
  return (
    <Button href={href} variant={variant} className={className}>
      <Download size={16} aria-hidden="true" />
      {label}
    </Button>
  );
}

/** Text link with an arrow. Disabled and labelled "coming soon" when href is empty. */
export function InlineLink({
  href,
  children,
  icon,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}) {
  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={`inline-flex items-center gap-2 text-muted ${className}`}
        title="Link coming soon"
      >
        {icon}
        {children}
        <span className="text-[0.75rem] uppercase tracking-wider">· coming soon</span>
      </span>
    );
  }
  const isMail = href.startsWith("mailto:");
  return (
    <a
      href={href}
      {...(isMail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className={`group inline-flex items-center gap-2 text-navy underline decoration-line-strong decoration-1 underline-offset-[6px] transition-colors hover:decoration-teal ${className}`}
    >
      {icon}
      {children}
      {!isMail && (
        <ArrowUpRight
          size={15}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
      {!isMail && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}

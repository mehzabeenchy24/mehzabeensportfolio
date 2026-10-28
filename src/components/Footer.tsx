import { site } from "@/data/portfolio";
import { Container } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-3 text-[0.85rem] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {site.name}</p>
        <p>Research projects are shown with their current status. Nothing here is clinical advice.</p>
        <a href="#top" className="text-navy underline decoration-line-strong underline-offset-4 hover:decoration-teal">
          Back to top
        </a>
      </Container>
    </footer>
  );
}

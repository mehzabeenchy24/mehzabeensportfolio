# Mehzabeen Azad Chowdhury — Academic Research Portfolio

A single-page portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **lucide-react**. No backend, database, paid APIs, or authentication. Fonts (Instrument Serif and Inter) are self-hosted, so the site makes no external font requests.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Other checks:

```bash
npm run lint       # ESLint
npm run build      # production build
npm run start      # serve the production build
```

## Where to edit content

Everything lives in **`src/data/portfolio.ts`**: bio text, education, projects, statuses, experience, skills, research interests, and all links. Components only render what is in that file.

Project cards are driven by the `projects` array. To add real findings later, add strings to a project's `results` array and a **Results** block appears on its card automatically.

## Upload your CV

1. Export your CV as a PDF.
2. Save it as `public/cv/Mehzabeen_Azad_Chowdhury_CV.pdf` (or use another name and update `links.cv` in `src/data/portfolio.ts`).
3. Redeploy.

Until that file exists, every "Download CV" button shows a clearly disabled state. It switches on automatically at build time once the PDF is present.

## Add your GitHub URL and project repositories

In `src/data/portfolio.ts`:

```ts
export const links = {
  github: "https://github.com/your-username",   // profile link
  ...
};
```

For a project repository, fill in the `href` of its link, for example in the breast cancer project:

```ts
links: [{ label: "GitHub repository", href: "https://github.com/your-username/your-repo" }],
```

Links left as `""` are hidden (hero) or shown as disabled "coming soon" (contact and project cards), so no broken links appear.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project**, import the repository, and accept the defaults (Next.js is detected automatically).
3. Optional but recommended: add an environment variable `NEXT_PUBLIC_SITE_URL` set to your final URL (for example `https://mehzabeen.vercel.app`), so social previews and canonical links are correct.
4. Deploy. Every push to the main branch redeploys.

## Project structure

```
src/
  app/            layout.tsx (fonts, SEO metadata, JSON-LD), page.tsx, globals.css, icon.svg
  components/     Navbar, Hero, About, Research, Experience, Skills,
                  ResearchInterests, Contact, Footer, Reveal, ui
  data/portfolio.ts   all editable content
  fonts/          self-hosted font files and licenses
  lib/cv.ts       detects whether the CV PDF exists
public/
  cv/             put your CV PDF here
  images/         optional images
```

## Content integrity

The site is written to avoid overstating anything. The dental manuscript is labelled "in preparation", the ovarian cancer work is labelled as ongoing with planned methodology and no results, and the breast cancer project carries an "Educational research prototype — not intended for clinical use" statement. No radiographs or research files are published. Please keep it that way when you add results.

## Accessibility notes

Semantic landmarks and headings, a skip link, visible focus rings, a keyboard-accessible mobile menu (Escape closes it), and `prefers-reduced-motion` support. Scroll reveals are optional: content is fully visible without JavaScript or with reduced motion.

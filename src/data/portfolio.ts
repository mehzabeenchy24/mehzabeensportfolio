/**
 * ──────────────────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — the single place to edit everything on the site.
 * ──────────────────────────────────────────────────────────────────────────
 *  • Links left as "" are hidden or shown as "coming soon" automatically.
 *  • Project results: add strings to a project's `results` array when you
 *    have real findings. A "Results" block then appears on its card.
 *  • Keep claims accurate. Nothing here should state more than is true.
 */

export const site = {
  name: "Mehzabeen Azad Chowdhury",
  shortName: "Mehzabeen",
  location: "Sylhet, Bangladesh",
  email: "reachmehzabeen@gmail.com",
  title: "Mehzabeen Azad Chowdhury | Healthcare AI & Data Science",
  description:
    "Computer Science graduate and MSc Data Science student exploring applied machine learning, medical imaging, and clinical data analysis. Exploring thesis-based research opportunities for Fall 2027.",
  /** Set NEXT_PUBLIC_SITE_URL in Vercel to your real domain for correct SEO links. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const links = {
  linkedin: "https://www.linkedin.com/in/mehzabeen-chy",
  /** TODO: paste your GitHub profile URL, e.g. "https://github.com/your-username" */
  github: "",
  /**
   * Put your PDF at public/cv/ with exactly this file name (or change the path).
   * The Download CV buttons switch on automatically once the file exists.
   */
  cv: "/cv/Mehzabeen_Azad_Chowdhury_CV.pdf",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  label: "Computer Science · Data Science · Healthcare AI",
  headline: {
    before: "Exploring healthcare through",
    emphasis: "data, intelligence, and technology.",
  },
  intro:
    "I'm Mehzabeen, a Computer Science graduate and MSc Data Science student exploring applied AI, medical imaging, and clinical data analysis. With a background in software product management, I am interested in building and evaluating technologies that address meaningful healthcare challenges.",
  availability: "Exploring thesis-based research opportunities for Fall 2027.",
  glance: [
    { label: "Currently", value: "MSc Data Science, SUST" },
    { label: "Background", value: "BSc in Computer Science & Engineering; ~3 years in SaaS product work" },
    { label: "Working on", value: "Medical imaging datasets, clinical prediction, interpretable ML" },
    { label: "Based in", value: site.location },
  ],
};

export const about = {
  heading: "From software products to applied healthcare research.",
  paragraphs: [
    "I studied Computer Science and Engineering as an undergraduate, then spent roughly three years working on SaaS products across product management, coordination, and software quality assurance. Working on real products taught me how requirements are shaped, how quality is protected, and how much usability and collaboration matter to whether software actually gets used.",
    "I am now pursuing an MSc in Data Science, and my focus has moved toward applied research in healthcare. I contribute to a medical imaging dataset project in dentistry, I am developing thesis work on machine learning for ovarian cancer diagnosis using blood-based biomarkers, and I am building a hands-on breast cancer classification project in Python to strengthen my modelling and evaluation skills.",
    "I want to do hands-on technical work: programming, modelling, careful evaluation, and prototyping. My interest is less in inventing new algorithms and more in applying established methods rigorously to clinical problems, in teams that include clinicians. I am still building my depth in machine learning, and I see a research degree as the right place to do that properly.",
  ],
  positioning:
    "An emerging interdisciplinary researcher combining computer science, applied machine learning, and product development experience to explore practical, clinically meaningful healthcare technologies.",
  education: [
    {
      degree: "MSc in Data Science",
      institution: "Shahjalal University of Science and Technology (SUST)",
      detail: "Ongoing",
    },
    {
      degree: "BSc in Computer Science and Engineering",
      institution: "Leading University, Bangladesh",
      detail: "CGPA 3.44 / 4.00",
    },
  ],
};

export type ProjectStatusKind = "manuscript" | "thesis" | "development";

export type ProjectLink = {
  label: string;
  /** Leave "" until the link exists; it will render as a disabled "coming soon" link. */
  href: string;
};

export type Project = {
  id: string;
  index: string;
  category: string;
  title: string;
  status: string;
  statusKind: ProjectStatusKind;
  overview: string;
  role: string;
  affiliation?: string;
  supervisor?: { label: string; name: string };
  dataset?: string;
  focus: string[];
  focusLabel: string;
  tools: string[];
  contributions?: string[];
  notes?: string[];
  /** Add real findings here when you have them. Shown under "Results". */
  results?: string[];
  links: ProjectLink[];
  disclaimer?: string;
};

export const projects: Project[] = [
  {
    id: "dental-dataset",
    index: "01",
    category: "Medical imaging · Dataset research",
    title: "A Multimodal Dental Dataset for Predictive and Assistive Dentistry AI Models",
    status: "Manuscript in preparation",
    statusKind: "manuscript",
    overview:
      "A collaborative medical imaging research project developing and documenting a dental radiographic dataset intended to support AI-assisted dentistry. The work integrates periapical and panoramic dental X-ray images with a detailed clinical annotation framework covering anatomical structures, pathological findings, and clinical status.",
    role: "Co-author / Research Collaborator",
    affiliation: "Interdisciplinary Computer Science (InteX) Research Lab",
    supervisor: { label: "Supervisor", name: "Md. Saidur Rahman Kohinoor" },
    focusLabel: "Dataset focus",
    focus: [
      "21-class clinical annotation framework",
      "CVAT annotation workflows",
      "Dataset organization and quality assurance",
      "Annotation consistency checks",
      "Collaboration with clinical experts",
      "Preparation for downstream AI-assisted dental research",
    ],
    tools: ["Medical Imaging", "Dental AI", "CVAT", "Dataset Curation", "Annotation QA", "Research Collaboration"],
    contributions: [
      "Dataset review",
      "Image–annotation consistency checks",
      "Research collaboration",
      "Manuscript-related work",
    ],
    notes: [
      "Composition figures are as described in the current manuscript draft.",
      "No radiographs or research files are shown on this site.",
    ],
    links: [],
  },
  {
    id: "ovarian-biomarkers",
    index: "02",
    category: "Clinical prediction · Thesis research",
    title: "Ovarian Cancer Diagnosis Using Blood-Based Biomarkers",
    status: "MSc thesis · Ongoing",
    statusKind: "thesis",
    overview:
      "An ongoing research project exploring machine learning approaches to ovarian cancer diagnosis using blood-based biomarkers, with an emphasis on clinically meaningful model evaluation and interpretable predictions.",
    role: "MSc thesis researcher",
    supervisor: { label: "Supervisor", name: "Dr. Nahid Sultana" },
    focusLabel: "Research interests & planned methodology",
    focus: [
      "CA125 and HE4 biomarkers",
      "Clinical and laboratory measurements",
      "Supervised machine learning",
      "Model comparison",
      "Model calibration",
      "Clinical utility assessment",
      "Reproducible evaluation",
    ],
    tools: ["Clinical AI", "Biomarkers", "Predictive Modeling", "Python", "Machine Learning", "Clinical Evaluation"],
    notes: ["Work in progress. No results are reported yet."],
    links: [],
  },
  {
    id: "breast-cancer-ml",
    index: "03",
    category: "Applied machine learning · Prototype",
    title: "Interpretable Breast Cancer Classification",
    status: "Project in development",
    statusKind: "development",
    overview:
      "A hands-on machine learning project exploring breast cancer classification using numerical features derived from digitized fine-needle aspirate images, with a focus on model evaluation, interpretable predictions, and a lightweight interactive demonstration.",
    role: "Independent project",
    dataset: "UCI Wisconsin Diagnostic Breast Cancer Dataset",
    focusLabel: "Technical scope",
    focus: [
      "Data preprocessing",
      "Supervised classification",
      "Logistic Regression, Decision Trees, and Random Forests where implemented",
      "Evaluation using appropriate classification metrics",
      "A small web-based prototype",
    ],
    tools: ["Python", "pandas", "NumPy", "scikit-learn", "Interpretable ML", "Classification", "Healthcare AI", "Web Prototype"],
    notes: [
      "The aim is a reproducible applied ML workflow, not a clinical diagnostic service.",
    ],
    disclaimer: "Educational research prototype — not intended for clinical use.",
    links: [
      // TODO: paste the repository URL here when it is public.
      { label: "GitHub repository", href: "" },
    ],
  },
];

/** Real figures from the manuscript draft, used for the proportion bar on project 01. */
export const dentalComposition = {
  periapical: 849,
  panoramic: 301,
};

export const experience = {
  heading: "Experience turning complex problems into usable software.",
  intro:
    "Product work taught me to look at technology from the user's side: whether requirements are clear, whether the software behaves reliably, and whether people can fit it into how they already work. I carry that perspective into healthcare technology, alongside the technical work.",
  roles: [
    {
      company: "Agency Handy",
      role: "Product Manager",
      summary:
        "Product management on SaaS work, centred on requirements, documentation, and clear priorities and workflows for the engineering team.",
      themes: ["Product requirements and documentation", "Workflows and prioritization", "Communication with engineering teams"],
    },
    {
      company: "Technext",
      role: "Product Management & Software Quality Assurance",
      summary:
        "A combined product and software quality assurance role: testing software against its requirements and feeding what was found back into iteration.",
      themes: ["Software quality assurance", "Testing and iterative improvements", "Cross-functional collaboration"],
    },
    {
      company: "Appifylab",
      role: "Product Coordination",
      summary:
        "Product coordination across teams, with attention to documentation and requirements as features moved through development.",
      themes: ["Cross-functional collaboration", "User-centered problem-solving", "Product requirements and documentation"],
    },
  ],
};

export const skills = {
  heading: "Technical tools and research capabilities.",
  intro:
    "A mix of tools I work with regularly and areas where I am actively developing proficiency.",
  groups: [
    {
      title: "Programming & Data Science",
      note: "Working with",
      items: ["Python", "pandas", "NumPy", "scikit-learn", "Jupyter Notebook", "Google Colab"],
    },
    {
      title: "Machine Learning & Analysis",
      note: "Developing proficiency in",
      items: [
        "Data preprocessing",
        "Exploratory data analysis",
        "Classification models",
        "Cross-validation",
        "Model evaluation",
        "Interpretable predictions",
      ],
    },
    {
      title: "Medical Research & Imaging",
      note: "Applied experience",
      items: [
        "Medical dataset review",
        "Radiographic image datasets",
        "CVAT",
        "Annotation validation",
        "Research documentation",
        "Clinical data analysis",
      ],
    },
    {
      title: "Product & Development Tools",
      note: "Applied experience",
      items: ["Git", "GitHub", "Jira", "Notion", "Figma", "Agile workflows", "Software testing", "Requirements analysis"],
    },
  ],
};

export const interests = {
  heading: "Research directions I'm exploring.",
  intro:
    "I am drawn to problems where careful implementation and a real clinical need meet.",
  items: [
    {
      title: "Medical Imaging & Diagnostic AI",
      body: "Applying computational methods to clinical images and diagnostic problems.",
    },
    {
      title: "Clinical Prediction & Healthcare Analytics",
      body: "Using clinical and laboratory data to develop and evaluate predictive models.",
    },
    {
      title: "Explainable & Trustworthy AI",
      body: "Understanding model predictions, limitations, reliability, and clinical usefulness.",
    },
    {
      title: "Human-Centered Digital Health",
      body: "Building healthcare technologies that are usable, practical, and aligned with real clinical workflows.",
    },
  ],
};

export const contact = {
  heading: "Let's connect around meaningful healthcare research.",
  body: "I am exploring interdisciplinary, thesis-based research opportunities for Fall 2027, particularly in clinical AI, medical imaging, healthcare analytics, and digital health technology.",
};

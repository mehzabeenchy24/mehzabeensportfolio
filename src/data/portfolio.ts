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
  /** Professional (product management) portfolio. Verify this address opens before sharing. */
  professional: "https://mehzabeenchy24.github.io/Portfolio-/",
  /** TODO: paste your GitHub profile URL, e.g. "https://github.com/your-username" */
  github: "",
  /**
   * Put your PDF at public/cv/ with exactly this file name (or change the path).
   * The Download CV buttons switch on automatically once the file exists.
   */
  cv: "/cv/Mehzabeen_Azad_Chowdhury_CV.pdf",
};

/**
 * Profile photo. Save your image as public/images/profile.jpg (.jpeg, .png and .webp also work).
 * It appears in the About section automatically; nothing shows until the file exists.
 */
export const photo = {
  basePath: "/images/profile",
  alt: "Portrait of Mehzabeen Azad Chowdhury",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  label: "Health Informatics · Clinical Informatics · Data Science",
  headline: {
    before: "Exploring healthcare through",
    emphasis: "data, intelligence, and technology.",
  },
  intro:
    "I'm Mehzabeen, a Computer Science graduate and MSc Data Science student drawn to health and clinical informatics. I like working where doctors, labs, and software meet: understanding what clinical teams actually need and helping turn it into data, tools, and workflows that hold up in practice. I'm not an expert yet, and I learn fastest by building.",
  availability: "Exploring thesis-based research opportunities for Fall 2027.",
  glance: [
    { label: "Currently", value: "MSc Data Science, SUST" },
    { label: "Background", value: "BSc in Computer Science & Engineering; almost 3 years in SaaS product work" },
    { label: "Working on", value: "Dental imaging dataset, ovarian cancer biomarkers, breast cancer classification" },
    { label: "Strength", value: "Bridging clinical, lab, and technical teams" },
    { label: "Based in", value: site.location },
  ],
};

export const about = {
  heading: "Bridging the lab, the clinic, and the software.",
  paragraphs: [
    "What pulls me toward health and clinical informatics is the space between people. A lot goes wrong at the handoffs: what a doctor needs is not always what gets specified, and what a lab records is not always what software can use. I enjoy working in that gap, talking with clinicians and lab teams, understanding how they work, and translating between them and the people building the technology.",
    "That instinct comes from my work before research. After a BSc in Computer Science and Engineering, I spent almost three years on SaaS products: at Agency Handy, doing a lot of logic building to define how features should behave; at Technext, combining junior product work with software quality assurance; and at Appifylab, in product coordination while leading technical support teams. Those years gave me practice in clear requirements, careful testing, and communicating across disciplines.",
    "Now, in my MSc in Data Science, I am applying that in health research: reviewing and checking a dental imaging dataset alongside clinical experts, planning thesis work on ovarian cancer biomarkers, and building a breast cancer classification project. I work in Python and Google Colab, but I am not looking to be a heavy machine learning specialist. I would rather use established methods carefully and make them useful to clinical teams. I am not an expert in any of this yet. I am willing to learn, and I am keen to put my hands on real clinical data.",
  ],
  positioning:
    "A computer scientist and former product manager building toward health and clinical informatics: collaborative, curious, and learning by doing.",
  education: [
    {
      degree: "MSc in Data Science",
      institution: "Shahjalal University of Science and Technology (SUST)",
      detail: "2026 – present",
    },
    {
      degree: "BSc in Computer Science and Engineering",
      institution: "Leading University, Bangladesh",
      detail: "2020 – 2024 · CGPA 3.44 / 4.00",
    },
  ],
};

export type ProjectStatusKind = "manuscript" | "review" | "thesis" | "development";

export type ProjectLink = {
  label: string;
  /** Leave "" until the link exists; links without a URL are hidden. */
  href: string;
};

export type ProjectDocument = {
  label: string;
  /**
   * Path inside /public, e.g. "/docs/dental-dataset-proposal.pdf".
   * The button appears automatically once that file exists.
   */
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
  /** Extra detail blocks (for example research questions or study design) drawn from the project proposal. */
  sections?: { title: string; items: string[] }[];
  /** Proposal and other documents. Each shows only when its PDF is present in /public. */
  documents?: ProjectDocument[];
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
    tools: ["Medical Imaging", "Dental AI", "CVAT", "Google Colab", "Dataset Curation", "Annotation QA", "Research Collaboration"],
    contributions: [
      "Dataset review",
      "Image–annotation consistency checks",
      "Technical checks in Google Colab",
      "Research collaboration",
      "Manuscript-related work",
    ],
    sections: [
      {
        title: "Dataset design",
        items: [
          "Images from clinical dental practices, with identifying information removed before inclusion",
          "21 classes in three groups: anatomical foundations, pathological indicators, and clinical status and developmental markers",
          "Bounding-box annotations made in CVAT and verified by a board-certified dentist",
          "Structured for object-detection and segmentation workflows such as YOLO and U-Net",
        ],
      },
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
    status: "Thesis proposal accepted · Not yet started",
    statusKind: "thesis",
    overview:
      "A planned MSc thesis on distinguishing benign from malignant ovarian tumours using blood-based biomarkers and established machine learning methods, with an emphasis on clinically meaningful evaluation and interpretable predictions. The proposal has been accepted by my supervisor as my final MSc thesis; the research itself has not started.",
    role: "MSc thesis researcher",
    supervisor: { label: "Supervisor", name: "Dr. Nahid Sultana" },
    focusLabel: "Research direction & planned methodology",
    focus: [
      "Literature review",
      "Assessment of dataset suitability",
      "CA125, HE4, and routine laboratory measures",
      "Data preprocessing",
      "Comparison of established classification methods",
      "Model calibration",
      "Clinical utility and interpretability",
      "Reproducible evaluation",
    ],
    tools: ["Clinical AI", "Biomarkers", "Predictive Modeling", "Python", "Machine Learning", "Clinical Evaluation"],
    notes: ["The proposal is accepted; work has not begun. No results are claimed. Scope depends on dataset suitability."],
    links: [],
    documents: [{ label: "Thesis proposal (PDF)", href: "/docs/ovarian-biomarkers-proposal.pdf" }],
  },
  {
    id: "breast-cancer-ml",
    index: "03",
    category: "Applied machine learning · Prototype",
    title: "Interpretable Breast Cancer Classification",
    status: "Proposal under review · ICPS 2026",
    statusKind: "review",
    overview:
      "A hands-on machine learning project exploring breast cancer classification using numerical features derived from digitized fine-needle aspirate images, with a focus on model evaluation, interpretable predictions, and a lightweight interactive demonstration. A research proposal on this topic has been submitted to ICPS 2026 and is under review.",
    role: "Three-person team project; currently doing the hands-on work",
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
    sections: [
      {
        title: "Research questions",
        items: [
          "How far can a decision tree's complexity be constrained before sensitivity for malignant cases drops, compared with a Random Forest reference?",
          "Which nuclear features drive the root and early splits of constrained trees, and how do they compare with Random Forest feature importances?",
          "Can a shallow tree (depth of 4 or less) stay within a 3% tolerance of Random Forest performance?",
        ],
      },
      {
        title: "Proposed study design",
        items: [
          "WDBC dataset: 569 samples (357 benign, 212 malignant) with 30 nuclear features",
          "Stratified 80/20 split with 114 samples held out, and 10-fold stratified cross-validation during development",
          "Decision trees of varying depth, split and leaf limits, with complexity tracked by node count, leaf count, depth, and average path length",
          "A tuned Random Forest (100 to 500 trees) as the reference model",
          "Emphasis on sensitivity and false-negative rate, alongside accuracy, specificity, F1, and ROC-AUC, with McNemar's test and paired t-tests",
          "An interactive dashboard to trace a prediction through the tree and compare models",
        ],
      },
    ],
    notes: [
      "Study design as set out in the project proposal. These are planned components, not completed results.",
      "The proposal is under review for ICPS 2026. It has not been accepted or published.",
      "The aim is a reproducible applied ML workflow, not a clinical diagnostic service.",
    ],
    disclaimer: "Educational research prototype — not intended for clinical use.",
    links: [
      // TODO: paste the repository URL here when it is public.
      { label: "GitHub repository", href: "" },
    ],
    documents: [{ label: "Research proposal (PDF)", href: "/docs/breast-cancer-proposal.pdf" }],
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
      period: "Mar 2025 – Apr 2026",
      role: "Product Manager",
      summary:
        "Product management on SaaS work, with a lot of hands-on logic building: working out the rules and flows behind how features should behave, and turning them into clear requirements and priorities for the engineering team.",
      themes: ["Logic building", "Product requirements and documentation", "Workflows and prioritization", "Communication with engineering teams"],
    },
    {
      company: "Technext",
      period: "May 2024 – Jan 2025",
      role: "Junior Product Management & Software QA",
      summary:
        "A combined product and software quality assurance role: testing software against its requirements and feeding what was found back into iteration.",
      themes: ["Software quality assurance", "Testing and iterative improvements", "Cross-functional collaboration"],
    },
    {
      company: "Appifylab",
      period: "Nov 2023 – Apr 2024",
      role: "Product Coordination, QA & Technical Support",
      summary:
        "Product coordination across teams, with attention to documentation and requirements as features moved through development, alongside leading technical support teams.",
      themes: ["Leading technical support teams", "Cross-functional collaboration", "User-centered problem-solving", "Product requirements and documentation"],
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

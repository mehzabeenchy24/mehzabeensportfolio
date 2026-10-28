/**
 * ──────────────────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT: the single place to edit everything on the site.
 * ──────────────────────────────────────────────────────────────────────────
 *  • Links left as "" are hidden automatically.
 *  • Project results: add strings to a project's `results` array when you
 *    have real findings. A "Results" block then appears on its card.
 *  • Keep claims accurate. Nothing here should state more than is true.
 *  • Visible prose avoids em and en dashes by design.
 */

export const site = {
  name: "Mehzabeen Azad Chowdhury",
  shortName: "Mehzabeen",
  location: "Sylhet, Bangladesh",
  email: "reachmehzabeen@gmail.com",
  title: "Mehzabeen Azad Chowdhury | Applied Healthcare Research",
  description:
    "Computer Science graduate and MSc Data Science student working on applied machine learning, clinical data analysis, medical imaging, and healthcare technology.",
  /** Set NEXT_PUBLIC_SITE_URL in Vercel to your real domain for correct SEO links. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const links = {
  linkedin: "https://www.linkedin.com/in/mehzabeen-chy",
  /** Professional (product management) portfolio. Verify this address opens before sharing. */
  professional: "https://mehzabeenchy24.github.io/Portfolio-/",
  github: "https://github.com/mehzabeenchy24",
  /**
   * Put your PDF at public/cv/ with exactly this file name (or change the path).
   * The Download CV buttons appear automatically once the file exists.
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
  label: "Applied Machine Learning · Clinical Informatics · Healthcare Technology",
  headline: {
    before: "Connecting computing and healthcare",
    emphasis: "through research, data, and practical technology.",
  },
  intro: [
    "I am a Computer Science graduate and MSc Data Science student with a professional background in SaaS product management and software quality assurance. My interests lie in applied machine learning, clinical data analysis, medical imaging, and healthcare technology.",
    "Before entering healthcare research, I worked on software products that required careful requirements definition, collaboration with engineering teams, and systematic testing. I now bring that practical experience into research projects involving medical data, model evaluation, and interdisciplinary collaboration.",
  ],
  descriptor: "Computer Science · Data Science · Applied Healthcare Research",
  glance: [
    { label: "Currently", value: "MSc in Data Science, Shahjalal University of Science and Technology" },
    {
      label: "Background",
      value: "BSc in Computer Science and Engineering; nearly three years in SaaS product work and software QA",
    },
    {
      label: "Working on",
      value: "Dental imaging dataset research, breast cancer classification, and planned ovarian cancer biomarker research",
    },
    {
      label: "Strength",
      value: "Connecting practical software development with careful data work and interdisciplinary collaboration",
    },
    { label: "Based in", value: site.location },
  ],
};

export const about = {
  heading: "Bridging the lab, the clinic, and the software.",
  paragraphs: [
    "My interest in healthcare technology grew from a practical question: how can computing help address problems that clinicians and patients encounter in real settings?",
    "I began my professional career in SaaS product development, working across product management, quality assurance, coordination, and technical support. My responsibilities involved understanding user needs, defining feature behavior, working with developers and designers, documenting issues, and checking whether software performed as intended. These experiences taught me to approach problems systematically and to consider how technology is actually used.",
    "I am now extending that foundation through an MSc in Data Science and healthcare-focused research projects. In a collaborative dental imaging dataset study, I contribute to image and annotation review, consistency checks, and technical validation. I am also part of a three-person breast cancer classification project exploring model evaluation and understandable predictions. My accepted thesis proposal concerns ovarian cancer diagnosis using blood-based biomarkers.",
    "I am interested in work that combines clinical questions with sound computational methods, careful evaluation, and useful software. I value collaboration with people who bring different expertise, particularly clinicians, researchers, and engineers.",
  ],
  positioning:
    "My approach to research begins with understanding the problem, checking the data, and making the technical work useful to the people it is meant to support.",
  education: [
    {
      degree: "MSc in Data Science",
      institution: "Shahjalal University of Science and Technology (SUST)",
      detail: "2026 to present",
    },
    {
      degree: "BSc in Computer Science and Engineering",
      institution: "Leading University, Bangladesh",
      detail: "2020 to 2024 · CGPA 3.44 / 4.00",
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
   * Path inside /public, e.g. "/docs/breast-cancer-proposal.pdf".
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
  /** One or more paragraphs. */
  overview: string[];
  role: string;
  affiliation?: string;
  supervisor?: {
    label: string;
    name: string;
    href?: string;
    /** Small caption shown next to the name, e.g. "Professional profile". */
    hrefNote?: string;
  };
  dataset?: string;
  tools: string[];
  contributions?: string[];
  /** Extra labelled lists (for example research questions or proposed methodology). */
  sections?: { title: string; items: string[] }[];
  notes?: string[];
  /** Add real findings here when you have them. Shown under "Results". */
  results?: string[];
  links: ProjectLink[];
  /** Proposal and other documents. Each shows only when its PDF is present in /public. */
  documents?: ProjectDocument[];
  disclaimer?: string;
};

export const researchSection = {
  heading: "Research and Selected Projects",
  intro:
    "My current work brings together collaborative medical imaging dataset research, applied machine learning, and clinical prediction. Each project is presented with its actual contribution and current stage of development.",
};

export const projects: Project[] = [
  {
    id: "dental-dataset",
    index: "01",
    category: "Medical imaging · Dataset research",
    title: "A Multimodal Dental Dataset for Predictive and Assistive Dentistry AI Models",
    status: "Manuscript in preparation",
    statusKind: "manuscript",
    overview: [
      "This collaborative research project is developing and documenting a dental radiographic dataset for future AI-assisted dentistry research. It brings together periapical and panoramic radiographs with structured clinical annotations covering anatomical structures, dental pathologies, and clinical status.",
      "The manuscript draft describes 849 periapical radiographs and 301 panoramic radiographs, with a 21-class annotation framework. These counts reflect the current draft and may be updated after final validation.",
    ],
    role: "Co-author and research collaborator",
    affiliation: "Interdisciplinary Computer Science (InteX) Research Lab",
    supervisor: {
      label: "Supervisor",
      name: "Md. Saidur Rahman Kohinoor",
      href: "https://www.linkedin.com/in/srkohinoor/",
      hrefNote: "Professional profile",
    },
    tools: ["CVAT", "Python", "Google Colab", "Annotation review", "Dataset validation", "Research documentation"],
    contributions: [
      "Reviewing radiographic images and associated annotation records.",
      "Checking image and annotation correspondence and identifying missing or unmatched entries.",
      "Supporting dataset consistency checks and technical verification using Python and Google Colab.",
      "Contributing to research documentation and manuscript-related work.",
      "Collaborating with the research team on dataset quality assurance.",
    ],
    notes: ["No radiographs or research files are shown on this site."],
    links: [],
  },
  {
    id: "ovarian-biomarkers",
    index: "02",
    category: "Clinical prediction · Thesis research",
    title: "Ovarian Cancer Diagnosis Using Blood-Based Biomarkers",
    status: "Thesis proposal accepted; research preparation",
    statusKind: "thesis",
    overview: [
      "This planned thesis examines whether established machine learning methods can help distinguish benign from malignant ovarian masses using blood-based biomarkers and relevant clinical information. The proposed variables include CA125, HE4, and selected routine laboratory measurements, depending on dataset suitability.",
      "The intended work includes literature review, dataset assessment, preprocessing, comparison of classification approaches, and evaluation of discrimination, calibration, interpretability, and clinical relevance.",
      "The proposal has been accepted, but research implementation has not yet begun. No results are claimed.",
    ],
    role: "MSc thesis researcher",
    supervisor: {
      label: "Supervisor",
      name: "Dr. Nahid Sultana",
      href: "https://sust.innolytic.net/dept/sta/nahid-sta@sust.edu",
    },
    tools: ["Blood-based biomarkers", "Clinical prediction", "Model evaluation", "Interpretability"],
    links: [],
    documents: [{ label: "Thesis proposal (PDF)", href: "/docs/ovarian-biomarkers-proposal.pdf" }],
  },
  {
    id: "breast-cancer-ml",
    index: "03",
    category: "Applied machine learning · Prototype",
    title: "Interpretable Breast Cancer Classification",
    status: "Development in progress; related research proposal under review",
    statusKind: "development",
    overview: [
      "This applied machine learning project explores classification of benign and malignant breast tumors using numerical measurements derived from digitized fine needle aspirate images. We are investigating how established classification methods compare in performance and interpretability, and how their predictions can be explained clearly to nontechnical users.",
      "The work explores preprocessing, logistic regression, decision trees, random forests, model evaluation, and interpretable predictions using Python and scikit-learn. An initial web landing page has been developed, while the analysis and explanation workflow is being refined.",
    ],
    role: "Three-person collaborative project",
    dataset: "UCI Wisconsin Diagnostic Breast Cancer Dataset",
    tools: ["Python", "pandas", "NumPy", "scikit-learn", "Interpretable ML", "Classification"],
    sections: [
      {
        title: "Research questions",
        items: [
          "How does decision tree complexity affect performance, especially sensitivity to malignant cases?",
          "How do interpretable decision trees compare with Random Forest models?",
          "Which measured features influence model decisions?",
          "How can prediction explanations and limitations be communicated clearly?",
        ],
      },
      {
        title: "Built so far",
        items: ["An initial web landing page for the project."],
      },
      {
        title: "Proposed methodology, not yet complete",
        items: [
          "A fixed train and test split with cross-validation during development.",
          "Decision trees of varying depth compared against a tuned Random Forest reference.",
          "Evaluation that gives particular weight to sensitivity for malignant cases.",
          "An interactive way to show how a single prediction is reached.",
        ],
      },
    ],
    notes: ["The related research proposal is under review. It has not been accepted or published."],
    disclaimer: "Educational research demonstration, not a clinical diagnostic tool.",
    links: [
      // TODO: paste the repository URL here once it is public and verified.
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
  heading: "From Software Products to Applied Research",
  intro: [
    "Before focusing on healthcare research, I worked with SaaS products across product management, software quality assurance, product coordination, and technical support. I gained practical experience in understanding user requirements, specifying software behavior, coordinating with engineers and designers, testing functionality, and improving products through feedback.",
    "This background shapes how I approach technical and research problems today. I value clear requirements, careful validation, documentation, and solutions that work for the people who use them.",
  ],
  roles: [
    {
      company: "Agency Handy",
      role: "Product Manager",
      summary:
        "Led product requirements and coordinated SaaS feature delivery across design, engineering, and quality assurance. Worked on onboarding workflows, feature specifications, release documentation, product analytics, and feedback-driven improvements. Translated user and business needs into practical requirements, clarified product behavior, and supported feature validation throughout development.",
      themes: [
        "Requirements definition",
        "Product workflows",
        "Documentation",
        "User acceptance testing",
        "Product analytics",
        "Cross-functional collaboration",
      ],
    },
    {
      company: "Technext",
      role: "Junior Product Management and Software QA",
      summary:
        "Contributed to SaaS product development through functional testing, issue identification, release coordination, and communication between product and engineering teams. Evaluated software behavior against requirements, documented problems clearly, and supported iterative product improvements.",
      themes: [
        "Software quality assurance",
        "Feature testing",
        "Issue tracking",
        "Product coordination",
        "Technical communication",
      ],
    },
    {
      company: "Appifylab",
      role: "Product Coordination, QA and Technical Support",
      summary:
        "Supported SaaS product coordination, software testing, technical troubleshooting, and communication of user-reported issues to engineering teams. Helped clarify problems, document findings, and coordinate responses between product, support, and technical functions.",
      themes: [
        "Product coordination",
        "QA",
        "Technical troubleshooting",
        "Documentation",
        "User-centered problem solving",
      ],
    },
  ],
};

export const skills = {
  heading: "Technical Skills and Research Capabilities",
  intro:
    "A combination of established software product experience and developing hands-on skills in data analysis, machine learning, and medical research.",
  groups: [
    {
      title: "Programming and Data",
      note: "Working with",
      items: ["Python", "pandas", "NumPy", "scikit-learn", "Jupyter Notebook", "Google Colab"],
    },
    {
      title: "Developing Machine Learning Skills",
      note: "Developing proficiency in",
      items: [
        "Data preprocessing",
        "Exploratory analysis",
        "Supervised classification",
        "Cross-validation",
        "Model evaluation",
        "Interpretable predictions",
      ],
    },
    {
      title: "Medical Data and Research",
      note: "Applied experience",
      items: [
        "Radiographic dataset review",
        "CVAT",
        "XML annotation consistency checks",
        "Dataset quality assurance",
        "Research documentation",
      ],
    },
    {
      title: "Software and Collaboration",
      note: "Applied experience",
      items: [
        "Product requirements",
        "Functional testing",
        "Jira",
        "Trello",
        "Notion",
        "Figma",
        "Git and GitHub (developing)",
        "PostHog",
        "Postman",
        "Cross-functional collaboration",
      ],
    },
  ],
};

export const interests = {
  heading: "Research directions I'm exploring.",
  intro: "I am drawn to problems where careful implementation and a real clinical need meet.",
  items: [
    {
      title: "Medical Imaging and Diagnostic AI",
      body: "Exploring medical image data, annotation quality, and computational approaches to clinically relevant imaging problems.",
    },
    {
      title: "Clinical Prediction and Healthcare Analytics",
      body: "Using clinical and laboratory data to develop and evaluate predictive models with attention to clinical relevance.",
    },
    {
      title: "Explainable and Trustworthy AI",
      body: "Understanding model behavior, limitations, interpretability, and reliability in healthcare applications.",
    },
    {
      title: "Human-Centered Digital Health",
      body: "Developing practical healthcare technology that reflects the needs of clinicians, patients, and real workflows.",
    },
  ],
};

export const contact = {
  heading: "Let's Connect",
  body: "I welcome conversations about applied machine learning, clinical data, medical imaging, and healthcare technology. I am especially interested in interdisciplinary projects that connect computational methods with real clinical questions and practical implementation.",
};

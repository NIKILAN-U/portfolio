export const profile = {
  name: "Nikilan U",
  initials: "NU",
  title: "Full Stack Software Engineer",
  roles: [
    "Full Stack Software Engineer",
    "MERN Stack Developer",
    "AI Developer",
    "Blockchain Developer",
    "Software Engineer",
  ],
  location: "Coimbatore, Tamil Nadu, India",
  email: "nikilanu2005@gmail.com",
  phone: "+91 6369239456",
  phoneHref: "+916369239456",
  github: "https://github.com/NIKILAN-U",
  githubUser: "NIKILAN-U",
  linkedin: "https://linkedin.com/in/nikilan-u-2874693b3",
  whatsapp: "https://wa.me/916369239456",
  resumeHref: "/resume.pdf",
  summary:
    "Motivated and results-driven M.Sc. Software Systems student with hands-on experience in Full Stack Development, Artificial Intelligence, and Blockchain Technology. Successfully completed a 6-month Software Developer Internship at Hazzino Technologies, contributing to international client projects for the United States and Malaysia.",
  summarySecondary:
    "Experienced in designing scalable web and mobile applications using the MERN Stack, Django, REST APIs, and modern software engineering practices — with an ongoing research interest in quantum computing and decentralized systems.",
} as const;

export const heroStats = [
  { label: "Major Projects", value: 6, suffix: "+" },
  { label: "Internship", value: 6, suffix: " mo" },
  { label: "Client Projects", value: 2, suffix: "" },
  { label: "Publication", value: 1, suffix: "" },
  { label: "Hackathon", value: 1, suffix: " win" },
] as const;

export const aboutStats = [
  { label: "Years Learning", value: 4, suffix: "+" },
  { label: "Projects Completed", value: 8, suffix: "+" },
  { label: "Research Publications", value: 1, suffix: "" },
  { label: "Hackathons Won", value: 1, suffix: "" },
  { label: "Client Projects", value: 2, suffix: "" },
] as const;

export type Experience = {
  company: string;
  role: string;
  duration: string;
  period: string;
  location: string;
  responsibilities: string[];
};

export const experience: Experience[] = [
  {
    company: "Hazzino Technologies",
    role: "Software Developer Intern",
    duration: "6 Months",
    period: "Jan 2026 — Jun 2026",
    location: "Coimbatore, Tamil Nadu",
    responsibilities: [
      "Worked as a Full Stack Developer across two live international client codebases",
      "Developed and shipped production MERN stack applications end to end",
      "Built and documented REST APIs consumed by web and admin clients",
      "Owned MongoDB schema design and integration for both client platforms",
      "Collaborated with senior engineers via GitHub using Agile workflows",
      "Handled debugging, QA, deployment, and iterative feature development",
    ],
  },
];

export type ClientProject = {
  slug: string;
  name: string;
  country: string;
  description: string;
  responsibilities: string[];
  stack: string[];
  timeline: string;
  status: "Shipped" | "In Production";
};

export const clientProjects: ClientProject[] = [
  {
    slug: "rent-around",
    name: "Rent Around",
    country: "United States",
    description: "Vehicle rental platform",
    responsibilities: [
      "Authentication",
      "Booking",
      "Vehicle Management",
      "Dashboard",
      "Admin Panel",
      "REST APIs",
      "Image Upload",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    timeline: "2026",
    status: "In Production",
  },
  {
    slug: "medical-tourism-platform",
    name: "Medical Tourism Platform",
    country: "Malaysia",
    description: "Healthcare platform",
    responsibilities: [
      "Appointment Booking",
      "Hospital Management",
      "Patient Management",
      "Doctor Management",
      "Admin Dashboard",
      "Backend APIs",
      "MongoDB",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    timeline: "2026",
    status: "In Production",
  },
];

export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  category: string;
  year: string;
  highlight?: string;
  status: "Shipped" | "In Progress" | "Confidential";
};

export const featuredProjects: Project[] = [
  {
    slug: "blockchain-food-supply-chain",
    name: "Blockchain Food Supply Chain",
    description:
      "Blockchain-based traceability system for the food supply chain, using smart contracts to validate transactions and track products from producer to consumer.",
    stack: ["Blockchain", "Smart Contracts", "JavaScript", "Node.js"],
    category: "Blockchain",
    year: "2026",
    status: "Shipped",
  },
  {
    slug: "less-bits-big-planet",
    name: "Less Bits Big Planet",
    description:
      "Offline AI chatbot built around quantum-computing-inspired concepts for efficient response generation without a network dependency.",
    stack: ["Python", "AI", "Quantum Computing"],
    category: "Artificial Intelligence",
    year: "2026",
    highlight: "1st Prize — Hackora Hackathon 2026",
    status: "Shipped",
  },
  {
    slug: "cervical-cancer-prediction",
    name: "Cervical Cancer Prediction",
    description:
      "Machine learning model trained on medical datasets for early cervical cancer prediction, covering preprocessing, feature engineering, and evaluation.",
    stack: ["Machine Learning", "Python", "Medical Dataset"],
    category: "Machine Learning",
    year: "2025",
    status: "Shipped",
  },
  {
    slug: "fresh-vs-spoiled-fruits",
    name: "Fresh vs Spoiled Fruits Detection",
    description:
      "Web-based image classification system distinguishing fresh from spoiled produce to automate quality inspection.",
    stack: ["Computer Vision", "Image Processing", "Python"],
    category: "Computer Vision",
    year: "2025",
    status: "Shipped",
  },
  {
    slug: "jenis-egg-sales",
    name: "JENIS Egg Sales Management System",
    description:
      "End-to-end operations platform for an egg distribution business — admin dashboard, driver app, supervisor dashboard, live location tracking, invoicing, and inventory in one system.",
    stack: ["MERN", "Expo", "Admin Dashboard", "Live Tracking"],
    category: "Full Stack",
    year: "2026",
    status: "Shipped",
  },
  {
    slug: "ai-coding-assistant",
    name: "AI Coding Assistant",
    description:
      "ChatGPT-style coding assistant built on open-source LLMs, providing inline suggestions and conversational code help.",
    stack: ["Python", "LLMs", "AI"],
    category: "Artificial Intelligence",
    year: "2026",
    status: "In Progress",
  },
  {
    slug: "interior-erp",
    name: "Interior ERP",
    description:
      "Business management suite for interior design firms — CRM, HRMS, inventory, accounts, appointments, and project management in a single ERP.",
    stack: ["MERN", "CRM", "HRMS", "Inventory"],
    category: "Full Stack",
    year: "2026",
    status: "In Progress",
  },
  {
    slug: "ecommerce-website",
    name: "E-Commerce Website",
    description:
      "Full-featured storefront with product catalog, shopping cart, authentication, order management, and an admin panel.",
    stack: ["Django", "Shopping Cart", "Authentication", "Orders"],
    category: "Full Stack",
    year: "2025",
    status: "Shipped",
  },
  {
    slug: "baha-super-market-billing",
    name: "Baha Super Market Billing Software",
    description:
      "Retail billing system built for Baha Super Market — product catalog and inventory tracking, invoicing with GST/tax calculation, customer records, and sales reporting.",
    stack: ["MERN", "Billing", "Inventory", "GST/Tax"],
    category: "Full Stack",
    year: "2026",
    status: "Shipped",
  },
  {
    slug: "sri-samy-trader-billing",
    name: "Sri Samy Trader Billing Software",
    description:
      "Retail billing system built for Sri Samy Trader — product catalog and inventory tracking, invoicing with GST/tax calculation, customer records, and sales reporting.",
    stack: ["MERN", "Billing", "Inventory", "GST/Tax"],
    category: "Full Stack",
    year: "2026",
    status: "Shipped",
  },
];

export const skills = [
  {
    label: "Programming",
    items: ["Java", "Python", "JavaScript", "C"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Expo"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "Django", "REST API"],
  },
  {
    label: "Database",
    items: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    label: "Blockchain",
    items: ["Smart Contracts", "Supply Chain Traceability"],
  },
  {
    label: "Artificial Intelligence",
    items: ["Machine Learning", "Computer Vision", "LLMs", "Chatbots"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Docker", "Figma", "npm"],
  },
] as const;

export const research = {
  title:
    "Evolution of Quantum Entanglement to Teleportation: A Historical Review with Qiskit-based Implementation",
  journal: "IJSRCSEIT",
  volume: "12",
  issue: "2",
  year: "2026",
  doi: "10.32628/CSEIT26121321",
  doiUrl: "https://doi.org/10.32628/CSEIT26121321",
  abstract:
    "A historical review tracing the development of quantum entanglement theory through to modern quantum teleportation protocols, paired with a practical implementation and simulation using IBM's Qiskit framework.",
};

export type Achievement = {
  title: string;
  description: string;
  date: string;
};

export const achievements: Achievement[] = [
  {
    title: "Hackora Hackathon Winner",
    description:
      "1st Prize for \"Less Bits Big Planet\" — an AI chatbot built on quantum-computing-inspired concepts.",
    date: "2026",
  },
  {
    title: "Research Publication",
    description:
      "Published in IJSRCSEIT, Vol. 12, Issue 2 — a historical review of quantum teleportation with a Qiskit implementation.",
    date: "2026",
  },
  {
    title: "International Client Projects",
    description:
      "Delivered production features for clients in the United States and Malaysia during the Hazzino internship.",
    date: "2026",
  },
  {
    title: "6-Month Internship",
    description:
      "Completed a full software development internship at Hazzino Technologies as a Full Stack Developer.",
    date: "2026",
  },
  {
    title: "Blockchain Project",
    description:
      "Built a blockchain-based traceability system for food supply chains using smart contracts.",
    date: "2026",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
] as const;

export const footerLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Resume", href: "#resume" },
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Contact", href: "#contact" },
] as const;

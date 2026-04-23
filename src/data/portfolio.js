export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/mdmuche",
  },
  {
    label: "LinkedIn",
    href: "https://ng.linkedin.com/in/martins-abula-3389b5171",
  },
  {
    label: "Twitter",
    href: "https://www.twitter.com/mdmuche",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mdmuche/",
  },
];

export const heroStats = [
  { value: "2+", label: "Years building production-ready JavaScript apps" },
  { value: "4", label: "Backend APIs featured in this portfolio" },
  {
    value: "End-to-end",
    label: "Product thinking across frontend and backend",
  },
];

export const skillGroups = [
  {
    title: "Backend Engineering",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "MongoDB",
      "REST APIs",
      "JWT Auth",
    ],
  },
  {
    title: "Frontend Delivery",
    items: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Responsive UI",
    ],
  },
  {
    title: "Workflow",
    items: [
      "Git & GitHub",
      "API design",
      "Testing mindset",
      "Performance tuning",
      "Deployment",
      "Documentation",
    ],
  },
];

export const projects = [
  {
    title: "Notes API",
    description:
      "A structured backend for note creation, organization, and account-based content management with a clean API surface.",
    techStack: ["NestJS", "TypeScript", "MongoDB", "JWT"],
    features: [
      "Authentication and protected routes",
      "CRUD workflows for personal notes",
      "Scalable module-based backend structure",
    ],
    githubUrl: "https://github.com/mdmuche/notes-api",
    image: "/img/notes-api.png",
  },
  {
    title: "Meal Planning API",
    description:
      "An API focused on planning and managing meal routines with resources designed for structured nutrition workflows.",
    techStack: ["Express.js", "Node.js", "MongoDB", "Mongoose"],
    features: [
      "Meal plan creation and updates",
      "Persistent data storage for planning flows",
      "Organized endpoint design for future app clients",
    ],
    githubUrl: "https://github.com/mdmuche/meal-planning-api",
    image: "/img/meal-planning-api.png",
  },
  {
    title: "E-commerce API",
    description:
      "A commerce-focused backend that supports product, customer, and order workflows for scalable online retail experiences.",
    techStack: ["Express.js", "Node.js", "MongoDB", "REST"],
    features: [
      "Product and catalog management",
      "Order-oriented API workflows",
      "Designed for integration with modern storefronts",
    ],
    githubUrl: "https://github.com/mdmuche/my-ecommerce-api",
    image: "/img/ecommerce-api.png",
  },
  {
    title: "Quiz API",
    description:
      "A backend service for quiz management, question delivery, and scoring-ready logic that can power learning applications.",
    techStack: ["Express.js", "Node.js", "MongoDB", "JavaScript"],
    features: [
      "Question and quiz resource management",
      "Flexible structure for educational products",
      "Simple API surface for frontend integrations",
    ],
    githubUrl: "https://github.com/mdmuche/quiz-api",
    image: "/img/quiz-api.png",
  },
];

export const contactDetails = [
  {
    label: "Email",
    value: "abulamartins@gmail.com",
    href: "mailto:abulamartins@gmail.com",
  },
  {
    label: "Location",
    value: "Lagos, Nigeria",
    href: "https://maps.google.com/?q=Lagos,Nigeria",
  },
];

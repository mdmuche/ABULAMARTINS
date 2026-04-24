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
  // Fullstack
  {
    title: "NaijaPrice Tracker (Market Intelligence Platform)",
    type: "fullstack",
    description:
      "A location-aware market intelligence platform that provides real-time commodity prices across Nigerian markets, helping users make informed purchasing decisions and reduce price exploitation.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    features: [
      "Location-based price feed (State → LGA → Market filtering)",
      "Real-time commodity price tracking with historical trends",
      "Unit standardization system (Mudu, Paint Bucket → KG conversion)",
      "Crowdsourced price submissions with reputation scoring",
      "Price trend analytics (daily changes and percentage insights)",
      "Offline-first support with data sync for low-connectivity environments",
      "JWT authentication and role-based user system",
      "Geolocation and geofencing for accurate market detection",
    ],
    liveDemo: "https://naijaprice.vercel.app",
    githubUrl: "https://github.com/mdmuche/naijaprice-frontend",
    image: "/img/naipricehome.PNG",
  },

  // Backend
  {
    title: "Scalable Notes API",
    type: "backend",
    description:
      "A production-ready backend for managing user-specific notes with secure authentication and modular architecture.",
    techStack: ["NestJS", "TypeScript", "MongoDB", "JWT"],
    features: [
      "JWT-based authentication and route protection",
      "Modular architecture using NestJS structure",
      "Full CRUD operations with user-level data isolation",
    ],
    githubUrl: "https://github.com/mdmuche/notes-api",
    image: "/img/notes-api.png",
  },
  {
    title: "Meal Planning & Nutrition API",
    type: "backend",
    description:
      "A structured API for managing meal plans and nutritional workflows, designed to support scalable health applications.",
    techStack: ["Express.js", "Node.js", "MongoDB", "Mongoose"],
    features: [
      "Meal plan creation and structured data storage",
      "RESTful API design for client integration",
      "Flexible schema for nutrition-based applications",
    ],
    githubUrl: "https://github.com/mdmuche/meal-planning-api",
    image: "/img/meal-planning-api.png",
  },
  {
    title: "E-commerce Backend System",
    type: "backend",
    description:
      "A commerce backend handling products, users, and order workflows, designed for integration with modern storefronts.",
    techStack: ["Express.js", "Node.js", "MongoDB", "REST"],
    features: [
      "Product and inventory management",
      "Order processing workflows",
      "Structured API design for scalable commerce apps",
    ],
    githubUrl: "https://github.com/mdmuche/my-ecommerce-api",
    image: "/img/ecommerce-api.png",
  },
  {
    title: "Quiz Management API",
    type: "backend",
    description:
      "A backend service for managing quizzes, questions, and scoring logic for educational or assessment platforms.",
    techStack: ["Express.js", "Node.js", "MongoDB", "JavaScript"],
    features: [
      "Quiz and question resource management",
      "Structured endpoints for frontend consumption",
      "Flexible design for learning applications",
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

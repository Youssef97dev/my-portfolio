export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: "Full-Stack" | "Frontend" | "Backend / API" | "Mobile / AI";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  projects?: {
    name: string;
    details: string[];
  }[];
  techStack: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: number; icon?: string }[];
}

export interface PortfolioData {
  personal: {
    name: string;
    firstName: string;
    lastName: string;
    title: string;
    subtitle: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    portfolio: string;
    cvPath: string;
    yearsOfExperience: string;
    about: string;
    bioPoints: string[];
    languages: {
      language: string;
      proficiency: string;
      levelPercent: number;
    }[];
  };
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  skillCategories: Record<string, string[]>;
  skillsDetail: SkillCategory[];
  experiences: Experience[];
  education: Education[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Youssef Moussafi",
    firstName: "Youssef",
    lastName: "Moussafi",
    title: "Développeur Full Stack",
    subtitle: "React.js • Next.js • Node.js • NestJS • TypeScript • PostgreSQL",
    location: "Casablanca, Maroc",
    email: "youssefmoussafi97@gmail.com",
    phone: "+212 6 33 73 78 51",
    linkedin: "https://linkedin.com/in/youssef-moussafi",
    github: "https://github.com/youssefmoussafi",
    portfolio: "https://youssefmoussafi.vercel.app",
    cvPath: "/files/CV-Youssef-Moussafi.pdf",
    yearsOfExperience: "5+",
    about:
      "Développeur Full Stack avec plus de 5 ans d'expérience dans la conception, le développement et le déploiement d'applications web performantes en React.js, Next.js, Node.js, NestJS et TypeScript. Solide expertise en architecture de bases de données (PostgreSQL, MongoDB), création d'API REST sécurisées (JWT), optimisation du référencement technique (SEO, Core Web Vitals) et mise en production d'applications (cPanel, Namecheap, Vercel, PM2). Habitué aux méthodologies Agiles (Scrum/Trello) et à l'accélération par les technologies IA.",
    bioPoints: [
      "5+ années d'expérience en architecture Full Stack moderne & micro-services",
      "Spécialiste Next.js (App Router, SSR/SSG/ISR), React 19 et écosystème TypeScript",
      "Conception d'APIs RESTful ultra-performantes et sécurisées (NestJS, Node.js, JWT)",
      "Optimisation de bases de données relationnelles & NoSQL (PostgreSQL, MongoDB)",
      "Culture DevOps complète : CI/CD, PM2, Vercel, monitoring & haute disponibilité",
      "Sens aiguisé du design UI/UX, accessibilité et Core Web Vitals < 100ms",
    ],
    languages: [
      {
        language: "Arabe",
        proficiency: "Langue maternelle",
        levelPercent: 100,
      },
      {
        language: "Français",
        proficiency: "Courant (Professionnel)",
        levelPercent: 95,
      },
      {
        language: "Anglais",
        proficiency: "Intermédiaire (Technique)",
        levelPercent: 75,
      },
    ],
  },

  metrics: [
    {
      label: "Années d'expérience",
      value: "5+",
      description: "Sur des projets web & API exigeants",
    },
    {
      label: "Projets livrés",
      value: "20+",
      description: "Applications métiers, SaaS et vitrines",
    },
    {
      label: "Performances Core Web",
      value: "99+",
      description: "Optimisations SEO, FCP & LCP",
    },
    {
      label: "Disponibilité",
      value: "100%",
      description: "À l'écoute de nouveaux défis et opportunités",
    },
  ],

  skillCategories: {
    "Front-End": [
      "React.js",
      "Next.js (App Router, SSR, SSG)",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Framer Motion",
    ],
    "Back-End & API": [
      "Node.js",
      "NestJS",
      "Express.js",
      "Architecture RESTful",
      "Authentification JWT",
      "Microservices",
    ],
    "Bases de données": [
      "PostgreSQL",
      "MongoDB",
      "Modélisation relationnelle & NoSQL",
      "Indexation & Optimisation de requêtes",
      "Prisma / TypeORM",
    ],
    "IA & Productivité": [
      "Développement assisté par IA",
      "Intégration d'API IA (LLM, Embeddings)",
      "Automatisation de workflows",
    ],
    "Déploiement & Outils": [
      "Git & GitHub",
      "Vercel",
      "PM2",
      "cPanel / Namecheap",
      "Postman",
      "NPM",
      "VS Code",
      "Trello (Agile/Scrum)",
    ],
    "Performance & Méthodes": [
      "SEO Technique",
      "Core Web Vitals",
      "Lazy Loading & Infinite Scroll",
      "Agile / Scrum",
      "Modélisation UML & Merise",
    ],
  },

  skillsDetail: [
    {
      title: "Front-End Engineering",
      skills: [
        { name: "Next.js (App Router)", level: 95 },
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion & 3D", level: 85 },
      ],
    },
    {
      title: "Back-End & Architecture",
      skills: [
        { name: "Node.js & NestJS", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "REST APIs & JWT", level: 95 },
        { name: "PostgreSQL & SQL", level: 90 },
        { name: "MongoDB & NoSQL", level: 85 },
      ],
    },
    {
      title: "DevOps & Écosystème",
      skills: [
        { name: "Vercel & PM2", level: 90 },
        { name: "Git & Workflows", level: 92 },
        { name: "SEO & Core Web Vitals", level: 95 },
        { name: "AI Dev Workflows", level: 90 },
      ],
    },
  ],

  experiences: [
    {
      id: "creativa",
      role: "Développeur Full Stack",
      company: "Creativa Restaurant",
      location: "Casablanca, Maroc",
      period: "Août 2024 – Présent",
      type: "Poste actuel",
      description: [
        "Conception architecturale et réalisation full-stack de solutions web à haute valeur ajoutée.",
        "Mise en place de systèmes de réservation critiques et vitrines pour divers établissements haut de gamme.",
      ],
      projects: [
        {
          name: "Système de gestion des réservations du restaurant",
          details: [
            "Conçu et modélisé la structure relationnelle PostgreSQL pour le système de gestion des réservations en temps réel.",
            "Développé l'architecture complète Back-End (NestJS) et Front-End (Next.js).",
            "Implémenté des API REST sécurisées avec authentification JWT et gestion granulaire des rôles.",
            "Déployé sur serveur Namecheap via Node.js avec PM2 en cluster pour garantir haute disponibilité et zéro interruption.",
          ],
        },
        {
          name: "Conception de 5 sites web de présentation pour établissements",
          details: [
            "Conçu et développé 5 sites sur-mesure (Next.js / Tailwind CSS) respectant l'identité visuelle de chaque marque.",
            "Intégration de contenus dynamiques (menus interactifs, galeries médias, événements) avec UX desktop/mobile fluide.",
            "Optimisation SEO technique et Core Web Vitals (scores 98+) propulsant la visibilité en ligne.",
            "Maintenance évolutive, monitoring de production et support technique continu.",
          ],
        },
      ],
      techStack: [
        "Next.js",
        "NestJS",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "REST API",
        "JWT",
        "PM2",
        "Vercel",
      ],
    },
    {
      id: "votresalle",
      role: "Développeur Full Stack",
      company: "Votre Salle",
      location: "Marrakech, Maroc",
      period: "Octobre 2023 – Août 2024",
      type: "Expérience clé",
      description: [
        "Développement de la plateforme nationale votresalles.ma pour la publication, la recherche et la réservation de salles au Maroc.",
      ],
      projects: [
        {
          name: "Plateforme web votresalles.ma",
          details: [
            "Conception et modélisation de la base PostgreSQL pour gérer un catalogue complexe de lieux et disponibilités.",
            "Développement full-stack complet : backend NestJS modulaire et interface Next.js ultra-réactive avec Tailwind CSS.",
            "Implémentation de JWT pour la sécurité des comptes hôtes et clients.",
            "Optimisation des performances : Infinite Scroll, Lazy Loading et requêtes PostgreSQL indexées.",
            "Déploiement Namecheap avec PM2 et supervision continue du service.",
          ],
        },
      ],
      techStack: [
        "Next.js",
        "NestJS",
        "Tailwind CSS",
        "PostgreSQL",
        "REST API",
        "JWT",
        "PM2",
        "Namecheap",
      ],
    },
    {
      id: "eam-service",
      role: "Développeur Full Stack",
      company: "EAM Service",
      location: "Casablanca, Maroc",
      period: "Octobre 2020 – Février 2023",
      type: "Expérience fondatrice",
      description: [
        "Conception et développement de deux applications web internes stratégiques pour l'exploitation d'entreprise.",
      ],
      projects: [
        {
          name: "Application web de Gestion des Achats",
          details: [
            "Gestion des fournisseurs, catalogue produits, commandes d'approvisionnement et suivi d'inventaire en temps réel.",
            "Architecture Node.js / Express.js avec stockage MongoDB optimisé.",
          ],
        },
        {
          name: "Application web de Gestion des Ouvriers",
          details: [
            "Gestion des effectifs, suivi des congés, coffre-fort documentaire et planification des chantiers.",
            "Authentification sécurisée JWT avec contrôle d'accès basé sur les rôles (RBAC).",
            "Interface React.js dynamique avec retours utilisateurs en temps réel et support technique.",
          ],
        },
      ],
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
        "JWT",
        "Git",
      ],
    },
  ],

  education: [
    {
      id: "master",
      degree:
        "Master Universitaire Professionnel — Ingénierie de Conception et de Développement d'Applications",
      institution: "Faculté des Sciences et Techniques (FST)",
      location: "Casablanca, Maroc",
      period: "Octobre 2022 – Juin 2023",
    },
    {
      id: "licence",
      degree:
        "Licence Professionnelle — Méthodes Informatiques Appliquées à la Gestion des Entreprises (MIAGE)",
      institution:
        "Faculté des Sciences Juridiques, Économiques et Sociales (FSJES)",
      location: "Mohammedia, Maroc",
      period: "Octobre 2018 – Juin 2019",
    },
    {
      id: "tsdi",
      degree: "Diplôme de Technicien Spécialisé en Développement Informatique",
      institution: "Institut Spécialisé de Gestion et d'Informatique (ISGI)",
      location: "Casablanca, Maroc",
      period: "Octobre 2015 – Juin 2017",
    },
  ],

  // -------------------------------------------------------------------------------------------------
  // 4 TO 6 WELL-STRUCTURED PLACEHOLDER PROJECTS (CUSTOMIZABLE BY USER)
  // Edit the entries below to update screenshots, links, descriptions, and tech stacks anytime!
  // -------------------------------------------------------------------------------------------------
  projects: [
    {
      id: "votresalles-platform",
      title: "VotreSalle.ma — Réservation de Salles",
      description:
        "Plateforme web de recherche, publication et réservation événementielle au Maroc avec moteur de recherche géolocalisé et gestion de créneaux en direct.",
      longDescription:
        "Conception complète de la marketplace avec filtres multicritères, paiement sécurisé, tableau de bord pour hôtes et calendrier interactif synchronisé.",
      techStack: [
        "Next.js",
        "NestJS",
        "PostgreSQL",
        "Tailwind CSS",
        "JWT",
        "PM2",
      ],
      image: "/images/votresalle-image.PNG",
      liveUrl: "https://votre-salle-v2.vercel.app/",
      githubUrl: "https://github.com/Youssef97dev/votre_salle_V2",
      featured: true,
      category: "Full-Stack",
    },
    {
      id: "le-salama-restaurant",
      title: "Le Salama Marrakech - Restaurant",
      description:
        "A vibrant, responsive web platform for an iconic Marrakech rooftop restaurant and sky bar.",
      longDescription:
        "Developed the official website for Le Salama Marrakech using Next.js, React, and Node.js. The project focuses on capturing the venue's colonial-chic atmosphere and panoramic rooftop views through high-resolution visual storytelling, smooth page transitions, and fast load times. Built with a mobile-first approach, it features intuitive menu browsing, direct table reservation flows, and SEO optimization to attract international visitors.",
      techStack: ["ReactJS", "NodeJS", "NextJS"],
      image: "/images/lesalama-image.PNG",
      liveUrl: "https://lesalamamarrakech.com/",
      githubUrl: "https://github.com/Youssef97dev/lesalama-v23",
      featured: true,
      category: "Frontend",
    },
    {
      id: "le-palace-restaurant",
      title: "Le Palace Marrakech - Restaurant",
      description:
        "An upscale, high-performance website for a luxury fine-dining restaurant and lounge in Hivernage.",
      longDescription:
        "Engineered a refined digital experience for Le Palace Marrakech with Next.js and React. Designed to reflect the venue's glamorous dining and nightlife ambiance, the site pairs dark, elegant typography with optimized media delivery. Key implementations include server-side rendering for strong search visibility, seamless reservation integration, and a responsive layout tailored for both desktop and mobile guests.",
      techStack: ["ReactJS", "NodeJS", "NextJS"],
      image: "/images/lepalace-image.PNG",
      liveUrl: "https://le-palacemarrakech.com/",
      githubUrl: "https://github.com/Youssef97dev/lepalace-v9",
      featured: true,
      category: "Frontend",
    },
    {
      id: "casalalla-restaurant",
      title: "Casa Lalla Takerkoust - Restaurant",
      description:
        "A sunlit, editorial-style web application for a lakeside dining destination near Marrakech.",
      longDescription:
        "Built the web presence for Casa Lalla Takerkoust using Next.js, React, and Node.js. The interface highlights the serene lakeside setting and Atlas Mountain views through clean layouts, fluid navigation, and optimized image loading. Engineered for performance and conversion, the platform streamlines event inquiries, menu discovery, and table bookings across all devices.",
      techStack: ["ReactJS", "NodeJS", "NextJS"],
      image: "/images/casalalla-image.PNG",
      liveUrl: "https://casalallatakerkoust.com/",
      githubUrl: "https://github.com/Youssef97dev/casalallatakerkoustv2",
      featured: true,
      category: "Frontend",
    },
    {
      id: "purehouse-marrakech-riad",
      title: "Pure House Marrakech - Riad",
      description:
        "A minimalist boutique riad website showcasing Moroccan craftsmanship and direct room booking.",
      longDescription:
        "Created a modern hospitality website for Pure House Marrakech, a boutique riad in the heart of the Medina. Powered by Next.js and React, the site balances warm, minimalist aesthetics with fast client-side navigation and server-side SEO. It guides travelers effortlessly through room galleries, curated local experiences, and direct booking pathways.",
      techStack: ["ReactJS", "NodeJS", "NextJS"],
      image: "/images/riad-image.PNG",
      liveUrl: "https://purehousemarrakech.com/",
      githubUrl: "https://github.com/Youssef97dev/purehousemedina",
      featured: true,
      category: "Frontend",
    },
    {
      id: "purehouse-on-the-lake-hotel",
      title: "Pure House On The Lake - Hotel",
      description:
        "An immersive hotel platform designed for a tranquil waterfront retreat at Lalla Takerkoust.",
      longDescription:
        "Developed the web application for Pure House On The Lake using Next.js, React, and Node.js. The design emphasizes calm, spacious layouts and rich photography to showcase the lakefront suites, pool, and dining experiences. Built with performance best practices, responsive grids, and clear booking calls-to-action to maximize direct reservations.",
      techStack: ["ReactJS", "NodeJS", "NextJS"],
      image: "/images/lake-image.PNG",
      liveUrl: "https://purehouseonthelake.com/",
      githubUrl: "https://github.com/Youssef97dev/purehouseonthelake",
      featured: true,
      category: "Frontend",
    },
    {
      id: "pure-farm-house-rural-hotel",
      title: "Pure Farm House - Rural Hotel",
      description:
        "A nature-focused hospitality website for a peaceful countryside getaway outside Marrakech.",
      longDescription:
        "Built the digital platform for Pure Farm House, a rural boutique hotel celebrating slow living and nature. Utilizing Next.js, React, and Node.js, the site delivers fast load speeds, responsive layouts, and an earthy visual hierarchy that highlights the property's accommodations, farm-to-table dining, and outdoor experiences while keeping the booking journey simple and direct.",
      techStack: ["ReactJS", "NodeJS", "NextJS"],
      image: "/images/farm-image.PNG",
      liveUrl: "https://purefarmhouse.com/",
      githubUrl: "https://github.com/Youssef97dev/purefarmhouse",
      featured: true,
      category: "Frontend",
    },
  ],
};

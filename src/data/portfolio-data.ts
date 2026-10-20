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
    languages: { language: string; proficiency: string; levelPercent: number }[];
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
      "Sens aiguisé du design UI/UX, accessibilité et Core Web Vitals < 100ms"
    ],
    languages: [
      { language: "Arabe", proficiency: "Langue maternelle", levelPercent: 100 },
      { language: "Français", proficiency: "Courant (Professionnel)", levelPercent: 95 },
      { language: "Anglais", proficiency: "Intermédiaire (Technique)", levelPercent: 75 }
    ]
  },

  metrics: [
    { label: "Années d'expérience", value: "5+", description: "Sur des projets web & API exigeants" },
    { label: "Projets livrés", value: "20+", description: "Applications métiers, SaaS et vitrines" },
    { label: "Performances Core Web", value: "99+", description: "Optimisations SEO, FCP & LCP" },
    { label: "Disponibilité", value: "100%", description: "À l'écoute de nouveaux défis et opportunités" }
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
      "Framer Motion"
    ],
    "Back-End & API": [
      "Node.js",
      "NestJS",
      "Express.js",
      "Architecture RESTful",
      "Authentification JWT",
      "Microservices"
    ],
    "Bases de données": [
      "PostgreSQL",
      "MongoDB",
      "Modélisation relationnelle & NoSQL",
      "Indexation & Optimisation de requêtes",
      "Prisma / TypeORM"
    ],
    "IA & Productivité": [
      "Développement assisté par IA",
      "Intégration d'API IA (LLM, Embeddings)",
      "Automatisation de workflows"
    ],
    "Déploiement & Outils": [
      "Git & GitHub",
      "Vercel",
      "PM2",
      "cPanel / Namecheap",
      "Postman",
      "NPM",
      "VS Code",
      "Trello (Agile/Scrum)"
    ],
    "Performance & Méthodes": [
      "SEO Technique",
      "Core Web Vitals",
      "Lazy Loading & Infinite Scroll",
      "Agile / Scrum",
      "Modélisation UML & Merise"
    ]
  },

  skillsDetail: [
    {
      title: "Front-End Engineering",
      skills: [
        { name: "Next.js (App Router)", level: 95 },
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion & 3D", level: 85 }
      ]
    },
    {
      title: "Back-End & Architecture",
      skills: [
        { name: "Node.js & NestJS", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "REST APIs & JWT", level: 95 },
        { name: "PostgreSQL & SQL", level: 90 },
        { name: "MongoDB & NoSQL", level: 85 }
      ]
    },
    {
      title: "DevOps & Écosystème",
      skills: [
        { name: "Vercel & PM2", level: 90 },
        { name: "Git & Workflows", level: 92 },
        { name: "SEO & Core Web Vitals", level: 95 },
        { name: "AI Dev Workflows", level: 90 }
      ]
    }
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
        "Mise en place de systèmes de réservation critiques et vitrines pour divers établissements haut de gamme."
      ],
      projects: [
        {
          name: "Système de gestion des réservations du restaurant",
          details: [
            "Conçu et modélisé la structure relationnelle PostgreSQL pour le système de gestion des réservations en temps réel.",
            "Développé l'architecture complète Back-End (NestJS) et Front-End (Next.js).",
            "Implémenté des API REST sécurisées avec authentification JWT et gestion granulaire des rôles.",
            "Déployé sur serveur Namecheap via Node.js avec PM2 en cluster pour garantir haute disponibilité et zéro interruption."
          ]
        },
        {
          name: "Conception de 5 sites web de présentation pour établissements",
          details: [
            "Conçu et développé 5 sites sur-mesure (Next.js / Tailwind CSS) respectant l'identité visuelle de chaque marque.",
            "Intégration de contenus dynamiques (menus interactifs, galeries médias, événements) avec UX desktop/mobile fluide.",
            "Optimisation SEO technique et Core Web Vitals (scores 98+) propulsant la visibilité en ligne.",
            "Maintenance évolutive, monitoring de production et support technique continu."
          ]
        }
      ],
      techStack: ["Next.js", "NestJS", "TypeScript", "Tailwind CSS", "PostgreSQL", "REST API", "JWT", "PM2", "Vercel"]
    },
    {
      id: "votresalle",
      role: "Développeur Full Stack",
      company: "Votre Salle",
      location: "Marrakech, Maroc",
      period: "Octobre 2023 – Août 2024",
      type: "Expérience clé",
      description: [
        "Développement de la plateforme nationale votresalles.ma pour la publication, la recherche et la réservation de salles au Maroc."
      ],
      projects: [
        {
          name: "Plateforme web votresalles.ma",
          details: [
            "Conception et modélisation de la base PostgreSQL pour gérer un catalogue complexe de lieux et disponibilités.",
            "Développement full-stack complet : backend NestJS modulaire et interface Next.js ultra-réactive avec Tailwind CSS.",
            "Implémentation de JWT pour la sécurité des comptes hôtes et clients.",
            "Optimisation des performances : Infinite Scroll, Lazy Loading et requêtes PostgreSQL indexées.",
            "Déploiement Namecheap avec PM2 et supervision continue du service."
          ]
        }
      ],
      techStack: ["Next.js", "NestJS", "Tailwind CSS", "PostgreSQL", "REST API", "JWT", "PM2", "Namecheap"]
    },
    {
      id: "eam-service",
      role: "Développeur Full Stack",
      company: "EAM Service",
      location: "Casablanca, Maroc",
      period: "Octobre 2020 – Février 2023",
      type: "Expérience fondatrice",
      description: [
        "Conception et développement de deux applications web internes stratégiques pour l'exploitation d'entreprise."
      ],
      projects: [
        {
          name: "Application web de Gestion des Achats",
          details: [
            "Gestion des fournisseurs, catalogue produits, commandes d'approvisionnement et suivi d'inventaire en temps réel.",
            "Architecture Node.js / Express.js avec stockage MongoDB optimisé."
          ]
        },
        {
          name: "Application web de Gestion des Ouvriers",
          details: [
            "Gestion des effectifs, suivi des congés, coffre-fort documentaire et planification des chantiers.",
            "Authentification sécurisée JWT avec contrôle d'accès basé sur les rôles (RBAC).",
            "Interface React.js dynamique avec retours utilisateurs en temps réel et support technique."
          ]
        }
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "JWT", "Git"]
    }
  ],

  education: [
    {
      id: "master",
      degree: "Master Universitaire Professionnel — Ingénierie de Conception et de Développement d'Applications",
      institution: "Faculté des Sciences et Techniques (FST)",
      location: "Casablanca, Maroc",
      period: "Octobre 2022 – Juin 2023"
    },
    {
      id: "licence",
      degree: "Licence Professionnelle — Méthodes Informatiques Appliquées à la Gestion des Entreprises (MIAGE)",
      institution: "Faculté des Sciences Juridiques, Économiques et Sociales (FSJES)",
      location: "Mohammedia, Maroc",
      period: "Octobre 2018 – Juin 2019"
    },
    {
      id: "tsdi",
      degree: "Diplôme de Technicien Spécialisé en Développement Informatique",
      institution: "Institut Spécialisé de Gestion et d'Informatique (ISGI)",
      location: "Casablanca, Maroc",
      period: "Octobre 2015 – Juin 2017"
    }
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
      techStack: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS", "JWT", "PM2"],
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://votresalles.ma",
      githubUrl: "https://github.com/youssefmoussafi/votresalle-platform",
      featured: true,
      category: "Full-Stack"
    },
    {
      id: "creativa-reserve-system",
      title: "Creativa — Booking & Table Management",
      description:
        "Système SaaS de réservation et assignation de tables en temps réel avec notifications automatisées et tableau de bord analytics pour restaurateurs.",
      longDescription:
        "Application dédiée aux établissements de restauration avec plan de salle interactif en direct, gestion des flux clients et intégration API SMS/WhatsApp.",
      techStack: ["Next.js 14", "NestJS", "PostgreSQL", "Tailwind CSS", "WebSockets"],
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://creativa-restaurant.vercel.app",
      githubUrl: "https://github.com/youssefmoussafi/creativa-booking",
      featured: true,
      category: "Full-Stack"
    },
    {
      id: "smart-erp-procurement",
      title: "FlowProcure — ERP Achats & Stocks",
      description:
        "Solution d'approvisionnement d'entreprise pour la traçabilité des stocks, commandes fournisseurs et validation budgétaire hiérarchique.",
      longDescription:
        "Module ERP interne conçu pour standardiser les flux d'achats avec historique d'audit, alertes de rupture de stock et génération de bons de commande PDF.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://flowprocure-demo.vercel.app",
      githubUrl: "https://github.com/youssefmoussafi/flowprocure-erp",
      featured: true,
      category: "Backend / API"
    },
    {
      id: "workforce-ops-portal",
      title: "OpsTeam — Gestion RH & Chantiers",
      description:
        "Portail de gestion des plannings de chantiers, présence des ouvriers, gestion des congés et coffre-fort numérique sécurisé.",
      longDescription:
        "Plateforme RH terrain avec interface mobile-first pour conducteurs de travaux, validation des congés en un clic et export comptable automatisé.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "REST API"],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://opsteam-demo.vercel.app",
      githubUrl: "https://github.com/youssefmoussafi/opsteam-manager",
      featured: false,
      category: "Full-Stack"
    },
    {
      id: "ai-content-workflow",
      title: "SynapseAI — Copilote de Génération Web",
      description:
        "Outil de génération assistée par IA pour la rédaction de fiches produits, méta-tags SEO automatisés et traduction contextuelle multilingue.",
      longDescription:
        "Intégration d'APIs LLM avec streaming en temps réel, orchestration de prompts et indexation vectorielle pour des résultats ultra-pertinents.",
      techStack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "OpenAI API", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://synapseai-preview.vercel.app",
      githubUrl: "https://github.com/youssefmoussafi/synapse-ai-copilot",
      featured: true,
      category: "Mobile / AI"
    },
    {
      id: "modern-showcase-collection",
      title: "Showcase Studio — 5 Vitrines Hautes Performances",
      description:
        "Suite de 5 sites vitrines sur-mesure pour des enseignes d'hospitality avec micro-animations 60fps et scores SEO Google 100/100.",
      longDescription:
        "Développement de landing pages ultra-légeres avec rendu serveur Next.js, images optimisées et taux de rebond divisé par deux.",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO Technique"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://showcase-studios.vercel.app",
      githubUrl: "https://github.com/youssefmoussafi/showcase-sites",
      featured: false,
      category: "Frontend"
    }
  ]
};

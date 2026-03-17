/* ============================================
   DATA.JS — All portfolio content in one place
   Edit this file to update portfolio content!
   ============================================ */

const DATA = {
  name: { first: "Delany", last: "Pulgarin" },
  title: "Étudiante en génie informatique",
  school: "Polytechnique Montréal · 4e année",
  summary: "Passionnée en <strong>développement logiciel</strong> et <strong>gestion de projet</strong> avec de l'expérience en optimisation logicielle et analyse de données.",
  languages: ["Français", "English", "Español"],

  contact: {
    phone:    { label: "(514) 616-2863",                  href: "tel:+15146162863" },
    email:    { label: "delanycruzpulgarin@gmail.com",     href: "mailto:delanycruzpulgarin@gmail.com" },
    location: { label: "Montréal, QC",                    href: null },
    linkedin: { label: "linkedin.com/in/delany-pulgarin", href: "https://www.linkedin.com/in/delany-pulgarin" }
  },

  skills: [
    { category: "Langages",           items: ["Python", "C++", "C#", "JavaScript", "TypeScript", "SQL"] },
    { category: "Frameworks & outils",items: ["React", "Angular", "Git", "GitLab", "Unity", "Azure SQL"] },
    { category: "Méthodes",           items: ["Agile / Scrum", "CI/CD (Pipelines)", "Full-Stack Dev", "Machine Learning"] },
    { category: "Bases de données",   items: ["MySQL", "SQL Server", "Azure SQL"] }
  ],

  softSkills: ["Collaboration", "Rigueur", "Esprit critique", "Débrouillardise"],

  experience: [
    {
      company:  "Vidéotron",
      role:     "Stage en ingénierie — Développement FullStack",
      period:   "Mai 2026 — Août 2026",
      image:    "images/exp-videotron.jpg",  // 👈 mets ton image ici
      imageAlt: "Vidéotron",
      bullets: [
        "Développement de nouvelles fonctionnalités et API",
        "Transformation des données opérationnelles et financières",
        "Production et analyse de KPI"
      ]
    },
    {
      company:  "Rogue Research Inc.",
      role:     "Stage en système de gestion de la qualité logicielles",
      period:   "Jan 2026 — Mai 2026",
      image:    "images/exp-rogue.jpg",      // 👈 mets ton image ici
      imageAlt: "Rogue Research Inc.",
      bullets: [
        "Protocoles de vérification et validation de logiciel",
        "Documentation de l'architecture logicielle",
        "Analyse d'écart de cybersécurité"
      ]
    },
    {
      company:  "M&G Construction",
      role:     "Stage en SEO de site web",
      period:   "Mars 2025 — Août 2025",
      image:    "images/exp-mg.jpg",         // 👈 mets ton image ici
      imageAlt: "M&G Construction",
      bullets: [
        "Optimisation de l'interface utilisateur",
        "Analyse de performance avec Google Analytics"
      ]
    }
  ],

  projects: [
    {
      slug:     "nosotech-ia",  // → URL: projects/nosotech-ia.html
      title:    "Extraction automatisée de données par IA",
      org:      "Nosotech & Polytechnique Montréal",
      period:   "Jan 2026 — Mai 2026",
      tags:     ["Python", "Machine Learning", "SQL"],
      image:    "images/proj-nosotech.jpg",  // 👈 mets ton image ici
      imageAlt: "Extraction de données IA",
      summary:  "Développement d'un pipeline d'IA pour l'extraction et la structuration automatisée de données en collaboration avec Nosotech.",
      bullets: [
        "Pipelines ML pour l'extraction et la structuration de données",
        "Développement back-end orienté objet (Python)",
        "Conversion de données en formats exploitables",
        "Base de données SQL"
      ]
    },
    {
      slug:     "site-web-angular",
      title:    "Développement de site web",
      org:      "Polytechnique Montréal",
      period:   "Jan 2025 — Mai 2025",
      tags:     ["Angular", "TypeScript", "GitLab", "CI/CD"],
      image:    "images/proj-angular.jpg",   // 👈 mets ton image ici
      imageAlt: "Site web Angular",
      summary:  "Projet full-stack avec Angular et TypeScript, incluant gestion de base de données et déploiement automatisé via pipelines CI/CD.",
      bullets: [
        "Développement full-stack (Angular / TypeScript)",
        "Gestion d'une base de données",
        "Déploiement de l'application",
        "Gestion de projet avec GitLab et vérification par pipelines"
      ]
    }
  ],

  distinctions: [
    {
      event: "Hackathon Connuhacks", prize: "1er prix Desjardins", date: "Jan 2026",
      bullets: ["Application mobile Full-Stack", "Interaction avec caméra et senseurs", "Détection de visage et mouvement via API"]
    },
    {
      event: "Hackathon PolyJam", prize: "Prix Technique", date: "Sept 2025",
      bullets: ["Développement avec Unity", "Implémentation des mécaniques de jeu", "Collaboration en équipe"]
    }
  ],

  activities: [
    {
      org: "Comité AstroPoly", role: "Vice-Présidente en communication", period: "Sept 2024 — Présent",
      bullets: ["Organisation d'événements, conférences et panels", "Gestion des communications avec Canvas et Office", "Création de site web avec Azure SQL"]
    },
    {
      org: "Politecnico di Torino", role: "Échange étudiant en génie informatique", period: "Mars 2024 — Juil 2024",
      bullets: ["Apprentissage du fonctionnement des compilateurs", "Adaptation rapide à de nouveaux environnements et technologies"]
    }
  ]
};
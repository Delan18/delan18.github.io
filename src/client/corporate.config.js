import corporate from '../assets/corporate.jpg'
import logoRogue from '../assets/rogue/logoRogue.png'
import logoVideotron from '../assets/videotron/logoVideotron.webp'
import desjunglesImg2 from '../assets/desjungles/desjunglesImg1.jpg'
import desjunglesImg1 from '../assets/desjungles/logoDesjungles.png'
import roverCorpImg from '../assets/rover/rover.jpg'
import desjunglesImg3 from '../assets/desjungles/desjunglesImg2.jpg'
import jeuxImg2 from '../assets/game/jeuxImg1.png'

import jeuxImg3 from '../assets/game/jeuxImg2.png'
import logoMetG from '../assets/metg/logoMetG.jpg'
import timmoImg2 from '../assets/nosotech/logoNosotech.png'
import inventUsImg2 from '../assets/inventusImg1.png'
// PLACEHOLDERS — remplace par les vrais imports plus tard
 const jeuxImg1 = null
// const desjunglesImg1 = null
// const roverCorpImg = null

const corporateConfig = {
  theme: {
    bg: 'bg-gray-50',
    accent: 'text-blue-900',
    accentBg: 'bg-blue-900',
    card: 'bg-white border border-gray-200 shadow-sm',
    text: 'text-gray-900',
    subtext: 'text-gray-500',
    navBg: 'bg-white/90 border-b border-gray-200',
  },
  hero: {
    backgroundImage: corporate,
    tagline: 'Étudiante en génie informatique spécialisée en développement d\'applications, optimisation logicielle et validation de systèmes',
  },
  projects: [
    {
      id: 'desjungles',
      title: 'Desjungles — Application mobile bancaire',
      tags: ['Node.js', 'React Native', 'MongoDB', 'BlazeFace', 'WhisperAI', 'Expo Go'],
      badge: "Prix Desjardins - Conuhacks",
      summary: 'Application bancaire intelligente qui s\'adapte à l\'environnement de l\'utilisateur.',
      image1: desjunglesImg1,
      image2: desjunglesImg2,
      image3: desjunglesImg3,
      caption2: 'Page de connection',
      caption3: 'Page de transfers',
      github: 'https://github.com/cristina-trofimov/desjungles/tree/master',
      demo: null,
      description: 'Application bancaire permettant à l\'utilisateur de transférer de l\'argent entre ses comptes ou vers d\'autres personnes, tout en s\'adaptant à son environnement de façon créative.\n Ce projet a été fait dans le cadre du hackathon anuel de l\'université concordia de 2026, où notre équipe a remporté le premier prix Desjardins',
      sections: [
        {
          title: 'Mode espion',
          content: 'Si le téléphone détecte que plusieurs personnes regardent l\'écran, la page passe en mode secret avec un service bancaire de synthèse vocale.',
        },
        {
          title: 'Thème adaptatif',
          content: 'La lumière ambiante dans l\'environnement de l\'utilisateur détermine automatiquement le thème de l\'application.',
        },
        {
          title: 'Mode mouvement',
          content: 'Lorsque l\'utilisateur est en mouvement, l\'application affiche uniquement l\'écran d\'accueil et désactive les boutons de navigation pour garantir la sécurité.',
        },
      ],
    },
    {
      id: 'rover',
      title: 'Rover Lunaire — Robot connecté à une interface web',
      tags: ['Docker', 'WebSocket', 'REST API', 'Gestion de projet'],
      badge: 'Projet intégrateur - Polytechnique Montréal',
      summary: 'Déploiement conteneurisé et interface web temps réel pour le contrôle d\'un rover.',
      image1: roverCorpImg,
      github: '',
      demo: null,
      description: 'Volet infrastructure et communication du projet rover. Conteneurisation avec Docker et conception de la couche de communication temps réel entre l\'interface web et le robot.',
      sections: [
        {
          title: 'Infrastructure Docker',
          content: 'Conteneurisation complète du système pour garantir un déploiement fiable et reproductible sur différents environnements.',
        },
        {
          title: 'Communication temps réel',
          content: 'Conception de la couche WebSocket entre l\'interface web et le robot, permettant le contrôle et la visualisation en temps réel.',
        },
      ],
    },
    {
      id: 'videogame',
      title: 'Jeux vidéo - Développement Unity',
      tags: ['C#', 'Unity', 'Hackathon'],
      badge: 'Prix techniue - Hackathon PolyJam',
      summary: 'Développement d\'un jeu vidéo avec Unity. C\'est une jeu d\'énigmen en FPS où le joueur éclaire sa route en parlant. Chaque fréquence vocale illumine un cristal différent dans une grotte plongée dans le noir.',
      image1: jeuxImg1,
      image2: jeuxImg2,
      image3: jeuxImg3,
      caption2: 'Déplacement dans le jeu',
      caption3: 'Déplacement dans le jeu, vue 2',
      github:'',
      demo: null,
      description: 'Développement d\'un jeu vidéo avec Unity. C\'est une jeu d\'énigmen en FPS où le joueur éclaire sa route en parlant. Chaque fréquence vocale illumine un cristal différent dans une grotte plongée dans le noir.',
      sections: [
        
      ],

    },
    {
      id: 'nosotech',
      title: 'TimmoHL7 - Extraction de données par IA',
      tags: ['Python', 'Machine Learning', 'SQL', 'Angular', 'TypeScript', 'FullStack'],
      badge: 'Projet Final - Nosotech et Polytechnique Motréal',
      summary: 'Pipelines ML pour l\'extraction automatisée de données médicales et développement full-stack Angular.',
      image1: null,
      image2: timmoImg2,
      image3: null,
      github: '',
      demo: null,
      description: 'Projet réalisé en collaboration avec Nosotech et Polytechnique Montréal, axé sur l\'extraction automatisée de données par intelligence artificielle et le développement d\'une interface web.',
      sections: [
        {
          title: 'Extraction automatisée par IA',
          content: 'Développement de pipelines de machine learning en Python pour l\'extraction et la structuration automatisée de données à partir de sources non structurées.',
        },
        {
          title: 'Back-end orienté objet',
          content: 'Conception et développement d\'un back-end robuste en Python orienté objet, avec conversion des données en formats exploitables et gestion d\'une base de données SQL.',
        },
        {
          title: 'Développement d\'application avec PySide',
          content: 'Développement du site web avec Pyside et Qt pour visualiser et interagir avec les données extraites.',
        },
      ],
    },
    {
      id: 'fullstack-poly',
      title: 'InventUs - Application Full-Stack',
      tags: ['Full-Stack', 'SQL', 'GitLab', 'CI/CD', 'Gestion de projet'],
      badge: 'Projet intégrateur - Polytechnique Montréal',
      summary: 'Développement full-stack d\'une application web avec base de données, déploiement et gestion de projet via GitLab.',
      image1: null,
      image2: inventUsImg2,
      image3: null,
      github: '',
      demo: null,
      description: 'Projet académique de développement full-stack réalisé à Polytechnique Montréal, couvrant l\'ensemble du cycle de vie d\'une application web.',
      sections: [
        {
          title: 'Développement full-stack',
          content: 'Conception et développement complet de l\'application, couvrant le front-end, le back-end et la gestion de la base de données SQL.',
        },
        {
          title: 'Déploiement & DevOps',
          content: 'Déploiement de l\'application et mise en place de pipelines CI/CD via GitLab pour la vérification automatique du code.',
        },
        {
          title: 'Gestion de projet',
          content: 'Coordination de l\'équipe avec GitLab, gestion des issues, branches et revues de code tout au long du projet.',
        },
      ],
    },
  ],
  experiences: [
    {
      id: 'videotron',
      company: 'Vidéotron',
      role: 'Stagiaire — Développement fullstack',
      period: 'Mai 2026 – Août 2026',
      logo: logoVideotron,
      summary: 'Développement de fonctionnalités, APIs et analyse de KPIs dans un contexte télécom.',
      description: 'Durant ce stage chez Vidéotron, j\'ai contribué au développement de nouvelles fonctionnalités et d\'APIs pour les plateformes internes. J\'ai travaillé sur la transformation de données opérationnelles et financières.',
      bullets: [
        'Développement de nouvelles fonctionnalités et APIs',
        'Transformation des données opérationnelles et financières',
        'Production et analyse de KPIs',
      ],
    },
    {
      id: 'rogue-research',
      company: 'Rogue Research',
      role: 'Stagiaire — Système de gestion de la qualité',
      period: 'Jan 2026 – Mai 2026',
      logo: logoRogue,
      summary: 'Validation logicielle, documentation d\'architecture et analyse de cybersécurité.',
      description: 'J\'ai contribué à l\'établissement de protocoles de vérification et validation logicielle dans un environnement à haute fiabilité.',
      bullets: [
        'Protocoles de vérification et validation de logiciel',
        'Documentation de l\'architecture logicielle',
        'Analyse d\'écart de cybersécurité',
      ],
    },
    {
      id: 'm&g',
      company: 'M&G Contruction',
      role: 'Stagiaire — Optimisation Web SEO',
      period: 'Mars 2025 – Août 2025',
      logo: logoMetG,
      summary: 'Optimisation et développement front-end de sites WordPress',
      description: 'Dans le cadre de ce poste, j\'ai travaillé sur l\'optimisation et le développement front-end de sites WordPress. J\'ai installé et configuré des plugins, analysé les performances des pages et effectué des modifications selon les besoins du client.',
      bullets: [
        'Développement Front-End avec WordPress',
        'Installation et configuration de plugins',
        'Analyse de performance des pages',
        'Modifications de sites web selon les besoins du client',
        'Utilisation d\'outils d\'analyse comme Google Console et Google Analytics'
      ],
    },
  ],
}

export default corporateConfig
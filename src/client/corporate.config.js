import corporate from '../assets/corporate.jpg'
import logoRogue from '../assets/rogue/logoRogue.png'
import logoVideotron from '../assets/videotron/logoVideotron.webp'

import desjunglesImg2 from '../assets/desjungles/desjunglesImg1.jpg'
import desjunglesImg1 from '../assets/desjungles/desjunglesImg0.png'
import desjunglesImg3 from '../assets/desjungles/desjunglesImg2.jpg'
import desjunglesImg4 from '../assets/desjungles/desjunglesImg3.jpg'
import desjunglesImg5 from '../assets/desjungles/desjunglesImg4.jpg'
import desjunglesIcon from '../assets/desjungles/desjunglesIcon.png'


import roverCorpImg from '../assets/rover/rover.jpg'
import roverImg2 from '../assets/rover/rover2.png'
import roverImg3 from '../assets/rover/rover3.png'
import roverIcon from '../assets/rover/roverIcon.png'
import roverVideo from '../assets/rover/roverVid1.mp4'

import jeuxImg2 from '../assets/game/jeuxImg1.png'
import jeuxImg3 from '../assets/game/jeuxImg2.png'
import jeuxImg4 from '../assets/game/jeuxImg3.png'
import jeuxImg5 from '../assets/game/jeuxImg4.png'
import jeuxLogo from '../assets/game/jeuLogo.png'
import jeuxIcon from '../assets/game/jeuxIcon.png'

import logoMetG from '../assets/metg/logoMetG.jpg'

import timmoLogo from '../assets/nosotech/logoNosotech.png'
import timmoImg1 from '../assets/nosotech/nosotechImg1.png'
import timmoImg2 from '../assets/nosotech/nosotechImg2.png'
import timmoImg3 from '../assets/nosotech/nosotechImg3.png'
import timmoImg4 from '../assets/nosotech/nosotechImg4.png'
import timmoIcon from '../assets/nosotech/nosotechIcon.png'


import inventUsImg1 from '../assets/inventusImg1.png'
import inventUsImg2 from '../assets/inventusImg2.png'
import inventUsImg3 from '../assets/inventusImg3.png'
import inventUsImg4 from '../assets/inventusImg4.png'
import inventUsImg5 from '../assets/inventusImg5.png'
import inventUsIcon from '../assets/inventusIcon.png'



import logoAstropoly from '../assets/astropoly/logoAstropoly.png'

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
      icon: desjunglesIcon,
      title: 'Desjungles',
      subtitle: 'Application mobile bancaire',
      date: 'Janvier 2026',
      tags: ['Node.js', 'Typescript', 'MongoDB', 'BlazeFace', 'WhisperAI', 'Expo Go'],
      badge: "Prix Desjardins - Conuhacks 2026",
      badge2: 'Hackathon de l\'université Concordia, Conuhacks 2026',
      type: ['Développement logiciel', 'IA'],
      summary: 'Application bancaire intelligente qui s\'adapte à l\'environnement de l\'utilisateur.',
      image1: desjunglesImg1,
      image2: desjunglesImg2,
      image3: desjunglesImg3,
      caption2: 'Page de connection',
      caption3: 'Page de transfers',
      github: 'https://github.com/cristina-trofimov/desjungles/tree/master',
      demo: null,
      description: 'Application bancaire permettant à l\'utilisateur de transférer de l\'argent entre ses comptes ou vers d\'autres personnes, tout en s\'adaptant à son environnement de façon créative.\n Ce projet a été fait dans le cadre du hackathon anuel de l\'université concordia de 2026, où notre équipe a remporté le premier prix Desjardins',
      learnings: 'Ce projet  m\'a permit d\'apprendre à développer une application mobile qui intègre plusieurs modules en si peu de temps. En équipe, nous avions appris à diviser les tâches pour être efficaces. Enfin, j\'ai également appris à utiliser plusieur outils d\' intelligence artificielle avec des API externe de blazeface. J\'ai donc pu explorer plusieurs modèles et leur utilisation.',
      image4: desjunglesImg4,
      image5: desjunglesImg5,
      caption4: 'Page du compte banquaire',
      caption5: 'Page du mode espion',
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
      id: 'nosotech',
      icon: timmoIcon,
      title: 'TimmoHL7',
      subtitle: 'Application d\'extraction de données par IA',
      date: 'Janvier à Avril 2026',
      tags: ['Python', 'Machine Learning', 'SQL', 'Angular', 'TypeScript', 'FullStack'],
      badge: '',
      badge2: 'Projet Final - Nosotech et Polytechnique Motréal',
      type: ['Développement logiciel', 'IA'],
      summary: 'Pipelines de machine learning pour l\'extraction automatisée de données médicales et développement full-stack en python.',
      image1: timmoLogo,
      image2: timmoImg1,
      image3: timmoImg2,
      caption2: 'Générateur de données synthétiques',
      caption3: 'Formulaire de génération avec les possibles configurations',
      github: '',
      demo: null,
      description: 'Projet réalisé en collaboration avec Nosotech, une compagnie de développement d\'outils logiciels dans le domaine médical, et Polytechnique Montréal. Ce projet avait comme objectif la génération de messages médicaux HL7 et l\'extraction automatisée de données importantes par intelligence artificielle. Il couvre également le développement d\'une interface web pour générer et interpréter les messages.',
      learnings: 'Ce fut mon projet final de baccalauréat où j\'ai appris beaucoup. J\'ai travaillé avec un réel client, Nosotech, avec qui je devais communiquer, confirmer ses besoins et lui présenter les avancements. Nous avions pu également apprendre comment créer un modèle d\'intelligence artificielle, générer des données synthétiques et entraîner le modèle.',
      image4: timmoImg3,
      image5: timmoImg4,
      caption4: 'Résultat du parsing du message suite au traitement par le modèle IA',
      caption5: 'Formulaire du parser',
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
      id: 'videogame',
      icon: jeuxIcon,
      title: 'Dia Jiro',
      subtitle: 'Développement Unity de jeux vidéo',
      date: 'Novembre 2025',
      tags: ['C#', 'Unity', 'Hackathon'],
      badge: 'Prix technique - PolyJam 2025',
      badge2: 'Hackathon de Polytechnique Montréal, PolyJam 2025',
      type: ['Développement de jeux vidéo'],
      summary: 'Développement d\'un jeu vidéo avec Unity. C\'est une jeu d\'énigme où le joueur éclaire sa route en parlant.',
      image1: jeuxLogo,
      image2: jeuxImg2,
      image3: jeuxImg3,
      caption2: 'Déplacement dans le jeu',
      caption3: 'Déplacement dans le jeu, vue 2',
      github:'https://maxlhu.itch.io/dia-jiro',
      demo: null,
      description: 'Développement d\'un jeu vidéo avec Unity. C\'est une jeu d\'énigme en FPS où le joueur éclaire sa route en parlant. Chaque fréquence vocale illumine un cristal différent dans une grotte plongée dans le noir.',
      learnings: 'Ce projet m\' a permis de mettre à défis mes compétence en jeux vidéo dans un environnement compétitifs. Nous devions être à la fois programmeur et artiste. Nous étions contents du résultat final et fiers d\'avoir remporté le prix technique.',
      image4: jeuxImg4,
      image5: jeuxImg5,
      caption4: 'Déplacement dans le jeu, vue 3',
      caption5: 'Déplacement dans le jeu, vue 4',
      sections: [
        
      ],

    },
    {
      id: 'fullstack-poly',
      icon: inventUsIcon,
      title: 'InventUs',
      subtitle: 'Application Full-Stack',
      date: 'Août à Décembre 2024',
      tags: ['Full-Stack', 'SQL', 'GitLab', 'CI/CD', 'Gestion de projet', 'MongoDB', 'Angular'],
      badge:'',
      badge2: 'Projet intégrateur - Polytechnique Montréal',
      type: ['Développement web'],
      summary: 'Développement full-stack d\'une application web avec base de données, déploiement et gestion de projet via GitLab.',
      image1: inventUsImg1,
      image2: inventUsImg2,
      image3: inventUsImg3,
      caption2: 'Choix de l\'avatar',
      caption3: 'Vue du jeu avec logs et statistiques',
      github: 'https://gitlab.com/polytechnique-montr-al/log2990/20243/equipe-106/LOG2990-106.git',
      demo: null,
      description: 'Projet académique de développement full-stack réalisé à Polytechnique Montréal. Ce projet couvre les étapes de développement, test et deploiement. Il s\'agit d\'un site web qui simule un jeux. Il intègre la notion de session multi-utilisateurs, des chats pour communiquer, de creation de documents (jeux) et de sauvegarde de données. ',
      learnings: 'InventUs m\'a permis d\'apprendre davantage sur le développement web. J\'ai appris à gérer des sessions d\'utilisateurs qui intéragissent en même temps dans une même session.',
      image4: inventUsImg4,
      image5: inventUsImg5,
      caption4: 'Choix du map du jeux',
      caption5: ' Salle d\'attente avec clavardage',
      sections: [
        {
          title: 'Développement full-stack',
          content: 'Conception et développement complet de l\'application, couvrant le front-end, le back-end et la gestion de la base de données sur MongoDB.',
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
    {
      id: 'rover',
      icon: roverIcon,
      title: 'Rover Lunaire',
      subtitle: 'Robot connecté à une interface web',
      date: 'Janvier à Avril 2025',
      tags: ['Docker', 'WebSocket', 'REST API', 'Pyside'],
      badge: '',
      badge2: 'Projet intégrateur - Polytechnique Montréal',
      type: ['software dev', 'robotic'],
      summary: 'Déploiement conteneurisé et interface web temps réel pour le contrôle d\'un rover.',
      image1: roverCorpImg,
      image2: roverImg2,
      image3: roverImg3,
      caption2: 'Cartographie du rover',
      caption3: 'Environnement de simulation Gazebo',
      github: 'https://gitlab.com/polytechnique-montr-al/inf3995/20251/equipe-201/INF3995-201.git',
      demo: null,
      description: 'Volet infrastructure et communication du projet rover. Conteneurisation avec Docker et conception de la couche de communication temps réel entre l\'interface web et le robot.',
      learnings: 'Ce projet m\'a permis de toucher à la programmation embarqué et de comprendre comment plusieurs composates logicielles et informatiques intérgissent entre eux. Ce fut le projet parfit pour comprendre la communication entre les programmes au moyen d\'un réseaux wifi.',
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
    }
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
          id: 'astropoly',
          company: 'Comité Astropoly',
          role: 'Vice-Présidente en communication',
          period: 'Sept 2024 – Présent',
          logo: logoAstropoly,
          summary: 'Organisation d\'événements et de conférences en astronomie et l\'aerospatiale.',
          description: 'En tant que Vice-Présidente en communication du Comité Astropoly, je coordonne l\'organisation d\'événements et de conférences liés à l\'astronomie et à l\'exploration spatiale.',
          bullets: [
            'Organisation d\'événements et de conférences',
            'Gestion des projets d\'astronomie',
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
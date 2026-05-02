import spaceStation from '../assets/aerospace.jpg'
import logoRogue from '../assets/rogue/logoRogue.png'
import logoAstropoly from '../assets/astropoly/logoAstropoly.png'
import roverImg from '../assets/rover/rover.jpg'
import roverImg2 from '../assets/rover/rover2.png'
import roverImg3 from '../assets/rover/rover3.png'
import roverVideo from '../assets/rover/roverVid1.mp4'

// PLACEHOLDERS — remplace par les vrais imports plus tard
const logoPolyOrbite = null
// const roverImg2 = null
// const roverImg = null
// const roverVideo = null
const implicationAstropoly = null
const imageConference1 = null
const imageConference2 = null

const aeroConfig = {
  theme: {
    bg: 'bg-slate-950',
    accent: 'text-blue-900',
    accentBg: 'text-blue-900',
    card: 'bg-slate-800 border border-slate-700',
    text: 'text-slate-100',
    subtext: 'text-slate-400',
    navBg: 'bg-slate-900/80',
  },
  hero: {
    backgroundImage: spaceStation,
    tagline: 'Étudiante en génie informatique passionnée par l\'ingénierie spatiale, les systèmes embarqués et la robotique.',
  },
  projects: [
    {
      id: 'rover',
      title: 'Conception d\'un Rover',
      tags: ['Docker', 'ROS', 'Systèmes embarqués', 'Interface web'],
      badge: null,
      summary: 'Conception d\'un rover autonome avec communication entre une interface web et le robot.',
      image1: roverImg,
      image2: roverImg2,
      image3: roverImg3,
      caption2: 'Cartographie du rover',
      caption3: 'Environnement de simulation Gazebo',
      video: roverVideo,
      github: '',
      demo: null,
      description: 'Dans le cadre d\'un projet de fin de session à Polytechnique Montréal, j\'ai participé à la conception d\'un rover lunaire. J\'ai été responsable de la conception du système de déplacement, qui avait comme mission l\'exploration d\'un milieu inconnu. J\'ai également travaillé sur la communication en temps réel entre une interface web et le robot, permettant le contrôle à distance du rover.',
      sections: [
        {
          title: 'Système de déplacement',
          content: 'Utilise un moteur et des roues configurés selon un mode de déplacement adapté. L\'algorithme de random walk et une fonction de retour à la base garantissent la navigation autonome et le retour au point de départ si le niveau de batterie est inférieur à 30%.',
        },
        {
          title: 'Système de détection',
          content: 'Repose sur plusieurs capteurs capables de détecter les obstacles, les élévations et de suivre la position et l\'orientation du robot en temps réel sur l\'interface.',
        },
        {
          title: 'Système de communication',
          content: 'Échange des données avec la station au sol via WebSockets et la librairie rosBridge. Connexion SSH à distance et transfert de code via TCP. Les robots peuvent aussi communiquer entre eux sans passer par la station au sol.',
        },
        {
          title: 'Interface utilisateur web',
          content: 'Permet de lancer des missions, de consulter la position du robot et d\'afficher une carte en continu avec mise à jour en temps réel.',
        },
        {
          title: 'Système de cartographie',
          content: 'Reçoit les données du robot pour créer une carte en 3D et en couleur. Ces cartes sont également enregistrées pour consultation ultérieure.',
        },
      ],
    },
  ],
  experiences: [
    {
      id: 'rogue-research',
      company: 'Rogue Research',
      role: 'Stagiaire — Système de gestion de la qualité',
      period: 'Jan 2026 – Mai 2026',
      logo: logoRogue,
      website: 'https://www.rogue-research.com',
      summary: 'Vérification et validation logicielle, documentation d\'architecture et analyse de cybersécurité.',
      description: 'Durant ce stage, j\'ai travaillé sur les protocoles de vérification et validation de logiciel dans un environnement devant respecter des normes ISO . J\'ai produit de la documentation détaillée de l\'architecture logicielle et effectué une analyse d\'écart de cybersécurité pour identifier les vulnérabilités potentielles des systèmes.',
      bullets: [
        'Protocoles de vérification et validation de logiciel',
        'Documentation de l\'architecture logicielle',
        'Analyse d\'écart de cybersécurité',
      ],
    },
    {
      id: 'polyorbite',
      company: 'Société PolyOrbite',
      role: 'Responsable du volet éducatif',
      period: 'Sept 2023 – Janv 2024',
      logo: logoPolyOrbite,
      website: null,
      summary: 'Planification d\'ateliers techniques sur les satellites et robots spatiaux.',
      description: 'En tant que responsable du volet éducatif de PolyOrbite, j\'ai planifié et animé des ateliers techniques portant sur les satellites et les robots spatiaux. Mon rôle consistait à vulgariser des concepts complexes d\'ingénierie spatiale pour les rendre accessibles à un public étudiant.',
      type_projet: 'Atelier sur le fonctionnement des vaisseaux spatiaux',
      bullets: [
        'Planification d\'ateliers techniques sur les satellites',
        'Vulgarisation de l\'ingénierie spatiale',
      ],
    },
    {
      id: 'astropoly',
      company: 'Comité Astropoly',
      role: 'Vice-Présidente en communication',
      period: 'Sept 2024 – Présent',
      logo: logoAstropoly,
      website: null,
      summary: 'Organisation d\'événements et de conférences en astronomie et l\'aerospatiale.',
      description: 'En tant que Vice-Présidente en communication du Comité Astropoly, je coordonne l\'organisation d\'événements et de conférences liés à l\'astronomie et à l\'exploration spatiale.',
      type_projet: 'Organisation de conférences en aérospatiale et astrophysique avec des experts',
      img: implicationAstropoly,
      conferences: [
        {
          image: imageConference1,
          legende: 'Conférence avec X sur la NASA',
        },
        {
          image: imageConference2,
          legende: 'Conférence avec Frédérique Baron sur l\'instrumentation et imagerie spatiale',
        },
      ],
      bullets: [
        'Organisation d\'événements et de conférences',
        'Gestion des projets d\'astronomie',
      ],
    },
  ],
}

export default aeroConfig
# Portfolio — Delany Pulgarin

Portfolio personnel déployé avec GitHub Pages.

---

## 📁 Structure des fichiers

```
portfolio/
├── index.html              # Point d'entrée principal
├── css/
│   ├── variables.css       # Variables CSS (couleurs, typographie, espacements)
│   ├── layout.css          # Mise en page (grille, sections, hero)
│   ├── components.css      # Composants UI (nav, cartes, timeline, tags...)
│   └── animations.css      # Animations et keyframes
└── js/
    ├── data.js             # ⭐ Toutes les données du portfolio — modifier ici!
    ├── main.js             # Orchestrateur principal + scroll reveal
    └── components/
        ├── nav.js          # Navigation fixe
        ├── hero.js         # Section héro (nom + contacts)
        ├── about.js        # À propos / langues / soft skills
        ├── skills.js       # Compétences techniques
        ├── experience.js   # Expériences professionnelles
        ├── projects.js     # Projets académiques
        ├── distinctions.js # Prix et hackathons
        ├── activities.js   # Activités parascolaires
        └── footer.js       # Pied de page
```

---

## 🚀 Déploiement sur GitHub Pages

### Étape 1 — Créer le dépôt

1. Va sur [github.com](https://github.com) et connecte-toi
2. Clique sur **"New repository"**
3. Nomme-le exactement : **`ton-username.github.io`**
   - Exemple : si ton username GitHub est `delanypulgarin`, le repo s'appelle `delanypulgarin.github.io`
4. Coche **"Public"**
5. Clique **"Create repository"**

### Étape 2 — Envoyer les fichiers

**Option A — Interface web GitHub (la plus simple) :**
1. Dans ton nouveau repo, clique **"uploading an existing file"**
2. Glisse-dépose tous tes fichiers (respecte la structure des dossiers)
3. Écris un message de commit, ex. `"Initial portfolio"` → **Commit changes**

**Option B — Ligne de commande (Git) :**
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/ton-username/ton-username.github.io.git
git push -u origin main
```

### Étape 3 — Activer GitHub Pages

1. Va dans **Settings** du repo → **Pages** (menu de gauche)
2. Sous **"Branch"**, sélectionne `main` et le dossier `/ (root)`
3. Clique **Save**
4. Attends 1-2 minutes ⏳
5. Ton site sera disponible à : `https://ton-username.github.io`

---

## ✏️ Modifier le contenu

**Pour changer n'importe quelle information** (expérience, projets, compétences, etc.), il suffit de modifier le fichier **`js/data.js`** — tout le reste se met à jour automatiquement.

---

## 🛠️ Technologies utilisées

- **HTML5 / CSS3 / JavaScript** — Aucun framework, aucun build tool
- **[Basecoat CSS](https://github.com/hunvreus/basecoat)** — Design system via CDN
- **[Lucide Icons](https://lucide.dev/)** — Icônes légères via CDN
- **Google Fonts** — DM Serif Display + DM Mono + Instrument Sans
- **GitHub Pages** — Hébergement gratuit

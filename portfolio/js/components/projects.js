function projectPlaceholderSVG(title) {
  const initials = title.split(' ').slice(0,2).map(w => w[0]).join('').toUpperCase();
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="280">
      <rect width="600" height="280" fill="#e8eef8"/>
      <rect width="600" height="4" fill="#2563eb"/>
      <text x="300" y="120" text-anchor="middle" font-family="Georgia,serif" font-size="60" fill="#2563eb" opacity="0.18">${initials}</text>
      <text x="300" y="175" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#9ca3af">Ajoute ton image dans images/</text>
    </svg>
  `)}`;
}

function renderProjects() {
  const el = document.getElementById('projects-container');
  if (!el) return;

  const cardsHTML = DATA.projects.map(proj => `
    <a href="projects/${proj.slug}.html" class="project-card reveal" aria-label="Voir: ${proj.title}">
      <div class="project-card-img-wrap">
        <img
          src="${proj.image}"
          alt="${proj.imageAlt}"
          class="project-card-img"
          onerror="this.src='${projectPlaceholderSVG(proj.title)}'"
          loading="lazy"
        />
        <div class="project-card-img-overlay">
          <span class="project-card-cta">
            Voir le projet <i data-lucide="arrow-right" width="14" height="14"></i>
          </span>
        </div>
      </div>
      <div class="project-card-body">
        <div class="project-card-top">
          <p class="project-org">${proj.org}</p>
          <p class="project-date">${proj.period}</p>
        </div>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-summary">${proj.summary}</p>
        <div class="project-tags">
          ${proj.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
        </div>
      </div>
    </a>
  `).join('');

  el.innerHTML = `
    <section class="section" id="projects">
      <div class="container">
        <div class="section-header">
          <span class="section-label">01</span>
          <h2 class="section-title">Projets</h2>
          <div class="section-line"></div>
        </div>
        <div class="projects-grid">${cardsHTML}</div>
      </div>
    </section>
  `;

  lucide.createIcons();
}
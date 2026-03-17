function expPlaceholderSVG(company) {
  const initials = company.split(' ').slice(0,2).map(w => w[0]).join('').toUpperCase();
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="200">
      <rect width="600" height="200" fill="#f0f4fb"/>
      <rect width="600" height="3" fill="#2563eb"/>
      <text x="300" y="85" text-anchor="middle" font-family="Georgia,serif" font-size="50" fill="#2563eb" opacity="0.18">${initials}</text>
      <text x="300" y="135" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#9ca3af">Ajoute ton image dans images/</text>
    </svg>
  `)}`;
}

function renderExperience() {
  const el = document.getElementById('experience-container');
  if (!el) return;

  const itemsHTML = DATA.experience.map(exp => `
    <article class="exp-card reveal">
      <div class="exp-card-img-wrap">
        <img
          src="${exp.image}"
          alt="${exp.imageAlt}"
          class="exp-card-img"
          onerror="this.src='${expPlaceholderSVG(exp.company)}'"
          loading="lazy"
        />
      </div>
      <div class="exp-card-body">
        <p class="timeline-date">${exp.period}</p>
        <p class="timeline-company">${exp.company}</p>
        <h3 class="timeline-role">${exp.role}</h3>
        <ul class="timeline-bullets">
          ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    </article>
  `).join('');

  el.innerHTML = `
    <section class="section" id="experience">
      <div class="container">
        <div class="section-header">
          <span class="section-label">03</span>
          <h2 class="section-title">Expérience</h2>
          <div class="section-line"></div>
        </div>
        <div class="exp-grid">${itemsHTML}</div>
      </div>
    </section>
  `;
}
/* ============================================
   ABOUT.JS — About / summary section component
   ============================================ */

function renderAbout() {
  const el = document.getElementById('about-container');
  if (!el) return;

  const langPills = DATA.languages
    .map(l => `<span class="lang-pill">${l}</span>`)
    .join('');

  const softSkillBadges = DATA.softSkills
    .map(s => `<span class="soft-skill">${s}</span>`)
    .join('');

  el.innerHTML = `
    <section class="section reveal" id="about" aria-label="À propos">
      <div class="container">

        <div class="section-header">
          <span class="section-label">01</span>
          <h2 class="section-title">À propos</h2>
          <div class="section-line" aria-hidden="true"></div>
        </div>

        <p class="about-text">${DATA.summary} Fluide en :</p>

        <div class="lang-pills" role="list" aria-label="Langues parlées">
          ${langPills}
        </div>

        <div class="soft-skills" role="list" aria-label="Compétences interpersonnelles">
          ${softSkillBadges}
        </div>

      </div>
    </section>
  `;
}

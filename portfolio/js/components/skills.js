/* ============================================
   SKILLS.JS — Skills section component
   ============================================ */

function renderSkills() {
  const el = document.getElementById('skills-container');
  if (!el) return;

  const categoriesHTML = DATA.skills.map(cat => `
    <div class="skill-category">
      <p class="skill-category-name">${cat.category}</p>
      <div class="skill-tags">
        ${cat.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');

  el.innerHTML = `
    <section class="section reveal" id="skills" aria-label="Compétences techniques">
      <div class="container">

        <div class="section-header">
          <span class="section-label">02</span>
          <h2 class="section-title">Compétences</h2>
          <div class="section-line" aria-hidden="true"></div>
        </div>

        <div class="skills-grid stagger-children">
          ${categoriesHTML}
        </div>

      </div>
    </section>
  `;
}

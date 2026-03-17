/* ============================================
   ACTIVITIES.JS — Activities section component
   ============================================ */

function renderActivities() {
  const el = document.getElementById('activities-container');
  if (!el) return;

  const itemsHTML = DATA.activities.map(act => `
    <article class="timeline-item reveal" aria-label="${act.role}">
      <div>
        <p class="timeline-date">${act.period}</p>
        <p class="timeline-company">${act.org}</p>
      </div>
      <div>
        <h3 class="timeline-role">${act.role}</h3>
        <ul class="timeline-bullets">
          ${act.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    </article>
  `).join('');

  el.innerHTML = `
    <section class="section" id="activities" aria-label="Activités parascolaires">
      <div class="container">

        <div class="section-header">
          <span class="section-label">06</span>
          <h2 class="section-title">Activités</h2>
          <div class="section-line" aria-hidden="true"></div>
        </div>

        <div class="timeline">
          ${itemsHTML}
        </div>

      </div>
    </section>
  `;
}

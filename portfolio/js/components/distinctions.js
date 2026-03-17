/* ============================================
   DISTINCTIONS.JS — Distinctions section component
   ============================================ */

function renderDistinctions() {
  const el = document.getElementById('distinctions-container');
  if (!el) return;

  const cardsHTML = DATA.distinctions.map(d => `
    <article class="distinction-card reveal" aria-label="${d.prize} — ${d.event}">
      <p class="distinction-event">${d.event}</p>
      <h3 class="distinction-prize">🏆 ${d.prize}</h3>
      <p class="distinction-date">${d.date}</p>
      <ul class="timeline-bullets">
        ${d.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
    </article>
  `).join('');

  el.innerHTML = `
    <section class="section" id="distinctions" aria-label="Distinctions et prix">
      <div class="container">

        <div class="section-header">
          <span class="section-label">05</span>
          <h2 class="section-title">Distinctions</h2>
          <div class="section-line" aria-hidden="true"></div>
        </div>

        <div class="distinctions-grid">
          ${cardsHTML}
        </div>

      </div>
    </section>
  `;
}

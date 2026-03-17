/* ============================================
   NAV.JS — Navigation component
   ============================================ */

function renderNav() {
  const el = document.getElementById('nav-container');
  if (!el) return;

  el.innerHTML = `
    <nav class="nav" role="navigation" aria-label="Navigation principale">
      <div class="nav-inner">
        <a href="#" class="nav-logo">DP/</a>

        <ul class="nav-links" id="nav-links">
          <li><a href="#about">À propos</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#experience">Expérience</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#distinctions">Distinctions</a></li>
        </ul>

        <a
          href="mailto:delanycruzpulgarin@gmail.com"
          class="nav-cta"
          aria-label="Me contacter par courriel"
        >Contact</a>

        <button
          class="nav-mobile-toggle"
          id="nav-toggle"
          aria-label="Ouvrir le menu"
          aria-expanded="false"
        >
          <i data-lucide="menu" width="20" height="20"></i>
        </button>
      </div>
    </nav>
  `;

  // Mobile toggle
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click (mobile)
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  lucide.createIcons();
}

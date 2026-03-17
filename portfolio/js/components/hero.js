/* ============================================
   HERO.JS — Hero section component
   ============================================ */

function renderHero() {
  const el = document.getElementById('hero-container');
  if (!el) return;

  const contactLinks = [
    { icon: 'phone',     label: DATA.contact.phone.label,    href: DATA.contact.phone.href },
    { icon: 'mail',      label: DATA.contact.email.label,    href: DATA.contact.email.href },
    { icon: 'map-pin',   label: DATA.contact.location.label, href: null },
    { icon: 'linkedin',  label: "LinkedIn",                  href: DATA.contact.linkedin.href }
  ];

  const linksHTML = contactLinks.map(c => {
    if (c.href) {
      return `
        <a href="${c.href}" class="hero-contact-link" target="${c.href.startsWith('http') ? '_blank' : '_self'}" rel="noopener">
          <i data-lucide="${c.icon}" width="13" height="13"></i>
          ${c.label}
        </a>`;
    }
    return `
      <span class="hero-contact-link" style="cursor:default;">
        <i data-lucide="${c.icon}" width="13" height="13"></i>
        ${c.label}
      </span>`;
  }).join('');

  el.innerHTML = `
    <section class="hero" id="hero" aria-label="Introduction">
      <div class="container hero-inner">

        <p class="hero-eyebrow">
          <span class="live-dot" aria-hidden="true"></span>
          ${DATA.school}
        </p>

        <h1 class="hero-name">
          ${DATA.name.first}<br>
          <em>${DATA.name.last}</em>
        </h1>

        <p class="hero-subtitle">${DATA.summary}</p>

        <div class="hero-contacts">
          ${linksHTML}
        </div>

      </div>
    </section>
  `;

  lucide.createIcons();
}

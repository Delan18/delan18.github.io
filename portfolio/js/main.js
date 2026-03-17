/* ============================================
   MAIN.JS — App entry point & scroll reveal
   ============================================ */

// ---- Render all components ----
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderHero();
  renderAbout();
  renderSkills();
  renderExperience();
  renderProjects();
  renderDistinctions();
  renderActivities();
  renderFooter();

  // Init icons again after all renders
  lucide.createIcons();

  // Init scroll reveal
  initScrollReveal();
});

// ---- Scroll Reveal ----
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  // Observe all .reveal elements (added after render)
  // Use MutationObserver to catch dynamically added elements
  const mutObs = new MutationObserver(() => {
    document.querySelectorAll('.reveal:not([data-observed])').forEach(el => {
      el.setAttribute('data-observed', '1');
      observer.observe(el);
    });
  });

  mutObs.observe(document.body, { childList: true, subtree: true });

  // Also observe already-present elements
  document.querySelectorAll('.reveal').forEach(el => {
    el.setAttribute('data-observed', '1');
    observer.observe(el);
  });
}

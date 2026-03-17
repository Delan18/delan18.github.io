/* ============================================
   FOOTER.JS — Footer component
   ============================================ */

function renderFooter() {
  const el = document.getElementById('footer-container');
  if (!el) return;

  const year = new Date().getFullYear();

  el.innerHTML = `
    <footer class="footer" aria-label="Pied de page">
      <div class="footer-inner">
        <p class="footer-copy">© ${year} Delany Pulgarin — Tous droits réservés</p>
        <nav class="footer-links" aria-label="Liens de contact">
          <a href="mailto:delanycruzpulgarin@gmail.com">Courriel</a>
          <a href="https://www.linkedin.com/in/delany-pulgarin" target="_blank" rel="noopener">LinkedIn</a>
          <a href="tel:+15146162863">Téléphone</a>
        </nav>
      </div>
    </footer>
  `;
}

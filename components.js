'use strict';

const NAV_HTML = `
<nav class="nav">
  <div class="container">
    <div class="nav__inner">
      <span class="nav__logo">FORBIDDEN//TOOLS</span>
      <a href="index.html"    class="nav__link">HOME</a>
      <a href="dos.html"      class="nav__link">DOS/DDOS</a>
      <a href="phishing.html" class="nav__link">PHISHING</a>
      <a href="wifi.html"     class="nav__link">WIFI</a>
      <a href="rats.html"     class="nav__link">RATS</a>
      <a href="stuffing.html" class="nav__link">CRED STUFFING</a>
      <a href="c2.html"       class="nav__link">C2/RANSOMWARE</a>
      <a href="mitm.html"     class="nav__link">MITM</a>
      <a href="oos.html"      class="nav__link">OUT OF SCOPE</a>
      <a href="rules.html"    class="nav__link">RULES</a>
    </div>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div>
        <div class="footer__logo">FORBIDDEN<span>//</span>TOOLS</div>
        <p class="footer__desc">A reference guide to dangerous bug bounty tools — what they do, install commands, run commands, and why they're illegal.</p>
      </div>
      <div>
        <div class="footer__heading">PAGES</div>
        <div class="footer__links">
          <a href="index.html"    class="footer__link">Home</a>
          <a href="dos.html"      class="footer__link">DoS / DDoS Tools</a>
          <a href="phishing.html" class="footer__link">Phishing Tools</a>
          <a href="wifi.html"     class="footer__link">WiFi Attack Tools</a>
          <a href="rats.html"     class="footer__link">RATs &amp; Malware</a>
          <a href="stuffing.html" class="footer__link">Credential Stuffing</a>
          <a href="c2.html"       class="footer__link">C2 &amp; Ransomware</a>
          <a href="mitm.html"     class="footer__link">MITM Tools</a>
          <a href="oos.html"      class="footer__link">Out of Scope</a>
          <a href="rules.html"    class="footer__link">Golden Rules</a>
        </div>
      </div>
      <div>
        <div class="footer__heading">LEGAL NOTE</div>
        <p class="footer__desc">The <strong style="color:var(--orange)">CFAA</strong>, UK Computer Misuse Act, and equivalent laws worldwide make unauthorized access a criminal offense — even when a real vulnerability is discovered. Your scope document is your only legal protection.</p>
      </div>
    </div>
    <div class="footer__bottom">
      <span class="footer__copy">© FORBIDDEN//TOOLS · FOR AWARENESS &amp; EDUCATION ONLY</span>
      <span class="footer__copy" style="color:var(--red)">⚖ NOT LEGAL ADVICE</span>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav-placeholder');
  if (nav) nav.outerHTML = NAV_HTML;
  const footer = document.getElementById('footer-placeholder');
  if (footer) footer.outerHTML = FOOTER_HTML;

  // Set active nav
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === path);
  });

  // Copy chips
  document.querySelectorAll('[data-copy]').forEach(el => {
    el.title = 'Click to copy';
    el.addEventListener('click', () => {
      navigator.clipboard.writeText(el.dataset.copy).then(() => {
        const orig = el.textContent;
        el.textContent = '✓ Copied!';
        el.style.color = 'var(--green)';
        setTimeout(() => { el.textContent = orig; el.style.color = ''; }, 1400);
      });
    });
  });

  // Scroll reveal
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.04 });

  document.querySelectorAll('[data-reveal]').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = `opacity .45s ease ${i * 0.06}s, transform .45s ease ${i * 0.06}s`;
    io.observe(el);
  });
});

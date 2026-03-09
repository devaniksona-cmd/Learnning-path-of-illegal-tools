/* ═══════════════════════════════════════════════════════════
   FORBIDDEN TOOLS — Shared JS
   GitHub Pages Ready · Vanilla JS · No dependencies
   ═══════════════════════════════════════════════════════════ */

'use strict';

// ── Active nav link based on current page ─────────────────────
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    link.classList.toggle('active', href === path);
  });
}

// ── Scroll-triggered fade-in ──────────────────────────────────
function initScrollReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.06 });

  els.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
    io.observe(el);
  });
}

// ── Copy-to-clipboard for code chips ─────────────────────────
function initCopyChips() {
  document.querySelectorAll('[data-copy]').forEach(el => {
    el.style.cursor = 'pointer';
    el.title = 'Click to copy';
    el.addEventListener('click', () => {
      const text = el.dataset.copy || el.textContent.trim();
      navigator.clipboard.writeText(text).then(() => {
        const orig = el.textContent;
        el.textContent = '✓ Copied';
        el.style.color = 'var(--green)';
        setTimeout(() => {
          el.textContent = orig;
          el.style.color = '';
        }, 1400);
      }).catch(() => {
        const sel = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(el);
        sel.removeAllRanges();
        sel.addRange(range);
      });
    });
  });
}

// ── Active nav section on scroll ─────────────────────────────
function initNavHighlight() {
  const sections  = document.querySelectorAll('section[id], div[id^="s"]');
  const navLinks  = document.querySelectorAll('.nav__link[href*="#"]');
  if (!sections.length || !navLinks.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href').endsWith('#' + e.target.id));
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => io.observe(s));
}

// ── Mobile nav toggle ─────────────────────────────────────────
function initMobileNav() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const menu   = document.querySelector('[data-nav-menu]');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.dataset.open === 'true';
    menu.dataset.open = String(!open);
    toggle.setAttribute('aria-expanded', String(!open));
  });
}

// ── Smooth anchor scroll ──────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ── Init everything on DOM ready ─────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initScrollReveal();
  initCopyChips();
  initNavHighlight();
  initMobileNav();
  initSmoothScroll();
});

// ── Toggle tool detail cards ──────────────────────────────
function initToolDetails() {
  document.querySelectorAll('.tool-detail__header').forEach(header => {
    header.addEventListener('click', () => {
      const body   = header.nextElementSibling;
      const toggle = header.querySelector('.tool-detail__toggle');
      const isOpen = body.classList.toggle('open');
      toggle.textContent = isOpen ? '[ − COLLAPSE ]' : '[ + EXPAND ]';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => { initToolDetails(); });

// ── Toggle tool detail cards ───────────────────────────────
function initToolDetails() {
  document.querySelectorAll('.tool-detail__header').forEach(header => {
    header.addEventListener('click', () => {
      const body   = header.nextElementSibling;
      const toggle = header.querySelector('.tool-detail__toggle');
      const isOpen = body.classList.toggle('open');
      toggle.textContent = isOpen ? '[ − COLLAPSE ]' : '[ + EXPAND ]';
    });
  });
}
document.addEventListener('DOMContentLoaded', () => { initToolDetails(); });

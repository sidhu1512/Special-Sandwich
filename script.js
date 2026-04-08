/* ============================================================
   SSS — Scroll-triggered reveal animations
   ============================================================ */
(() => {
  'use strict';

  const REVEAL_SELECTOR = '.reveal';
  const VISIBLE_CLASS    = 'is-visible';
  const THRESHOLD        = 0.15;

  function init() {
    const targets = document.querySelectorAll(REVEAL_SELECTOR);
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add(VISIBLE_CLASS));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(VISIBLE_CLASS);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: THRESHOLD });

    targets.forEach(el => observer.observe(el));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

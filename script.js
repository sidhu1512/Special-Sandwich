/* ============================================================
   SSS — Advanced Animations (GSAP + ScrollTrigger)
   ============================================================ */
(() => {
  'use strict';

  /* ---- Wait for GSAP ---- */
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not loaded. Falling back to basic reveals.');
    fallbackReveal();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ==========================================================
     1. HERO — Staggered split-text entry
     ========================================================== */
  function initHeroAnimation() {
    const badge = document.querySelector('.hero__badge');
    const words = document.querySelectorAll('.hero__word');
    const sub   = document.querySelector('.hero__sub');
    const cta   = document.querySelector('.hero__cta');
    const scroll = document.querySelector('.hero__scroll');

    const tl = gsap.timeline({ delay: 0.3 });

    // Badge fades in first
    tl.fromTo(badge,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    );

    // Words stagger in from below
    tl.to(words, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out'
    }, '-=0.2');

    // Subtitle and CTA
    tl.fromTo(sub,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    );

    tl.fromTo(cta,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.3'
    );

    // Scroll indicator pulse in
    if (scroll) {
      tl.fromTo(scroll,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power1.inOut' },
        '-=0.2'
      );
    }
  }

  /* ==========================================================
     2. PARALLAX SHOWCASE — Multi-layer scroll depth
     ========================================================== */
  function initParallax() {
    const showcase  = document.getElementById('parallax-showcase');
    if (!showcase) return;

    const bgVideo   = showcase.querySelector('.parallax-showcase__bg');
    const words     = showcase.querySelectorAll('.parallax-word');
    const sandwich  = document.getElementById('parallax-sandwich');

    // Background video — slowest layer
    gsap.fromTo(bgVideo,
      { yPercent: -10, scale: 1.15 },
      {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: showcase,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      }
    );

    // Floating ingredient words — medium speed, varied per word
    words.forEach((word, i) => {
      const speed = parseFloat(word.dataset.speed) || 0.5;
      const direction = i % 2 === 0 ? 1 : -1;

      gsap.fromTo(word,
        {
          y: 60 * speed * direction,
          opacity: 0,
          scale: 0.9
        },
        {
          y: -80 * speed * direction,
          opacity: 0.12,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: showcase,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1.5
          }
        }
      );

      // Subtle horizontal drift
      gsap.to(word, {
        x: 30 * direction * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: showcase,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2
        }
      });
    });

    // Isolated sandwich — fastest layer, floats upward
    if (sandwich) {
      gsap.fromTo(sandwich,
        { y: 120, scale: 0.85, opacity: 0.6 },
        {
          y: -80,
          scale: 1.05,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: showcase,
            start: 'top 90%',
            end: 'bottom 10%',
            scrub: 0.8
          }
        }
      );

      // Subtle rotation for depth
      gsap.fromTo(sandwich,
        { rotation: -3 },
        {
          rotation: 3,
          ease: 'none',
          scrollTrigger: {
            trigger: showcase,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2
          }
        }
      );
    }
  }

  /* ==========================================================
     3. SCROLL REVEALS — GSAP-powered (replaces CSS-only)
     ========================================================== */
  function initScrollReveals() {
    const targets = document.querySelectorAll('.reveal');
    if (!targets.length) return;

    targets.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }

  /* ==========================================================
     4. STEP CARDS — Scroll-triggered entrance
     ========================================================== */
  function initStepAnimations() {
    const steps = document.querySelectorAll('.step');
    if (!steps.length) return;

    steps.forEach((step, i) => {
      const number = step.querySelector('.step__number');
      const name   = step.querySelector('.step__name');
      const desc   = step.querySelector('.step__desc');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: step,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      if (number) {
        tl.fromTo(number,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }
        );
      }

      if (name) {
        tl.fromTo(name,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          '-=0.2'
        );
      }

      if (desc) {
        tl.fromTo(desc,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          '-=0.2'
        );
      }
    });
  }

  /* ==========================================================
     INIT
     ========================================================== */
  function init() {
    initHeroAnimation();
    initParallax();
    initScrollReveals();
    initStepAnimations();
  }

  /* ==========================================================
     FALLBACK — basic IntersectionObserver if GSAP missing
     ========================================================== */
  function fallbackReveal() {
    const targets = document.querySelectorAll('.reveal');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('is-visible'));
      document.querySelectorAll('.hero__word').forEach(w => {
        w.style.opacity = '1';
        w.style.transform = 'none';
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    targets.forEach(el => observer.observe(el));

    // Still show hero words without GSAP
    document.querySelectorAll('.hero__word').forEach((w, i) => {
      setTimeout(() => {
        w.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        w.style.opacity = '1';
        w.style.transform = 'translateY(0)';
      }, 300 + i * 100);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

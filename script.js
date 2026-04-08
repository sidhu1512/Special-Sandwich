/* ============================================================
   SSS — Advanced Animations (GSAP + ScrollTrigger)
   Dribbble-inspired cream parallax + hero split-text + hover
   ============================================================ */
(() => {
  'use strict';

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
    const badge  = document.querySelector('.hero__badge');
    const words  = document.querySelectorAll('.hero__word');
    const sub    = document.querySelector('.hero__sub');
    const cta    = document.querySelector('.hero__cta');
    const scroll = document.querySelector('.hero__scroll');

    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(badge,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    );

    tl.to(words, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out'
    }, '-=0.2');

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

    if (scroll) {
      tl.fromTo(scroll,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power1.inOut' },
        '-=0.2'
      );
    }
  }

  /* ==========================================================
     2. DRIBBBLE CREAM SECTION — Multi-layer parallax
     ========================================================== */
  function initDribbbleParallax() {
    const section   = document.getElementById('dribbble-section');
    if (!section) return;

    const script    = document.getElementById('dribbble-script');
    const bgText    = document.getElementById('dribbble-bg-text');
    const bgSpans   = bgText ? bgText.querySelectorAll('span') : [];
    const plate     = document.getElementById('dribbble-plate');
    const footer    = document.getElementById('dribbble-footer');

    /* --- Layer 1: Background text — slowest, drifts horizontally --- */
    if (bgSpans.length) {
      bgSpans.forEach((span, i) => {
        const direction = i % 2 === 0 ? 1 : -1;

        // Horizontal drift
        gsap.fromTo(span,
          { x: 60 * direction },
          {
            x: -60 * direction,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 2
            }
          }
        );

        // Opacity fade — text fades in as section enters viewport
        gsap.fromTo(span,
          { opacity: 0.02 },
          {
            opacity: 0.1,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'center center',
              scrub: 1
            }
          }
        );
      });
    }

    /* --- Layer 2: Sandwich plate — fastest, floats upward with rotation --- */
    if (plate) {
      gsap.fromTo(plate,
        { y: 100, scale: 0.88, rotation: -5 },
        {
          y: -60,
          scale: 1,
          rotation: 5,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            end: 'bottom 10%',
            scrub: 0.8
          }
        }
      );
    }

    /* --- Layer 3: Script text — medium speed, moves opposite --- */
    if (script) {
      gsap.fromTo(script,
        { y: 40, opacity: 0 },
        {
          y: -30,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'center center',
            scrub: 1.2
          }
        }
      );
    }

    /* --- Footer text entrance --- */
    if (footer) {
      gsap.fromTo(footer,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }

  /* ==========================================================
     3. SCROLL REVEALS — GSAP-powered
     ========================================================== */
  function initScrollReveals() {
    const targets = document.querySelectorAll('.reveal');
    if (!targets.length) return;

    targets.forEach((el) => {
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

    steps.forEach((step) => {
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
    initDribbbleParallax();
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

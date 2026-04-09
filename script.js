/* ============================================================
   SSS — Kinetic Animations (GSAP + ScrollTrigger + JS)
   ============================================================ */
(() => {
  'use strict';

  /* ==========================================================
     A. DYNAMIC FAVICON
     ========================================================== */
  function initDynamicFavicon() {
    const favicon = document.getElementById('favicon');
    const icons = [
      'asset/sandwitch.png',
      'asset/sandwith with plate.png'
    ];
    let currentIndex = 0;

    if (favicon) {
      setInterval(() => {
        currentIndex = (currentIndex + 1) % icons.length;
        favicon.href = icons[currentIndex];
      }, 800);
    }
  }

  /* ---- Wait for GSAP ---- */
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not loaded. Falling back to basic reveals.');
    initDynamicFavicon();
    fallbackReveal();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ==========================================================
     B. HERO — Staggered split-text entry
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
     C. CLOCKWORK PARALLAX — Kinetic sandwich scroll rotation
     ========================================================== */
  function initClockworkParallax() {
    const clockworkObj = document.getElementById('kinetic-clockwork');
    if (!clockworkObj) return;

    // Continuous motion instead of scroll-tied
    gsap.to(clockworkObj, {
      rotation: 360,
      duration: 30,
      ease: 'none',
      repeat: -1
    });
  }

  /* ==========================================================
     C2. ARSENAL KINETIC — Rotating Arsenal images
     ========================================================== */
  function initArsenalClockwork() {
    const arsenalImg = document.getElementById('arsenal-img');
    if (arsenalImg) {
      gsap.to(arsenalImg, {
        rotation: 360,
        duration: 40,
        ease: 'none',
        repeat: -1
      });
    }

    const showcasePlateImg = document.querySelector('.showcase__plate');
    if (showcasePlateImg) {
      gsap.to(showcasePlateImg, {
        rotation: 360,
        duration: 40,
        ease: 'none',
        repeat: -1
      });
    }
  }

  /* ==========================================================
     D. MULTI-LAYER DEPTH — Showcase section scaling/float
     ========================================================== */
  function initShowcaseParallax() {
    const plate = document.getElementById('showcase-plate');
    if (!plate) return;

    // Scale up from 0.8 to 1 and float slightly upwards as it enters viewport
    gsap.fromTo(plate,
      { scale: 0.8, y: 50, opacity: 0.8 },
      {
        scale: 1,
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#showcase',
          start: 'top 85%',
          end: 'center center',
          scrub: 1
        }
      }
    );
  }

  /* ==========================================================
     E. SCROLL REVEALS & STEPS
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

  function initStepAnimations() {
    const steps = document.querySelectorAll('.step-card');
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
     F. KEYBOARD PRESENTATION NAVIGATION
     ========================================================== */
  function initKeyboardNavigation() {
    const sections = Array.from(document.querySelectorAll('section'));
    let isScrolling = false;

    window.addEventListener('keydown', (e) => {
      if (['Space', 'ArrowDown', 'ArrowRight'].includes(e.code) && !e.shiftKey) {
        e.preventDefault();
        if (isScrolling) return;

        const currentScroll = window.scrollY;
        const targetIndex = sections.findIndex(sec => sec.offsetTop > currentScroll + 10);
        
        if (targetIndex !== -1) {
          isScrolling = true;
          sections[targetIndex].scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => { isScrolling = false; }, 800);
        }
      } else if (['ArrowUp', 'ArrowLeft'].includes(e.code) || (e.code === 'Space' && e.shiftKey)) {
        e.preventDefault();
        if (isScrolling) return;

        const currentScroll = window.scrollY;
        let targetIndex = -1;
        for (let i = sections.length - 1; i >= 0; i--) {
           if (sections[i].offsetTop < currentScroll - 10) {
               targetIndex = i;
               break;
           }
        }
        
        if (targetIndex !== -1) {
          isScrolling = true;
          sections[targetIndex].scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => { isScrolling = false; }, 800);
        }
      }
    });
  }

  /* ==========================================================
     INIT
     ========================================================== */
  function init() {
    initDynamicFavicon();   // A. Dynamic Favicon
    initHeroAnimation();
    initClockworkParallax(); // C. Clockwork parallax
    initArsenalClockwork();  // C2. Arsenal rotating images
    initShowcaseParallax();  // D. Showcase multi-layer depth
    initScrollReveals();
    initStepAnimations();
    initKeyboardNavigation(); // F. Presentation space navigation
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

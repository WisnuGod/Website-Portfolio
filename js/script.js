document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------------
     Mobile navbar toggle
     ------------------------------------------------------------------ */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  const closeMenu = () => {
    navMenu.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  /* ------------------------------------------------------------------
     Smooth scroll for nav links + hero CTA buttons, closes mobile menu
     ------------------------------------------------------------------ */
  const scrollLinks = document.querySelectorAll('[data-nav], [data-scroll]');

  scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const navbarHeight = document.getElementById('navbar').offsetHeight;
      const top = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight + 1;

      window.scrollTo({ top, behavior: 'smooth' });
      closeMenu();
    });
  });

  /* ------------------------------------------------------------------
     Active nav link highlighting based on scroll position
     ------------------------------------------------------------------ */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-nav]');

  const setActiveLink = () => {
    const navbarHeight = document.getElementById('navbar').offsetHeight;
    let currentId = sections[0]?.id;

    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top - navbarHeight - 24;
      if (top <= 0) currentId = section.id;
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  };

  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

  /* ------------------------------------------------------------------
     Scroll-reveal animation via IntersectionObserver
     ------------------------------------------------------------------ */
  const animatedEls = document.querySelectorAll('[data-animate]');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    animatedEls.forEach((el) => observer.observe(el));
  } else {
    animatedEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ------------------------------------------------------------------
     Gallery lightbox
     ------------------------------------------------------------------ */
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxClose = document.getElementById('lightboxClose');
  const triggers = document.querySelectorAll('[data-lightbox-trigger]');

  const openLightbox = (src, alt) => {
    lightboxImage.setAttribute('src', src);
    lightboxImage.setAttribute('alt', alt);
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const src = trigger.getAttribute('data-full');
      const img = trigger.querySelector('img');
      openLightbox(src, img ? img.getAttribute('alt') : '');
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });
});

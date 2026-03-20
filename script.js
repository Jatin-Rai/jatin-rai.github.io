document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((el) => observer.observe(el));

  // Active Navigation Highlight (ScrollSpy)
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  const scrollSpyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          // Remove active class from all links
          navLinks.forEach((link) => link.classList.remove('active'));

          // Add active class to corresponding link
          const activeLink = document.querySelector(
            `.nav-links a[href="#${id}"]`,
          );
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    },
    { rootMargin: '-40% 0px -40% 0px' },
  );

  sections.forEach((section) => scrollSpyObserver.observe(section));

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle Logic
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  const menuIcon = menuToggle.querySelector('i');

  menuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('nav-open');
    if (navLinksContainer.classList.contains('nav-open')) {
      menuIcon.classList.replace('ph-list', 'ph-x');
      document.body.style.overflow = 'hidden';
    } else {
      menuIcon.classList.replace('ph-x', 'ph-list');
      document.body.style.overflow = '';
    }
  });

  // Close mobile menu when a nav link is physically clicked
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinksContainer.classList.remove('nav-open');
      menuIcon.classList.replace('ph-x', 'ph-list');
      document.body.style.overflow = '';
    });
  });

  // Custom smooth scrolling logic with fixed duration
  function smoothScrollTo(endY, duration) {
    const startY = window.pageYOffset;
    const distance = endY - startY;
    let startTime = null;

    function easeInOutQuint(time, start, change, duration) {
      time /= duration / 2;
      if (time < 1)
        return (change / 2) * time * time * time * time * time + start;
      time -= 2;
      return (change / 2) * (time * time * time * time * time + 2) + start;
    }

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const nextY = easeInOutQuint(timeElapsed, startY, distance, duration);
      window.scrollTo(0, nextY);
      if (timeElapsed < duration) {
        window.requestAnimationFrame(animation);
      } else {
        window.scrollTo(0, endY);
      }
    }
    window.requestAnimationFrame(animation);
  }

  // Bind custom smooth scrolling to anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        // Scroll in exactly 800ms, regardless of distance
        smoothScrollTo(offsetPosition, 800);
      }
    });
  });

  // Interactive card hover effect (radial gradient tracking mouse)
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });

    // Ensure reset when mouse leaves
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--mouse-x', `50%`);
      card.style.setProperty('--mouse-y', `50%`);
    });
  });
});

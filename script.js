// Custom cursor with trail effect
const cursor = document.getElementById('cursor');
const trails = [];
let mouseX = 0,
  mouseY = 0;

// Create cursor trails
for (let i = 0; i < 5; i++) {
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  document.body.appendChild(trail);
  trails.push({
    element: trail,
    x: 0,
    y: 0,
  });
}

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

// Animate cursor trails
function animateTrails() {
  trails.forEach((trail, index) => {
    trail.x += (mouseX - trail.x) * (0.1 + index * 0.02);
    trail.y += (mouseY - trail.y) * (0.1 + index * 0.02);

    trail.element.style.left = trail.x + 'px';
    trail.element.style.top = trail.y + 'px';
  });
  requestAnimationFrame(animateTrails);
}
animateTrails();

// Matrix rain effect
function createMatrixRain() {
  const container = document.getElementById('matrixRain');
  const chars = '01ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ';

  for (let i = 0; i < 50; i++) {
    const column = document.createElement('div');
    column.className = 'matrix-column';
    column.style.left = Math.random() * 100 + '%';
    column.style.animationDuration = Math.random() * 5 + 3 + 's';
    column.style.animationDelay = Math.random() * 5 + 's';

    let text = '';
    for (let j = 0; j < 20; j++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length)) + '<br>';
    }
    column.innerHTML = text;

    container.appendChild(column);
  }
}

// Geometric shapes
function createGeometricShapes() {
  const container = document.getElementById('geometricShapes');
  const shapes = [
    'polygon(50% 0%, 0% 100%, 100% 100%)',
    'circle()',
    'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
    'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
  ];

  for (let i = 0; i < 20; i++) {
    const shape = document.createElement('div');
    shape.className = 'shape';
    shape.style.width = Math.random() * 100 + 50 + 'px';
    shape.style.height = Math.random() * 100 + 50 + 'px';
    shape.style.left = Math.random() * 100 + '%';
    shape.style.animationDuration = Math.random() * 10 + 10 + 's';
    shape.style.animationDelay = Math.random() * 10 + 's';
    shape.style.clipPath = shapes[Math.floor(Math.random() * shapes.length)];

    container.appendChild(shape);
  }
}

// Cyber particles
function createCyberParticles() {
  const container = document.getElementById('cyberParticles');

  for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.className = 'cyber-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = Math.random() * 10 + 15 + 's';

    container.appendChild(particle);
  }
}

// Loading screen
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
    // Start animations after loading
    createMatrixRain();
    createGeometricShapes();
    createCyberParticles();
  }, 4000);
});

// Smooth scrolling navigation
document.querySelectorAll('a[data-section]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('data-section');
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// Section visibility observer
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Staggered animations for cards
      const cards = entry.target.querySelectorAll(
        '.skill-card, .project-card, .contact-item'
      );
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.animationPlayState = 'running';
        }, index * 200);
      });
    }
  });
}, observerOptions);

document.querySelectorAll('.section').forEach((section) => {
  observer.observe(section);
});

// Crazy mouse effects
document.addEventListener('mousemove', (e) => {
  const shapes = document.querySelectorAll('.shape');
  shapes.forEach((shape, index) => {
    const speed = (index + 1) * 0.001;
    const x = (e.clientX * speed) % window.innerWidth;
    const y = (e.clientY * speed) % window.innerHeight;

    shape.style.transform += ` translate(${x * 0.1}px, ${y * 0.1}px)`;
  });
});

// Keyboard shortcuts and easter eggs
document.addEventListener('keydown', (e) => {
  try {
    playHoverSound();
  } catch (err) {
    // Ignore if audio is blocked
  }
  // Konami code for crazy mode
  const konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'KeyB',
    'KeyA',
  ];

  if (!window.konamiIndex) window.konamiIndex = 0;

  if (e.code === konamiCode[window.konamiIndex]) {
    window.konamiIndex++;
    if (window.konamiIndex === konamiCode.length) {
      // Activate insane mode
      document.body.style.animation = 'insaneMode 0.1s infinite';
      document.body.style.filter = 'hue-rotate(0deg)';

      const style = document.createElement('style');
      style.textContent = `
                        @keyframes insaneMode {
                            0% { filter: hue-rotate(0deg) brightness(1) contrast(1) saturate(1); }
                            25% { filter: hue-rotate(90deg) brightness(1.5) contrast(2) saturate(2); }
                            50% { filter: hue-rotate(180deg) brightness(0.8) contrast(1.5) saturate(3); }
                            75% { filter: hue-rotate(270deg) brightness(1.2) contrast(2.5) saturate(1.5); }
                            100% { filter: hue-rotate(360deg) brightness(1) contrast(1) saturate(1); }
                        }
                    `;
      document.head.appendChild(style);

      // Stop after 10 seconds
      setTimeout(() => {
        document.body.style.animation = '';
        document.body.style.filter = '';
        style.remove();
      }, 10000);

      window.konamiIndex = 0;
    }
  } else {
    window.konamiIndex = 0;
  }

  // Space bar for random color explosion
  if (e.code === 'Space') {
    e.preventDefault();
    createColorExplosion(window.innerWidth / 2, window.innerHeight / 2);
  }

  // ESC for disable all effects
  if (e.code === 'Escape') {
    document.body.style.animation = '';
    document.body.style.filter = '';
    document.querySelectorAll('.explosion-particle').forEach((p) => p.remove());
  }
});

// Color explosion effect
function createColorExplosion(x, y) {
  const colors = ['#00ffff', '#bf00ff', '#ff0080', '#00ff41', '#ff6b00'];

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'explosion-particle';
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = Math.random() * 10 + 5 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '10000';
    particle.style.boxShadow = `0 0 20px ${particle.style.background}`;

    const angle = (Math.PI * 2 * i) / 30;
    const velocity = Math.random() * 500 + 200;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;

    particle.style.animation = `explode 2s ease-out forwards`;

    const keyframes = `
                    @keyframes explode {
                        0% {
                            transform: translate(0, 0) scale(1);
                            opacity: 1;
                        }
                        100% {
                            transform: translate(${vx}px, ${
      vy + 500
    }px) scale(0);
                            opacity: 0;
                        }
                    }
                `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = keyframes;
    document.head.appendChild(styleSheet);

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
      styleSheet.remove();
    }, 2000);
  }
}

// Click explosion effects
document.addEventListener('click', (e) => {
  try {
    playHoverSound();
  } catch (err) {
    // Ignore if audio is blocked
  }
  createColorExplosion(e.clientX, e.clientY);
});

// Parallax scrolling effects
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(
    '.matrix-rain, .geometric-shapes, .cyber-particles'
  );

  parallaxElements.forEach((el, index) => {
    const speed = 0.1 + index * 0.1;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });

  const gridOverlay = document.querySelector('.grid-overlay');
  if (gridOverlay) {
    gridOverlay.style.backgroundPosition = `${scrolled * 0.5}px ${scrolled * 0.3}px`;
  }
});

// Advanced hover effects
document
  .querySelectorAll('.skill-card, .project-card, .contact-item')
  .forEach((card) => {
    card.addEventListener('mouseenter', (e) => {
      // Create hover particles
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = centerX + (Math.random() - 0.5) * 100 + 'px';
        particle.style.top = centerY + (Math.random() - 0.5) * 100 + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = getComputedStyle(card).borderColor;
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';
        particle.style.boxShadow = `0 0 10px ${
          getComputedStyle(card).borderColor
        }`;
        particle.style.animation = 'hoverParticle 1s ease-out forwards';

        const hoverParticleKeyframes = `
                        @keyframes hoverParticle {
                            0% {
                                transform: scale(0);
                                opacity: 1;
                            }
                            50% {
                                transform: scale(1);
                                opacity: 0.8;
                            }
                            100% {
                                transform: scale(0) translateY(-50px);
                                opacity: 0;
                            }
                        }
                    `;

        const style = document.createElement('style');
        style.textContent = hoverParticleKeyframes;
        document.head.appendChild(style);

        document.body.appendChild(particle);

        setTimeout(() => {
          particle.remove();
          style.remove();
        }, 1000);
      }
    });
  });

// Terminal typing effect
function typeTerminalText() {
  const terminalLines = document.querySelectorAll('.terminal-line');

  terminalLines.forEach((line, index) => {
    const text = line.textContent;
    line.textContent = '';

    setTimeout(() => {
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex < text.length) {
          line.textContent += text.charAt(charIndex);
          charIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 50);
    }, index * 1000);
  });
}

// Audio feedback (using Web Audio API)
let audioContext;

function playHoverSound() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(
    400,
    audioContext.currentTime + 0.1
  );

  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(
    0.01,
    audioContext.currentTime + 0.1
  );

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.1);
}

// Add sound effects to interactive elements
document
  .querySelectorAll('a, button, .skill-card, .project-card, .contact-item')
  .forEach((el) => {
    el.addEventListener('mouseenter', () => {
      try {
        playHoverSound();
      } catch (e) {
        // Audio might be blocked, ignore
      }
    });
  });

// Advanced scroll animations
function updateScrollAnimations() {
  const sections = document.querySelectorAll('.section');
  const scrollProgress =
    window.pageYOffset /
    (document.documentElement.scrollHeight - window.innerHeight);

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
      const sectionProgress = 1 - Math.abs(rect.top) / window.innerHeight;
      section.style.filter = `brightness(${
        0.5 + sectionProgress * 0.5
      }) saturate(${0.5 + sectionProgress * 0.5})`;
    }
  });

  // Update cursor based on scroll
  cursor.style.borderRadius = scrollProgress > 0.5 ? '0' : '50%';
  cursor.style.background = `hsl(${180 + scrollProgress * 180}, 100%, 50%)`;
}

// Throttled scroll handler
let scrollTimeout;
window.addEventListener('scroll', () => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
  scrollTimeout = setTimeout(updateScrollAnimations, 10);
});

// Initialize terminal typing on intersection
const terminalObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.hasAttribute('data-typed')) {
      entry.target.setAttribute('data-typed', 'true');
      setTimeout(typeTerminalText, 500);
    }
  });
});

document.querySelectorAll('.terminal-window').forEach((terminal) => {
  terminalObserver.observe(terminal);
});

// Random glitch effects
setInterval(() => {
  if (Math.random() < 0.1) {
    // 10% chance every 2 seconds
    const glitchElements = document.querySelectorAll(
      '.glitch-text, .section-title'
    );
    const randomElement =
      glitchElements[Math.floor(Math.random() * glitchElements.length)];

    if (randomElement) {
      randomElement.style.animation = 'none';
      setTimeout(() => {
        randomElement.style.animation = '';
      }, 100);
    }
  }
}, 2000);

// Performance monitoring
const performanceObserver = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === 'measure') {
      console.log(`Performance: ${entry.name} took ${entry.duration}ms`);
    }
  });
});

if (window.PerformanceObserver) {
  performanceObserver.observe({ entryTypes: ['measure'] });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  console.log(`
██╗   ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗    ████████╗ ██████╗ 
██║   ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝    ╚══██╔══╝██╔═══██╗
██║   ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗         ██║   ██║   ██║
██║   ██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝         ██║   ██║   ██║
╚██████╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗       ██║   ╚██████╔╝
 ╚═════╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝       ╚═╝    ╚═════╝ 
                                                                                      
    ████████╗██╗  ██╗███████╗    ███╗   ███╗ █████╗ ████████╗██████╗ ██╗██╗  ██╗
    ╚══██╔══╝██║  ██║██╔════╝    ████╗ ████║██╔══██╗╚══██╔══╝██╔══██╗██║╚██╗██╔╝
       ██║   ███████║█████╗      ██╔████╔██║███████║   ██║   ██████╔╝██║ ╚███╔╝ 
       ██║   ██╔══██║██╔══╝      ██║╚██╔╝██║██╔══██║   ██║   ██╔══██╗██║ ██╔██╗ 
       ██║   ██║  ██║███████╗    ██║ ╚═╝ ██║██║  ██║   ██║   ██║  ██║██║██╔╝ ██╗
       ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝

🚀 SYSTEM INITIALIZED
💫 ANIMATIONS LOADED
🎮 EASTER EGGS ACTIVE
⚡ PERFORMANCE OPTIMIZED
🎨 NEON AESTHETIC ONLINE

Controls:
- SPACE: Color explosion
- Konami Code (↑↑↓↓←→←→BA): Insane mode
- ESC: Reset effects
- Click anywhere: Particle burst

Ready to experience the future! 🌟
            `);

  // Start performance monitoring
  performance.mark('initialization-start');

  // Initialize scroll animations
  updateScrollAnimations();

  performance.mark('initialization-end');
  performance.measure(
    'initialization',
    'initialization-start',
    'initialization-end'
  );
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  if (audioContext) {
    audioContext.close();
  }
});

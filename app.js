/**
 * CENTRALETECH RECRUITMENT PORTAL — INTERACTIVE ENGINE
 * Mandat 2026-2027 — École Centrale Casablanca
 */

// ==========================================================================
// APPLICATION CONFIGURATION (FOR PRESIDENT / ADMIN)
// ==========================================================================
// To link the real application Google Form or Typeform later:
// Set `isLive: true` and paste the URL in `formUrl`.
// If `isLive: false`, clicking any apply button triggers the interactive
// "Candidatures Bientôt Ouvertes" early-access modal.
window.APPLICATION_CONFIG = {
  isLive: true,
  formUrl: 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=eF-Del-2XEmV2BIjjDk9eiSMIvigBCxFiZrnXrNQQRRUOVRHVVczU0ZSNFU5RkdISkM4Szc0VDZQSy4u',
  mandateYear: '2026-2027'
};

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initBackgroundCanvas();
  initPoleFilter();
  initLightbox();
  initFaqAccordion();
});

// ==========================================================================
// 1. Navbar Scrolling & Mobile Drawer
// ==========================================================================
function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.nav-toggle-btn');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      toggleBtn.innerHTML = isOpen ? '✕' : '☰';
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        if (toggleBtn) toggleBtn.innerHTML = '☰';
      });
    });
  }
}

// ==========================================================================
// 2. Interactive Background Particle Canvas (Cyber Constellation)
// ==========================================================================
function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = Math.min(Math.floor((width * height) / 22000), 55);
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.8,
      color: Math.random() > 0.5 ? 'rgba(0, 245, 212, ' : 'rgba(0, 187, 249, '
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw and connect particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + '0.7)';
      ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 245, 212, ${0.18 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// ==========================================================================
// 3. Poles Filter Tabs (Robotique, Data, Web, Cyber)
// ==========================================================================
function initPoleFilter() {
  const tabs = document.querySelectorAll('.pole-tab-btn');
  const cards = document.querySelectorAll('.pole-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.getAttribute('data-target');

      cards.forEach(card => {
        if (target === 'all' || card.getAttribute('data-pole') === target) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

// ==========================================================================
// 5. Image Lightbox for High-Res Zoom
// ==========================================================================
function initLightbox() {
  const lightbox = document.getElementById('image-lightbox');
  const lightboxImg = document.getElementById('lightbox-zoom-img');
  const closeBtn = document.querySelector('.lightbox-close');
  const zoomableImgs = document.querySelectorAll('.js-zoomable-img');

  function openLightbox(src) {
    if (lightbox && lightboxImg) {
      lightboxImg.src = src;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  zoomableImgs.forEach(img => {
    img.addEventListener('click', () => {
      openLightbox(img.getAttribute('data-full-src') || img.src);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });
}

// ==========================================================================
// 6. FAQ Accordion
// ==========================================================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close other items
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

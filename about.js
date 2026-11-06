'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const themeToggle = document.getElementById('themeToggle');
  const mobileThemeToggle = document.getElementById('mobileThemeToggle');
  const mobileThemeText = document.getElementById('mobileThemeText');
  const htmlRoot = document.documentElement;

  const storedTheme = localStorage.getItem('veloce_theme') || 'dark';
  applyTheme(storedTheme);

  function applyTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('veloce_theme', theme);

    if (mobileThemeText) {
      mobileThemeText.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }

    if (mobileThemeToggle) {
      const icon = mobileThemeToggle.querySelector('i');
      if (icon) {
        icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      }
    }
  }

  function toggleTheme() {
    const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);

  }

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', toggleTheme);
  }

  const dirToggle = document.getElementById('dirToggle');
  const dirText = document.getElementById('dirText');
  const mobileDirToggle = document.getElementById('mobileDirToggle');
  const mobileDirText = document.getElementById('mobileDirText');

  const storedDir = localStorage.getItem('veloce_dir') || 'ltr';
  applyDirection(storedDir);

  function applyDirection(dir) {
    htmlRoot.setAttribute('dir', dir);
    localStorage.setItem('veloce_dir', dir);

    if (dirText) {
      dirText.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
    }
    if (mobileDirText) {
      mobileDirText.textContent = dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL';
    }
  }

  function toggleDirection() {
    const currentDir = htmlRoot.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
    applyDirection(newDir);

  }

  if (dirToggle) {
    dirToggle.addEventListener('click', toggleDirection);
  }
  if (mobileDirToggle) {
    mobileDirToggle.addEventListener('click', toggleDirection);
  }

  const siteHeader = document.getElementById('siteHeader');

  function handleHeaderScroll() {
    if (!siteHeader) return;
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileOverlay = document.getElementById('mobileMenuOverlay');
  const mobileHomeDropdown = document.getElementById('mobileHomeDropdown');
  const mobileHomeSubmenu = document.getElementById('mobileHomeSubmenu');

  function openMobileMenu() {
    if (mobileDrawer && mobileOverlay) {
      mobileDrawer.classList.add('active', 'open');
      mobileOverlay.classList.add('active', 'open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileDrawer && mobileOverlay) {
      mobileDrawer.classList.remove('active', 'open');
      mobileOverlay.classList.remove('active', 'open');
      document.body.style.overflow = '';
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

  if (mobileHomeDropdown && mobileHomeSubmenu) {
    mobileHomeDropdown.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileHomeSubmenu.classList.toggle('show');
      mobileHomeSubmenu.classList.toggle('open', isOpen);
      mobileHomeDropdown.classList.toggle('active', isOpen);
      const icon = mobileHomeDropdown.querySelector('i');
      if (icon) icon.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    });
  }

  const currentPath = window.location.pathname.split('/').pop() || 'about.html';
  document.querySelectorAll('.mobile-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPath || (href === 'about.html' && currentPath.includes('about')))) {
      link.classList.add('active');
    }
    link.addEventListener('click', () => {
      if (link.getAttribute('href')?.startsWith('#')) {
        closeMobileMenu();
      }
    });
  });

  const timelineItems = document.querySelectorAll('.timeline-item');
  const timelineProgress = document.getElementById('timelineProgress');

  timelineItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      timelineItems.forEach(t => t.classList.remove('active'));
      item.classList.add('active');

      if (timelineProgress && window.innerWidth > 992) {
        const pct = ((index + 1) / timelineItems.length) * 100;
        timelineProgress.style.width = `${pct}%`;
      }
    });

    item.addEventListener('click', () => {
      timelineItems.forEach(t => t.classList.remove('active'));
      item.classList.add('active');
    });
  });

  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.mv-card, .timeline-item, .team-card, .principle-card').forEach(el => {
    el.classList.add('reveal-on-scroll');
    revealObserver.observe(el);
  });

  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    if (!backToTopBtn) return;
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconClass = 'fa-solid fa-circle-info';
    if (type === 'success') iconClass = 'fa-solid fa-circle-check';
    if (type === 'error') iconClass = 'fa-solid fa-circle-exclamation';

    toast.innerHTML = `
      <i class="${iconClass} toast-icon"></i>
      <span class="toast-msg">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode === container) {
          container.removeChild(toast);
        }
      }, 300);
    }, 4000);
  }

});


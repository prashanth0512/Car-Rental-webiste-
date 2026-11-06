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
  const navLinks = document.querySelectorAll('.main-nav .nav-link');
  const sections = document.querySelectorAll('section[id], footer[id]');
  const homeDropdownBtn = document.getElementById('homeDropdownBtn');

  function updateActiveNavOnLoad() {
    if (homeDropdownBtn) {
      homeDropdownBtn.classList.add('active');
    }
  }
  updateActiveNavOnLoad();

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (siteHeader) {
      if (scrollY > 30) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    if (homeDropdownBtn) {
      homeDropdownBtn.classList.add('active');
    }
  });

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const mobileHomeDropdown = document.getElementById('mobileHomeDropdown');
  const mobileHomeSubmenu = document.getElementById('mobileHomeSubmenu');

  function openMobileMenu() {
    if (mobileDrawer) mobileDrawer.classList.add('active');
    if (mobileMenuOverlay) mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (mobileDrawer) mobileDrawer.classList.remove('active');
    if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileMenu);
  if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  if (mobileHomeDropdown && mobileHomeSubmenu) {
    mobileHomeDropdown.classList.add('active', 'active-page');
    mobileHomeSubmenu.classList.add('show', 'open', 'active');
    const home2Link = mobileHomeSubmenu.querySelector('a[href*="home2.html"]');
    if (home2Link) home2Link.classList.add('active');
    mobileHomeDropdown.addEventListener('click', () => {
      const isOpen = mobileHomeSubmenu.classList.toggle('active'); mobileHomeSubmenu.classList.toggle('show', isOpen); mobileHomeSubmenu.classList.toggle('open', isOpen); mobileHomeDropdown.classList.toggle('active', isOpen);
      const arrow = mobileHomeDropdown.querySelector('i');
      if (arrow) {
        arrow.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    });
  }

  const bookingModal = document.getElementById('bookingModal');
  const closeBookingModal = document.getElementById('closeBookingModal');
  const bookingThumb = document.getElementById('bookingThumb');
  const bookingCarTitle = document.getElementById('bookingCarTitle');
  const bookingCarRate = document.getElementById('bookingCarRate');
  const reservationForm = document.getElementById('reservationForm');
  const spotlightBtns = document.querySelectorAll('.open-spotlight-modal');

  spotlightBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const carName = btn.getAttribute('data-car') || 'Porsche 911 GT3 RS';
      const carRate = btn.getAttribute('data-rate') || '$650 / day';
      const carImg = btn.getAttribute('data-img') || 'assets/spotlight-main.jpg';

      if (bookingCarTitle) bookingCarTitle.textContent = carName;
      if (bookingCarRate) bookingCarRate.textContent = carRate;
      if (bookingThumb) {
        bookingThumb.src = carImg;
        bookingThumb.alt = carName;
      }

      openModal(bookingModal);
    });
  });

  const membershipBtns = document.querySelectorAll('.select-membership-btn');
  membershipBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const plan = btn.getAttribute('data-plan') || 'Explorer';
      if (bookingCarTitle) bookingCarTitle.textContent = `Veloce Membership: ${plan}`;
      if (bookingCarRate) bookingCarRate.textContent = 'Tier Allocation';
      if (bookingThumb) {
        bookingThumb.src = 'assets/spotlight-main.jpg';
      }
      openModal(bookingModal);
      showToast(`Selected ${plan} membership plan. Please finalize your details.`, 'success');
    });
  });

  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBookingModal) {
    closeBookingModal.addEventListener('click', () => closeModal(bookingModal));
  }

  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) closeModal(bookingModal);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(bookingModal);
      closeMobileMenu();
    }
  });

  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('resName')?.value || 'Guest';
      const vehicle = bookingCarTitle?.textContent || 'Selected Vehicle';

      closeModal(bookingModal);
      reservationForm.reset();

      showToast(`Reservation Confirmed for ${name}! Allocation locked for ${vehicle}.`, 'success');
    });
  }

  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    if (!backToTopBtn) return;
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

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

  function initCarSlider() {
    const slides   = document.querySelectorAll('.h2-car-slide');
    const dots     = document.querySelectorAll('.h2-dot');
    const label    = document.getElementById('carLabel');
    if (!slides.length) return;

    let current  = 0;
    let timer    = null;
    let isMoving = false;

    function goTo(idx) {
      if (isMoving || idx === current) return;
      isMoving = true;

      slides[current].classList.add('exit');
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      dots[current].setAttribute('aria-selected', 'false');

      const prev = current;
      current = idx;

      setTimeout(() => {
        slides[prev].classList.remove('exit');
        slides[current].classList.add('active');
        dots[current].classList.add('active');
        dots[current].setAttribute('aria-selected', 'true');
        if (label) label.textContent = slides[current].getAttribute('data-car') || '';
        isMoving = false;
      }, 320);
    }

    function next() {
      goTo((current + 1) % slides.length);
    }

    function startTimer() {
      clearInterval(timer);
      timer = setInterval(next, 2000);
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        clearInterval(timer);
        goTo(i);
        startTimer();
      });
    });

    const showcase = document.querySelector('.h2-car-showcase');
    if (showcase) {
      showcase.addEventListener('mouseenter', () => clearInterval(timer));
      showcase.addEventListener('mouseleave', startTimer);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { clearInterval(timer); goTo((current + 1) % slides.length); startTimer(); }
      if (e.key === 'ArrowLeft')  { clearInterval(timer); goTo((current - 1 + slides.length) % slides.length); startTimer(); }
    });

    startTimer();
  }

  initCarSlider();

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


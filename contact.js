'use strict';

const VELOCE_CONTACT_CONFIG = {
  supportEmail: 'concierge@veloce-drive.com',
  vipEmail: 'support@veloce-drive.com',
  phoneDisplay: '+1 (800) 589-3283',
  phoneCall: '+18005893283',
  address: '742 Ocean Boulevard, Beverly Hills, CA 90210',
  operatingHours: 'Mon – Sat: 8:00 AM – 9:00 PM | Sun: 9:00 AM – 6:00 PM',
  emergencyHours: '24/7 Live Emergency Roadside Dispatch',

  apiEndpoint: null
};

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

  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);

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

  if (dirToggle) dirToggle.addEventListener('click', toggleDirection);
  if (mobileDirToggle) mobileDirToggle.addEventListener('click', toggleDirection);

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
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileHomeDropdown = document.getElementById('mobileHomeDropdown');
  const mobileHomeSubmenu = document.getElementById('mobileHomeSubmenu');

  function openMobileNav() {
    if (mobileDrawer && mobileMenuOverlay) {
      mobileDrawer.classList.add('active', 'open');
      mobileMenuOverlay.classList.add('active', 'open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileNav() {
    if (mobileDrawer && mobileMenuOverlay) {
      mobileDrawer.classList.remove('active', 'open');
      mobileMenuOverlay.classList.remove('active', 'open');
      document.body.style.overflow = '';
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileNav);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileNav);
  if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMobileNav);

  if (mobileHomeDropdown && mobileHomeSubmenu) {
    mobileHomeDropdown.addEventListener('click', () => {
      const isExpanded = mobileHomeSubmenu.classList.toggle('open');
      mobileHomeDropdown.classList.toggle('active', isExpanded);
    });
  }

  const toastContainer = document.getElementById('toastContainer');

  function showToast(message, type = 'info') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast-msg toast-${type}`;

    let iconClass = 'fa-solid fa-circle-info';
    if (type === 'success') iconClass = 'fa-solid fa-circle-check';
    if (type === 'warning') iconClass = 'fa-solid fa-triangle-exclamation';
    if (type === 'error') iconClass = 'fa-solid fa-circle-xmark';

    toast.innerHTML = `
      <i class="${iconClass}"></i>
      <span class="toast-content">${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('hide');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 400);
    }, 4200);
  }

  const backToTopBtn = document.getElementById('backToTopBtn');

  function handleBackToTopScroll() {
    if (!backToTopBtn) return;
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  }

  window.addEventListener('scroll', handleBackToTopScroll, { passive: true });
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const contactUsForm = document.getElementById('contactUsForm');
  const contactFullName = document.getElementById('contactFullName');
  const contactEmailAddr = document.getElementById('contactEmailAddr');
  const contactPhoneNumber = document.getElementById('contactPhoneNumber');
  const contactSubject = document.getElementById('contactSubject');
  const contactMessage = document.getElementById('contactMessage');
  const contactConsent = document.getElementById('contactConsent');
  const charCounter = document.getElementById('charCounter');
  const contactSubmitBtn = document.getElementById('contactSubmitBtn');
  const formAlertBanner = document.getElementById('formAlertBanner');
  const formAlertContent = document.getElementById('formAlertContent');

  if (contactMessage && charCounter) {
    contactMessage.addEventListener('input', () => {
      const len = contactMessage.value.length;
      charCounter.textContent = `${len} / 1000`;
      if (len >= 950) {
        charCounter.style.color = 'var(--primary)';
      } else {
        charCounter.style.color = 'var(--text-muted)';
      }
    });
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePhone(phone) {
    if (!phone) return true;
    const re = /^[+]?[\d\s().-]{7,20}$/;
    return re.test(phone.trim());
  }

  function setFieldError(inputEl, hasError) {
    const group = inputEl.closest('.form-group');
    if (!group) return;
    if (hasError) {
      group.classList.add('has-error');
    } else {
      group.classList.remove('has-error');
    }
  }

  if (contactFullName) {
    contactFullName.addEventListener('input', () => setFieldError(contactFullName, false));
  }
  if (contactEmailAddr) {
    contactEmailAddr.addEventListener('input', () => setFieldError(contactEmailAddr, false));
  }
  if (contactPhoneNumber) {
    contactPhoneNumber.addEventListener('input', () => setFieldError(contactPhoneNumber, false));
  }
  if (contactSubject) {
    contactSubject.addEventListener('change', () => setFieldError(contactSubject, false));
  }
  if (contactMessage) {
    contactMessage.addEventListener('input', () => setFieldError(contactMessage, false));
  }
  if (contactConsent) {
    contactConsent.addEventListener('change', () => setFieldError(contactConsent, false));
  }

  if (contactUsForm) {
    contactUsForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasErrors = false;

      const nameVal = contactFullName ? contactFullName.value.trim() : '';
      if (!nameVal || nameVal.length < 2) {
        setFieldError(contactFullName, true);
        hasErrors = true;
      } else {
        setFieldError(contactFullName, false);
      }

      const emailVal = contactEmailAddr ? contactEmailAddr.value.trim() : '';
      if (!emailVal || !validateEmail(emailVal)) {
        setFieldError(contactEmailAddr, true);
        hasErrors = true;
      } else {
        setFieldError(contactEmailAddr, false);
      }

      const phoneVal = contactPhoneNumber ? contactPhoneNumber.value.trim() : '';
      if (phoneVal && !validatePhone(phoneVal)) {
        setFieldError(contactPhoneNumber, true);
        hasErrors = true;
      } else if (contactPhoneNumber) {
        setFieldError(contactPhoneNumber, false);
      }

      const subjectVal = contactSubject ? contactSubject.value : '';
      if (!subjectVal) {
        setFieldError(contactSubject, true);
        hasErrors = true;
      } else {
        setFieldError(contactSubject, false);
      }

      const messageVal = contactMessage ? contactMessage.value.trim() : '';
      if (!messageVal || messageVal.length < 10) {
        setFieldError(contactMessage, true);
        hasErrors = true;
      } else {
        setFieldError(contactMessage, false);
      }

      const consentVal = contactConsent ? contactConsent.checked : false;
      if (!consentVal) {
        setFieldError(contactConsent, true);
        hasErrors = true;
      } else {
        setFieldError(contactConsent, false);
      }

      if (hasErrors) {
        showToast('Please correct the highlighted fields before submitting.', 'warning');
        return;
      }

      const preferredMethodEl = document.querySelector('input[name="preferredMethod"]:checked');
      const preferredMethod = preferredMethodEl ? preferredMethodEl.value : 'Email';

      if (contactSubmitBtn) {
        contactSubmitBtn.disabled = true;
        const btnText = contactSubmitBtn.querySelector('.btn-text');
        const btnIcon = contactSubmitBtn.querySelector('.btn-icon');
        const btnSpinner = contactSubmitBtn.querySelector('.btn-spinner');

        if (btnText) btnText.textContent = 'Sending Message...';
        if (btnIcon) btnIcon.style.display = 'none';
        if (btnSpinner) btnSpinner.style.display = 'inline-block';
      }

      setTimeout(() => {

        if (contactSubmitBtn) {
          contactSubmitBtn.disabled = false;
          const btnText = contactSubmitBtn.querySelector('.btn-text');
          const btnIcon = contactSubmitBtn.querySelector('.btn-icon');
          const btnSpinner = contactSubmitBtn.querySelector('.btn-spinner');

          if (btnText) btnText.textContent = 'Send Message';
          if (btnIcon) btnIcon.style.display = 'inline-block';
          if (btnSpinner) btnSpinner.style.display = 'none';
        }

        const ticketId = 'VEL-' + Math.floor(10000 + Math.random() * 90000);

        if (formAlertBanner && formAlertContent) {
          formAlertBanner.className = 'form-alert alert-success';
          formAlertBanner.style.display = 'flex';
          formAlertContent.innerHTML = `
            <strong>Thank you, ${escapeHTML(nameVal)}!</strong><br>
            Your inquiry regarding <em>"${escapeHTML(subjectVal)}"</em> has been received (Ref: <strong>${ticketId}</strong>).
            Our concierge team will review your message and contact you via <strong>${escapeHTML(preferredMethod)}</strong> within 2 business hours.
          `;

          formAlertBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        showToast(`Inquiry sent successfully! Reference ID: ${ticketId}`, 'success');

        contactUsForm.reset();
        if (charCounter) charCounter.textContent = '0 / 1000';

      }, 1200);

    });
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g,
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  const heroCarBtn1 = document.getElementById('heroCarBtn1');
  const heroCarBtn2 = document.getElementById('heroCarBtn2');
  const contactHeroCarImg = document.getElementById('contactHeroCarImg');
  const contactHeroCarName = document.getElementById('contactHeroCarName');

  const contactHeroCars = {
    jeep: {
      src: 'assets/hero-jeep-black.png',
      alt: 'Black Jeep Grand Cherokee 4x4',
      name: 'Jeep Grand Cherokee 4x4'
    },
    thar: {
      src: 'assets/hero-thar-red.png',
      alt: 'Red Mahindra Thar 4x4',
      name: 'Mahindra Thar 4x4'
    }
  };

  function switchHeroCar(carKey) {
    if (!contactHeroCarImg || !contactHeroCars[carKey]) return;
    const car = contactHeroCars[carKey];

    contactHeroCarImg.style.opacity = '0';
    contactHeroCarImg.style.transform = 'scale(0.95) translateY(10px)';

    setTimeout(() => {
      contactHeroCarImg.src = car.src;
      contactHeroCarImg.alt = car.alt;
      if (contactHeroCarName) contactHeroCarName.textContent = car.name;
      contactHeroCarImg.style.opacity = '1';
      contactHeroCarImg.style.transform = 'scale(1) translateY(0)';
    }, 220);

    if (heroCarBtn1 && heroCarBtn2) {
      heroCarBtn1.classList.toggle('active', carKey === 'jeep');
      heroCarBtn2.classList.toggle('active', carKey === 'thar');
    }
  }

  if (heroCarBtn1) heroCarBtn1.addEventListener('click', () => switchHeroCar('jeep'));
  if (heroCarBtn2) heroCarBtn2.addEventListener('click', () => switchHeroCar('thar'));

  // Map Hub Switcher
  const hubTabs = document.querySelectorAll('.map-hub-tab');
  const contactMapIframe = document.getElementById('contactMapIframe');
  const mapDetailVal1 = document.getElementById('mapDetailVal1');
  const mapDetailVal2 = document.getElementById('mapDetailVal2');
  const mapDirectionsBtn = document.getElementById('mapDirectionsBtn');
  const mapPinIcon = document.getElementById('mapPinIcon');

  const hubData = {
    flagship: {
      src: 'https://www.openstreetmap.org/export/embed.html?bbox=-118.4200%2C34.0600%2C-118.3900%2C34.0800&layer=mapnik&marker=34.0700%2C-118.4050',
      address: '742 Ocean Boulevard, Beverly Hills, CA 90210',
      handover: 'Curbside Handover at Terminal 2 & Private Jet Hangar',
      directionsUrl: 'https://maps.google.com/?q=Beverly+Hills+CA',
      icon: 'fa-solid fa-car',
      name: 'Beverly Hills Flagship'
    },
    lax: {
      src: 'https://www.openstreetmap.org/export/embed.html?bbox=-118.4250%2C33.9350%2C-118.3950%2C33.9550&layer=mapnik&marker=33.9425%2C-118.4081',
      address: 'LAX Curbside Staging, Terminal 2 & 4 VIP Arrival, CA 90045',
      handover: 'Baggage-Claim Valet & Direct Airside Chauffeur Handover',
      directionsUrl: 'https://maps.google.com/?q=Los+Angeles+International+Airport',
      icon: 'fa-solid fa-plane-departure',
      name: 'LAX VIP Terminal'
    },
    hangar: {
      src: 'https://www.openstreetmap.org/export/embed.html?bbox=-118.5050%2C34.2050%2C-118.4750%2C34.2250&layer=mapnik&marker=34.2098%2C-118.4899',
      address: 'Van Nuys Private Aviation Center, Hangar 4B, CA 91406',
      handover: 'Tarmac Escort & Pre-Warmed Engine Ramp Handover',
      directionsUrl: 'https://maps.google.com/?q=Van+Nuys+Airport',
      icon: 'fa-solid fa-helicopter',
      name: 'Private Jet Hangar'
    }
  };

  hubTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const hubKey = tab.getAttribute('data-hub');
      const data = hubData[hubKey];
      if (!data) return;

      hubTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      if (contactMapIframe) contactMapIframe.src = data.src;
      if (mapDetailVal1) mapDetailVal1.textContent = data.address;
      if (mapDetailVal2) mapDetailVal2.textContent = data.handover;
      if (mapDirectionsBtn) mapDirectionsBtn.href = data.directionsUrl;
      if (mapPinIcon) mapPinIcon.className = data.icon;

      showToast(`Selected Hub: ${data.name}`, 'info');
    });
  });

  const faqItems = document.querySelectorAll('#contactFaqAccordion .faq-item');

  faqItems.forEach(item => {
    if (item.classList.contains('active')) {
      const panel = item.querySelector('.faq-answer-panel');
      if (panel) {
        panel.style.maxHeight = panel.scrollHeight + 40 + 'px';
      }
    }
  });

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const panel = item.querySelector('.faq-answer-panel');

    if (!btn || !panel) return;

    btn.addEventListener('click', () => {
      const isAlreadyActive = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          const otherPanel = otherItem.querySelector('.faq-answer-panel');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherPanel) otherPanel.style.maxHeight = null;
        }
      });

      if (isAlreadyActive) {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = null;
      } else {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 40 + 'px';
      }
    });
  });

});


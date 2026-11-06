'use strict';

const VELOCE_PRICING_DATA = {
  plans: {
    daily: {
      id: 'daily',
      name: 'Daily Drive',
      badge: 'SHORT-TERM AGILITY',
      price: 1999,
      currency: '₹',
      period: '/ day',
      cycle: '24-hour cycle',
      defaultDays: 1,
      discountFactor: 1.0,
      description: 'Perfect for short trips, everyday travel, and quick getaways.',
      features: [
        '24-hour rental duration',
        'Flexible vehicle selection',
        'Standard pickup options',
        'Basic customer assistance',
        'Transparent rental charges'
      ]
    },
    weekly: {
      id: 'weekly',
      name: 'Weekly Explorer',
      badge: 'EXTENDED JOURNEY',
      featured: true,
      price: 10999,
      currency: '₹',
      period: '/ week',
      cycle: '7-day cycle',
      defaultDays: 7,
      discountFactor: 0.78,
      description: 'More flexibility and better value for vacations and extended journeys.',
      features: [
        '7-day rental duration',
        'Flexible vehicle selection',
        'Convenient pickup options',
        'Extended rental flexibility',
        'Dedicated customer assistance'
      ]
    },
    monthly: {
      id: 'monthly',
      name: 'Monthly Freedom',
      badge: 'LONG-TERM MOBILITY',
      price: 34999,
      currency: '₹',
      period: '/ month',
      cycle: '30-day cycle',
      defaultDays: 30,
      discountFactor: 0.58,
      description: 'An ideal option for longer stays, business travel, and extended mobility.',
      features: [
        '30-day rental duration',
        'Premium vehicle options',
        'Flexible rental management',
        'Extended customer support',
        'Convenient renewal options'
      ]
    }
  },

  comparisonSpecs: [
    {
      feature: '1. Rental Duration',
      icon: 'fa-regular fa-clock',
      daily: '24 Hours',
      weekly: '7 Days',
      monthly: '30 Days'
    },
    {
      feature: '2. Vehicle Selection',
      icon: 'fa-solid fa-car-side',
      daily: 'Standard Fleet',
      weekly: 'Full Fleet Selection',
      monthly: 'Priority Fleet & Luxury Swaps'
    },
    {
      feature: '3. Pickup Options',
      icon: 'fa-solid fa-location-dot',
      daily: 'Hub & Airport Handover',
      weekly: 'Airport & Hotel Delivery',
      monthly: 'Complimentary VIP Doorstep'
    },
    {
      feature: '4. Customer Support',
      icon: 'fa-solid fa-headset',
      daily: 'Standard Assistance',
      weekly: 'Dedicated Phone Support',
      monthly: '24/7 Personal Concierge'
    },
    {
      feature: '5. Rental Extension',
      icon: 'fa-solid fa-calendar-plus',
      daily: 'Subject to Availability',
      weekly: 'Guaranteed (4h Notice)',
      monthly: 'Complimentary Rollover'
    },
    {
      feature: '6. Flexible Booking',
      icon: 'fa-solid fa-arrows-rotate',
      daily: 'Standard Reschedule',
      weekly: '1 Free Reschedule',
      monthly: 'Unlimited Free Modifications'
    },
    {
      feature: '7. Long-Distance Travel',
      icon: 'fa-solid fa-route',
      daily: 'State Permit Support',
      weekly: 'Interstate Fastag Included',
      monthly: 'Unlimited Kilometres Option'
    },
    {
      feature: '8. Vehicle Upgrade Options',
      icon: 'fa-solid fa-arrow-up-right-dots',
      daily: 'Paid at Counter',
      weekly: 'Discounted Tier Upgrades',
      monthly: 'Complimentary Vehicle Swaps'
    },
    {
      feature: '9. Rental Management',
      icon: 'fa-solid fa-file-contract',
      daily: 'Digital Agreement',
      weekly: 'Digital Fleet Pass',
      monthly: 'Dedicated Account Manager'
    },
    {
      feature: '10. Cancellation Policy',
      icon: 'fa-solid fa-shield-halved',
      daily: 'Free up to 24h Prior',
      weekly: 'Free up to 48h Prior',
      monthly: 'Flexible Prorated Refund'
    }
  ]
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
      const isExpanded = mobileHomeSubmenu.classList.toggle('show'); mobileHomeSubmenu.classList.toggle('open', isExpanded); const arrow = mobileHomeDropdown.querySelector('i'); if (arrow) arrow.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
      mobileHomeDropdown.classList.toggle('active', isExpanded);
    });
  }

  document.querySelectorAll('.mobile-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === 'pricing.html' || href.includes('pricing'))) {
      link.classList.add('active');
    }
  });

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
    }, 3800);
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

  const mSpecsDaily = document.getElementById('mSpecsDaily');
  const mSpecsWeekly = document.getElementById('mSpecsWeekly');
  const mSpecsMonthly = document.getElementById('mSpecsMonthly');

  if (mSpecsDaily && mSpecsWeekly && mSpecsMonthly && VELOCE_PRICING_DATA.comparisonSpecs) {
    const specs = VELOCE_PRICING_DATA.comparisonSpecs;

    mSpecsDaily.innerHTML = specs.map(s => `
      <li>
        <span class="mplan-spec-lbl">${s.feature}</span>
        <span class="mplan-spec-val">${s.daily}</span>
      </li>
    `).join('');

    mSpecsWeekly.innerHTML = specs.map(s => `
      <li>
        <span class="mplan-spec-lbl">${s.feature}</span>
        <span class="mplan-spec-val">${s.weekly}</span>
      </li>
    `).join('');

    mSpecsMonthly.innerHTML = specs.map(s => `
      <li>
        <span class="mplan-spec-lbl">${s.feature}</span>
        <span class="mplan-spec-val">${s.monthly}</span>
      </li>
    `).join('');
  }

  const mobileTabs = document.querySelectorAll('.mobile-plan-tab');
  const mobilePanels = {
    daily: document.getElementById('mobilePlanDaily'),
    weekly: document.getElementById('mobilePlanWeekly'),
    monthly: document.getElementById('mobilePlanMonthly')
  };

  mobileTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab-target');

      mobileTabs.forEach(t => {
        const isCurrent = t === tab;
        t.classList.toggle('active', isCurrent);
        t.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
      });

      Object.keys(mobilePanels).forEach(key => {
        if (mobilePanels[key]) {
          if (key === target) {
            mobilePanels[key].style.display = 'block';
            mobilePanels[key].classList.add('active');
          } else {
            mobilePanels[key].style.display = 'none';
            mobilePanels[key].classList.remove('active');
          }
        }
      });
    });
  });

  const faqItems = document.querySelectorAll('#pricingFaqAccordion .faq-item');

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

  const planModalOverlay = document.getElementById('planModalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const planBookingForm = document.getElementById('planBookingForm');
  const modalPlanTitle = document.getElementById('modalPlanTitle');
  const modalPreviewPlanName = document.getElementById('modalPreviewPlanName');
  const modalPreviewPlanPrice = document.getElementById('modalPreviewPlanPrice');
  const modalPreviewPlanPeriod = document.getElementById('modalPreviewPlanPeriod');
  const bookVehicleSelect = document.getElementById('bookVehicleSelect');
  const bookPickupDate = document.getElementById('bookPickupDate');
  const bookReturnDate = document.getElementById('bookReturnDate');
  const bookCustomerPhone = document.getElementById('bookCustomerPhone');
  const fareDuration = document.getElementById('fareDuration');
  const fareTotalAmount = document.getElementById('fareTotalAmount');

  let selectedPlanKey = 'weekly';

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDate = (d) => d.toISOString().split('T')[0];

  function openPlanModal(planKey) {
    const plan = VELOCE_PRICING_DATA.plans[planKey] || VELOCE_PRICING_DATA.plans.weekly;
    selectedPlanKey = plan.id;

    if (modalPlanTitle) modalPlanTitle.textContent = `Reserve ${plan.name}`;
    if (modalPreviewPlanName) modalPreviewPlanName.textContent = plan.name;
    if (modalPreviewPlanPrice) modalPreviewPlanPrice.textContent = plan.price.toLocaleString('en-IN');
    if (modalPreviewPlanPeriod) modalPreviewPlanPeriod.textContent = plan.period;

    const pickup = new Date(tomorrow);
    const returnD = new Date(pickup);
    returnD.setDate(returnD.getDate() + plan.defaultDays);

    if (bookPickupDate && bookReturnDate) {
      bookPickupDate.min = formatDate(pickup);
      bookPickupDate.value = formatDate(pickup);
      bookReturnDate.min = formatDate(pickup);
      bookReturnDate.value = formatDate(returnD);
    }

    calculatePlanFare();

    if (planModalOverlay) {
      planModalOverlay.classList.add('active');
      planModalOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closePlanModal() {
    if (!planModalOverlay) return;
    planModalOverlay.classList.remove('active');
    planModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function calculatePlanFare() {
    if (!bookPickupDate || !bookReturnDate) return;

    const start = new Date(bookPickupDate.value);
    const end = new Date(bookReturnDate.value);

    let days = Math.round((end - start) / (1000 * 60 * 60 * 24));
    if (isNaN(days) || days < 1) days = 1;

    const currentPlan = VELOCE_PRICING_DATA.plans[selectedPlanKey] || VELOCE_PRICING_DATA.plans.weekly;

    if (fareDuration) {
      fareDuration.textContent = `${days} Day${days > 1 ? 's' : ''} (${currentPlan.name})`;
    }

    let baseDailyRate = 2200;
    const selectedOption = bookVehicleSelect ? bookVehicleSelect.options[bookVehicleSelect.selectedIndex] : null;
    if (selectedOption && selectedOption.dataset && selectedOption.dataset.rate) {
      baseDailyRate = parseInt(selectedOption.dataset.rate, 10);
    }

    const totalEst = Math.round(days * baseDailyRate * currentPlan.discountFactor);

    if (fareTotalAmount) {
      fareTotalAmount.textContent = `₹${totalEst.toLocaleString('en-IN')}`;
    }
  }

  if (bookPickupDate) {
    bookPickupDate.addEventListener('change', () => {
      const currentPlan = VELOCE_PRICING_DATA.plans[selectedPlanKey] || VELOCE_PRICING_DATA.plans.weekly;
      const next = new Date(bookPickupDate.value);
      next.setDate(next.getDate() + currentPlan.defaultDays);
      bookReturnDate.value = formatDate(next);
      bookReturnDate.min = bookPickupDate.value;
      calculatePlanFare();
    });
  }

  if (bookReturnDate) {
    bookReturnDate.addEventListener('change', calculatePlanFare);
  }

  if (bookVehicleSelect) {
    bookVehicleSelect.addEventListener('change', calculatePlanFare);
  }

  const planButtons = document.querySelectorAll('.plan-cta-btn');
  planButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const planId = btn.getAttribute('data-plan-id') || 'weekly';
      openPlanModal(planId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closePlanModal);

  if (planModalOverlay) {
    planModalOverlay.addEventListener('click', (e) => {
      if (e.target === planModalOverlay) closePlanModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && planModalOverlay && planModalOverlay.classList.contains('active')) {
      closePlanModal();
    }
  });

  if (planBookingForm) {
    planBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!bookVehicleSelect || !bookVehicleSelect.value) {
        showToast('Please select your preferred vehicle from the fleet list', 'warning');
        if (bookVehicleSelect) bookVehicleSelect.focus();
        return;
      }

      const phone = bookCustomerPhone ? bookCustomerPhone.value.trim() : '';
      if (!phone || phone.length < 8) {
        showToast('Please provide a valid contact telephone number', 'warning');
        if (bookCustomerPhone) bookCustomerPhone.focus();
        return;
      }

      const plan = VELOCE_PRICING_DATA.plans[selectedPlanKey] || VELOCE_PRICING_DATA.plans.weekly;
      const selectedVehicleText = bookVehicleSelect.options[bookVehicleSelect.selectedIndex].text.split('(')[0].trim();
      const totalDisplay = fareTotalAmount ? fareTotalAmount.textContent : `₹${plan.price}`;

      showToast(`Reservation Confirmed for ${plan.name} with ${selectedVehicleText}! Total: ${totalDisplay}. Our concierge will contact you within 15 minutes.`, 'success');

      closePlanModal();
      planBookingForm.reset();
    });
  }

});


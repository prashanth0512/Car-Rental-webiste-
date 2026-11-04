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
    showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
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
    showToast(`Switched layout to ${newDir.toUpperCase()}`, 'info');
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

  const filterGroupHeaders = document.querySelectorAll('.filter-group-header');

  filterGroupHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const group = header.closest('.filter-group');
      if (!group) return;

      const isExpanded = header.getAttribute('aria-expanded') === 'true';
      header.setAttribute('aria-expanded', !isExpanded);
      group.classList.toggle('collapsed', isExpanded);

      const icon = header.querySelector('i');
      if (icon) {
        if (isExpanded) {
          icon.className = 'fa-solid fa-chevron-down';
        } else {
          icon.className = 'fa-solid fa-chevron-up';
        }
      }
    });
  });

  const fleetCarsGrid = document.getElementById('fleetCarsGrid');
  const fleetEmptyState = document.getElementById('fleetEmptyState');
  const fleetResultCount = document.getElementById('fleetResultCount');
  const fleetSearchInput = document.getElementById('fleetSearchInput');
  const fleetSearchClearBtn = document.getElementById('fleetSearchClearBtn');
  const fleetSortSelect = document.getElementById('fleetSortSelect');
  const clearAllFiltersBtn = document.getElementById('clearAllFiltersBtn');
  const emptyResetBtn = document.getElementById('emptyResetBtn');
  const priceRangeSlider = document.getElementById('priceRangeSlider');
  const priceMaxDisplay = document.getElementById('priceMaxDisplay');

  if (typeof VELOCE_FLEET_DATA === 'undefined' || !Array.isArray(VELOCE_FLEET_DATA)) {
    console.error('VELOCE_FLEET_DATA not loaded. Check cars-data.js import.');
    return;
  }

  function createCarCardHTML(car) {
    return `
      <article class="fleet-card" data-car-id="${car.id}">
        <div class="fleet-card-media">
          <a href="cars details.html?car=${encodeURIComponent(car.id)}" aria-label="View specifications for ${car.name}">
            <img src="${car.image}" alt="${car.name} Rental" class="fleet-card-img" loading="lazy">
          </a>
          <span class="fleet-card-tag">${car.tag}</span>
          <div class="fleet-card-rating" aria-label="Rating: ${car.rating} stars">
            <i class="fa-solid fa-star"></i>
            <span>${car.rating.toFixed(1)}</span>
          </div>
        </div>
        <div class="fleet-card-body">
          <div class="fleet-card-meta-top">
            <span class="fleet-card-category">${car.category}</span>
          </div>
          <h3 class="fleet-card-title">${car.name}</h3>
          <p class="fleet-card-desc">${car.shortDesc}</p>
          <div class="fleet-specs-grid">
            <div class="fleet-spec-item" title="Seating Capacity">
              <i class="fa-solid fa-user-group"></i>
              <span>${car.seats} Seats</span>
            </div>
            <div class="fleet-spec-item" title="Transmission">
              <i class="fa-solid fa-gear"></i>
              <span>${car.transmission}</span>
            </div>
            <div class="fleet-spec-item" title="Fuel Engine">
              <i class="fa-solid fa-gas-pump"></i>
              <span>${car.fuel}</span>
            </div>
          </div>
          <div class="fleet-card-footer">
            <div class="fleet-price-box">
              <span class="fleet-price-val">${car.priceDisplay}</span>
              <span class="fleet-price-unit">per day</span>
            </div>
            <div class="fleet-card-btns">
              <a href="cars details.html?car=${encodeURIComponent(car.id)}" class="btn btn-secondary fleet-details-btn">
                <span>Details</span>
              </a>
              <button type="button" class="btn btn-primary fleet-book-btn" data-car-id="${car.id}">
                <span>Book Now</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function getActiveFilters() {

    const checkedPurposes = Array.from(
      document.querySelectorAll('#filterSidebar input[name="purpose"]:checked, #mobileFilterContainer input[name="purpose"]:checked')
    ).map(el => el.value);

    const checkedCategories = Array.from(
      document.querySelectorAll('#filterSidebar input[name="category"]:checked, #mobileFilterContainer input[name="category"]:checked')
    ).map(el => el.value);

    const checkedSeats = Array.from(
      document.querySelectorAll('#filterSidebar input[name="seats"]:checked, #mobileFilterContainer input[name="seats"]:checked')
    ).map(el => parseInt(el.value, 10));

    const checkedTransmissions = Array.from(
      document.querySelectorAll('#filterSidebar input[name="transmission"]:checked, #mobileFilterContainer input[name="transmission"]:checked')
    ).map(el => el.value);

    const checkedFuels = Array.from(
      document.querySelectorAll('#filterSidebar input[name="fuel"]:checked, #mobileFilterContainer input[name="fuel"]:checked')
    ).map(el => el.value);

    const maxPrice = priceRangeSlider ? parseInt(priceRangeSlider.value, 10) : 12000;

    const searchQuery = fleetSearchInput ? fleetSearchInput.value.trim().toLowerCase() : '';

    const sortValue = fleetSortSelect ? fleetSortSelect.value : 'featured';

    return {
      purposes: [...new Set(checkedPurposes)],
      categories: [...new Set(checkedCategories)],
      seats: [...new Set(checkedSeats)],
      transmissions: [...new Set(checkedTransmissions)],
      fuels: [...new Set(checkedFuels)],
      maxPrice,
      searchQuery,
      sortValue
    };
  }

  function filterAndRenderFleet() {
    const filters = getActiveFilters();

    let result = VELOCE_FLEET_DATA.filter(car => {

      if (car.pricePerDay > filters.maxPrice) {
        return false;
      }

      if (filters.categories.length > 0) {
        const matchesCategory = filters.categories.some(cat => {
          return car.category.toLowerCase().includes(cat.toLowerCase()) ||
                 (car.categoryFilter && car.categoryFilter.toLowerCase() === cat.toLowerCase());
        });
        if (!matchesCategory) return false;
      }

      if (filters.purposes.length > 0) {
        const matchesPurpose = filters.purposes.some(p => {
          return car.purposes && car.purposes.includes(p);
        });
        if (!matchesPurpose) return false;
      }

      if (filters.seats.length > 0) {
        if (!filters.seats.includes(car.seats)) {
          return false;
        }
      }

      if (filters.transmissions.length > 0) {
        if (!filters.transmissions.includes(car.transmission)) {
          return false;
        }
      }

      if (filters.fuels.length > 0) {
        if (!filters.fuels.includes(car.fuel)) {
          return false;
        }
      }

      if (filters.searchQuery) {
        const query = filters.searchQuery;
        const matchesText =
          car.name.toLowerCase().includes(query) ||
          car.brand.toLowerCase().includes(query) ||
          car.category.toLowerCase().includes(query) ||
          car.tag.toLowerCase().includes(query) ||
          (car.engine && car.engine.toLowerCase().includes(query));
        if (!matchesText) return false;
      }

      return true;
    });

    if (filters.sortValue === 'price-asc') {
      result.sort((a, b) => a.pricePerDay - b.pricePerDay);
    } else if (filters.sortValue === 'price-desc') {
      result.sort((a, b) => b.pricePerDay - a.pricePerDay);
    } else if (filters.sortValue === 'rating-desc') {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (fleetCarsGrid && fleetEmptyState) {
      if (result.length === 0) {
        fleetCarsGrid.innerHTML = '';
        fleetCarsGrid.style.display = 'none';
        fleetEmptyState.style.display = 'block';
      } else {
        fleetEmptyState.style.display = 'none';
        fleetCarsGrid.style.display = 'grid';
        fleetCarsGrid.innerHTML = result.map(createCarCardHTML).join('');

        attachBookNowListeners();
      }
    }

    if (fleetResultCount) {
      fleetResultCount.textContent = `${result.length} of ${VELOCE_FLEET_DATA.length} Available Vehicles`;
    }
  }

  if (priceRangeSlider && priceMaxDisplay) {
    priceRangeSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      priceMaxDisplay.textContent = `₹${val.toLocaleString('en-IN')}`;
      filterAndRenderFleet();
    });
  }

  if (fleetSearchInput) {
    fleetSearchInput.addEventListener('input', () => {
      if (fleetSearchClearBtn) {
        fleetSearchClearBtn.style.display = fleetSearchInput.value ? 'block' : 'none';
      }
      filterAndRenderFleet();
    });
  }

  if (fleetSearchClearBtn && fleetSearchInput) {
    fleetSearchClearBtn.addEventListener('click', () => {
      fleetSearchInput.value = '';
      fleetSearchClearBtn.style.display = 'none';
      fleetSearchInput.focus();
      filterAndRenderFleet();
    });
  }

  if (fleetSortSelect) {
    fleetSortSelect.addEventListener('change', () => {
      filterAndRenderFleet();
    });
  }

  const sidebarCheckboxes = document.querySelectorAll('#filterSidebar input[type="checkbox"]');
  sidebarCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {

      syncCheckboxesToMobile(cb);
      filterAndRenderFleet();
    });
  });

  function resetAllFilters() {

    sidebarCheckboxes.forEach(cb => { cb.checked = false; });

    const mobileCheckboxes = document.querySelectorAll('#mobileFilterContainer input[type="checkbox"]');
    mobileCheckboxes.forEach(cb => { cb.checked = false; });

    if (priceRangeSlider) {
      priceRangeSlider.value = 12000;
    }
    if (priceMaxDisplay) {
      priceMaxDisplay.textContent = '₹12,000';
    }

    if (fleetSearchInput) {
      fleetSearchInput.value = '';
    }
    if (fleetSearchClearBtn) {
      fleetSearchClearBtn.style.display = 'none';
    }

    if (fleetSortSelect) {
      fleetSortSelect.value = 'featured';
    }

    filterAndRenderFleet();
    showToast('Filters reset to full 12-vehicle collection', 'info');
  }

  if (clearAllFiltersBtn) {
    clearAllFiltersBtn.addEventListener('click', resetAllFilters);
  }
  if (emptyResetBtn) {
    emptyResetBtn.addEventListener('click', resetAllFilters);
  }

  const openMobileFiltersBtn = document.getElementById('openMobileFiltersBtn');
  const mobileFilterDrawer = document.getElementById('mobileFilterDrawer');
  const mobileFilterOverlay = document.getElementById('mobileFilterOverlay');
  const mobileFilterCloseBtn = document.getElementById('mobileFilterCloseBtn');
  const mobileFilterContainer = document.getElementById('mobileFilterContainer');
  const mobileClearAllBtn = document.getElementById('mobileClearAllBtn');
  const mobileApplyFiltersBtn = document.getElementById('mobileApplyFiltersBtn');
  const filterSidebar = document.getElementById('filterSidebar');

  if (mobileFilterContainer && filterSidebar) {
    const filterGroups = document.querySelectorAll('#filterSidebar .filter-group');
    filterGroups.forEach(group => {
      const cloned = group.cloneNode(true);
      mobileFilterContainer.appendChild(cloned);
    });

    const mobileInputs = mobileFilterContainer.querySelectorAll('input[type="checkbox"]');
    mobileInputs.forEach(mcb => {
      mcb.addEventListener('change', () => {

        const name = mcb.getAttribute('name');
        const val = mcb.value;
        const desktopCb = document.querySelector(`#filterSidebar input[name="${name}"][value="${val}"]`);
        if (desktopCb) desktopCb.checked = mcb.checked;
        filterAndRenderFleet();
      });
    });

    const mobileHeaders = mobileFilterContainer.querySelectorAll('.filter-group-header');
    mobileHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const group = header.closest('.filter-group');
        if (!group) return;
        const isExpanded = header.getAttribute('aria-expanded') === 'true';
        header.setAttribute('aria-expanded', !isExpanded);
        group.classList.toggle('collapsed', isExpanded);
        const icon = header.querySelector('i');
        if (icon) {
          icon.className = isExpanded ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up';
        }
      });
    });
  }

  function syncCheckboxesToMobile(desktopCb) {
    if (!mobileFilterContainer) return;
    const name = desktopCb.getAttribute('name');
    const val = desktopCb.value;
    const mobileCb = mobileFilterContainer.querySelector(`input[name="${name}"][value="${val}"]`);
    if (mobileCb) mobileCb.checked = desktopCb.checked;
  }

  function openMobileFilterDrawer() {
    if (mobileFilterDrawer && mobileFilterOverlay) {
      mobileFilterDrawer.classList.add('active', 'open');
      mobileFilterOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileFilterDrawer() {
    if (mobileFilterDrawer && mobileFilterOverlay) {
      mobileFilterDrawer.classList.remove('active', 'open');
      mobileFilterOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (openMobileFiltersBtn) openMobileFiltersBtn.addEventListener('click', openMobileFilterDrawer);
  if (mobileFilterCloseBtn) mobileFilterCloseBtn.addEventListener('click', closeMobileFilterDrawer);
  if (mobileFilterOverlay) mobileFilterOverlay.addEventListener('click', closeMobileFilterDrawer);
  if (mobileClearAllBtn) {
    mobileClearAllBtn.addEventListener('click', () => {
      resetAllFilters();
      closeMobileFilterDrawer();
    });
  }
  if (mobileApplyFiltersBtn) {
    mobileApplyFiltersBtn.addEventListener('click', () => {
      filterAndRenderFleet();
      closeMobileFilterDrawer();
    });
  }

  const faqItems = document.querySelectorAll('.faq-item');

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

  const bookingModalOverlay = document.getElementById('bookingModalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const bookingForm = document.getElementById('bookingForm');
  const modalCarImg = document.getElementById('modalCarImg');
  const modalCarCategory = document.getElementById('modalCarCategory');
  const modalCarName = document.getElementById('modalCarName');
  const modalCarRate = document.getElementById('modalCarRate');
  const bookPickupDate = document.getElementById('bookPickupDate');
  const bookReturnDate = document.getElementById('bookReturnDate');
  const bookCustomerPhone = document.getElementById('bookCustomerPhone');
  const fareDuration = document.getElementById('fareDuration');
  const fareTotalAmount = document.getElementById('fareTotalAmount');

  let activeBookingCar = null;

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const returnDay = new Date(tomorrow);
  returnDay.setDate(returnDay.getDate() + 3);

  const formatDateForInput = (d) => d.toISOString().split('T')[0];

  if (bookPickupDate && bookReturnDate) {
    bookPickupDate.min = formatDateForInput(tomorrow);
    bookPickupDate.value = formatDateForInput(tomorrow);
    bookReturnDate.min = formatDateForInput(tomorrow);
    bookReturnDate.value = formatDateForInput(returnDay);
  }

  function calculateFare() {
    if (!activeBookingCar || !bookPickupDate || !bookReturnDate) return;

    const start = new Date(bookPickupDate.value);
    const end = new Date(bookReturnDate.value);

    let days = Math.round((end - start) / (1000 * 60 * 60 * 24));
    if (isNaN(days) || days < 1) {
      days = 1;
    }

    if (fareDuration) {
      fareDuration.textContent = `${days} Day${days > 1 ? 's' : ''}`;
    }

    const total = days * activeBookingCar.pricePerDay;
    if (fareTotalAmount) {
      fareTotalAmount.textContent = `₹${total.toLocaleString('en-IN')}`;
    }
  }

  if (bookPickupDate) {
    bookPickupDate.addEventListener('change', () => {
      if (new Date(bookReturnDate.value) <= new Date(bookPickupDate.value)) {
        const next = new Date(bookPickupDate.value);
        next.setDate(next.getDate() + 1);
        bookReturnDate.value = formatDateForInput(next);
      }
      bookReturnDate.min = bookPickupDate.value;
      calculateFare();
    });
  }

  if (bookReturnDate) {
    bookReturnDate.addEventListener('change', calculateFare);
  }

  function openBookingModal(carId) {
    const car = VELOCE_FLEET_DATA.find(c => c.id === carId);
    if (!car || !bookingModalOverlay) return;

    activeBookingCar = car;

    if (modalCarImg) {
      modalCarImg.src = car.image;
      modalCarImg.alt = car.name;
    }
    if (modalCarCategory) modalCarCategory.textContent = car.category;
    if (modalCarName) modalCarName.textContent = car.name;
    if (modalCarRate) modalCarRate.textContent = car.priceDisplay;

    calculateFare();

    bookingModalOverlay.classList.add('active');
    bookingModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeBookingModal() {
    if (!bookingModalOverlay) return;
    bookingModalOverlay.classList.remove('active');
    bookingModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    activeBookingCar = null;
  }

  function attachBookNowListeners() {
    const bookBtns = document.querySelectorAll('.fleet-book-btn');
    bookBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const carId = btn.getAttribute('data-car-id');
        openBookingModal(carId);
      });
    });
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeBookingModal);

  if (bookingModalOverlay) {
    bookingModalOverlay.addEventListener('click', (e) => {
      if (e.target === bookingModalOverlay) {
        closeBookingModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bookingModalOverlay && bookingModalOverlay.classList.contains('active')) {
      closeBookingModal();
    }
  });

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!activeBookingCar) return;

      const phone = bookCustomerPhone ? bookCustomerPhone.value.trim() : '';
      if (!phone || phone.length < 8) {
        showToast('Please provide a valid contact telephone number', 'warning');
        if (bookCustomerPhone) bookCustomerPhone.focus();
        return;
      }

      const totalDisplay = fareTotalAmount ? fareTotalAmount.textContent : activeBookingCar.priceDisplay;
      showToast(`Reservation Confirmed for ${activeBookingCar.name}! Total: ${totalDisplay}. Our concierge will contact you shortly.`, 'success');

      closeBookingModal();
      bookingForm.reset();

      if (bookPickupDate && bookReturnDate) {
        bookPickupDate.value = formatDateForInput(tomorrow);
        bookReturnDate.value = formatDateForInput(returnDay);
      }
    });
  }

  filterAndRenderFleet();

});


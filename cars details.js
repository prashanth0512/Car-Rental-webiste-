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

  function renderMiniCarCard(car) {
    return `
      <article class="fleet-card" data-car-id="${car.id}">
        <div class="fleet-card-media">
          <a href="cars details.html?car=${encodeURIComponent(car.id)}" aria-label="View specifications for ${car.name}">
            <img src="${car.image}" alt="${car.name} Rental" class="fleet-card-img" loading="lazy">
          </a>
          <span class="fleet-card-tag">${car.tag}</span>
          <div class="fleet-card-rating">
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

  const urlParams = new URLSearchParams(window.location.search);
  const carParam = urlParams.get('car');
  const typeParam = urlParams.get('type');

  const vehicleDetailView = document.getElementById('vehicleDetailView');
  const principleDetailView = document.getElementById('principleDetailView');
  const detailFallbackView = document.getElementById('detailFallbackView');
  const breadcrumbActiveText = document.getElementById('breadcrumbActiveText');
  const detailPageTitle = document.getElementById('detailPageTitle');
  const detailMetaDesc = document.getElementById('detailMetaDesc');

  let activeDetailCar = null;

  if (carParam && typeof VELOCE_FLEET_DATA !== 'undefined') {
    const car = VELOCE_FLEET_DATA.find(c => c.id.toLowerCase() === carParam.trim().toLowerCase());

    if (car) {
      activeDetailCar = car;
      renderVehicleDetail(car);
    } else {
      renderFallback();
    }
  }

  else if (typeParam && typeof VELOCE_PRINCIPLES_DATA !== 'undefined') {
    const principle = VELOCE_PRINCIPLES_DATA[typeParam.trim().toLowerCase()];

    if (principle) {
      renderPrincipleDetail(principle);
    } else {
      renderFallback();
    }
  }

  else {
    renderFallback();
  }

  function renderVehicleDetail(car) {
    if (vehicleDetailView) vehicleDetailView.style.display = 'block';
    const breadcrumbBar = document.getElementById('detailBreadcrumbBar') || document.querySelector('.detail-breadcrumb-bar');
    if (breadcrumbBar) breadcrumbBar.style.display = '';
    document.body.classList.remove('service-detail-view');
    if (principleDetailView) principleDetailView.style.display = 'none';
    if (detailFallbackView) detailFallbackView.style.display = 'none';

    if (detailPageTitle) {
      detailPageTitle.textContent = `${car.name} Self-Drive Rental | VELOCE LUXURY FLEET`;
    }
    if (detailMetaDesc) {
      detailMetaDesc.content = `Rent the ${car.name} (${car.category}) with VELOCE. ${car.shortDesc} Daily rate ${car.priceDisplay}.`;
    }
    if (breadcrumbActiveText) {
      breadcrumbActiveText.textContent = car.name;
    }

    const vCarCategory = document.getElementById('vCarCategory');
    const vCarTag = document.getElementById('vCarTag');
    const vCarRating = document.getElementById('vCarRating');
    const vCarReviews = document.getElementById('vCarReviews');
    const vCarName = document.getElementById('vCarName');
    const vCarBrand = document.getElementById('vCarBrand');
    const vCarPrice = document.getElementById('vCarPrice');
    const vStickyRate = document.getElementById('vStickyRate');
    const vCarMainImg = document.getElementById('vCarMainImg');

    if (vCarCategory) vCarCategory.textContent = car.category;
    if (vCarTag) vCarTag.textContent = car.tag;
    if (vCarRating) vCarRating.textContent = car.rating.toFixed(1);
    if (vCarReviews) vCarReviews.textContent = `(${car.reviewsCount} reviews)`;
    if (vCarName) vCarName.textContent = car.name;
    if (vCarBrand) vCarBrand.textContent = `Manufactured by ${car.brand} • Premium Edition`;
    if (vCarPrice) vCarPrice.textContent = car.priceDisplay;
    if (vStickyRate) vStickyRate.textContent = car.priceDisplay;
    if (vCarMainImg) {
      vCarMainImg.src = car.image;
      vCarMainImg.alt = `${car.name} High-Resolution Photograph`;
    }

    const vSpecSeats = document.getElementById('vSpecSeats');
    const vSpecTransmission = document.getElementById('vSpecTransmission');
    const vSpecFuel = document.getElementById('vSpecFuel');
    const vSpecMileage = document.getElementById('vSpecMileage');
    const vSpecEngine = document.getElementById('vSpecEngine');
    const vSpecPower = document.getElementById('vSpecPower');
    const vSpecLuggage = document.getElementById('vSpecLuggage');
    const vSpecTopSpeed = document.getElementById('vSpecTopSpeed');

    if (vSpecSeats) vSpecSeats.textContent = `${car.seats} Passengers`;
    if (vSpecTransmission) vSpecTransmission.textContent = car.transmission;
    if (vSpecFuel) vSpecFuel.textContent = car.fuel;
    if (vSpecMileage) vSpecMileage.textContent = car.mileage || '19.2 kmpl';
    if (vSpecEngine) vSpecEngine.textContent = car.engine || 'Turbocharged Engine';
    if (vSpecPower) vSpecPower.textContent = car.power || '118 bhp';
    if (vSpecLuggage) vSpecLuggage.textContent = car.luggage || '2 Large Bags';
    if (vSpecTopSpeed) vSpecTopSpeed.textContent = car.topSpeed || '180 km/h';

    const vCarOverview = document.getElementById('vCarOverview');
    if (vCarOverview) {
      vCarOverview.textContent = car.detailedOverview || car.shortDesc;
    }

    const vFeaturesList = document.getElementById('vFeaturesList');
    if (vFeaturesList && Array.isArray(car.features)) {
      vFeaturesList.innerHTML = car.features.map(feat => `
        <div class="vfeature-pill">
          <i class="fa-solid fa-check"></i>
          <span>${feat}</span>
        </div>
      `).join('');
    }

    initStickyBookingStudio(car);

    renderRelatedVehicles(car);
  }

  function initStickyBookingStudio(car) {
    const stickyPickupDate = document.getElementById('stickyPickupDate');
    const stickyReturnDate = document.getElementById('stickyReturnDate');
    const stickyDuration = document.getElementById('stickyDuration');
    const stickyTotal = document.getElementById('stickyTotal');
    const vStickyBookingForm = document.getElementById('vStickyBookingForm');
    const stickyPhone = document.getElementById('stickyPhone');

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const returnDay = new Date(tomorrow);
    returnDay.setDate(returnDay.getDate() + 3);

    const formatDate = (d) => d.toISOString().split('T')[0];

    if (stickyPickupDate && stickyReturnDate) {
      stickyPickupDate.min = formatDate(tomorrow);
      stickyPickupDate.value = formatDate(tomorrow);
      stickyReturnDate.min = formatDate(tomorrow);
      stickyReturnDate.value = formatDate(returnDay);
    }

    function updateStickyFare() {
      if (!stickyPickupDate || !stickyReturnDate) return;
      const start = new Date(stickyPickupDate.value);
      const end = new Date(stickyReturnDate.value);

      let days = Math.round((end - start) / (1000 * 60 * 60 * 24));
      if (isNaN(days) || days < 1) days = 1;

      if (stickyDuration) {
        stickyDuration.textContent = `${days} Day${days > 1 ? 's' : ''}`;
      }

      const total = days * car.pricePerDay;
      if (stickyTotal) {
        stickyTotal.textContent = `₹${total.toLocaleString('en-IN')}`;
      }
    }

    if (stickyPickupDate) {
      stickyPickupDate.addEventListener('change', () => {
        if (new Date(stickyReturnDate.value) <= new Date(stickyPickupDate.value)) {
          const next = new Date(stickyPickupDate.value);
          next.setDate(next.getDate() + 1);
          stickyReturnDate.value = formatDate(next);
        }
        stickyReturnDate.min = stickyPickupDate.value;
        updateStickyFare();
      });
    }

    if (stickyReturnDate) {
      stickyReturnDate.addEventListener('change', updateStickyFare);
    }

    updateStickyFare();

    if (vStickyBookingForm) {
      vStickyBookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const phone = stickyPhone ? stickyPhone.value.trim() : '';
        if (!phone || phone.length < 8) {
          showToast('Please enter a valid mobile number to confirm your booking', 'warning');
          if (stickyPhone) stickyPhone.focus();
          return;
        }

        const totalFareText = stickyTotal ? stickyTotal.textContent : car.priceDisplay;
        showToast(`Reservation Confirmed for ${car.name}! Estimated Total: ${totalFareText}. Our concierge will contact you within 15 minutes.`, 'success');
        vStickyBookingForm.reset();
        if (stickyPickupDate && stickyReturnDate) {
          stickyPickupDate.value = formatDate(tomorrow);
          stickyReturnDate.value = formatDate(returnDay);
          updateStickyFare();
        }
      });
    }
  }

  function renderRelatedVehicles(currentCar) {
    const vRelatedGrid = document.getElementById('vRelatedGrid');
    if (!vRelatedGrid || typeof VELOCE_FLEET_DATA === 'undefined') return;

    let related = VELOCE_FLEET_DATA.filter(c => c.id !== currentCar.id);

    const sameCategory = related.filter(c => c.category === currentCar.category);
    if (sameCategory.length >= 3) {
      related = sameCategory.slice(0, 3);
    } else {
      related = related.slice(0, 3);
    }

    vRelatedGrid.innerHTML = related.map(renderMiniCarCard).join('');
    attachBookNowListeners();
  }

  function renderPrincipleDetail(principle) {
    if (vehicleDetailView) vehicleDetailView.style.display = 'none';
    if (principleDetailView) principleDetailView.style.display = 'block';
    const breadcrumbBar = document.getElementById('detailBreadcrumbBar') || document.querySelector('.detail-breadcrumb-bar');
    if (breadcrumbBar) breadcrumbBar.style.display = 'none';
    document.body.classList.add('service-detail-view');
    if (detailFallbackView) detailFallbackView.style.display = 'none';

    if (detailPageTitle) {
      detailPageTitle.textContent = `${principle.title} — Service Philosophy | VELOCE LUXURY FLEET`;
    }
    if (detailMetaDesc) {
      detailMetaDesc.content = `${principle.title}: ${principle.subtitle} Discover VELOCE's self-drive service philosophy.`;
    }
    if (breadcrumbActiveText) {
      breadcrumbActiveText.textContent = principle.title;
    }

    const pDetailHeroImg = document.getElementById('pDetailHeroImg');
    const pDetailBadge = document.getElementById('pDetailBadge');
    const pDetailTitle = document.getElementById('pDetailTitle');
    const pDetailSubtitle = document.getElementById('pDetailSubtitle');
    const pDetailLead = document.getElementById('pDetailLead');

    if (pDetailHeroImg) {
      pDetailHeroImg.src = principle.heroImage;
      pDetailHeroImg.alt = principle.title;
    }
    if (pDetailBadge) pDetailBadge.textContent = principle.badge;
    if (pDetailTitle) pDetailTitle.textContent = principle.title;
    if (pDetailSubtitle) pDetailSubtitle.textContent = principle.subtitle;
    if (pDetailLead) pDetailLead.textContent = principle.lead;

    const pDetailOverviewHeading = document.getElementById('pDetailOverviewHeading');
    const pDetailOverviewText = document.getElementById('pDetailOverviewText');
    if (pDetailOverviewHeading) pDetailOverviewHeading.textContent = principle.overviewHeading;
    if (pDetailOverviewText) pDetailOverviewText.textContent = principle.overviewText;

    const pDetailBenefitsGrid = document.getElementById('pDetailBenefitsGrid');
    if (pDetailBenefitsGrid && Array.isArray(principle.benefits)) {
      pDetailBenefitsGrid.innerHTML = principle.benefits.map((b, idx) => {
        const icons = [
          'fa-solid fa-compass',
          'fa-solid fa-road',
          'fa-solid fa-map-location-dot',
          'fa-solid fa-key'
        ];
        return `
          <div class="ppillar-card">
            <div class="ppillar-icon-box">
              <i class="${icons[idx % icons.length]}"></i>
            </div>
            <h3 class="ppillar-title">${b.title}</h3>
            <p class="ppillar-desc">${b.desc}</p>
          </div>
        `;
      }).join('');
    }

    const pDetailScenariosGrid = document.getElementById('pDetailScenariosGrid');
    if (pDetailScenariosGrid && Array.isArray(principle.scenarios)) {
      pDetailScenariosGrid.innerHTML = principle.scenarios.map(sc => `
        <div class="pscenario-card">
          <span class="pscenario-tag">${sc.tag}</span>
          <h3 class="pscenario-title">${sc.title}</h3>
          <p class="pscenario-desc">${sc.desc}</p>
        </div>
      `).join('');
    }

    const pDetailFleetGrid = document.getElementById('pDetailFleetGrid');
    if (pDetailFleetGrid && Array.isArray(principle.recommendedCarIds) && typeof VELOCE_FLEET_DATA !== 'undefined') {
      const recCars = principle.recommendedCarIds
        .map(id => VELOCE_FLEET_DATA.find(c => c.id === id))
        .filter(Boolean);

      pDetailFleetGrid.innerHTML = recCars.map(renderMiniCarCard).join('');
      attachBookNowListeners();
    }

    const pPrivilegesSubLabel = document.getElementById('pPrivilegesSubLabel');
    const pPrivilegesHeading = document.getElementById('pPrivilegesHeading');
    const pPrivilegesSubtitle = document.getElementById('pPrivilegesSubtitle');
    const pPrivilegesGrid = document.getElementById('pPrivilegesGrid');
    const pPrivilegesBannerBadge = document.getElementById('pPrivilegesBannerBadge');
    const pPrivilegesBannerText = document.getElementById('pPrivilegesBannerText');
    const pPrivilegesBannerBtnText = document.getElementById('pPrivilegesBannerBtnText');

    if (principle.privileges) {
      if (pPrivilegesSubLabel) pPrivilegesSubLabel.textContent = principle.privileges.subLabel;
      if (pPrivilegesHeading) pPrivilegesHeading.textContent = principle.privileges.heading;
      if (pPrivilegesSubtitle) pPrivilegesSubtitle.textContent = principle.privileges.subtitle;
      if (pPrivilegesBannerBadge) pPrivilegesBannerBadge.textContent = principle.privileges.bannerBadge;
      if (pPrivilegesBannerText) pPrivilegesBannerText.textContent = principle.privileges.bannerText;
      if (pPrivilegesBannerBtnText) pPrivilegesBannerBtnText.textContent = principle.privileges.bannerActionText;

      if (pPrivilegesGrid && Array.isArray(principle.privileges.items)) {
        pPrivilegesGrid.innerHTML = principle.privileges.items.map(item => `
          <div class="pprivilege-card">
            <div class="pprivilege-top-row">
              <div class="pprivilege-icon-wrap">
                <i class="${item.icon}"></i>
              </div>
              <span class="pprivilege-badge">${item.tag}</span>
            </div>
            <h3 class="pprivilege-title">${item.title}</h3>
            <p class="pprivilege-desc">${item.desc}</p>
            <div class="pprivilege-stat-badge">
              <i class="fa-solid fa-sparkles"></i>
              <span>${item.stat}</span>
            </div>
          </div>
        `).join('');
      }
    }

    const pDetailCtaTitle = document.getElementById('pDetailCtaTitle');
    if (pDetailCtaTitle) {
      pDetailCtaTitle.textContent = `Experience True ${principle.title} on Every Journey.`;
    }
  }

  function renderFallback() {
    if (vehicleDetailView) vehicleDetailView.style.display = 'none';
    if (principleDetailView) principleDetailView.style.display = 'none';
    if (detailFallbackView) detailFallbackView.style.display = 'block';
    const breadcrumbBar = document.getElementById('detailBreadcrumbBar') || document.querySelector('.detail-breadcrumb-bar');
    if (breadcrumbBar) breadcrumbBar.style.display = '';
    document.body.classList.remove('service-detail-view');

    if (breadcrumbActiveText) {
      breadcrumbActiveText.textContent = 'Explore Fleet & Philosophies';
    }
    if (detailPageTitle) {
      detailPageTitle.textContent = 'Explore Vehicle & Philosophy Details | VELOCE LUXURY FLEET';
    }
  }

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

  let activeModalCar = null;

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

  function calculateModalFare() {
    if (!activeModalCar || !bookPickupDate || !bookReturnDate) return;

    const start = new Date(bookPickupDate.value);
    const end = new Date(bookReturnDate.value);

    let days = Math.round((end - start) / (1000 * 60 * 60 * 24));
    if (isNaN(days) || days < 1) days = 1;

    if (fareDuration) {
      fareDuration.textContent = `${days} Day${days > 1 ? 's' : ''}`;
    }

    const total = days * activeModalCar.pricePerDay;
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
      calculateModalFare();
    });
  }

  if (bookReturnDate) {
    bookReturnDate.addEventListener('change', calculateModalFare);
  }

  function openBookingModal(carId) {
    const car = VELOCE_FLEET_DATA.find(c => c.id === carId);
    if (!car || !bookingModalOverlay) return;

    activeModalCar = car;

    if (modalCarImg) {
      modalCarImg.src = car.image;
      modalCarImg.alt = car.name;
    }
    if (modalCarCategory) modalCarCategory.textContent = car.category;
    if (modalCarName) modalCarName.textContent = car.name;
    if (modalCarRate) modalCarRate.textContent = car.priceDisplay;

    calculateModalFare();

    bookingModalOverlay.classList.add('active');
    bookingModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeBookingModal() {
    if (!bookingModalOverlay) return;
    bookingModalOverlay.classList.remove('active');
    bookingModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    activeModalCar = null;
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
      if (e.target === bookingModalOverlay) closeBookingModal();
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

      if (!activeModalCar) return;

      const phone = bookCustomerPhone ? bookCustomerPhone.value.trim() : '';
      if (!phone || phone.length < 8) {
        showToast('Please provide a valid contact telephone number', 'warning');
        if (bookCustomerPhone) bookCustomerPhone.focus();
        return;
      }

      const totalDisplay = fareTotalAmount ? fareTotalAmount.textContent : activeModalCar.priceDisplay;
      showToast(`Reservation Confirmed for ${activeModalCar.name}! Total: ${totalDisplay}. Our concierge will contact you shortly.`, 'success');

      closeBookingModal();
      bookingForm.reset();

      if (bookPickupDate && bookReturnDate) {
        bookPickupDate.value = formatDateForInput(tomorrow);
        bookReturnDate.value = formatDateForInput(returnDay);
      }
    });
  }

  attachBookNowListeners();

});


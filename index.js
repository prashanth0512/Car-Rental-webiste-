document.addEventListener('DOMContentLoaded', () => {

  const FLEET_DATA = {
    'car-1': {
      id: 'car-1',
      title: 'Volkswagen Golf R',
      subtitle: 'Performance Edition 2026',
      category: 'Economy Class',
      categoryKey: 'economy',
      price: 119,
      rating: '4.8',
      trips: '94 verified trips',
      image: 'assets/car-economy.jpg',
      seats: '5 Passengers',
      trans: '7-Speed DSG Automatic',
      powertrain: '2.0L Turbo 4-Cyl (315 HP)',
      speed: '168 mph / 270 km/h',
      desc: 'The benchmark of hot hatches. Equipped with 4MOTION torque-vectoring all-wheel-drive, adaptive DCC dampers, and Nürburgring drive mode. Supreme agility for urban navigation and country getaways alike.',
      inclusions: [
        'Unlimited Mileage Included',
        'Standard Full Protection & Theft Cover',
        'Digital Navigation & Apple CarPlay / Android Auto',
        'Complimentary 24/7 Roadside Assistance'
      ]
    },
    'car-2': {
      id: 'car-2',
      title: 'BMW M5 Competition',
      subtitle: 'Executive Powerhouse',
      category: 'Sedan Class',
      categoryKey: 'sedan',
      price: 249,
      rating: '4.9',
      trips: '142 verified trips',
      image: 'assets/car-sedan.jpg',
      seats: '5 Passengers',
      trans: '8-Speed M Steptronic',
      powertrain: '4.4L TwinPower V8 (617 HP)',
      speed: '190 mph / 305 km/h',
      desc: 'An unrelenting executive powerhouse that effortlessly transitions from serene highway cruiser to blistering track weapon. Features M xDrive with selectable rear-wheel drive, Bowers & Wilkins Diamond surround sound, and ventilated Merino leather seating.',
      inclusions: [
        'Unlimited Mileage Included',
        'Zero-Deductible Comprehensive Coverage',
        'VIP Airport Meet & Greet Included',
        'Free 24-Hour Cancellation Guarantee'
      ]
    },
    'car-3': {
      id: 'car-3',
      title: 'Range Rover Sport',
      subtitle: 'Autobiography Dynamic',
      category: 'SUV Class',
      categoryKey: 'suv',
      price: 329,
      rating: '5.0',
      trips: '188 verified trips',
      image: 'assets/car-suv.jpg',
      seats: '7 Luxury Passengers',
      trans: '8-Speed Electronic Automatic',
      powertrain: '3.0L Turbocharged Hybrid (395 HP)',
      speed: '150 mph / 242 km/h',
      desc: 'Peerless all-terrain capability paired with the whisper-quiet sanctuary of an executive private lounge. Outfitted with dynamic air suspension with adaptive off-road modes, panoramic glass canopy, and refrigerated center console.',
      inclusions: [
        'All-Terrain Snow / Desert Mode Pack',
        'Comprehensive Zero-Excess Insurance',
        'Integrated Dual Child Seat Capability',
        '24/7 Dedicated Concierge Helpline'
      ]
    },
    'car-4': {
      id: 'car-4',
      title: 'Mercedes-Maybach S-Class',
      subtitle: 'S 580 4MATIC Luxury',
      category: 'Luxury Class',
      categoryKey: 'luxury',
      price: 489,
      rating: '5.0',
      trips: '210 verified trips',
      image: 'assets/car-luxury.jpg',
      seats: '4 First-Class Loungers',
      trans: '9G-TRONIC Automatic',
      powertrain: '4.0L Bi-Turbo V8 + EQ Boost (496 HP)',
      speed: '155 mph (Gov. Limited)',
      desc: 'The pinnacle of automotive prestige and aristocratic comfort. Rear executive lounge with calf rests, hot stone massage programs, silver-plated champagne flutes, active road noise cancellation, and Burmester 4D High-End 3D surround sound.',
      inclusions: [
        'Chauffeur or Self-Drive Handover',
        'Chilled Mineral Water & Luxury Amenity Kit',
        'Zero-Excess Comprehensive Collision Protection',
        'Doorstep White-Glove Handover Anywhere in City'
      ]
    },
    'car-5': {
      id: 'car-5',
      title: 'Porsche 911 Carrera 4S',
      subtitle: 'Twin-Turbocharged Coupe',
      category: 'Sports Class',
      categoryKey: 'sports',
      price: 420,
      rating: '4.9',
      trips: '315 verified trips',
      image: 'assets/car-sports.jpg',
      seats: '2+2 Sport Cockpit',
      trans: '8-Speed Porsche Doppelkupplung (PDK)',
      powertrain: '3.0L Twin-Turbo Boxer 6 (443 HP)',
      speed: '191 mph / 306 km/h',
      desc: 'The timeless sports car icon refined to absolute technical perfection. Precision steering, Sport Chrono Package with launch control, Porsche Active Suspension Management (PASM), and an unforgettable acoustic exhaust note.',
      inclusions: [
        'Sport Chrono & Launch Control Included',
        'Unlimited Road Mileage Package',
        'Complimentary Delivery to Private Airfield',
        '24/7 Porsche Factory Technical Support'
      ]
    },
    'car-6': {
      id: 'car-6',
      title: 'Porsche Taycan Turbo',
      subtitle: 'Zero-Emission Supersonic',
      category: 'Electric Class',
      categoryKey: 'electric',
      price: 379,
      rating: '4.9',
      trips: '176 verified trips',
      image: 'assets/car-electric.jpg',
      seats: '4 Passengers',
      trans: '2-Speed Transmission (Rear Axle)',
      powertrain: 'Permanent Magnet Synchronous Motors (670 HP)',
      speed: '161 mph / 260 km/h (0-60 in 2.6s)',
      desc: 'Electric grand touring redefined. Breathtaking acceleration, 800-volt architecture for rapid 5% to 80% charging in 22 minutes, curved OLED digital instrumentation, and futuristic Porsche Electric Sport Sound.',
      inclusions: [
        'Complimentary High-Speed Supercharging Access',
        'Portable Universal Fast-Charging Cable',
        'Unlimited Electric Mileage Package',
        'Full Zero-Excess Theft & Damage Insurance'
      ]
    }
  };

  let currentSelectedCar = FLEET_DATA['car-5'];
  let activeTestimonialIndex = 0;

  const themeToggle = document.getElementById('themeToggle');
  const mobileThemeToggle = document.getElementById('mobileThemeToggle');
  const mobileThemeText = document.getElementById('mobileThemeText');
  const htmlRoot = document.documentElement;

  const savedTheme = localStorage.getItem('veloce_theme') || 'dark';

  applyTheme(savedTheme, false);

  function applyTheme(theme, showToastMsg = true) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('veloce_theme', theme);

    if (mobileThemeText) {
      mobileThemeText.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }


  }

  function toggleTheme() {
    const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme, false);
  }

  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);

  const dirToggle = document.getElementById('dirToggle');
  const dirText = document.getElementById('dirText');
  const mobileDirToggle = document.getElementById('mobileDirToggle');
  const mobileDirText = document.getElementById('mobileDirText');

  const savedDir = localStorage.getItem('veloce_dir') || 'ltr';
  applyDirection(savedDir, false);

  function applyDirection(dir, showToastMsg = true) {
    htmlRoot.setAttribute('dir', dir);
    localStorage.setItem('veloce_dir', dir);

    const isRtl = dir === 'rtl';
    if (dirText) dirText.textContent = isRtl ? 'LTR' : 'RTL';
    if (mobileDirText) mobileDirText.textContent = isRtl ? 'Switch to LTR' : 'Switch to RTL';


  }

  function toggleDirection() {
    const currentDir = htmlRoot.getAttribute('dir') || 'ltr';
    const nextDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    applyDirection(nextDir, false);
  }

  if (dirToggle) dirToggle.addEventListener('click', toggleDirection);
  if (mobileDirToggle) mobileDirToggle.addEventListener('click', toggleDirection);

  const siteHeader = document.getElementById('siteHeader');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], footer[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (siteHeader) {
      if (scrollY > 30) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    const homeNavBtn = document.getElementById('homeDropdownBtn');
    if (homeNavBtn) {
      homeNavBtn.classList.add('active');
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
    mobileHomeDropdown.addEventListener('click', () => {
      mobileHomeSubmenu.classList.toggle('show');
    });
  }

  const pickupDateInput = document.getElementById('pickupDate');
  const returnDateInput = document.getElementById('returnDate');
  const heroSearchForm = document.getElementById('heroSearchForm');
  const pickupLocation = document.getElementById('pickupLocation');

  const today = new Date();
  const defaultPickup = new Date(today);
  defaultPickup.setDate(today.getDate() + 1);

  const defaultReturn = new Date(today);
  defaultReturn.setDate(today.getDate() + 4);

  const formatDateVal = d => d.toISOString().split('T')[0];

  if (pickupDateInput) {
    pickupDateInput.min = formatDateVal(today);
    pickupDateInput.value = formatDateVal(defaultPickup);
  }

  if (returnDateInput) {
    returnDateInput.min = formatDateVal(defaultPickup);
    returnDateInput.value = formatDateVal(defaultReturn);
  }

  if (pickupDateInput && returnDateInput) {
    pickupDateInput.addEventListener('change', () => {
      if (pickupDateInput.value) {
        returnDateInput.min = pickupDateInput.value;
        if (returnDateInput.value < pickupDateInput.value) {
          returnDateInput.value = pickupDateInput.value;
        }
      }
    });
  }

  if (heroSearchForm) {
    heroSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const locText = pickupLocation ? pickupLocation.options[pickupLocation.selectedIndex].text : 'Selected Location';
      const pDate = pickupDateInput ? pickupDateInput.value : '';
      const rDate = returnDateInput ? returnDateInput.value : '';

      showToast(`Searching premium vehicles at ${locText}...`, 'search', 'fa-solid fa-magnifying-glass');

      const fleetSection = document.getElementById('fleet');
      if (fleetSection) {
        fleetSection.scrollIntoView({ behavior: 'smooth' });
      }

      const resPickupDate = document.getElementById('resPickupDate');
      const resReturnDate = document.getElementById('resReturnDate');
      if (resPickupDate && pDate) resPickupDate.value = pDate;
      if (resReturnDate && rDate) resReturnDate.value = rDate;
    });
  }

  const filterTabs = document.querySelectorAll('.filter-tab');
  const carCards = document.querySelectorAll('.car-card');
  const servicePills = document.querySelectorAll('.service-pill');

  servicePills.forEach(pill => {
    pill.addEventListener('click', () => {
      servicePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const action = pill.getAttribute('data-action');
      const actionName = pill.textContent.trim();

      if (action === 'rent') {
        showToast('Browsing Self-Drive Rental Fleet', 'info', 'fa-solid fa-car');
        const fleetSection = document.getElementById('fleet');
        if (fleetSection) fleetSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        showToast(`${actionName} service consultation inquiry opened`, 'info', 'fa-solid fa-handshake');
      }
    });
  });

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const selectedCategory = tab.getAttribute('data-category');

      carCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease';
            card.style.opacity = '1';
          }, 20);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  const detailsModal = document.getElementById('detailsModal');
  const bookingModal = document.getElementById('bookingModal');

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');

    const activeModals = document.querySelectorAll('.modal-overlay.active');
    if (activeModals.length === 0) {
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });

    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeModal(modal));
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(modal => closeModal(modal));
      closeMobileMenu();
    }
  });

  const modalCarImg = document.getElementById('modalCarImg');
  const modalCarCategory = document.getElementById('modalCarCategory');
  const modalCarTitle = document.getElementById('modalCarTitle');
  const modalRatingText = document.getElementById('modalRatingText');
  const modalCarPrice = document.getElementById('modalCarPrice');
  const modalCarDesc = document.getElementById('modalCarDesc');
  const modalSpecSeats = document.getElementById('modalSpecSeats');
  const modalSpecTrans = document.getElementById('modalSpecTrans');
  const modalSpecPower = document.getElementById('modalSpecPower');
  const modalSpecSpeed = document.getElementById('modalSpecSpeed');
  const modalBookNowBtn = document.getElementById('modalBookNowBtn');

  function populateDetailsModal(car) {
    currentSelectedCar = car;
    if (modalCarImg) modalCarImg.src = car.image;
    if (modalCarCategory) modalCarCategory.textContent = car.category;
    if (modalCarTitle) modalCarTitle.textContent = car.title;
    if (modalRatingText) modalRatingText.textContent = `${car.rating} (${car.trips})`;
    if (modalCarPrice) modalCarPrice.textContent = `$${car.price}`;
    if (modalCarDesc) modalCarDesc.textContent = car.desc;
    if (modalSpecSeats) modalSpecSeats.textContent = car.seats;
    if (modalSpecTrans) modalSpecTrans.textContent = car.trans;
    if (modalSpecPower) modalSpecPower.textContent = car.powertrain;
    if (modalSpecSpeed) modalSpecSpeed.textContent = car.speed;
  }

  document.querySelectorAll('.btn-card-details, .quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const carId = btn.getAttribute('data-car');
      const car = FLEET_DATA[carId];
      if (car) {
        populateDetailsModal(car);
        openModal(detailsModal);
      }
    });
  });

  if (modalBookNowBtn) {
    modalBookNowBtn.addEventListener('click', () => {
      closeModal(detailsModal);
      populateBookingModal(currentSelectedCar);
      openModal(bookingModal);
    });
  }

  const bookingThumb = document.getElementById('bookingThumb');
  const bookingCarTitle = document.getElementById('bookingCarTitle');
  const bookingCarRate = document.getElementById('bookingCarRate');
  const resPickupDate = document.getElementById('resPickupDate');
  const resReturnDate = document.getElementById('resReturnDate');
  const calcDays = document.getElementById('calcDays');
  const calcDailyRate = document.getElementById('calcDailyRate');
  const calcTotal = document.getElementById('calcTotal');
  const reservationForm = document.getElementById('reservationForm');
  const ctaBookNowBtn = document.getElementById('ctaBookNowBtn');

  function populateBookingModal(car) {
    currentSelectedCar = car;
    if (bookingThumb) bookingThumb.src = car.image;
    if (bookingCarTitle) bookingCarTitle.textContent = car.title;
    if (bookingCarRate) bookingCarRate.textContent = `$${car.price} / day`;
    if (calcDailyRate) calcDailyRate.textContent = `$${car.price} / day`;

    if (resPickupDate && !resPickupDate.value) {
      resPickupDate.value = formatDateVal(defaultPickup);
    }
    if (resReturnDate && !resReturnDate.value) {
      resReturnDate.value = formatDateVal(defaultReturn);
    }

    recalcTotal();
  }

  function recalcTotal() {
    if (!resPickupDate || !resReturnDate || !currentSelectedCar) return;
    const start = new Date(resPickupDate.value);
    const end = new Date(resReturnDate.value);

    let days = Math.round((end - start) / (1000 * 60 * 60 * 24));
    if (isNaN(days) || days < 1) days = 1;

    if (calcDays) calcDays.textContent = `${days} Day${days > 1 ? 's' : ''}`;
    const totalAmount = days * currentSelectedCar.price;
    if (calcTotal) calcTotal.textContent = `$${totalAmount.toLocaleString()}`;
  }

  if (resPickupDate) resPickupDate.addEventListener('change', recalcTotal);
  if (resReturnDate) resReturnDate.addEventListener('change', recalcTotal);

  document.querySelectorAll('.btn-book-car').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const carId = btn.getAttribute('data-car');
      const car = FLEET_DATA[carId];
      if (car) {
        populateBookingModal(car);
        openModal(bookingModal);
      }
    });
  });

  if (ctaBookNowBtn) {
    ctaBookNowBtn.addEventListener('click', () => {
      populateBookingModal(FLEET_DATA['car-5']);
      openModal(bookingModal);
    });
  }

  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const driverName = document.getElementById('resDriverName').value;
      const refCode = `VEL-${Math.floor(1000 + Math.random() * 9000)}`;

      closeModal(bookingModal);
      showToast(`Reservation ${refCode} confirmed for ${driverName}! Vehicle allocation locked.`, 'success', 'fa-solid fa-circle-check');
    });
  }

  const pillarItems = document.querySelectorAll('.pillar-item');
  const experienceDynamicImg = document.getElementById('experienceDynamicImg');

  const experienceImages = [
    'assets/travel-experience.jpg',
    'assets/car-suv.jpg',
    'assets/car-sedan.jpg',
    'assets/car-sports.jpg'
  ];

  pillarItems.forEach((pillar, index) => {
    pillar.addEventListener('click', () => {
      pillarItems.forEach(p => p.classList.remove('active'));
      pillar.classList.add('active');

      if (experienceDynamicImg && experienceImages[index]) {
        experienceDynamicImg.style.opacity = '0.4';
        setTimeout(() => {
          experienceDynamicImg.src = experienceImages[index];
          experienceDynamicImg.style.opacity = '1';
        }, 200);
      }
    });
  });

  const testimonialsTrack = document.getElementById('testimonialsTrack');
  const prevTestimonialBtn = document.getElementById('prevTestimonial');
  const nextTestimonialBtn = document.getElementById('nextTestimonial');
  const carouselDots = document.querySelectorAll('.dot-btn');
  const totalSlides = carouselDots.length;

  function getCarouselStep() {
    if (!testimonialsTrack) return 0;
    const firstCard = testimonialsTrack.querySelector('.testimonial-card');
    if (!firstCard) return 0;
    const styles = window.getComputedStyle(testimonialsTrack);
    const gap = parseFloat(styles.columnGap || styles.gap) || 0;
    return firstCard.getBoundingClientRect().width + gap;
  }

  function getVisibleCards() {
    const step = getCarouselStep();
    if (!step || !testimonialsTrack) return 1;
    return Math.max(1, Math.round(testimonialsTrack.clientWidth / step));
  }

  function maxIndex() {
    return Math.max(0, totalSlides - getVisibleCards());
  }

  function refreshCarouselDots() {
    const max = maxIndex();
    carouselDots.forEach((dot, i) => {
      dot.style.display = i <= max ? '' : 'none';
    });
  }

  function updateCarousel(index, instant) {
    const max = maxIndex();
    index = Math.min(Math.max(index, 0), max);
    activeTestimonialIndex = index;
    carouselDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    if (testimonialsTrack) {
      testimonialsTrack.scrollTo({
        left: (document.documentElement.getAttribute('dir') === 'rtl' ? -1 : 1) * index * getCarouselStep(),
        behavior: instant ? 'auto' : 'smooth'
      });
    }
  }

  if (testimonialsTrack) {
    let scrollTimer = null;
    testimonialsTrack.addEventListener('scroll', () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const step = getCarouselStep();
        if (!step) return;
        const idx = Math.min(Math.round(Math.abs(testimonialsTrack.scrollLeft) / step), maxIndex());
        activeTestimonialIndex = idx;
        carouselDots.forEach((dot, i) => {
          dot.classList.toggle('active', i === idx);
        });
      }, 80);
    }, { passive: true });
  }

  window.addEventListener('resize', () => {
    refreshCarouselDots();
    updateCarousel(activeTestimonialIndex, true);
  });

  refreshCarouselDots();

  if (prevTestimonialBtn) {
    prevTestimonialBtn.addEventListener('click', () => {
      let nextIndex = activeTestimonialIndex - 1;
      if (nextIndex < 0) nextIndex = maxIndex();
      updateCarousel(nextIndex);
    });
  }

  if (nextTestimonialBtn) {
    nextTestimonialBtn.addEventListener('click', () => {
      let nextIndex = activeTestimonialIndex + 1;
      if (nextIndex > maxIndex()) nextIndex = 0;
      updateCarousel(nextIndex);
    });
  }

  carouselDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      updateCarousel(idx);
    });
  });

  function showToast(message, type = 'info', iconClass = 'fa-solid fa-circle-info') {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');

    toast.innerHTML = `
      <i class="${iconClass} toast-icon"></i>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 20);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 350);
    }, 3500);
  }

  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  setTimeout(() => {
    showToast('Welcome to VELOCE Luxury Car Rental & Self-Drive Experience', 'brand', 'fa-solid fa-car-rear');
  }, 1000);

});


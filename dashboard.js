'use strict';

const VELOCE_DASHBOARD_DATA = {

  fleet: [
    { id: 'fortuner', name: 'Toyota Fortuner', brand: 'Toyota', plate: 'MH 01 AB 8842', category: 'Luxury', seats: 7, transmission: 'Automatic', fuel: 'Diesel', price: 7500, status: 'Rented', image: 'assets/cars/fortuner.jpg', desc: 'Commanding 4x4 luxury SUV with 201 bhp turbo diesel.' },
    { id: 'bmw3', name: 'BMW 3 Series', brand: 'BMW', plate: 'MH 01 CD 4291', category: 'Luxury', seats: 5, transmission: 'Automatic', fuel: 'Petrol', price: 9800, status: 'Available', image: 'assets/cars/bmw3.jpg', desc: 'Executive luxury sedan with 50:50 weight distribution.' },
    { id: 'cclass', name: 'Mercedes-Benz C-Class', brand: 'Mercedes-Benz', plate: 'MH 01 EF 1092', category: 'Luxury', seats: 5, transmission: 'Automatic', fuel: 'Diesel', price: 10500, status: 'Available', image: 'assets/cars/cclass.jpg', desc: 'Flagship prestige sedan with digital light cockpit.' },
    { id: 'innova', name: 'Toyota Innova Crysta', brand: 'Toyota', plate: 'MH 01 GH 3921', category: 'MPV', seats: 7, transmission: 'Automatic', fuel: 'Diesel', price: 4800, status: 'Rented', image: 'assets/cars/innova.jpg', desc: 'Plush executive 7-seater MPV for family and corporate touring.' },
    { id: 'xuv700', name: 'Mahindra XUV700', brand: 'Mahindra', plate: 'MH 01 IJ 6401', category: 'SUV', seats: 7, transmission: 'Automatic', fuel: 'Diesel', price: 5400, status: 'Available', image: 'assets/cars/xuv700.jpg', desc: 'High-tech panoramic SUV with dual 10.25-inch superscreen.' },
    { id: 'creta', name: 'Hyundai Creta', brand: 'Hyundai', plate: 'MH 01 KL 7781', category: 'SUV', seats: 5, transmission: 'Automatic', fuel: 'Diesel', price: 3900, status: 'Available', image: 'assets/cars/creta.jpg', desc: 'Urban SUV benchmark with panoramic sunroof and Bose audio.' },
    { id: 'seltos', name: 'Kia Seltos', brand: 'Kia', plate: 'MH 01 MN 5120', category: 'SUV', seats: 5, transmission: 'Automatic', fuel: 'Petrol', price: 4200, status: 'Rented', image: 'assets/cars/seltos.jpg', desc: 'Dynamic crossover with heads-up display and turbo engine.' },
    { id: 'city', name: 'Honda City', brand: 'Honda', plate: 'MH 01 OP 3349', category: 'Sedan', seats: 5, transmission: 'Automatic', fuel: 'Petrol', price: 3400, status: 'Available', image: 'assets/cars/city.jpg', desc: 'Legendary i-VTEC executive cruiser with velvety rear legroom.' },
    { id: 'verna', name: 'Hyundai Verna', brand: 'Hyundai', plate: 'MH 01 QR 9021', category: 'Sedan', seats: 5, transmission: 'Automatic', fuel: 'Petrol', price: 3600, status: 'Available', image: 'assets/cars/verna.jpg', desc: 'Futuristic turbo sedan with heated and ventilated seats.' },
    { id: 'carens', name: 'Kia Carens', brand: 'Kia', plate: 'MH 01 ST 4410', category: 'MPV', seats: 6, transmission: 'Automatic', fuel: 'Petrol', price: 3800, status: 'In Service', image: 'assets/cars/carens.jpg', desc: 'Family recreational mover with second-row captain seats.' },
    { id: 'i20', name: 'Hyundai i20', brand: 'Hyundai', plate: 'MH 01 UV 6672', category: 'Hatchback', seats: 5, transmission: 'Automatic', fuel: 'Petrol', price: 2600, status: 'Available', image: 'assets/cars/i20.jpg', desc: 'European-styled premium hatchback with Bose sound system.' },
    { id: 'swift', name: 'Maruti Suzuki Swift', brand: 'Maruti Suzuki', plate: 'MH 01 WX 1198', category: 'Economy', seats: 5, transmission: 'Manual', fuel: 'Petrol', price: 2200, status: 'Available', image: 'assets/cars/swift.jpg', desc: 'Nimble city hatchback offering class-leading fuel economy.' }
  ],

  bookings: [
    { id: 'BK-8421', customer: 'Vikramaditya Singhania', phone: '+91 98201 44521', email: 'vikram@singhania.com', vehicleId: 'bmw3', vehicle: 'BMW 3 Series', location: 'Atelier (Beverly Hills)', pickupDate: '2026-11-05', returnDate: '2026-11-09', amount: 39200, payment: 'Paid', status: 'Confirmed' },
    { id: 'BK-8420', customer: 'Ananya Deshmukh', phone: '+91 98700 12891', email: 'ananya@deshmukh.in', vehicleId: 'fortuner', vehicle: 'Toyota Fortuner', location: 'Airport VIP Curbside', pickupDate: '2026-11-04', returnDate: '2026-11-08', amount: 30000, payment: 'Paid', status: 'Active' },
    { id: 'BK-8419', customer: 'Rohan Mehra', phone: '+91 99304 88712', email: 'rohan.mehra@techcorp.io', vehicleId: 'cclass', vehicle: 'Mercedes-Benz C-Class', location: 'Doorstep Delivery', pickupDate: '2026-11-06', returnDate: '2026-11-07', amount: 10500, payment: 'Pending', status: 'Pending' },
    { id: 'BK-8418', customer: 'Siddharth Roy', phone: '+91 98111 65432', email: 'siddharth@royholdings.com', vehicleId: 'innova', vehicle: 'Toyota Innova Crysta', location: 'Airport VIP Curbside', pickupDate: '2026-11-02', returnDate: '2026-11-06', amount: 19200, payment: 'Paid', status: 'Active' },
    { id: 'BK-8417', customer: 'Pooja Kashyap', phone: '+91 97654 32109', email: 'pooja.kashyap@gmail.com', vehicleId: 'seltos', vehicle: 'Kia Seltos', location: 'Atelier (Beverly Hills)', pickupDate: '2026-11-03', returnDate: '2026-11-05', amount: 8400, payment: 'Paid', status: 'Active' },
    { id: 'BK-8416', customer: 'Aman Verma', phone: '+91 98450 99881', email: 'aman.verma@consulting.com', vehicleId: 'city', vehicle: 'Honda City', location: 'Doorstep Delivery', pickupDate: '2026-11-08', returnDate: '2026-11-11', amount: 10200, payment: 'Paid', status: 'Confirmed' },
    { id: 'BK-8415', customer: 'Dr. Kabir Sen', phone: '+91 98220 33411', email: 'drkabirsen@medicare.org', vehicleId: 'xuv700', vehicle: 'Mahindra XUV700', location: 'Atelier (Beverly Hills)', pickupDate: '2026-11-07', returnDate: '2026-11-12', amount: 27000, payment: 'Pending', status: 'Pending' },
    { id: 'BK-8414', customer: 'Natasha Poonawalla', phone: '+91 99887 76655', email: 'natasha@glamour.in', vehicleId: 'cclass', vehicle: 'Mercedes-Benz C-Class', location: 'Airport VIP Curbside', pickupDate: '2026-10-28', returnDate: '2026-11-02', amount: 52500, payment: 'Paid', status: 'Completed' },
    { id: 'BK-8413', customer: 'Farhan Akhtar', phone: '+91 98190 22334', email: 'farhan@excelent.com', vehicleId: 'fortuner', vehicle: 'Toyota Fortuner', location: 'Doorstep Delivery', pickupDate: '2026-10-25', returnDate: '2026-10-29', amount: 30000, payment: 'Paid', status: 'Completed' },
    { id: 'BK-8412', customer: 'Rishi Kapoor Jr.', phone: '+91 98200 44332', email: 'rishi@studio.com', vehicleId: 'bmw3', vehicle: 'BMW 3 Series', location: 'Atelier (Beverly Hills)', pickupDate: '2026-10-20', returnDate: '2026-10-23', amount: 29400, payment: 'Paid', status: 'Completed' },
    { id: 'BK-8411', customer: 'Kavita Chawla', phone: '+91 97110 55443', email: 'kavita@chawlagroup.com', vehicleId: 'swift', vehicle: 'Maruti Suzuki Swift', location: 'Atelier (Beverly Hills)', pickupDate: '2026-10-18', returnDate: '2026-10-19', amount: 2200, payment: 'Paid', status: 'Completed' },
    { id: 'BK-8410', customer: 'Sameer Nair', phone: '+91 98205 66778', email: 'sameer@applaud.in', vehicleId: 'verna', vehicle: 'Hyundai Verna', location: 'Airport VIP Curbside', pickupDate: '2026-10-15', returnDate: '2026-10-18', amount: 10800, payment: 'Refunded', status: 'Cancelled' },
    { id: 'BK-8409', customer: 'Divya Agarwal', phone: '+91 99201 88331', email: 'divya@designstudio.com', vehicleId: 'i20', vehicle: 'Hyundai i20', location: 'Doorstep Delivery', pickupDate: '2026-11-10', returnDate: '2026-11-13', amount: 7800, payment: 'Pending', status: 'Pending' },
    { id: 'BK-8408', customer: 'Arjun Rampal', phone: '+91 98210 11223', email: 'arjun@production.in', vehicleId: 'fortuner', vehicle: 'Toyota Fortuner', location: 'Doorstep Delivery', pickupDate: '2026-10-10', returnDate: '2026-10-12', amount: 15000, payment: 'Refunded', status: 'Cancelled' }
  ],

  customers: [
    { id: 'CUST-1042', name: 'Vikramaditya Singhania', email: 'vikram@singhania.com', phone: '+91 98201 44521', bookingsCount: 12, totalSpent: 248000, registered: '2025-04-12', status: 'Verified', avatar: 'assets/avatar-2.jpg', license: 'DL-0420180092144 (Valid)' },
    { id: 'CUST-1041', name: 'Ananya Deshmukh', email: 'ananya@deshmukh.in', phone: '+91 98700 12891', bookingsCount: 8, totalSpent: 164000, registered: '2025-07-22', status: 'Verified', avatar: 'assets/avatar-3.jpg', license: 'DL-0120190048123 (Valid)' },
    { id: 'CUST-1040', name: 'Rohan Mehra', email: 'rohan.mehra@techcorp.io', phone: '+91 99304 88712', bookingsCount: 3, totalSpent: 42000, registered: '2026-02-14', status: 'Active', avatar: 'assets/avatar-4.jpg', license: 'DL-0720210087412 (Valid)' },
    { id: 'CUST-1039', name: 'Natasha Poonawalla', email: 'natasha@glamour.in', phone: '+91 99887 76655', bookingsCount: 16, totalSpent: 412000, registered: '2024-11-10', status: 'Verified', avatar: 'assets/avatar-1.jpg', license: 'DL-0220170014529 (Valid)' },
    { id: 'CUST-1038', name: 'Dr. Kabir Sen', email: 'drkabirsen@medicare.org', phone: '+91 98220 33411', bookingsCount: 5, totalSpent: 86500, registered: '2025-09-01', status: 'Active', avatar: 'assets/avatar-2.jpg', license: 'DL-0320160032918 (Valid)' },
    { id: 'CUST-1037', name: 'Siddharth Roy', email: 'siddharth@royholdings.com', phone: '+91 98111 65432', bookingsCount: 9, totalSpent: 198000, registered: '2025-01-18', status: 'Verified', avatar: 'assets/avatar-3.jpg', license: 'DL-0820150074120 (Valid)' },
    { id: 'CUST-1036', name: 'Pooja Kashyap', email: 'pooja.kashyap@gmail.com', phone: '+91 97654 32109', bookingsCount: 4, totalSpent: 38400, registered: '2026-05-19', status: 'Active', avatar: 'assets/avatar-4.jpg', license: 'DL-0520220091482 (Valid)' },
    { id: 'CUST-1035', name: 'Sameer Nair', email: 'sameer@applaud.in', phone: '+91 98205 66778', bookingsCount: 2, totalSpent: 18600, registered: '2026-08-30', status: 'Suspended', avatar: 'assets/avatar-1.jpg', license: 'DL-0620200041289 (Under Review)' }
  ],

  invoices: [
    { id: 'INV-2026-084', customer: 'Vikramaditya Singhania', bookingRef: 'BK-8421', date: '2026-11-05', dueDate: '2026-11-05', amount: 39200, status: 'Paid', tax: 5979, subtotal: 33221, vehicle: 'BMW 3 Series' },
    { id: 'INV-2026-083', customer: 'Ananya Deshmukh', bookingRef: 'BK-8420', date: '2026-11-04', dueDate: '2026-11-04', amount: 30000, status: 'Paid', tax: 4576, subtotal: 25424, vehicle: 'Toyota Fortuner' },
    { id: 'INV-2026-082', customer: 'Rohan Mehra', bookingRef: 'BK-8419', date: '2026-11-04', dueDate: '2026-11-06', amount: 10500, status: 'Pending', tax: 1601, subtotal: 8899, vehicle: 'Mercedes-Benz C-Class' },
    { id: 'INV-2026-081', customer: 'Siddharth Roy', bookingRef: 'BK-8418', date: '2026-11-02', dueDate: '2026-11-02', amount: 19200, status: 'Paid', tax: 2928, subtotal: 16272, vehicle: 'Toyota Innova Crysta' },
    { id: 'INV-2026-080', customer: 'Pooja Kashyap', bookingRef: 'BK-8417', date: '2026-11-03', dueDate: '2026-11-03', amount: 8400, status: 'Paid', tax: 1281, subtotal: 7119, vehicle: 'Kia Seltos' },
    { id: 'INV-2026-079', customer: 'Natasha Poonawalla', bookingRef: 'BK-8414', date: '2026-10-28', dueDate: '2026-10-28', amount: 52500, status: 'Paid', tax: 8008, subtotal: 44492, vehicle: 'Mercedes-Benz C-Class' },
    { id: 'INV-2026-078', customer: 'Aman Verma', bookingRef: 'BK-8416', date: '2026-11-04', dueDate: '2026-11-08', amount: 10200, status: 'Paid', tax: 1555, subtotal: 8645, vehicle: 'Honda City' },
    { id: 'INV-2026-077', customer: 'Dr. Kabir Sen', bookingRef: 'BK-8415', date: '2026-10-22', dueDate: '2026-10-26', amount: 27000, status: 'Overdue', tax: 4118, subtotal: 22882, vehicle: 'Mahindra XUV700' }
  ],

  activities: [
    { title: 'Booking Confirmed #BK-8421', desc: 'Vikramaditya Singhania reserved BMW 3 Series for 4 days', time: '12 mins ago', icon: 'fa-solid fa-circle-check', type: 'success' },
    { title: 'Payment Settled: ₹39,200', desc: 'Transaction approved via HDFC NetBanking Gateway', time: '28 mins ago', icon: 'fa-solid fa-receipt', type: 'primary' },
    { title: 'Vehicle Handed Over: Fortuner', desc: 'Curbside airport delivery completed at Terminal 2', time: '1 hour ago', icon: 'fa-solid fa-key', type: 'info' },
    { title: 'Inspection Alert: Kia Carens', desc: 'Scheduled 10,000 km multi-point service check', time: '2 hours ago', icon: 'fa-solid fa-wrench', type: 'warning' },
    { title: 'Customer Profile Verified', desc: 'Rohan Mehra identity & DL validated successfully', time: '3 hours ago', icon: 'fa-solid fa-user-shield', type: 'info' }
  ]
};

document.addEventListener('DOMContentLoaded', () => {

  let chartInstances = {};

  const dashThemeToggle = document.getElementById('dashThemeToggle');
  const htmlRoot = document.documentElement;
  const storedTheme = localStorage.getItem('veloce_theme') || 'dark';

  applyTheme(storedTheme);

  function applyTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('veloce_theme', theme);

    updateChartThemeColors(theme);
  }

  function toggleTheme() {
    const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);

  }

  if (dashThemeToggle) dashThemeToggle.addEventListener('click', toggleTheme);

  const dashDirToggle = document.getElementById('dashDirToggle');
  const dashDirText = document.getElementById('dashDirText');
  const storedDir = localStorage.getItem('veloce_dir') || 'ltr';

  applyDirection(storedDir);

  function applyDirection(dir) {
    htmlRoot.setAttribute('dir', dir);
    localStorage.setItem('veloce_dir', dir);
    if (dashDirText) dashDirText.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
  }

  function toggleDirection() {
    const currentDir = htmlRoot.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
    applyDirection(newDir);

  }

  if (dashDirToggle) dashDirToggle.addEventListener('click', toggleDirection);

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

  const notifBtn = document.getElementById('notifDropdownBtn');
  const notifPanel = document.getElementById('notifDropdownPanel');
  const profileBtn = document.getElementById('profileDropdownBtn');
  const profilePanel = document.getElementById('profileDropdownPanel');
  const markAllReadBtn = document.getElementById('markAllReadBtn');
  const clearNotifsBtn = document.getElementById('clearNotifsBtn');
  const notifBadge = document.getElementById('notifBadge');

  function closeAllDropdowns() {
    if (notifPanel) notifPanel.classList.remove('show');
    if (profilePanel) profilePanel.classList.remove('show');
    if (notifBtn) notifBtn.setAttribute('aria-expanded', 'false');
    if (profileBtn) profileBtn.setAttribute('aria-expanded', 'false');
  }

  if (notifBtn && notifPanel) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isShown = notifPanel.classList.toggle('show');
      notifBtn.setAttribute('aria-expanded', isShown ? 'true' : 'false');
      if (profilePanel) profilePanel.classList.remove('show');
    });
  }

  if (profileBtn && profilePanel) {
    profileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isShown = profilePanel.classList.toggle('show');
      profileBtn.setAttribute('aria-expanded', isShown ? 'true' : 'false');
      if (notifPanel) notifPanel.classList.remove('show');
    });
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dash-dropdown-wrap')) {
      closeAllDropdowns();
    }
  });

  if (markAllReadBtn) {
    markAllReadBtn.addEventListener('click', () => {
      document.querySelectorAll('.notif-item.unread').forEach(item => item.classList.remove('unread'));
      if (notifBadge) notifBadge.style.display = 'none';
      showToast('All notifications marked as read', 'info');
    });
  }

  if (clearNotifsBtn) {
    clearNotifsBtn.addEventListener('click', () => {
      const list = document.getElementById('notifList');
      if (list) list.innerHTML = '<li style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.82rem;">No new notifications</li>';
      if (notifBadge) notifBadge.style.display = 'none';
    });
  }

  const dashSidebar = document.getElementById('dashSidebar');
  const sidebarCollapseBtn = document.getElementById('sidebarCollapseBtn');
  const mobileMenuTrigger = document.getElementById('mobileMenuTrigger');
  const sidebarCloseMobile = document.getElementById('sidebarCloseMobile');
  const sidebarOverlay = document.getElementById('sidebarOverlay');

  if (sidebarCollapseBtn && dashSidebar) {
    sidebarCollapseBtn.addEventListener('click', () => {
      dashSidebar.classList.toggle('collapsed');

      setTimeout(resizeAllCharts, 250);
    });
  }

  function openMobileSidebar() {
    if (dashSidebar && sidebarOverlay) {
      dashSidebar.classList.add('mobile-open');
      sidebarOverlay.classList.add('active');
    }
  }

  function closeMobileSidebar() {
    if (dashSidebar && sidebarOverlay) {
      dashSidebar.classList.remove('mobile-open');
      sidebarOverlay.classList.remove('active');
    }
  }

  if (mobileMenuTrigger) mobileMenuTrigger.addEventListener('click', openMobileSidebar);
  if (sidebarCloseMobile) sidebarCloseMobile.addEventListener('click', closeMobileSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeMobileSidebar);

  const navLinks = document.querySelectorAll('.sidebar-nav-link');
  const pages = {
    overview: document.getElementById('view-overview'),
    bookings: document.getElementById('view-bookings'),
    fleet: document.getElementById('view-fleet'),
    customers: document.getElementById('view-customers'),
    analytics: document.getElementById('view-analytics'),
    invoices: document.getElementById('view-invoices')
  };

  const headerPageTitle = document.getElementById('headerPageTitle');
  const headerActiveCrumb = document.getElementById('headerActiveCrumb');

  const pageMeta = {
    overview: { title: 'Overview', crumb: 'Overview' },
    bookings: { title: 'Bookings Management', crumb: 'Bookings' },
    fleet: { title: 'Fleet Inventory Management', crumb: 'Fleet Management' },
    customers: { title: 'Customer Directory & Profiles', crumb: 'Customers' },
    analytics: { title: 'Revenue & Business Analytics', crumb: 'Revenue & Analytics' },
    invoices: { title: 'Invoices & Downloadable Reports', crumb: 'Invoices & Reports' }
  };

  function switchDashboardView(viewKey) {
    if (!pages[viewKey]) return;

    navLinks.forEach(link => {
      const match = link.getAttribute('data-view') === viewKey;
      link.classList.toggle('active', match);
    });

    Object.keys(pages).forEach(key => {
      if (pages[key]) {
        if (key === viewKey) {
          pages[key].style.display = 'block';
          pages[key].classList.add('active');
        } else {
          pages[key].style.display = 'none';
          pages[key].classList.remove('active');
        }
      }
    });

    const welcomeNote = document.getElementById('headerWelcomeNote');
    if (welcomeNote) {
      welcomeNote.textContent = 'Welcome Back, Alexander ??';
    }

    closeMobileSidebar();

    setTimeout(() => {
      if (viewKey === 'overview') {
        initOverviewCharts();
      } else if (viewKey === 'customers') {
        initCustomerGrowthChart();
      } else if (viewKey === 'analytics') {
        initAnalyticsCharts();
      }
    }, 50);

    const scrollContainer = document.getElementById('dashMainScroll');
    if (scrollContainer) scrollContainer.scrollTop = 0;
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const viewKey = link.getAttribute('data-view');
      switchDashboardView(viewKey);
    });
  });

  const viewAllBookingsLink = document.getElementById('viewAllBookingsLink');
  if (viewAllBookingsLink) {
    viewAllBookingsLink.addEventListener('click', () => switchDashboardView('bookings'));
  }
  const overviewNewBookingBtn = document.getElementById('overviewNewBookingBtn');
  if (overviewNewBookingBtn) {
    overviewNewBookingBtn.addEventListener('click', () => {
      switchDashboardView('bookings');
      openBookingDetailsModal(VELOCE_DASHBOARD_DATA.bookings[0]);
    });
  }
  const menuProfileLink = document.getElementById('menuProfileLink');
  if (menuProfileLink) {
    menuProfileLink.addEventListener('click', (e) => {
      e.preventDefault();
      closeAllDropdowns();
      switchDashboardView('customers');
    });
  }
  const menuSettingsLink = document.getElementById('menuSettingsLink');
  if (menuSettingsLink) {
    menuSettingsLink.addEventListener('click', (e) => {
      e.preventDefault();
      closeAllDropdowns();
      switchDashboardView('analytics');
    });
  }

  function getChartThemeColors() {
    const isDark = (htmlRoot.getAttribute('data-theme') || 'dark') === 'dark';
    return {
      textColor: isDark ? '#C5C6CA' : '#55565A',
      gridColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
      primary: '#E94250',
      primaryFade: 'rgba(233, 66, 80, 0.15)',
      blue: '#3B82F6',
      emerald: '#10B981',
      purple: '#8B5CF6',
      amber: '#F59E0B'
    };
  }

  function updateChartThemeColors(theme) {
    const colors = getChartThemeColors();
    Object.values(chartInstances).forEach(chart => {
      if (!chart || !chart.options) return;
      if (chart.options.scales) {
        if (chart.options.scales.x) {
          chart.options.scales.x.ticks.color = colors.textColor;
          chart.options.scales.x.grid.color = colors.gridColor;
        }
        if (chart.options.scales.y) {
          chart.options.scales.y.ticks.color = colors.textColor;
          chart.options.scales.y.grid.color = colors.gridColor;
        }
      }
      if (chart.options.plugins && chart.options.plugins.legend) {
        chart.options.plugins.legend.labels.color = colors.textColor;
      }
      chart.update();
    });
  }

  function resizeAllCharts() {
    Object.values(chartInstances).forEach(chart => {
      if (chart && typeof chart.resize === 'function') chart.resize();
    });
  }

  window.addEventListener('resize', resizeAllCharts);

  function initOverviewCharts() {
    if (typeof Chart === 'undefined') return;
    const colors = getChartThemeColors();

    const revCtx = document.getElementById('revenueOverviewChart');
    if (revCtx && !chartInstances.revenueOverview) {
      chartInstances.revenueOverview = new Chart(revCtx, {
        type: 'line',
        data: {
          labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
          datasets: [{
            label: 'Monthly Gross Revenue (₹)',
            data: [520000, 610000, 680000, 740000, 795000, 842500],
            borderColor: colors.primary,
            backgroundColor: colors.primaryFade,
            borderWidth: 3,
            fill: true,
            tension: 0.38,
            pointBackgroundColor: colors.primary,
            pointRadius: 5,
            pointHoverRadius: 7
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => `Revenue: ₹${ctx.parsed.y.toLocaleString('en-IN')}`
              }
            }
          },
          scales: {
            x: { grid: { color: colors.gridColor }, ticks: { color: colors.textColor } },
            y: {
              grid: { color: colors.gridColor },
              ticks: {
                color: colors.textColor,
                callback: (val) => `₹${val / 1000}k`
              }
            }
          }
        }
      });
    }

    const bookCtx = document.getElementById('bookingsOverviewChart');
    if (bookCtx && !chartInstances.bookingsOverview) {
      chartInstances.bookingsOverview = new Chart(bookCtx, {
        type: 'bar',
        data: {
          labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
          datasets: [
            { label: 'Confirmed', data: [75, 84, 88, 92, 94, 96], backgroundColor: '#10B981', borderRadius: 4 },
            { label: 'Pending', data: [8, 12, 10, 7, 5, 6], backgroundColor: '#F59E0B', borderRadius: 4 },
            { label: 'Cancelled', data: [3, 2, 4, 3, 2, 2], backgroundColor: '#F43F5E', borderRadius: 4 }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'top', labels: { color: colors.textColor, boxWidth: 12, font: { size: 11 } } }
          },
          scales: {
            x: { grid: { display: false }, ticks: { color: colors.textColor } },
            y: { grid: { color: colors.gridColor }, ticks: { color: colors.textColor } }
          }
        }
      });
    }

    const catCtx = document.getElementById('categoryDistributionChart');
    if (catCtx && !chartInstances.categoryDistribution) {
      chartInstances.categoryDistribution = new Chart(catCtx, {
        type: 'doughnut',
        data: {
          labels: ['SUV (3)', 'Luxury (3)', 'Sedan (2)', 'MPV (2)', 'Hatchback (1)', 'Economy (1)'],
          datasets: [{
            data: [3, 3, 2, 2, 1, 1],
            backgroundColor: ['#E94250', '#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#64748B'],
            borderWidth: 2,
            borderColor: 'var(--surface)'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'right', labels: { color: colors.textColor, boxWidth: 12, font: { size: 11 } } }
          },
          cutout: '68%'
        }
      });
    }

    const fleetStatusCtx = document.getElementById('fleetStatusChart');
    if (fleetStatusCtx && !chartInstances.fleetStatus) {
      chartInstances.fleetStatus = new Chart(fleetStatusCtx, {
        type: 'doughnut',
        data: {
          labels: ['Available (8)', 'Rented on Trip (3)', 'In Maintenance (1)'],
          datasets: [{
            data: [8, 3, 1],
            backgroundColor: ['#10B981', '#E94250', '#F59E0B'],
            borderWidth: 2,
            borderColor: 'var(--surface)'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'right', labels: { color: colors.textColor, boxWidth: 12, font: { size: 11 } } }
          },
          cutout: '68%'
        }
      });
    }
  }

  const periodBtns = document.querySelectorAll('#revenuePeriodTabs .period-btn');
  periodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      periodBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const period = btn.getAttribute('data-period');

      if (chartInstances.revenueOverview) {
        if (period === 'daily') {
          chartInstances.revenueOverview.data.labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
          chartInstances.revenueOverview.data.datasets[0].data = [28000, 34000, 31000, 42000, 58000, 72000, 68000];
        } else if (period === 'weekly') {
          chartInstances.revenueOverview.data.labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
          chartInstances.revenueOverview.data.datasets[0].data = [190000, 210000, 225000, 217500];
        } else if (period === 'monthly') {
          chartInstances.revenueOverview.data.labels = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
          chartInstances.revenueOverview.data.datasets[0].data = [520000, 610000, 680000, 740000, 795000, 842500];
        } else if (period === 'yearly') {
          chartInstances.revenueOverview.data.labels = ['2023', '2024', '2025', '2026 (YTD)'];
          chartInstances.revenueOverview.data.datasets[0].data = [4200000, 6800000, 11400000, 18654000];
        }
        chartInstances.revenueOverview.update();
      }
    });
  });

  function initCustomerGrowthChart() {
    if (typeof Chart === 'undefined') return;
    const colors = getChartThemeColors();
    const ctx = document.getElementById('customerGrowthChart');
    if (ctx && !chartInstances.customerGrowth) {
      chartInstances.customerGrowth = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
          datasets: [{
            label: 'New Customer Signups',
            data: [94, 112, 128, 134, 138, 142],
            backgroundColor: colors.primary,
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks: { color: colors.textColor } },
            y: { grid: { color: colors.gridColor }, ticks: { color: colors.textColor } }
          }
        }
      });
    }
  }

  function initAnalyticsCharts() {
    if (typeof Chart === 'undefined') return;
    const colors = getChartThemeColors();

    const trendCtx = document.getElementById('analyticsTrendChart');
    if (trendCtx && !chartInstances.analyticsTrend) {
      chartInstances.analyticsTrend = new Chart(trendCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
          datasets: [
            {
              label: 'Gross Rental Inflow (₹)',
              data: [320000, 360000, 410000, 450000, 510000, 520000, 610000, 680000, 740000, 795000, 842500],
              borderColor: colors.primary,
              backgroundColor: colors.primaryFade,
              fill: true,
              tension: 0.35
            },
            {
              label: 'Fleet Maintenance & Operations (₹)',
              data: [110000, 120000, 135000, 140000, 155000, 160000, 175000, 190000, 205000, 210000, 220000],
              borderColor: colors.blue,
              fill: false,
              tension: 0.35
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'top', labels: { color: colors.textColor } } },
          scales: {
            x: { grid: { color: colors.gridColor }, ticks: { color: colors.textColor } },
            y: { grid: { color: colors.gridColor }, ticks: { color: colors.textColor } }
          }
        }
      });
    }

    const catBarCtx = document.getElementById('categoryRevenueBarChart');
    if (catBarCtx && !chartInstances.categoryRevenueBar) {
      chartInstances.categoryRevenueBar = new Chart(catBarCtx, {
        type: 'bar',
        data: {
          labels: ['Luxury', 'SUV', 'MPV', 'Sedan', 'Hatchback', 'Economy'],
          datasets: [{
            label: 'Total Revenue (₹)',
            data: [865400, 482000, 280000, 142000, 58000, 38000],
            backgroundColor: [colors.primary, '#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#64748B'],
            borderRadius: 6
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { color: colors.gridColor }, ticks: { color: colors.textColor, callback: (v) => `₹${v/1000}k` } },
            y: { grid: { display: false }, ticks: { color: colors.textColor } }
          }
        }
      });
    }

    const payCtx = document.getElementById('paymentMethodsChart');
    if (payCtx && !chartInstances.paymentMethods) {
      chartInstances.paymentMethods = new Chart(payCtx, {
        type: 'doughnut',
        data: {
          labels: ['UPI & NetBanking', 'Credit/Debit Cards', 'Corporate Invoicing', 'Cash at Handover'],
          datasets: [{
            data: [48, 36, 12, 4],
            backgroundColor: [colors.primary, colors.blue, colors.emerald, colors.amber],
            borderWidth: 2,
            borderColor: 'var(--surface)'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          cutout: '72%'
        }
      });
    }
  }

  const recentBookingsBody = document.getElementById('recentBookingsBody');
  const recentActivityList = document.getElementById('recentActivityList');

  function renderOverviewRecent() {
    if (recentBookingsBody) {
      const top5 = VELOCE_DASHBOARD_DATA.bookings.slice(0, 5);
      recentBookingsBody.innerHTML = top5.map(b => `
        <tr>
          <td><strong class="text-primary">${b.id}</strong></td>
          <td><strong>${b.customer}</strong></td>
          <td>${b.vehicle}</td>
          <td>${b.pickupDate}</td>
          <td>${b.returnDate}</td>
          <td><strong>₹${b.amount.toLocaleString('en-IN')}</strong></td>
          <td><span class="status-pill status-${b.status.toLowerCase()}">${b.status}</span></td>
          <td>
            <button type="button" class="btn-icon-action" data-action="view-booking" data-id="${b.id}" title="View Dossier">
              <i class="fa-regular fa-eye"></i>
            </button>
          </td>
        </tr>
      `).join('');
    }

    if (recentActivityList) {
      recentActivityList.innerHTML = VELOCE_DASHBOARD_DATA.activities.map(act => `
        <div class="activity-item">
          <div class="activity-icon bg-${act.type}-soft">
            <i class="${act.icon}"></i>
          </div>
          <div class="activity-content">
            <p><strong>${act.title}</strong> &bull; ${act.desc}</p>
            <span class="activity-time">${act.time}</span>
          </div>
        </div>
      `).join('');
    }
  }

  const masterBookingsBody = document.getElementById('masterBookingsBody');
  const bookingSearchInput = document.getElementById('bookingSearchInput');
  const bookingStatusFilter = document.getElementById('bookingStatusFilter');
  const bookingVehicleFilter = document.getElementById('bookingVehicleFilter');
  const bookingSortSelect = document.getElementById('bookingSortSelect');

  function renderMasterBookings() {
    if (!masterBookingsBody) return;

    let list = [...VELOCE_DASHBOARD_DATA.bookings];

    const query = bookingSearchInput ? bookingSearchInput.value.trim().toLowerCase() : '';
    if (query) {
      list = list.filter(b =>
        b.id.toLowerCase().includes(query) ||
        b.customer.toLowerCase().includes(query) ||
        b.vehicle.toLowerCase().includes(query)
      );
    }

    const statusVal = bookingStatusFilter ? bookingStatusFilter.value : 'all';
    if (statusVal !== 'all') {
      list = list.filter(b => b.status === statusVal);
    }

    const vehVal = bookingVehicleFilter ? bookingVehicleFilter.value : 'all';
    if (vehVal !== 'all') {
      list = list.filter(b => b.vehicle.includes(vehVal));
    }

    const sortVal = bookingSortSelect ? bookingSortSelect.value : 'newest';
    if (sortVal === 'amount-high') list.sort((a, b) => b.amount - a.amount);
    if (sortVal === 'amount-low') list.sort((a, b) => a.amount - b.amount);
    if (sortVal === 'oldest') list.reverse();

    if (list.length === 0) {
      masterBookingsBody.innerHTML = `<tr><td colspan="10" style="text-align: center; padding: 40px; color: var(--text-muted);">No reservations found matching current filters.</td></tr>`;
      return;
    }

    masterBookingsBody.innerHTML = list.map(b => `
      <tr>
        <td><strong class="text-primary">${b.id}</strong></td>
        <td>
          <div style="display:flex; flex-direction:column;">
            <strong>${b.customer}</strong>
            <small style="color:var(--text-muted); font-size:0.72rem;">${b.phone}</small>
          </div>
        </td>
        <td>${b.vehicle}</td>
        <td><small>${b.location}</small></td>
        <td>${b.pickupDate}</td>
        <td>${b.returnDate}</td>
        <td><strong>₹${b.amount.toLocaleString('en-IN')}</strong></td>
        <td><span class="status-pill status-${b.payment.toLowerCase()}">${b.payment}</span></td>
        <td><span class="status-pill status-${b.status.toLowerCase()}">${b.status}</span></td>
        <td>
          <button type="button" class="btn-icon-action" data-action="view-booking" data-id="${b.id}" title="View Details">
            <i class="fa-regular fa-eye"></i>
          </button>
          ${b.status === 'Pending' ? `
            <button type="button" class="btn-icon-action text-success" data-action="approve-booking" data-id="${b.id}" title="Approve">
              <i class="fa-solid fa-check"></i>
            </button>
          ` : ''}
          ${b.status === 'Active' ? `
            <button type="button" class="btn-icon-action text-primary" data-action="complete-booking" data-id="${b.id}" title="Mark Completed">
              <i class="fa-solid fa-flag-checkered"></i>
            </button>
          ` : ''}
          ${b.status !== 'Cancelled' && b.status !== 'Completed' ? `
            <button type="button" class="btn-icon-action text-danger" data-action="cancel-booking" data-id="${b.id}" title="Cancel">
              <i class="fa-solid fa-xmark"></i>
            </button>
          ` : ''}
        </td>
      </tr>
    `).join('');
  }

  if (bookingSearchInput) bookingSearchInput.addEventListener('input', renderMasterBookings);
  if (bookingStatusFilter) bookingStatusFilter.addEventListener('change', renderMasterBookings);
  if (bookingVehicleFilter) bookingVehicleFilter.addEventListener('change', renderMasterBookings);
  if (bookingSortSelect) bookingSortSelect.addEventListener('change', renderMasterBookings);

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const action = btn.getAttribute('data-action');
    const id = btn.getAttribute('data-id');

    if (action === 'view-booking') {
      const b = VELOCE_DASHBOARD_DATA.bookings.find(item => item.id === id);
      if (b) openBookingDetailsModal(b);
    } else if (action === 'approve-booking') {
      const b = VELOCE_DASHBOARD_DATA.bookings.find(item => item.id === id);
      if (b) {
        b.status = 'Confirmed';
        renderMasterBookings();
        renderOverviewRecent();
        showToast(`Booking ${b.id} approved successfully!`, 'success');
      }
    } else if (action === 'complete-booking') {
      const b = VELOCE_DASHBOARD_DATA.bookings.find(item => item.id === id);
      if (b) {
        b.status = 'Completed';
        renderMasterBookings();
        renderOverviewRecent();
        showToast(`Booking ${b.id} marked as completed & returned.`, 'success');
      }
    } else if (action === 'cancel-booking') {
      if (confirm(`Are you sure you want to cancel reservation ${id}?`)) {
        const b = VELOCE_DASHBOARD_DATA.bookings.find(item => item.id === id);
        if (b) {
          b.status = 'Cancelled';
          b.payment = 'Refunded';
          renderMasterBookings();
          renderOverviewRecent();
          showToast(`Booking ${b.id} cancelled and processed for refund.`, 'info');
        }
      }
    } else if (action === 'view-invoice') {
      const inv = VELOCE_DASHBOARD_DATA.invoices.find(item => item.id === id);
      if (inv) openInvoiceModal(inv);
    } else if (action === 'mark-paid') {
      const inv = VELOCE_DASHBOARD_DATA.invoices.find(item => item.id === id);
      if (inv) {
        inv.status = 'Paid';
        renderInvoicesTable();
        showToast(`Invoice ${inv.id} marked as Paid & Settled.`, 'success');
      }
    } else if (action === 'toggle-fleet-status') {
      const v = VELOCE_DASHBOARD_DATA.fleet.find(item => item.id === id);
      if (v) {
        if (v.status === 'Available') v.status = 'Rented';
        else if (v.status === 'Rented') v.status = 'In Service';
        else v.status = 'Available';
        renderFleetGrid();
        showToast(`Status updated for ${v.name}: ${v.status}`, 'info');
      }
    } else if (action === 'delete-vehicle') {
      if (confirm(`Are you sure you want to retire this vehicle from active fleet?`)) {
        VELOCE_DASHBOARD_DATA.fleet = VELOCE_DASHBOARD_DATA.fleet.filter(item => item.id !== id);
        renderFleetGrid();
        showToast('Vehicle removed from fleet directory', 'warning');
      }
    } else if (action === 'view-customer') {
      const cust = VELOCE_DASHBOARD_DATA.customers.find(item => item.id === id);
      if (cust) openCustomerModal(cust);
    }
  });

  const bookingDetailModal = document.getElementById('bookingDetailModal');
  const bookingModalContent = document.getElementById('bookingModalContent');
  const closeBookingModalBtn = document.getElementById('closeBookingModalBtn');

  function openBookingDetailsModal(b) {
    if (!bookingDetailModal || !bookingModalContent) return;
    const title = document.getElementById('modalBookingIdTitle');
    if (title) title.textContent = `Reservation Dossier: ${b.id}`;

    bookingModalContent.innerHTML = `
      <div style="display:flex; gap:20px; margin-bottom:20px; align-items:center; background:var(--bg-alt); padding:16px; border-radius:var(--radius-lg); border:1px solid var(--border-color);">
        <div style="flex:1;">
          <span style="font-size:0.72rem; font-weight:800; color:var(--primary); text-transform:uppercase;">CUSTOMER</span>
          <h4 style="margin:2px 0 4px; font-size:1.15rem; color:var(--heading);">${b.customer}</h4>
          <span style="font-size:0.8rem; color:var(--text-muted);">${b.email} &bull; ${b.phone}</span>
        </div>
        <div style="text-align:right;">
          <span class="status-pill status-${b.status.toLowerCase()}">${b.status}</span>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:20px;">
        <div style="background:var(--bg-alt); padding:14px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
          <span style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Vehicle Assigned</span>
          <h5 style="margin:4px 0 0; font-size:0.95rem; color:var(--heading);">${b.vehicle}</h5>
        </div>
        <div style="background:var(--bg-alt); padding:14px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
          <span style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Handover Location</span>
          <h5 style="margin:4px 0 0; font-size:0.95rem; color:var(--heading);">${b.location}</h5>
        </div>
        <div style="background:var(--bg-alt); padding:14px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
          <span style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Pickup Date</span>
          <h5 style="margin:4px 0 0; font-size:0.95rem; color:var(--heading);">${b.pickupDate} (10:00 AM)</h5>
        </div>
        <div style="background:var(--bg-alt); padding:14px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
          <span style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Return Date</span>
          <h5 style="margin:4px 0 0; font-size:0.95rem; color:var(--heading);">${b.returnDate} (10:00 AM)</h5>
        </div>
      </div>

      <div style="background:var(--bg-alt); padding:16px; border-radius:var(--radius-lg); border:1px solid var(--border-color); margin-bottom:20px;">
        <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.86rem;">
          <span>Rental Package Fare:</span>
          <strong>₹${b.amount.toLocaleString('en-IN')}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.86rem;">
          <span>Comprehensive Insurance &amp; Roadside Concierge:</span>
          <strong class="text-success">Included</strong>
        </div>
        <div style="display:flex; justify-content:space-between; padding-top:8px; border-top:1px dashed var(--border-color); font-size:1.05rem; font-weight:900; color:var(--primary);">
          <span>Total Billed Amount:</span>
          <span>₹${b.amount.toLocaleString('en-IN')} (${b.payment})</span>
        </div>
      </div>

      <div class="dash-modal-actions">
        <button type="button" class="btn btn-secondary" onclick="document.getElementById('bookingDetailModal').classList.remove('active');">Close Dossier</button>
        ${b.status === 'Pending' ? `
          <button type="button" class="btn btn-primary" onclick="document.querySelector('[data-action=approve-booking][data-id=${b.id}]').click(); document.getElementById('bookingDetailModal').classList.remove('active');">
            <span>Approve Reservation</span>
          </button>
        ` : ''}
      </div>
    `;

    bookingDetailModal.classList.add('active');
  }

  if (closeBookingModalBtn) {
    closeBookingModalBtn.addEventListener('click', () => bookingDetailModal.classList.remove('active'));
  }

  const dashFleetGrid = document.getElementById('dashFleetGrid');
  const fleetSearchInput = document.getElementById('fleetSearchInput');
  const fleetCategoryFilter = document.getElementById('fleetCategoryFilter');
  const fleetAvailabilityFilter = document.getElementById('fleetAvailabilityFilter');
  const addNewVehicleBtn = document.getElementById('addNewVehicleBtn');
  const vehicleModal = document.getElementById('vehicleModal');
  const closeVehicleModalBtn = document.getElementById('closeVehicleModalBtn');
  const cancelVehicleModalBtn = document.getElementById('cancelVehicleModalBtn');
  const vehicleForm = document.getElementById('vehicleForm');

  function renderFleetGrid() {
    if (!dashFleetGrid) return;

    let cars = [...VELOCE_DASHBOARD_DATA.fleet];

    const q = fleetSearchInput ? fleetSearchInput.value.trim().toLowerCase() : '';
    if (q) {
      cars = cars.filter(c => c.name.toLowerCase().includes(q) || c.brand.toLowerCase().includes(q) || c.plate.toLowerCase().includes(q));
    }

    const cat = fleetCategoryFilter ? fleetCategoryFilter.value : 'all';
    if (cat !== 'all') {
      cars = cars.filter(c => c.category === cat);
    }

    const avail = fleetAvailabilityFilter ? fleetAvailabilityFilter.value : 'all';
    if (avail !== 'all') {
      cars = cars.filter(c => c.status === avail);
    }

    const totalCount = document.getElementById('fleetTotalCount');
    const availCount = document.getElementById('fleetAvailableCount');
    const rentCount = document.getElementById('fleetRentedCount');
    const servCount = document.getElementById('fleetServiceCount');

    if (totalCount) totalCount.textContent = `${VELOCE_DASHBOARD_DATA.fleet.length} Vehicles`;
    if (availCount) availCount.textContent = VELOCE_DASHBOARD_DATA.fleet.filter(c => c.status === 'Available').length;
    if (rentCount) rentCount.textContent = VELOCE_DASHBOARD_DATA.fleet.filter(c => c.status === 'Rented').length;
    if (servCount) servCount.textContent = VELOCE_DASHBOARD_DATA.fleet.filter(c => c.status === 'In Service').length;

    if (cars.length === 0) {
      dashFleetGrid.innerHTML = `<div style="grid-column: 1 / -1; padding: 50px; text-align: center; color: var(--text-muted); background: var(--surface); border-radius: var(--radius-xl); border: 1px dashed var(--border-color);">No vehicles match your search or category filters.</div>`;
      return;
    }

    dashFleetGrid.innerHTML = cars.map(c => `
      <div class="dash-vehicle-card">
        <div class="vcard-media">
          <img src="${c.image}" alt="${c.name}" class="vcard-img" loading="lazy">
          <span class="vcard-status-badge">
            <span class="status-pill status-${c.status.toLowerCase().replace(' ', '-')}">${c.status}</span>
          </span>
          <span class="vcard-plate">${c.plate}</span>
        </div>
        <div class="vcard-body">
          <span class="vcard-category">${c.category}</span>
          <h4 class="vcard-name">${c.name}</h4>
          <div class="vcard-specs">
            <span><i class="fa-solid fa-user-group text-primary"></i> ${c.seats}</span>
            <span><i class="fa-solid fa-gear text-primary"></i> ${c.transmission}</span>
            <span><i class="fa-solid fa-gas-pump text-primary"></i> ${c.fuel}</span>
          </div>
          <div class="vcard-footer">
            <div class="vcard-price">
              ₹${c.price.toLocaleString('en-IN')}<small>/day</small>
            </div>
            <div class="vcard-actions">
              <button type="button" class="btn-icon-action" data-action="toggle-fleet-status" data-id="${c.id}" title="Toggle Availability Status">
                <i class="fa-solid fa-arrows-rotate"></i>
              </button>
              <button type="button" class="btn-icon-action text-danger" data-action="delete-vehicle" data-id="${c.id}" title="Retire Vehicle">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  if (fleetSearchInput) fleetSearchInput.addEventListener('input', renderFleetGrid);
  if (fleetCategoryFilter) fleetCategoryFilter.addEventListener('change', renderFleetGrid);
  if (fleetAvailabilityFilter) fleetAvailabilityFilter.addEventListener('change', renderFleetGrid);

  if (addNewVehicleBtn && vehicleModal) {
    addNewVehicleBtn.addEventListener('click', () => {
      vehicleModal.classList.add('active');
    });
  }
  if (closeVehicleModalBtn && vehicleModal) {
    closeVehicleModalBtn.addEventListener('click', () => vehicleModal.classList.remove('active'));
  }
  if (cancelVehicleModalBtn && vehicleModal) {
    cancelVehicleModalBtn.addEventListener('click', () => vehicleModal.classList.remove('active'));
  }

  if (vehicleForm) {
    vehicleForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('vFormName').value.trim();
      const brand = document.getElementById('vFormBrand').value.trim();
      const category = document.getElementById('vFormCategory').value;
      const price = parseInt(document.getElementById('vFormPrice').value, 10);
      const seats = parseInt(document.getElementById('vFormSeats').value, 10);
      const transmission = document.getElementById('vFormTransmission').value;
      const fuel = document.getElementById('vFormFuel').value;
      const status = document.getElementById('vFormStatus').value;
      const image = document.getElementById('vFormImage').value.trim() || 'assets/cars/bmw3.jpg';
      const desc = document.getElementById('vFormDesc').value.trim();

      if (!name || !price) {
        showToast('Please provide a vehicle name and daily rate', 'warning');
        return;
      }

      const newCar = {
        id: 'car-' + Date.now(),
        name,
        brand,
        plate: 'MH 01 ' + String.fromCharCode(65 + Math.floor(Math.random() * 26)) + String.fromCharCode(65 + Math.floor(Math.random() * 26)) + ' ' + Math.floor(1000 + Math.random() * 9000),
        category,
        seats,
        transmission,
        fuel,
        price,
        status,
        image,
        desc: desc || 'Newly added vehicle to active rental fleet.'
      };

      VELOCE_DASHBOARD_DATA.fleet.unshift(newCar);
      renderFleetGrid();
      vehicleModal.classList.remove('active');
      vehicleForm.reset();
      showToast(`Vehicle "${newCar.name}" added to active fleet!`, 'success');
    });
  }

  const customersTableBody = document.getElementById('customersTableBody');
  const customerSearchInput = document.getElementById('customerSearchInput');
  const customerStatusFilter = document.getElementById('customerStatusFilter');
  const customerModal = document.getElementById('customerModal');
  const customerModalContent = document.getElementById('customerModalContent');
  const closeCustModalBtn = document.getElementById('closeCustModalBtn');

  function renderCustomersTable() {
    if (!customersTableBody) return;

    let list = [...VELOCE_DASHBOARD_DATA.customers];
    const q = customerSearchInput ? customerSearchInput.value.trim().toLowerCase() : '';
    if (q) {
      list = list.filter(c => c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q) || c.phone.includes(q) || c.id.toLowerCase().includes(q));
    }

    const stat = customerStatusFilter ? customerStatusFilter.value : 'all';
    if (stat !== 'all') {
      list = list.filter(c => c.status === stat);
    }

    customersTableBody.innerHTML = list.map(c => `
      <tr>
        <td><strong class="text-primary">${c.id}</strong></td>
        <td>
          <div style="display:flex; align-items:center; gap:10px;">
            <img src="${c.avatar}" alt="${c.name}" style="width:32px; height:32px; border-radius:50%; object-fit:cover;">
            <strong>${c.name}</strong>
          </div>
        </td>
        <td>${c.email}</td>
        <td>${c.phone}</td>
        <td><strong>${c.bookingsCount} Trips</strong></td>
        <td><strong class="text-primary">₹${c.totalSpent.toLocaleString('en-IN')}</strong></td>
        <td>${c.registered}</td>
        <td><span class="status-pill status-${c.status.toLowerCase()}">${c.status}</span></td>
        <td>
          <button type="button" class="btn-icon-action" data-action="view-customer" data-id="${c.id}" title="Customer Profile">
            <i class="fa-regular fa-id-badge"></i>
          </button>
        </td>
      </tr>
    `).join('');
  }

  if (customerSearchInput) customerSearchInput.addEventListener('input', renderCustomersTable);
  if (customerStatusFilter) customerStatusFilter.addEventListener('change', renderCustomersTable);

  function openCustomerModal(c) {
    if (!customerModal || !customerModalContent) return;
    const title = document.getElementById('custModalNameTitle');
    if (title) title.textContent = `Customer Dossier: ${c.name}`;

    customerModalContent.innerHTML = `
      <div style="display:flex; gap:20px; align-items:center; background:var(--bg-alt); padding:20px; border-radius:var(--radius-lg); border:1px solid var(--border-color); margin-bottom:20px;">
        <img src="${c.avatar}" alt="${c.name}" style="width:68px; height:68px; border-radius:50%; object-fit:cover; border:2px solid var(--primary);">
        <div>
          <h3 style="margin:0 0 4px; font-size:1.25rem; color:var(--heading);">${c.name}</h3>
          <span style="font-size:0.8rem; color:var(--text-muted);">${c.email} &bull; ${c.phone}</span>
          <div style="margin-top:6px;">
            <span class="status-pill status-${c.status.toLowerCase()}">${c.status}</span>
          </div>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:20px;">
        <div style="background:var(--bg-alt); padding:12px 16px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
          <span style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase;">Driving License</span>
          <h5 style="margin:4px 0 0; font-size:0.88rem; color:var(--heading);">${c.license}</h5>
        </div>
        <div style="background:var(--bg-alt); padding:12px 16px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
          <span style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase;">Total Lifetime Spend</span>
          <h5 style="margin:4px 0 0; font-size:1.05rem; color:var(--primary);">₹${c.totalSpent.toLocaleString('en-IN')}</h5>
        </div>
        <div style="background:var(--bg-alt); padding:12px 16px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
          <span style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase;">Completed Trips</span>
          <h5 style="margin:4px 0 0; font-size:0.95rem; color:var(--heading);">${c.bookingsCount} Reservations</h5>
        </div>
        <div style="background:var(--bg-alt); padding:12px 16px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
          <span style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase;">Member Since</span>
          <h5 style="margin:4px 0 0; font-size:0.95rem; color:var(--heading);">${c.registered}</h5>
        </div>
      </div>

      <div class="dash-modal-actions">
        <button type="button" class="btn btn-secondary" onclick="document.getElementById('customerModal').classList.remove('active');">Close Profile</button>
      </div>
    `;

    customerModal.classList.add('active');
  }

  if (closeCustModalBtn) {
    closeCustModalBtn.addEventListener('click', () => customerModal.classList.remove('active'));
  }

  const invoicesTableBody = document.getElementById('invoicesTableBody');
  const invoiceSearchInput = document.getElementById('invoiceSearchInput');
  const invoiceStatusFilter = document.getElementById('invoiceStatusFilter');
  const invoiceModal = document.getElementById('invoiceModal');
  const invoiceModalContent = document.getElementById('invoiceModalContent');
  const closeInvModalBtn = document.getElementById('closeInvModalBtn');
  const printModalInvoiceBtn = document.getElementById('printModalInvoiceBtn');
  const exportCsvBtn = document.getElementById('exportCsvBtn');
  const printReportBtn = document.getElementById('printReportBtn');

  function renderInvoicesTable() {
    if (!invoicesTableBody) return;

    let list = [...VELOCE_DASHBOARD_DATA.invoices];
    const q = invoiceSearchInput ? invoiceSearchInput.value.trim().toLowerCase() : '';
    if (q) {
      list = list.filter(inv => inv.id.toLowerCase().includes(q) || inv.customer.toLowerCase().includes(q) || inv.bookingRef.toLowerCase().includes(q));
    }

    const st = invoiceStatusFilter ? invoiceStatusFilter.value : 'all';
    if (st !== 'all') {
      list = list.filter(inv => inv.status === st);
    }

    invoicesTableBody.innerHTML = list.map(inv => `
      <tr>
        <td><strong class="text-primary">${inv.id}</strong></td>
        <td><strong>${inv.customer}</strong></td>
        <td>${inv.bookingRef}</td>
        <td>${inv.date}</td>
        <td>${inv.dueDate}</td>
        <td><strong>₹${inv.amount.toLocaleString('en-IN')}</strong></td>
        <td><span class="status-pill status-${inv.status.toLowerCase()}">${inv.status}</span></td>
        <td>
          <button type="button" class="btn-icon-action" data-action="view-invoice" data-id="${inv.id}" title="View & Print Tax Invoice">
            <i class="fa-solid fa-file-invoice"></i>
          </button>
          ${inv.status !== 'Paid' ? `
            <button type="button" class="btn-icon-action text-success" data-action="mark-paid" data-id="${inv.id}" title="Mark Paid">
              <i class="fa-solid fa-check"></i>
            </button>
          ` : ''}
        </td>
      </tr>
    `).join('');
  }

  if (invoiceSearchInput) invoiceSearchInput.addEventListener('input', renderInvoicesTable);
  if (invoiceStatusFilter) invoiceStatusFilter.addEventListener('change', renderInvoicesTable);

  function openInvoiceModal(inv) {
    if (!invoiceModal || !invoiceModalContent) return;
    const title = document.getElementById('invModalTitle');
    if (title) title.textContent = `Tax Invoice: ${inv.id}`;

    invoiceModalContent.innerHTML = `
      <div class="invoice-sheet" id="printableInvoiceSheet">
        <div class="inv-header">
          <div>
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
              <svg style="width:28px; height:28px;" viewBox="0 0 32 32" fill="none">
                <path d="M4 16L12 6H20L12 16L20 26H12L4 16Z" fill="#E94250"/>
                <path d="M12 16L20 6H28L20 16L28 26H20L12 16Z" fill="#E94250" fill-opacity="0.75"/>
              </svg>
              <strong style="font-family:var(--font-heading); font-size:1.3rem; letter-spacing:0.05em;">VELOCE LUXURY FLEET</strong>
            </div>
            <div style="font-size:0.78rem; color:var(--text-muted); line-height:1.4;">
              742 Ocean Boulevard, Beverly Hills, CA 90210<br>
              GSTIN: 27AABCV8942K1Z9 &bull; concierge@veloce-drive.com
            </div>
          </div>
          <div class="inv-meta">
            <h3 class="inv-title">TAX INVOICE</h3>
            <div class="inv-num">${inv.id}</div>
            <div style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">Date: ${inv.date} &bull; Ref: ${inv.bookingRef}</div>
            <div style="margin-top:6px;"><span class="status-pill status-${inv.status.toLowerCase()}">${inv.status.toUpperCase()}</span></div>
          </div>
        </div>

        <div class="inv-parties">
          <div>
            <span class="inv-party-title">BILLED TO:</span>
            <div style="font-weight:800; font-size:1rem;">${inv.customer}</div>
            <div style="font-size:0.8rem; color:var(--text-muted);">Verified VIP Driver &bull; Payment Mode: Digital Gateway</div>
          </div>
          <div>
            <span class="inv-party-title">RENTAL DETAILS:</span>
            <div style="font-weight:800; font-size:1rem;">${inv.vehicle}</div>
            <div style="font-size:0.8rem; color:var(--text-muted);">Self-Drive Package &bull; Doorstep Delivery Included</div>
          </div>
        </div>

        <table class="inv-table">
          <thead>
            <tr>
              <th>Description</th>
              <th style="text-align:right;">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Vehicle Self-Drive Rental Charges</strong><br>
                <small style="color:var(--text-muted);">Zero Kilometer Cap &bull; 24/7 Roadside Assistance Included</small>
              </td>
              <td style="text-align:right;">₹${inv.subtotal.toLocaleString('en-IN')}</td>
            </tr>
            <tr>
              <td>
                <strong>Integrated GST (18%)</strong><br>
                <small style="color:var(--text-muted);">Automotive Car Rental HSN/SAC: 996601</small>
              </td>
              <td style="text-align:right;">₹${inv.tax.toLocaleString('en-IN')}</td>
            </tr>
          </tbody>
        </table>

        <div class="inv-total-row">
          <div class="inv-total-box">
            <div class="inv-total-line">
              <span>Subtotal:</span>
              <strong>₹${inv.subtotal.toLocaleString('en-IN')}</strong>
            </div>
            <div class="inv-total-line">
              <span>GST (18%):</span>
              <strong>₹${inv.tax.toLocaleString('en-IN')}</strong>
            </div>
            <div class="inv-total-line inv-grand-total">
              <span>Grand Total:</span>
              <span>₹${inv.amount.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>

        <div style="margin-top:30px; padding-top:14px; border-top:1px dashed var(--border-color); font-size:0.75rem; color:var(--text-muted); text-align:center;">
          This is an electronically generated and certified tax invoice from VELOCE Luxury Car Rental Inc.
        </div>
      </div>
    `;

    invoiceModal.classList.add('active');
  }

  if (closeInvModalBtn) {
    closeInvModalBtn.addEventListener('click', () => invoiceModal.classList.remove('active'));
  }
  if (printModalInvoiceBtn) {
    printModalInvoiceBtn.addEventListener('click', () => window.print());
  }

  if (exportCsvBtn) {
    exportCsvBtn.addEventListener('click', () => {
      const cat = document.getElementById('reportCategorySelect').value;
      const period = document.getElementById('reportPeriodSelect').value;

      let csvContent = "data:text/csv;charset=utf-8,";

      if (cat === 'revenue' || cat === 'bookings') {
        csvContent += "Booking ID,Customer,Vehicle,Pickup Date,Return Date,Amount,Payment,Status\n";
        VELOCE_DASHBOARD_DATA.bookings.forEach(b => {
          csvContent += `"${b.id}","${b.customer}","${b.vehicle}","${b.pickupDate}","${b.returnDate}","${b.amount}","${b.payment}","${b.status}"\n`;
        });
      } else if (cat === 'fleet') {
        csvContent += "Vehicle ID,Model,Brand,Plate,Category,Seats,Transmission,Fuel,Daily Rate,Status\n";
        VELOCE_DASHBOARD_DATA.fleet.forEach(c => {
          csvContent += `"${c.id}","${c.name}","${c.brand}","${c.plate}","${c.category}","${c.seats}","${c.transmission}","${c.fuel}","${c.price}","${c.status}"\n`;
        });
      } else {
        csvContent += "Customer ID,Name,Email,Phone,Bookings,Total Spent,Status\n";
        VELOCE_DASHBOARD_DATA.customers.forEach(c => {
          csvContent += `"${c.id}","${c.name}","${c.email}","${c.phone}","${c.bookingsCount}","${c.totalSpent}","${c.status}"\n`;
        });
      }

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `veloce_${cat}_report_${period}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      showToast(`Exported ${cat.toUpperCase()} report as CSV file!`, 'success');
    });
  }

  if (printReportBtn) {
    printReportBtn.addEventListener('click', () => window.print());
  }

  renderOverviewRecent();
  renderMasterBookings();
  renderFleetGrid();
  renderCustomersTable();
  renderInvoicesTable();
  initOverviewCharts();

});


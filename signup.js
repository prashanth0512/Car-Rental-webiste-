document.addEventListener('DOMContentLoaded', () => {
  const htmlRoot = document.documentElement;

  /* Theme */
  const themeToggle = document.getElementById('themeToggle');
  function applyTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('veloce_theme', theme);
  }
  applyTheme(localStorage.getItem('veloce_theme') || 'dark');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      applyTheme(htmlRoot.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  /* RTL / LTR */
  const dirToggle = document.getElementById('dirToggle');
  const dirText = document.getElementById('dirText');
  function applyDir(dir) {
    htmlRoot.setAttribute('dir', dir);
    localStorage.setItem('veloce_dir', dir);
    if (dirText) dirText.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
  }
  applyDir(localStorage.getItem('veloce_dir') || 'ltr');
  if (dirToggle) {
    dirToggle.addEventListener('click', () => {
      applyDir(htmlRoot.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl');
    });
  }

  /* Toast */
  const toastWrap = document.getElementById('toastWrap');
  function showToast(message, type) {
    if (!toastWrap) return;
    const toast = document.createElement('div');
    toast.className = 'auth-toast is-' + type;
    const icon = type === 'success' ? 'fa-circle-check' : type === 'error' ? 'fa-circle-xmark' : 'fa-circle-info';
    toast.innerHTML = '<i class="fa-solid ' + icon + '"></i><span></span>';
    toast.querySelector('span').textContent = message;
    toastWrap.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('hide');
      setTimeout(() => toast.remove(), 350);
    }, 3200);
  }

  /* Elements */
  const form = document.getElementById('signupForm');
  const nameInput = document.getElementById('signupName');
  const emailInput = document.getElementById('signupEmail');
  const phoneInput = document.getElementById('signupPhone');
  const passInput = document.getElementById('signupPassword');
  const confirmInput = document.getElementById('signupConfirm');
  const termsInput = document.getElementById('signupTerms');
  const submitBtn = document.getElementById('signupSubmit');
  const alertBox = document.getElementById('authAlert');
  const meter = document.getElementById('strengthMeter');
  const strengthText = document.getElementById('strengthText');

  const fields = {
    name: document.getElementById('fieldName'),
    email: document.getElementById('fieldEmail'),
    phone: document.getElementById('fieldPhone'),
    password: document.getElementById('fieldPassword'),
    confirm: document.getElementById('fieldConfirm'),
    terms: document.getElementById('fieldTerms')
  };

  function getUsers() {
    try { return JSON.parse(localStorage.getItem('veloce_users')) || []; }
    catch (e) { return []; }
  }

  function showAlert(msg, type) {
    alertBox.textContent = msg;
    alertBox.className = 'auth-alert is-' + type;
    alertBox.style.display = 'block';
  }

  function hideAlert() {
    alertBox.style.display = 'none';
  }

  function isEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  }

  function isPhone(v) {
    return /^[+]?[\d\s().-]{7,20}$/.test(v);
  }

  /* Show / hide password (both fields) */
  document.querySelectorAll('.auth-eye').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.target);
      const show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      btn.innerHTML = show ? '<i class="fa-regular fa-eye-slash"></i>' : '<i class="fa-regular fa-eye"></i>';
      btn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
    });
  });

  /* Password strength */
  const labels = ['Use 8+ characters with letters, numbers & symbols', 'Weak password', 'Fair password', 'Good password', 'Strong password'];

  function getStrength(pw) {
    if (!pw) return 0;
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score++;
    if (/\d/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return Math.max(score, 1);
  }

  passInput.addEventListener('input', () => {
    const level = getStrength(passInput.value);
    meter.setAttribute('data-level', level);
    strengthText.textContent = labels[level];
    fields.password.classList.remove('has-error');
    if (confirmInput.value) fields.confirm.classList.toggle('has-error', confirmInput.value !== passInput.value);
    hideAlert();
  });

  /* Live error clearing */
  nameInput.addEventListener('input', () => { fields.name.classList.remove('has-error'); hideAlert(); });
  emailInput.addEventListener('input', () => { fields.email.classList.remove('has-error'); hideAlert(); });
  phoneInput.addEventListener('input', () => { fields.phone.classList.remove('has-error'); });
  confirmInput.addEventListener('input', () => { fields.confirm.classList.toggle('has-error', confirmInput.value !== passInput.value); });
  termsInput.addEventListener('change', () => { fields.terms.classList.remove('has-error'); });

  /* Submit */
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    hideAlert();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim().toLowerCase();
    const phone = phoneInput.value.trim();
    const password = passInput.value;
    const confirm = confirmInput.value;
    let valid = true;

    if (name.length < 2) { fields.name.classList.add('has-error'); valid = false; }
    if (!isEmail(email)) { fields.email.classList.add('has-error'); valid = false; }
    if (phone && !isPhone(phone)) { fields.phone.classList.add('has-error'); valid = false; }
    if (password.length < 8) { fields.password.classList.add('has-error'); valid = false; }
    if (confirm !== password || !confirm) { fields.confirm.classList.add('has-error'); valid = false; }
    if (!termsInput.checked) { fields.terms.classList.add('has-error'); valid = false; }

    if (!valid) {
      showAlert('Please correct the highlighted fields.', 'error');
      return;
    }

    const users = getUsers();
    if (users.some(u => u.email === email) || email === 'admin@veloce-drive.com') {
      fields.email.classList.add('has-error');
      showAlert('An account with this email already exists. Please sign in.', 'error');
      return;
    }

    submitBtn.disabled = true;
    const label = submitBtn.querySelector('.btn-label');
    label.textContent = 'Creating account...';

    setTimeout(() => {
      users.push({ name: name, email: email, phone: phone, password: password, createdAt: Date.now() });
      localStorage.setItem('veloce_users', JSON.stringify(users));
      sessionStorage.setItem('veloce_registered_email', email);

      showAlert('Account created! Redirecting to sign in...', 'success');
      showToast('Welcome to VELOCE, ' + name.split(' ')[0] + '!', 'success');
      label.textContent = 'Redirecting...';

      setTimeout(() => { window.location.href = 'login.html'; }, 1000);
    }, 800);
  });
});


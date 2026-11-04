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
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('loginEmail');
  const passInput = document.getElementById('loginPassword');
  const rememberMe = document.getElementById('rememberMe');
  const submitBtn = document.getElementById('loginSubmit');
  const alertBox = document.getElementById('authAlert');
  const toggleBtn = document.getElementById('togglePassword');
  const forgotLink = document.getElementById('forgotLink');
  const fieldEmail = document.getElementById('fieldEmail');
  const fieldPassword = document.getElementById('fieldPassword');

  const DEMO_USER = { name: 'Alexander Vance', email: 'admin@veloce-drive.com', password: 'Admin@123' };

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

  /* Remembered email */
  const remembered = localStorage.getItem('veloce_remember_email');
  if (remembered && emailInput) {
    emailInput.value = remembered;
    if (rememberMe) rememberMe.checked = true;
  }

  /* Prefill after signup */
  const justRegistered = sessionStorage.getItem('veloce_registered_email');
  if (justRegistered) {
    emailInput.value = justRegistered;
    sessionStorage.removeItem('veloce_registered_email');
    showAlert('Account created successfully. Please sign in.', 'success');
  }

  /* Show / hide password */
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const show = passInput.type === 'password';
      passInput.type = show ? 'text' : 'password';
      toggleBtn.innerHTML = show ? '<i class="fa-regular fa-eye-slash"></i>' : '<i class="fa-regular fa-eye"></i>';
      toggleBtn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
    });
  }

  /* Live error clearing */
  emailInput.addEventListener('input', () => { fieldEmail.classList.remove('has-error'); hideAlert(); });
  passInput.addEventListener('input', () => { fieldPassword.classList.remove('has-error'); hideAlert(); });

  /* Social buttons */
  document.querySelectorAll('.auth-social-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast(btn.dataset.provider + ' sign-in is not configured in this demo.', 'info');
    });
  });

  if (forgotLink) {
    forgotLink.addEventListener('click', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      if (!isEmail(email)) {
        fieldEmail.classList.add('has-error');
        emailInput.focus();
        showToast('Enter your email first to reset your password.', 'error');
        return;
      }
      showToast('Password reset link sent to ' + email, 'success');
    });
  }

  /* Submit */
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    hideAlert();

    const email = emailInput.value.trim().toLowerCase();
    const password = passInput.value;
    let valid = true;

    if (!isEmail(email)) { fieldEmail.classList.add('has-error'); valid = false; }
    if (password.length < 6) { fieldPassword.classList.add('has-error'); valid = false; }
    if (!valid) {
      showAlert('Please correct the highlighted fields.', 'error');
      return;
    }

    submitBtn.disabled = true;
    const label = submitBtn.querySelector('.btn-label');
    label.textContent = 'Signing in...';

    setTimeout(() => {
      const users = getUsers();
      let user = users.find(u => u.email === email);
      if (!user && email === DEMO_USER.email) user = DEMO_USER;

      if (!user) {
        submitBtn.disabled = false;
        label.textContent = 'Sign In';
        showAlert('No account found with this email. Please create an account.', 'error');
        return;
      }

      if (user.password !== password) {
        submitBtn.disabled = false;
        label.textContent = 'Sign In';
        fieldPassword.classList.add('has-error');
        showAlert('Incorrect password. Please try again.', 'error');
        return;
      }

      if (rememberMe.checked) localStorage.setItem('veloce_remember_email', email);
      else localStorage.removeItem('veloce_remember_email');

      localStorage.setItem('veloce_session', JSON.stringify({ name: user.name, email: user.email, at: Date.now() }));
      showAlert('Welcome back, ' + user.name + '! Redirecting...', 'success');
      showToast('Signed in successfully', 'success');
      label.textContent = 'Redirecting...';

      setTimeout(() => { window.location.href = 'dashboard.html'; }, 900);
    }, 700);
  });
});


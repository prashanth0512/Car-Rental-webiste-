'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const htmlRoot = document.documentElement;

  const storedTheme = localStorage.getItem('veloce_theme') || 'dark';
  applyTheme(storedTheme);

  function applyTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('veloce_theme', theme);
  }

  function toggleTheme() {
    const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  const dirToggle = document.getElementById('dirToggle');
  const dirText = document.getElementById('dirText');

  const storedDir = localStorage.getItem('veloce_dir') || 'ltr';
  applyDirection(storedDir);

  function applyDirection(dir) {
    htmlRoot.setAttribute('dir', dir);
    localStorage.setItem('veloce_dir', dir);
    if (dirText) {
      dirText.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
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

  const daysEl = document.getElementById('daysNum');
  const hoursEl = document.getElementById('hoursNum');
  const minutesEl = document.getElementById('minutesNum');
  const secondsEl = document.getElementById('secondsNum');

  const FIFTEEN_DAYS_MS = 15 * 24 * 60 * 60 * 1000;
  let targetTime = parseInt(localStorage.getItem('veloce_launch_target'), 10);

  if (!targetTime || isNaN(targetTime) || targetTime <= Date.now()) {
    targetTime = Date.now() + FIFTEEN_DAYS_MS;
    localStorage.setItem('veloce_launch_target', targetTime);
  }

  function updateCountdown() {
    const now = Date.now();
    const remaining = Math.max(0, targetTime - now);

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
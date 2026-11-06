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

  const carWrap = document.querySelector('.car-cruising-wrap');
  if (carWrap) {
    carWrap.addEventListener('mouseenter', () => {
      carWrap.style.transform = 'scale(1.1) translateY(-10px)';
    });
    carWrap.addEventListener('mouseleave', () => {
      carWrap.style.transform = '';
    });
  }
});

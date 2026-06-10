/* NAV ACTIVE ON SCROLL */
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) {
      current = sec.id;
    }
  });

  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) {
      a.classList.add('active');
    }
  });
});

/* SCROLL REVEAL */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.problema-card, .fluxo-card, .tech-card, .objetivo-item, .publico-card, .beneficio-card, .aplicacao-item'
).forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

/* ALTERAÇÃO DE TEMAS */
function setTheme(theme) {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('.theme-btn');

  buttons.forEach(btn => btn.classList.remove('active'));

  if (theme === 'solar') {
    root.style.setProperty('--orange', '#E8820A');
    root.style.setProperty('--orange-light', '#F5A235');
    root.style.setProperty('--orange-glow', 'rgba(232, 130, 10, 0.3)');
    root.style.setProperty('--card-border', 'rgba(232, 130, 10, 0.25)');
    root.style.setProperty('--card-bg', 'rgba(20, 14, 4, 0.85)');
    buttons[0].classList.add('active');
  }

  if (theme === 'space') {
    root.style.setProperty('--orange', '#00BFFF');
    root.style.setProperty('--orange-light', '#6FDFFF');
    root.style.setProperty('--orange-glow', 'rgba(0, 191, 255, 0.3)');
    root.style.setProperty('--card-border', 'rgba(0, 191, 255, 0.25)');
    root.style.setProperty('--card-bg', 'rgba(4, 14, 24, 0.85)');
    buttons[1].classList.add('active');
  }

  if (theme === 'quantum') {
    root.style.setProperty('--orange', '#9D4EDD');
    root.style.setProperty('--orange-light', '#C77DFF');
    root.style.setProperty('--orange-glow', 'rgba(157, 78, 221, 0.3)');
    root.style.setProperty('--card-border', 'rgba(157, 78, 221, 0.25)');
    root.style.setProperty('--card-bg', 'rgba(17, 6, 28, 0.85)');
    buttons[2].classList.add('active');
  }

  localStorage.setItem('afelius-theme', theme);
}

/* CARREGAR TEMA SALVO */
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('afelius-theme') || 'solar';
  setTheme(savedTheme);
});
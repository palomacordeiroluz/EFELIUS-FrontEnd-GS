const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const colorButtonGreen = document.getElementById('colorButtonGreen');
const colorButtonOrange = document.getElementById('colorButtonOrange');
const colorButtonBlue = document.getElementById('colorButtonBlue');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

/* ── SCROLL REVEAL ── */
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

colorButtonGreen.addEventListener("click", () => {
    document.documentElement.style.setProperty("--main", "#24af12"); // green
    document.documentElement.style.setProperty("--main-light", "#3fff49"); // green
    document.documentElement.style.setProperty("--main-glow", "rgba(52, 177, 35, 0.3)"); // green
});
colorButtonOrange.addEventListener("click", () => {
    document.documentElement.style.setProperty("--main", "#E8820A"); // green
    document.documentElement.style.setProperty("--main-light", "#F5A235"); // green
    document.documentElement.style.setProperty("--main-glow", "rgba(232, 130, 10, 0.3)") // green
});
colorButtonBlue.addEventListener("click", () => {
    document.documentElement.style.setProperty("--main", "#4c60cf"); // green
    document.documentElement.style.setProperty("--main-light", "#7a9cfa"); // green
    document.documentElement.style.setProperty("--main-glow", "rgba(58, 43, 190, 0.3)"); // green
});
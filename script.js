const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navAnchors = [...document.querySelectorAll('.nav-links a')];

const closeMenu = () => {
  navLinks?.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
};

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks?.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

navAnchors.forEach((link) => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

document.querySelector('#year').textContent = new Date().getFullYear();

const sections = [...document.querySelectorAll('.content-section[id]')];

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navAnchors.forEach((link) => {
      link.classList.toggle('active', link.hash === `#${visible.target.id}`);
    });
  },
  { rootMargin: '-15% 0px -70% 0px', threshold: [0, 0.2, 0.5] }
);

sections.forEach((section) => observer.observe(section));

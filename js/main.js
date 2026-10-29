const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('[data-nav]');
const navigationLinks = navigation.querySelectorAll('a');
const revealItems = document.querySelectorAll('.reveal');
const year = document.querySelector('[data-year]');

const setHeaderState = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 24);
};

const closeMenu = () => {
  navigation.classList.remove('is-open');
  document.body.classList.remove('nav-open');
  menuButton.setAttribute('aria-expanded', 'false');
};

const toggleMenu = () => {
  const isOpening = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(isOpening));
  navigation.classList.toggle('is-open', isOpening);
  document.body.classList.toggle('nav-open', isOpening);

  if (isOpening) {
    navigation.querySelector('a').focus();
  }
};

menuButton.addEventListener('click', toggleMenu);

navigationLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 820) closeMenu();
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    closeMenu();
    menuButton.focus();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 820) closeMenu();
});

window.addEventListener('scroll', setHeaderState, { passive: true });
setHeaderState();

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

year.textContent = new Date().getFullYear();

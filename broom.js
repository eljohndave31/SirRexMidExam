const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav__links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const isExpanded = navLinks.classList.contains('active');
  menuToggle.setAttribute('aria-expanded', isExpanded);
});

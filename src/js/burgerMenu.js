const openMenuBtn = document.querySelector('.menu-btn-my');
const closeMenuBtn = document.querySelector('.btn-closed-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');

openMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});


const burgerMenu = function () {
  const menuElement = document.querySelector('.main-nav__wrapper');
  const menuButtonElement = document.querySelector('.main-nav__toggle');
  const headerNavElement = document.querySelector('.main-nav__list');
  const menuLogoElement = document.querySelector('.main-nav__logo-link');
  const bodyElement = document.querySelector('body');
  const mainNavItems = document.querySelectorAll('.main-nav__item');

  const toggleMenu = () => {
    menuElement.classList.toggle('main-nav__wrapper--open');
    headerNavElement.classList.toggle('main-nav__list--open');
    menuButtonElement.classList.toggle('main-nav__toggle-close');
    menuLogoElement.classList.toggle('main-nav__logo-link--menu-open');
    bodyElement.classList.toggle('is-main-nav-open');
  };

  menuButtonElement.addEventListener('click', () => {
    toggleMenu();
  });

  mainNavItems.forEach((item) => {
    item.addEventListener('click', () => {
      toggleMenu();
    });
  });
};

export { burgerMenu };

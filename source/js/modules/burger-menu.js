//BURGER-MENU
const burgerMenu = function () {
  const menuElement = document.querySelector('.main-nav__wrapper');
  const menuButtonElement = document.querySelector('.main-nav__toggle');
  const headerNavElement = document.querySelector('.main-nav__list');
  const menuLogoElement = document.querySelector('.main-nav__logo-link');

  const onClickMenuButtonElement = () => {
    menuElement.classList.toggle('main-nav__wrapper--open');
    headerNavElement.classList.toggle('main-nav__list--open');
    menuButtonElement.classList.toggle('main-nav__toggle-close');
    menuLogoElement.classList.toggle('main-nav__logo-link--menu-open');
  };

  menuButtonElement.addEventListener('click', onClickMenuButtonElement);
};

export {burgerMenu};


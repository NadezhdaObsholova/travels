import swiper from '../../vendor/swiper.js';

const initAdvSlider = () => {
  let desktop = window.matchMedia('(min-width: 1200px)');
  const advSlider = document.querySelector('[data-swiper="adv-slider"]');
  const buttonNext = document.querySelector('[data-button="adv-button-next"]');
  const buttonPrev = document.querySelector('[data-button="adv-button-prev"]');

  // eslint-disable-next-line
  let mySwiper = new Swiper(advSlider, {
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    initialSlide: 2,
    spaceBetween: 30,
  });

  if (!desktop.matches) {
    mySwiper.destroy();
  }
};

export { initAdvSlider };

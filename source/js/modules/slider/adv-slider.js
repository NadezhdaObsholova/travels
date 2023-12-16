import swiper from '../../vendor/swiper.js';

const initAdvsSlider = () => {
  let desktop = window.matchMedia('(min-width: 1200px)');
  const advSlider = document.querySelector('[data-swiper="adv-slider"]');
  const buttonNext = document.querySelector('[data-button="adv-button-next"]');
  const buttonPrev = document.querySelector('[data-button="adv-button-prev"]');

  if (desktop.matches && advSlider) {
    // eslint-disable-next-line
    new Swiper(advSlider, {
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

  } else {
    swiper.destroy(); // то уничтожаем его
  }
};

export { initAdvsSlider };

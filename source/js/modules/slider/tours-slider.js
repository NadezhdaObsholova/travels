
const initToursSlider = () => {

  const toursSlider = document.querySelector('[data-swiper="tours-slider"]');
  const buttonNext = document.querySelector('[data-button="tours-button-next"]');
  const buttonPrev = document.querySelector('[data-button="tours-button-prev"]');

  if (toursSlider) {
    // eslint-disable-next-line
    new Swiper(toursSlider, {
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },
      loop: false,
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 18,
        },

        350: {
          slidesPerView: 1,
        },
      },
    });
  }
};

export { initToursSlider };

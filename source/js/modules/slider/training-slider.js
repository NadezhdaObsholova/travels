
const initTrainingSlider = () => {

  const toursSlider = document.querySelector('[data-swiper="training-slider"]');
  const buttonNext = document.querySelector('[data-button="training-button-next"]');
  const buttonPrev = document.querySelector('[data-button="training-button-prev"]');

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
          slidesPerView: 4,
          spaceBetween: 20,
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        350: {
          initialSlide: 2,
          slidesPerView: 1,
        },
      },
    });
  }
};

export { initTrainingSlider };

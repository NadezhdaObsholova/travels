
const initReviewsSlider = () => {

  const reviewsSlider = document.querySelector('[data-swiper="reviews-slider"]');
  const buttonNext = document.querySelector('[data-button="reviews-button-next"]');
  const buttonPrev = document.querySelector('[data-button="reviews-button-prev"]');

  if (reviewsSlider) {
    // eslint-disable-next-line
    new Swiper(reviewsSlider, {
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      slidesPerView: 'auto',
      centeredSlides: false,
      loop: true,

      breakpoints: {
        1200: {
          initialSlide: 0,
          spaceBetween: 120,
        },

        768: {
          initialSlide: 0,
          spaceBetween: 30,
        },

        320: {
          initialSlide: 0,
          spaceBetween: 30,
          centeredSlides: true,
        },
      },
    });
  }
};

export { initReviewsSlider };

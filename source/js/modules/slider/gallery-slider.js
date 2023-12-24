
const initGallerySlider = () => {

  const gallerySlider = document.querySelector('[data-swiper="gallery-slider"]');
  const buttonNext = document.querySelector('[data-button="gallery-button-next"]');
  const buttonPrev = document.querySelector('[data-button="gallery-button-prev"]');

  if (gallerySlider) {
    // eslint-disable-next-line
    new Swiper(gallerySlider, {
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },
      loop: false,
      breakpoints: {
        1200: {
          slidesPerView: 'auto',
          spaceBetween: 5,
        },

        768: {
          initialSlide: 5,
          slidesPerView: 3,
          spaceBetween: 5,
        },

        350: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
      },
    });
  }
};

export { initGallerySlider };

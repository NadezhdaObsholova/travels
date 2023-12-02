const startVideo = () => {
  const playBtn = document.querySelector('.hero__media-button');

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      const preview = document.querySelector('.hero__media-preview');
      if (preview) {
        preview.style.display = 'none';
      }

      const videoIframe = document.querySelector('.hero__media-source');
      const src = videoIframe.src;
      videoIframe.src = src.includes('?') ? `${src}&autoplay=1` : `${src}?autoplay=1`;

      playBtn.style.display = 'none';
    });
  }
};

export {startVideo};

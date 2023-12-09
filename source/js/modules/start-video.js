const createIframe = () => {
  const video = document.querySelector('[data-video="hero-video"]');
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  iframe.setAttribute('title', 'Бесплатные интерактивные онлайн-курсы');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  iframe.setAttribute('allowfullscreen', '');
  iframe.classList.add('hero__media-iframe');

  video.appendChild(iframe);
};

const startVideo = () => {
  const button = document.querySelector('[data-button="video-button"]');
  const preview = document.querySelector('[data-preview="preview"]');

  button.addEventListener('click', () => {
    preview.remove();
    createIframe();
  });
};

export {startVideo};

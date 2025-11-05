document.addEventListener('DOMContentLoaded', function () {
  const gallery = new PhotoSwipeLightbox({
    gallery: '.my-gallery',
    children: 'a',
    pswpModule: PhotoSwipe,
    caption: (el) => el.dataset.caption || el.querySelector('img').alt
  });

  gallery.init();
});
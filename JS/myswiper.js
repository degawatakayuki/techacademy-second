const swiper = new Swiper('.c-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  seed: 1000,
  effect: 'slide',
  autoplay: {
    delay: 3000
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
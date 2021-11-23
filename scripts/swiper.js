// スワイパーに関するコードです。

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'fade',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',

    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: true,

});
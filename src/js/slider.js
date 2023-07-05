// var swiper = new Swiper('.swiper-container', {
//   slidesPerView: 1,
//   spaceBetween: 0,
//   centeredSlides: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   loop: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: true,
//   },
// });
var swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  devDependencies: {
    serve: '^11.2.0',
  },
  main: 'index.html',
  name: 'swiper-navigation',
  scripts: {
    build:
      'echo This is a static template, there is no bundler or bundling involved!',
    start: 'serve',
  },
  tags: ['swiper'],
});

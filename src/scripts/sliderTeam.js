import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.section-team .swiper', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".section-team .swiper-button-next",
    prevEl: ".section-team .swiper-button-prev",
  },
  effect: 'slide',
  speed: 800,
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});
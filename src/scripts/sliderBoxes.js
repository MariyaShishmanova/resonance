import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.section-boxes .swiper', {
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  // autoplay: {
  //   delay: 5000, // Adjust delay between slides (in milliseconds)
  //   disableOnInteraction: false, // Allow autoplay to continue after user interaction
  // },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: ".section-team .swiper-button-next",
  //   prevEl: ".section-team .swiper-button-prev",
  // },
  
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },

    1110: {
      spaceBetween: 130
    }
  }
});

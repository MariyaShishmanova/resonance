import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener("DOMContentLoaded", function() {
  const swiper = new Swiper('.section-boxes .swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,
    autoplay: {
      delay: 5000, // Adjust delay between slides (in milliseconds)
      disableOnInteraction: false // Allow autoplay to continue after user interaction
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.section-boxes .swiper-button-next',
      prevEl: '.section-boxes .swiper-button-prev'
    },
    effect: 'slide',
    speed: 800,

    breakpoints: {
      // when window width is >= 481px
      481: {
        slidesPerView: 2
      },
  
      // when window width is >= 769px
      769: {
        slidesPerView: 3,
        pagination: {}
      },
  
      1110: {
        spaceBetween: 130
      }
    }
  });

  // Check window width on each slide change and adjust the number of slides
  swiper.on('slideChange', function () {
    const windowWidth = window.innerWidth;
    if (windowWidth < 481 && swiper.params.slidesPerView !== 1) {
      swiper.params.slidesPerView = 1;
      swiper.update();
    } else if (windowWidth >= 481 && windowWidth < 769 && swiper.params.slidesPerView !== 2) {
      swiper.params.slidesPerView = 2;
      swiper.update();
    } else if (windowWidth >= 769 && swiper.params.slidesPerView !== 3) {
      swiper.params.slidesPerView = 3;
      swiper.update();
    }
  });
});
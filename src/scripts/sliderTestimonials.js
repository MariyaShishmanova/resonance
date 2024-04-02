import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.section-testimonials .swiper', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".section-testimonials .swiper-button-next",
    prevEl: ".section-testimonials .swiper-button-prev",
  },

  effect: 'coverflow', 
  coverflowEffect: {
    rotate: 0, // Set the rotation angle to 0
    stretch: 100, // Increase the stretch to cover the entire slide
    depth: 300, // Increase the depth for the perspective
    modifier: 1, // Increase the modifier for the depth effect
    slideShadows: false, // Disable slide shadows
  },
});
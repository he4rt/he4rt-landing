// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  effect: 'coverflow',
  slidesPerView: "auto",
  slidesPerGroup: 1,
  centeredSlides: false,
  grabCursor: true,
  spaceBetween: 25,
  coverflowEffect: {
    rotate: 150,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
});

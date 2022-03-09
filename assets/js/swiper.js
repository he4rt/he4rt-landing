// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    allowTouchMove: true,
    speed: 500,
});
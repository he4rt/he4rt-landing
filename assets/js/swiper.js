// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const swiper = new Swiper(".mySwiper", {
    allowTouchMove: true,
    grabCursor: true,
    speed: 500,
    breakpoints: {
        320: {
            spaceBetween: 20,
            slidesPerView: 'auto'
        },
        640: {
            spaceBetween: 30,
            slidesPerView: 2,
        }
    }
});
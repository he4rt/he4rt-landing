import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../css/style.css';

const swiper = new Swiper(".mySwiper", {
    modules: [Navigation, Pagination],
    allowTouchMove: true,
    grabCursor: true,
    speed: 500,
    loop: true,
    breakpoints: {
        320: {
            spaceBetween: 20,
            slidesPerView: 'auto'
        },
        640: {
            spaceBetween: 30,
            slidesPerView: 2,
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
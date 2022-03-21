import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../css/style.css';

const swiper = new Swiper(".mySwiper", {
    modules: [Navigation, Pagination, Autoplay],
    allowTouchMove: true,
    grabCursor: true,
    speed: 500,
    loop: true,
    autoplay: {
        delay: 6000
    },
    breakpoints: {
        320: {
            spaceBetween: 30,
            slidesPerView: 1.7,
        },
        375: {
            spaceBetween: 30,
            slidesPerView: 2,
        },
        425: {
            spaceBetween: 30,
            slidesPerView: 2.3,
        },
        515:{
            spaceBetween: 30,
            slidesPerView: 2.6,
        },
        575:{
            spaceBetween: 30,
            slidesPerView: 2.9,
        },
        //aqui muda o tamanho do slide
        640: {
            spaceBetween: 0,
            slidesPerView: 'auto',
        },
        715:{
            spaceBetween: 2,
            slidesPerView: 'auto',
        },
        768:{
            spaceBetween: 110,
            slidesPerView: 'auto',
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
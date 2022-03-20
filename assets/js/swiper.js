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
            spaceBetween: 0,
            slidesPerView: 1.7,
        },
        375: {
            spaceBetween: 0,
            slidesPerView: 2,
        },
        425: {
            spaceBetween: 0,
            slidesPerView: 2.3,
        },
        515:{
            spaceBetween: 0,
            slidesPerView: 2.6,
        },
        575:{
            spaceBetween: 0,
            slidesPerView: 2.9,
        },
        //aqui muda o tamanho do slide
        640: {
            spaceBetween: 0,
            slidesPerView: 2.7,
        },
        715:{
            spaceBetween: 2,
            slidesPerView: 3.1,
        },
        768:{
            spaceBetween: 2,
            slidesPerView: 3,
        },
        861:{
            spaceBetween: 2,
            slidesPerView: 3.4,
        },
        951:{
            spaceBetween: 2,
            slidesPerView: 3.6,
        },
        1024:{
            spaceBetween: 0,
            slidesPerView: 1.7,
        },
        1030:{
            spaceBetween: 0,
            slidesPerView: 1.9,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
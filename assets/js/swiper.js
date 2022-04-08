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
            spaceBetween: 0,
            slidesPerView: 1.5,
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
            slidesPerView: 3,
        },
        715:{
            spaceBetween: 2,
            slidesPerView: 2.8,
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
            slidesPerView: 3.3,
        },
        1024:{
            spaceBetween: 0,
            slidesPerView: 1.8,
        },
        1030:{
            spaceBetween: 0,
            slidesPerView: 1.9,
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
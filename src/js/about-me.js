// import Swiper from 'swiper';
// import 'swiper/css';

import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
Swiper.use([Navigation, Keyboard, Mousewheel]);

import 'swiper/css/bundle';

export const aboutMeSwiper = new Swiper('.swiper-about-me', {
  slidesPerView: 6,
  spaceBetween: 0,
  //   slidesPerGroup: 6,

  breakpoints: {
    320: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },

  initialSlide: 0,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  grabCursor: true,
  keyboard: true,
  mousewheel: {
    invert: true,
  },
  //   navigation: {
  //     nextEl: '.swiper-button-prev',
  //   },
  on: {
    slideChange: function () {
      //   let prevSlide = this.slides[this.previousIndex];
      //   prevSlide.style.backgroundColor = '';
      let currentSlide = this.slides[this.activeIndex];
      currentSlide.style.backgroundColor = '#ED3B44';
      let currentNextSlide = this.slides[this.activeIndex + 1];
      currentNextSlide.style.backgroundColor = '';
    },
  },
});

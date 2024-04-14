// import Swiper from 'swiper';
// import 'swiper/css';

import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Keyboard, Mousewheel, Pagination]);

import 'swiper/css';

export const aboutMeSwiper = new Swiper('.swiper-about-me', {
    slidesPerView: 6,
    breakpoints:{
        375: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1440: {
            slidesPerView: 5,
        }
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
  navigation: {
  nextEl: '.btn-next',
  },
  navigationPosition: 'right',
  effect: 'fade',
  allowSlidePrev: false,
  on: {
        slideChange: function () {
            let currentSlide = this.slides[this.activeIndex];
            currentSlide.style.backgroundColor = 'transparent';
            let currentNextSlide = this.slides[this.activeIndex + 1];
            currentNextSlide.style.backgroundColor = '#ED3B44';
           
        }
    }
});

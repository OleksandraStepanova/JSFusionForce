// import Swiper from 'swiper';
// import 'swiper/css';

import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Keyboard, Mousewheel, Pagination]);

import 'swiper/css';

export const aboutMeSwiper = new Swiper('.swiper-about-me', {
    slidesPerView: 'auto',
    breakpoints:{
        375: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
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
      document.querySelector('.swiper-slide.skills-item-wrap-activ').classList.remove('skills-item-wrap-activ');
      this.slides[this.activeIndex].classList.add('skills-item-wrap-activ')
           
        }
    }
});

import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
Swiper.use([Navigation, Keyboard, Mousewheel]);

import 'swiper/css';

new Swiper('.swiper-projects', {
  slidesPerView: 'auto',
  loop: false,
  speed: 400,
  grabCursor: true,
  spaceBetween: 16,
  slidesPerView: 1,

  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },

  mousewheel: { sensitivity: 1 },

  on: {
    reachEnd: function () {
      document.querySelector('.btn-prev').classList.remove('no-active');
      document.querySelector('.btn-next').classList.add('no-active');
    },

    reachBeginning: function () {
      document.querySelector('.btn-next').classList.remove('no-active');

      document.querySelector('.btn-prev').classList.add('no-active');
    },
  },
});

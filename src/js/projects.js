import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
Swiper.use([Navigation, Keyboard]);

import 'swiper/css';

new Swiper('.swiper-projects', {
  slidesPerView: 'auto',
  loop: false,

  keyboard: {
    enabled: true,
  },
  spaceBetween: 16,
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
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

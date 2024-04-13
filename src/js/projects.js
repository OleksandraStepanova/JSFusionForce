import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
Swiper.use([Navigation]);

import 'swiper/css/bundle';

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
});

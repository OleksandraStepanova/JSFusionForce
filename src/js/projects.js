import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
Swiper.use([Navigation, Keyboard, Mousewheel]);

import 'swiper/css';

const swiperProgects =  new Swiper('.swiper-projects', {
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
});


swiperProgects.on('slideChange', function () {
  if (swiperProgects.isBeginning){      
      document.querySelector('.btn-prev').classList.add('no-active');      
    }else if (swiperProgects.isEnd) {      
      document.querySelector('.btn-next').classList.add('no-active');
    }
  else {
    document.querySelector('.btn-prev').classList.remove('no-active');
    document.querySelector('.btn-next').classList.remove('no-active');
  }
})
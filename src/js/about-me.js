import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Keyboard, Mousewheel, Pagination]);

import 'swiper/css';
import Accordion from 'accordion-js';

export const aboutMeSwiper = new Swiper('.swiper-about-me', {
  slidesPerView: 'auto',
  breakpoints: {
    375: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
  speed: 400,

  initialSlide: 0,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    invert: true,
  },
  navigation: {
    nextEl: '.about-me-btn-next',
  },
  navigationPosition: 'right',
  effect: 'fade',
  allowSlidePrev: false,
  on: {
    slideChange: function () {
      document
        .querySelector('.swiper-slide.skills-item-wrap-activ')
        .classList.remove('skills-item-wrap-activ');
      this.slides[this.activeIndex].classList.add('skills-item-wrap-activ');
    },
  },
});

const buttons = document.querySelectorAll('.ac-trigger-about-me');
const icons = document.querySelectorAll('.about-me-icon');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const icon = icons[index];
    const isOpen = icon.classList.contains('about-me-icon-open');
    if (isOpen) {
      icon.classList.remove('about-me-icon-open');
    } else {
      icon.classList.add('about-me-icon-open');
    }
  });
});

new Accordion('.accordion-container', {
  duration: 400,
  showMultiple: false,
  activeClass: 'is-active',
  showMultiple: true,
  openOnInit: [0],

});

import { getReviews } from './api';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
Swiper.use([Navigation, Keyboard]);

import 'swiper/css';

//=====================Slider======================//

export const reviewsSwiper = new Swiper('.swiper-reviews', {
  slidesPerView: 'auto',

  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  },
  loop: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  lazyPreloadPrevNext: 1,
  grabCursor: true,
  on: {
    reachEnd: function () {
      document
        .querySelector('.swiper-button-next')
        .classList.remove('no-active');
      document.querySelector('.swiper-button-prev').classList.add('no-active');
    },
    reachBeginning: function () {
      document
        .querySelector('.swiper-button-prev')
        .classList.remove('no-active');
      document.querySelector('.swiper-button-next').classList.add('no-active');
    },
  },
  speed: 800,
});
//=====================/Slider======================//

//=====================Render======================//

function reviewTemplate({ author, avatar_url, review }) {
  return `<li class="reviews-list-item swiper-slide">
          <a class="reviews-image" href='${avatar_url}'>
            <img src='${avatar_url}' alt="avatar author" class="photo-img" />
          </a>
          <h3 class="reviews-title-name">${author}</h3>
          <p class="reviews-text">${review}
          </p>
        </li>`;
}

function reviewsTemplate(arr) {
  return arr.map(reviewTemplate).join(' ');
}

window.onload = createReview;
const reviews = document.querySelector('.reviews-list');

async function createReview() {
  try {
    const data = await getReviews();
    console.log(data);
    const markup = reviewsTemplate(data);
    reviews.innerHTML = markup;
  } catch (error) {
    console.log(error);
  }
}

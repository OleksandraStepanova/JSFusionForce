import { getReviews } from './api';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
Swiper.use([Navigation, Keyboard, Mousewheel]);

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
  mousewheel: { sensitivity: 1 },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  spaceBetween: 16,
  navigation: {
    nextEl: '.reviews-btn-next',
    prevEl: '.reviews-btn-prev',
  },
  // lazyPreloadPrevNext: 1,
  grabCursor: true,

  speed: 800,
});

reviewsSwiper.on('slideChange', function () {
  if (reviewsSwiper.isBeginning) {
    document.querySelector('.reviews-btn-prev').classList.add('no-active');
  } else if (reviewsSwiper.isEnd) {
    document.querySelector('.reviews-btn-next').classList.add('no-active');
  } else {
    document.querySelector('.reviews-btn-prev').classList.remove('no-active');
    document.querySelector('.reviews-btn-next').classList.remove('no-active');
  }
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

    const markup = reviewsTemplate(data);
    reviews.innerHTML = markup;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    reviews.innerHTML = '<p id="reviews-text-err">Not found</p>';
    document.querySelector('.reviews-btn-next').classList.add('no-active');
  }
}

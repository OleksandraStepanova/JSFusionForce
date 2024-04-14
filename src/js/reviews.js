import { getReviews } from './api';
import { reviewsSwiper } from './slider';

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

//====================/Render======================//

//======================CONST======================//

//=====================/CONST======================//

//====================Functions======================//

//===================/Functions======================//

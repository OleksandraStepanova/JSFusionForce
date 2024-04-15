

const burgerMenu = document.querySelector('.mobile-button-menu');
const modal = document.querySelector('.modal-window-mb');
const closeButton = document.querySelector('.modal-menu-close-btn');
const menuButtons = document.querySelectorAll('.modal-menu-item');



function toggle(event) {
  modal.classList.toggle('is-open');
}

burgerMenu.addEventListener('click', toggle);
closeButton.addEventListener('click', toggle);
menuButtons.forEach(button => button.addEventListener('click', toggle));

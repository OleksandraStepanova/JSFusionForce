const mobileBtn = document.querySelector('.mobile-button-menu');
const burgerMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-menu-svg');

function openMenu() {
  if (burgerMenu.style.right !== '-100%') {
    burgerMenu.style.right = '0';
    burgerMenu.style.display = 'flex';
  } else {
    burgerMenu.style.right = '0';
    burgerMenu.style.display = 'none';
  }
  return 0;
}

function closeMenu() {
  burgerMenu.style.right = '-100%';
}

const menuLinks = document.querySelectorAll('.mobile-menu-part');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

mobileBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

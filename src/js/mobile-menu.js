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

mobileBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', () => {
  burgerMenu.style.right = '-100%';
});
const menuLinks = document.querySelectorAll('.mobile-menu a');

menuLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId); 

    if (targetSection) {
      const offsetTop = targetSection.offsetTop;
      window.scrollTo(0, offsetTop);
      burgerMenu.style.right = '-100%';
    }
  });
});
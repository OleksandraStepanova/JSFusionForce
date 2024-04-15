
const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");
const menuItems = document.querySelectorAll(".menu-nav li a");
const orderButton = document.querySelector(".order-button");

  
    function toggleMenu() {
      menuNav.classList.toggle("show-menu");
    }
  
    menuBtn.addEventListener("click", function() {
      toggleMenu(); 
    });
      
    menuItems.forEach(link => link.addEventListener("click", scrollToSection));
 
function scrollToSection(event) {
  toggleMenu();
  
  // const targetId = this.getAttribute('href').substring(1);
  // const sectionRef = document.querySelector(`.${targetId}`);

  // console.log(targetId);
  // console.log(sectionRef);
  // console.log(sectionRef.offsetTop);

  // if (sectionRef) (
  //   window.scrollBy({
  //   top: sectionRef.offsetTop,
  //   behavior: 'smooth',
  // })
  // )
}


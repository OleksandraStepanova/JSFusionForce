
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
      
    menuItems.forEach(function(item) {
      item.addEventListener("click", function() {
        toggleMenu(); 
      });
    });

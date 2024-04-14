document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menu-btn");
    const menuNav = document.querySelector(".menu-nav");
  
    function toggleMenu() {
      menuNav.classList.toggle("visually-hidden");
    }
  
    menuBtn.addEventListener("click", function() {
      toggleMenu(); 
    });
  
    const menuItems = document.querySelectorAll(".menu-nav li a");
    menuItems.forEach(function(item) {
      item.addEventListener("click", function() {
        toggleMenu(); 
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll(".menu-nav li a");
    const orderButton = document.querySelector(".order-button");
  
    function smoothScroll(targetId) {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const offsetTop = targetSection.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    }
  
    menuLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault(); 
        const targetId = this.getAttribute("href");
        smoothScroll(targetId);
      });
    });
  
    orderButton.addEventListener("click", function(event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      smoothScroll(targetId);
    });
  });
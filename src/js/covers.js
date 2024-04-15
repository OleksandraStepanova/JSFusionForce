 
function toggleAnimation(isInViewport) {
    const images = document.querySelectorAll('.marquee__inner img');
    images.forEach(image => {
      if (isInViewport) {
        image.classList.add('running');
      } else {
        image.classList.remove('running');
      }
    });
  }
  
  const coversSection = document.querySelector('.covers');
  
  const threshold = 0.4;
 
  const observerOptions = {
    threshold: threshold
  };
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      toggleAnimation(entry.isIntersecting);
    });
  }, observerOptions);
  
  observer.observe(coversSection);
  

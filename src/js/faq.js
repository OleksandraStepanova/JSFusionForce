import Accordion from 'accordion-js';

new Accordion('.accordion-container-faq', {
  duration: 400,
  showMultiple: false,
});


const buttonsFaq = document.querySelectorAll('.ac-trigger-faq');
const iconsFaq = document.querySelectorAll('.accordion-button-icon');

buttonsFaq.forEach((button, index) => {
  button.addEventListener('click', () => {
    const icon = iconsFaq[index];
    const isOpen = icon.classList.contains('about-me-icon-open');
    if (isOpen) {
      icon.classList.remove('about-me-icon-open');
    } else {
      icon.classList.add('about-me-icon-open');
    }
  });
});
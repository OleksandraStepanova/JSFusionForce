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
    const isOpen = icon.classList.contains('accordion-button-icon-open');
    if (isOpen) {
      icon.classList.remove('accordion-button-icon-open');
    } else {
      icon.classList.add('accordion-button-icon-open');
    }
  });
});
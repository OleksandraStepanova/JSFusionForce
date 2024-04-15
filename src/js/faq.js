import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';
document.addEventListener('DOMContentLoaded', function () {
  const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const accordionItem = button.closest('.faq-element');
      const accordionContent =
        accordionItem.querySelector('.accordion-content');

      accordionContent.classList.toggle('active');

      const icon = button.querySelector('.accordion-button-icon');
      icon.classList.toggle('active');

      const useElement = button.querySelector('.accordion-button-icon use');
      if (accordionContent.classList.contains('active')) {
        useElement.classList.add('icon-more');
        useElement.classList.remove('icon-less');
       
        icon.classList.add('rotate-icon');
      } else {
        useElement.classList.add('icon-less');
        useElement.classList.remove('icon-more');
        icon.classList.remove('rotate-icon');
      }
      if (accordionContent.classList.contains('active')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }
      const allAccordionItems = document.querySelectorAll('.faq-element');
      allAccordionItems.forEach(item => {
        if (item !== accordionItem) {
          item.style.height = null;
        }
      });
    });
  });
});

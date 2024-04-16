import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';
document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.faq-element');

  accordionItems.forEach(item => {
    item.addEventListener('click', () => {
      const accordionContent = item.querySelector('.accordion-content');
      const button = item.querySelector('.accordion-button');

      accordionContent.classList.toggle('active');
      button.querySelector('.accordion-button-icon').classList.toggle('active');

      const useElement = button.querySelector('.accordion-button-icon use');
      if (accordionContent.classList.contains('active')) {
        useElement.setAttribute('xlink:href', './img/icons.svg#icon-more');
        button.querySelector('.accordion-button-icon').style.transform =
          'rotate(180deg)';
      } else {
        useElement.setAttribute('xlink:href', './img/icons.svg#icon-less');
        button.querySelector('.accordion-button-icon').style.transform =
          'rotate(0deg)';
      }

      if (accordionContent.classList.contains('active')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }

      const allAccordionItems = document.querySelectorAll('.faq-element');
      allAccordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem
            .querySelector('.accordion-content')
            .classList.remove('active');
          otherItem
            .querySelector('.accordion-button-icon')
            .classList.remove('active');
          otherItem
            .querySelector('.accordion-button-icon use')
            .setAttribute('xlink:href', './img/icons.svg#icon-less');
          otherItem.querySelector('.accordion-button-icon').style.transform =
            'rotate(0deg)';
          otherItem.querySelector('.accordion-content').style.maxHeight = null;
        }
      });
    });
  });
});

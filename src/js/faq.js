document.addEventListener('DOMContentLoaded', function () {
    const accordionButtons = document.querySelectorAll('.accordion-button');
  
    accordionButtons.forEach(button => {
      button.addEventListener('click', () => {
        const accordionItem = button.closest('.faq-element');
        const accordionContent = accordionItem.querySelector('.accordion-content');
  
        // Змінюємо класи для зміни стану акордеону
        accordionContent.classList.toggle('active');
  
        // Змінюємо іконку кнопки згідно зі станом акордеону
        const icon = button.querySelector('.accordion-button-icon');
        icon.classList.toggle('active');
  
        // Показуємо або приховуємо вміст питання
        if (accordionContent.classList.contains('active')) {
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
          accordionContent.style.maxHeight = null;
        }
      });
    });
  });


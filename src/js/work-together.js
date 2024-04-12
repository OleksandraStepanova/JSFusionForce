// -----------------inputs validation
const emailInput = document.getElementById('email');
const commentInput = document.getElementById('comment');
const maxLength = 50; 

commentInput.addEventListener('input', () => {
    const inputValue = commentInput.value;
    if (inputValue.length > maxLength) {
        commentInput.value = inputValue.substring(0, maxLength) + '...';
    }
});


emailInput.addEventListener('input', function() {
    const emailValue = this.value;
    const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (emailPattern.test(emailValue)) {
        this.classList.remove('input-error');
        this.classList.add('input-success');
    } else {
        this.classList.remove('input-success');
        this.classList.add('input-error');
    }
    
});

// -----------------------modal
const form = document.querySelector('.form');
const submitButton = document.querySelector('.submit-btn');
const overlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal-window');
const closeButton = document.querySelector('.modal-btn-close');

form.addEventListener('submit', (e) => {
   
    e.preventDefault();
    
    overlay.classList.remove('inactive');
    modal.classList.remove('inactive');
    overlay.classList.add('active');
    modal.classList.add('active');
});

closeButton.addEventListener('click', onButtonClose);

function onButtonClose() {
    overlay.classList.remove('active');
    modal.classList.remove('active');
    overlay.classList.add('inactive');
    modal.classList.add('inactive');
}
overlay.addEventListener('click', onButtonClose);
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        onButtonClose();
    }
})

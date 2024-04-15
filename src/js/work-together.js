import {postRequest} from './api';

const form = document.querySelector('.form');
const emailInput = document.getElementById('email');
const commentInput = document.getElementById('comment');
const submitButton = document.querySelector('.submit-btn');
const overlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal-window');
const closeButton = document.querySelector('.modal-btn-close');


// -----------------inputs validation

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


form.addEventListener('submit', onBtnSubmit);


async function onBtnSubmit(e) {
    e.preventDefault(); 
    const data = {
        email: emailInput.value,
        comment: commentInput.value
    };
    try {
        const response = await postRequest(data);
        if (response.title !== " ") {
            overlay.style.opacity = 1;
            overlay.style.visibility = "visible";
            modal.style.opacity = 1;
            modal.style.visibility = "visible";
            form.reset();
        }        
    } catch (error) {
        throw error;
    }
}

closeButton.addEventListener('click', onButtonClose);

function onButtonClose() {
     overlay.style.opacity = 0;
    overlay.style.visibility = "hidden";
    modal.style.opacity = 0;
    modal.style.visibility = "hidden";
}
overlay.addEventListener('click', onButtonClose);
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        onButtonClose();
    }
})

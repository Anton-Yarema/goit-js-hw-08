import throttle from 'lodash.throttle';

const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';

messageData();

function onFormInput(e) {
  e.preventDefault();

    const feedbackInfo = {
        email: emailInput.value,
        message: messageInput.value,
    };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackInfo));
}

function onFormSubmit(e) {
    e.preventDefault();
    const feedbackInfo = {
        email: emailInput.value,
        message: messageInput.value,
    };
    console.log(feedbackInfo);       
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function messageData(e) { 
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedMessage) { 
        emailInput.value = savedMessage.email;
        messageInput.value = savedMessage.message;
    }
} 
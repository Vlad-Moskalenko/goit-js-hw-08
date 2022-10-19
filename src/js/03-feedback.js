import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

let objFormData = {};

window.addEventListener('load', inputFeedbackData)
feedbackForm.addEventListener('input', throttle(onFormInput, 500))
feedbackForm.addEventListener('submit', onFormSubmit)

function onFormInput(e) {
  objFormData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(objFormData))
}

function inputFeedbackData() {
  if (localStorage.getItem(STORAGE_KEY)) {
    objFormData = JSON.parse(localStorage.getItem(STORAGE_KEY))

    feedbackForm.elements.email.value = objFormData.email || "";
    feedbackForm.elements.message.value = objFormData.message || "";
  }
}

function onFormSubmit(e) {
  e.preventDefault()
  console.table(objFormData)
  e.target.reset()
  localStorage.removeItem(STORAGE_KEY)
}



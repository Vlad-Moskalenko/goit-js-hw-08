import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

let objFormData = {};

window.addEventListener('load', inputFeedbackData)
feedbackForm.addEventListener('input', throttle(onFormInput, 500))
feedbackForm.addEventListener('submit', onFormSubmit)

function onFormInput(e) {
  const {name, value} = e.target
  objFormData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(objFormData))
}

function inputFeedbackData() {
  const {email, message} = feedbackForm.elements;

  if (localStorage.getItem(STORAGE_KEY)) {
    try {
      objFormData = JSON.parse(localStorage.getItem(STORAGE_KEY))
    }
    catch (err) { console.log(err.name) }

   email.value = objFormData.email || "";
   message.value = objFormData.message || "";
  }
}

function onFormSubmit(e) {
  const {email, message} = e.target

  e.preventDefault()

  if(email.value && message.value){
    console.table(objFormData)
    e.target.reset()
    objFormData = {}
    localStorage.removeItem(STORAGE_KEY)
  } else {
    alert("Write all fields!")
  }
}



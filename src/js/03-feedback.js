import throttle from "lodash.throttle";

import { refs } from "./refs";


const STORAGE_KEY = "feedback-form-state"

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};

refs.feedbackForm.addEventListener('input', throttle(onFeedbackFormInput, 500))
refs.feedbackForm.addEventListener('submit', onFeedbackFormSubmit)


populateForm()

function onFeedbackFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
    const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if(saveData) {
        const { email,message } = refs.feedbackForm.elements
        email.value = saveData.email ?? ""
        message.value = saveData.message ?? ""
    }
}

function onFeedbackFormSubmit(evt) {
    evt.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    evt.target.reset();
    console.log(formData);
    formData = {};
}
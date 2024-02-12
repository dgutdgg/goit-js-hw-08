import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const textInput = document.querySelector('.feedback-form input');
const textArea = document.querySelector('.feedback-form textarea');
let formState = {
  email: '',
  message: '',
};

if (localStorage.getItem('feedback-form-state') != null) {
  formState = JSON.parse(localStorage.getItem('feedback-form-state'));
  textInput.value = formState.email;
  textArea.value = formState.message;
  console.log(formState);
}

const updateLocalStorage = throttle(() => {
  formState.email = textInput.value;
  formState.message = textArea.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

form.addEventListener('input', () => {
  updateLocalStorage();
});

form.addEventListener('submit', event => {
  event.preventDefault();

  // if (!textInput.value.trim() || !textArea.value.trim()) {
  //   alert('Proszę wypełnić wszystkie pola formularza.');
  //   return;
  // }

  if (textInput.value === '' || textArea.value === '') {
    alert('Proszę wypełnić wszystkie pola formularza.');
    return;
  }

  localStorage.removeItem('feedback-form-state');
  textInput.value = '';
  textArea.value = '';
  console.log('Formularz został wysłany.', formState);
});

// textInput.addEventListener('input', event => {
//   console.log(event.currentTarget.value, formState);
//   formState = JSON.parse(localStorage.getItem('feedback-form-state'));
//   formState.input = event.currentTarget.value;
//   localStorage.setItem('feedback-form-state', JSON.stringify(formState));
// });

// textArea.addEventListener('input', event => {
//   console.log(event.currentTarget.value, formState);
//   formState = JSON.parse(localStorage.getItem('feedback-form-state'));
//   formState.textArea = event.currentTarget.value;
//   localStorage.setItem('feedback-form-state', JSON.stringify(formState));
// });

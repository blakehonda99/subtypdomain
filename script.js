const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = emailInput.value;
  
  // TODO: Add code to submit email to server and show success message
  
  form.reset();
});

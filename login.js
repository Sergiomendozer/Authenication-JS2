// Grabbing all the necessary DOM elements for form and input fields
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Adding an event listener to the form for the submit event
form.addEventListener('submit', e => {
    e.preventDefault();  // Preventing the default form submit action

    validateInputs();  // Calling the validateInputs function when the form is submitted
});

// Function to display error messages and add error class
const setError = (element, message) => {
    const inputControl = element.parentElement;  // Getting the parent element of the input field
    const errorDisplay = inputControl.querySelector('.error');  // Querying the .error class within the parent element

    errorDisplay.innerText = message;  // Setting the text of errorDisplay to the error message
    inputControl.classList.add('error');  // Adding 'error' class to the parent
    inputControl.classList.remove('success');  // Removing 'success' class from the parent
}

// Function to indicate success and remove error messages
const setSuccess = element => {
    const inputControl = element.parentElement;  // Getting the parent element of the input field
    const errorDisplay = inputControl.querySelector('.error');  // Querying the .error class within the parent element

    errorDisplay.innerText = '';  // Clearing any text in errorDisplay
    inputControl.classList.add('success');  // Adding 'success' class to the parent
    inputControl.classList.remove('error');  // Removing 'error' class from the parent
};

// Function to test if the email is valid using regex
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\

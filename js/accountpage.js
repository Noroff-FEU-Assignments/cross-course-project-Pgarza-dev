const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const emailAddress = document.querySelector("#emailAddress");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const submitButton = document.querySelector("#submitButton");
const submitMessage = document.querySelector(".form-submitted");

function validateForm(event) {
  event.preventDefault();

  // checks validation of each input
  if (checkLength(firstName.value, 0) === true) {
    nameError.style.display = "none";
    firstName.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (validatEmail(emailAddress.value) === true) {
    emailError.style.display = "none";
    emailAddress.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(password.value, 1) === true) {
    passwordError.style.display = "none";
    password.style.display = "none";
  } else {
    passwordError.style.display = "block";
  }

  if (checkLength(confirmPassword.value, 1) === true) {
    addressError.style.display = "none";
    confirmPassword.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  //displays submission message if all true
  if (
    checkLength(firstName.value, 0) === true &&
    checkLength(password.value, 0) === true &&
    checkLength(confirmPassword.value, 0) === true &&
    validatEmail(emailAddress.value) === true
  ) {
    submitMessage.style.display = "block";
  } else {
    submitMessage.style.display = "none";
  }

  console.log("");
}

form.addEventListener("submit", validateForm);

// use this function to check for length
function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

// validat email address
function validatEmail(email) {
  const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

// FORM VALIDATION
const form = document.querySelector("#contactForm");
const inputName = document.querySelector("#inputName");
const nameError = document.querySelector("#nameError");
const emailAddress = document.querySelector("#emailAddress");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const confirmPassword = document.querySelector("#confirmPassword");
const confirmPasswordError = document.querySelector("#confirmError");

const submitButton = document.querySelector("#submitButton");
const submitMessage = document.querySelector(".form-submitted");

function validateForm(event) {
  event.preventDefault();

  // checks validation of each input
  if (checkLength(inputName.value, 4) === true) {
    nameError.style.display = "none";
    // inputName.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (validatEmail(emailAddress.value) === true) {
    emailError.style.display = "none";
    // emailAddress.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(password.value, 5) === true) {
    passwordError.style.display = "none";
    // password.style.display = "none";
  } else {
    passwordError.style.display = "block";
  }

  if (checkLength(confirmPassword.value, 5) === true) {
    confirmPasswordError.style.display = "none";
    // confirmPassword.style.display = "none";
  } else {
    confirmPasswordError.style.display = "block";
  }

  //displays submission message if all true
  if (
    checkLength(inputName.value, 4) === true &&
    checkLength(password.value, 5) === true &&
    checkLength(confirmPassword.value, 5) === true &&
    validatEmail(emailAddress.value) === true
  ) {
    submitMessage.style.display = "block";
    document.loginForm.submit();
  } else {
    submitMessage.style.display = "none";
  }
}

form.addEventListener("input", validateForm);
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
  console.log(patternMatches);

  return patternMatches;
}

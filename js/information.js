const addButtons = document.querySelectorAll(".insuranceButton");
const deliveryButtons = document.querySelectorAll(".deliveryButton");
const itemsPurchase = document.querySelector(".orders-box");

//changes bg color of add buttons
function addButtonsBackgroundColor() {
  document.querySelector(".insuranceButton").style.backgroundColor = "#ffaa00";
}
addButtons.onclick = addButtonsBackgroundColor;

addButtons.forEach((addButton) => {
  addButton.classList.remove("insuranceButton");
  addButton.addEventListener("click", () => {
    addButtons.forEach((addButton) => {
      addButton.classList.remove("insuranceButton");
    });
    addButton.classList.add("insuranceButton");
  });
});

function deliveryButtonBackgroundColor() {
  document.querySelector(".deliveryButton").style.backgroundColor = "#ffaa00";
}
deliveryButtons.onclick = deliveryButtonBackgroundColor;

deliveryButtons.forEach((deliveryButton) => {
  deliveryButton.classList.remove("deliveryButton");
  deliveryButton.addEventListener("click", () => {
    deliveryButtons.forEach((deliveryButton) => {
      deliveryButton.classList.remove("deliveryButton");
    });
    deliveryButton.classList.add("deliveryButton");
  });
});

// function insurance() {}

// FORM VALIDATION
const form = document.querySelector("#payment-form");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const emailAddress = document.querySelector("#email-address");
const emailError = document.querySelector("#emailError");
const streetAddress = document.querySelector("#street");
const streetAddressError = document.querySelector("#streetAddressError");
const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");
const postCode = document.querySelector("#postCode");
const postCodeError = document.querySelector("#postCodeError");
const county = document.querySelector("#county");
const countyError = document.querySelector("#countyError");

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

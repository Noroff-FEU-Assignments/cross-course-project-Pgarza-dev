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
// const county = document.querySelector("#county");
// const countyError = document.querySelector("#countyError");
const creditCardNumber = document.querySelector("#creditCardNumber");
const creditCardNumberError = document.querySelector("#creditCardNumberError");
const nameOnCard = document.querySelector("#nameOnCard");
const nameOnCardError = document.querySelector("#nameOnCardError");
const cardExperationData = document.querySelector("#cardExperationData");
const cardExperationDataError = document.querySelector(
  "#cardExperationDataError"
);
const ccv = document.querySelector("#ccv");
const ccvError = document.querySelector("#ccvError");

const submitButton = document.querySelector("#securePayment");
const submitMessage = document.querySelector(".form-submitted");

function validateForm(event) {
  event.preventDefault();

  // checks validation of each input
  if (checkLength(firstName.value, 2) === true) {
    firstNameError.style.display = "none";
    // inputName.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (checkLength(lastName.value, 2) === true) {
    lastNameError.style.display = "none";
    // emailAddress.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (validatEmail(emailAddress.value) === true) {
    emailError.style.display = "none";
    // emailAddress.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(streetAddress.value, 5) === true) {
    streetAddressError.style.display = "none";
    // password.style.display = "none";
  } else {
    streetAddressError.style.display = "block";
  }

  if (checkLength(city.value, 2) === true) {
    cityError.style.display = "none";
    // confirmPassword.style.display = "none";
  } else {
    cityError.style.display = "block";
  }

  if (checkLength(postCode.value, 4) === true) {
    postCodeError.style.display = "none";
    // confirmPassword.style.display = "none";
  } else {
    postCodeError.style.display = "block";
  }

  if (checkLength(creditCardNumber.value, 15) === true) {
    creditCardNumberError.style.display = "none";
    // confirmPassword.style.display = "none";
  } else {
    creditCardNumberError.style.display = "block";
  }

  if (checkLength(nameOnCard.value, 2) === true) {
    nameOnCardError.style.display = "none";
    // confirmPassword.style.display = "none";
  } else {
    nameOnCardError.style.display = "block";
  }

  if (checkLength(ccv.value, 2) === true) {
    ccvError.style.display = "none";
  } else {
    ccvError.style.display = "block";
  }

  //displays submission message if all true
  if (
    checkLength(firstName.value, 2) === true &&
    checkLength(lastName.value, 2) === true &&
    validatEmail(emailAddress.value) === true &&
    checkLength(streetAddress.value, 5) === true &&
    checkLength(city.value, 2) === true &&
    checkLength(postCode.value, 4) === true &&
    checkLength(creditCardNumber.value, 15) === true &&
    checkLength(nameOnCard.value, 2) === true &&
    checkLength(ccv.value, 2) === true
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

const addButtons = document.querySelectorAll(".insuranceButton");
const deliveryButtons = document.querySelectorAll(".deliveryButton");

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

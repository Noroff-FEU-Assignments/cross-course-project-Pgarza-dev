const sizeButtons = document.querySelectorAll(".sizeButton");
const addButtons = document.querySelectorAll(".insuranceButton");

//changes bg color of size buttons
function changeBackgroundColor() {
  document.querySelector(".sizeButton").style.backgroundColor = "#ffaa00";
  // document.querySelector("addButtons").style.backgroundColor = "#ffaa00";
}
sizeButtons.onclick = changeBackgroundColor;
// addButtons.onclick = changeBackgroundColor;

sizeButtons.forEach((sizeButton) => {
  sizeButton.classList.remove("selected-size-btn");
  sizeButton.addEventListener("click", () => {
    sizeButtons.forEach((sizeButton) => {
      sizeButton.classList.remove("selected-size-btn");
    });
    sizeButton.classList.add("selected-size-btn");
  });
});

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

// const addedHtml = document.createElement("p");

// addedHtml.innerHTML += `<div class="addedInsurance">
//                           <p>sds</p>
//                         </div>`;

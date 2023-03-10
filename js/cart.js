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

//Get references to the buttons and content divs
// const button1 = document.getElementById("six-months-button");
// const button2 = document.getElementById("twelve-months-button");
// const button3 = document.getElementById("eightee-months-button");

// const content1 = document.getElementById("six-months");
// const content2 = document.getElementById("twelve-months");
// const content3 = document.getElementById("eighteen-months");

// //Add event listeners to the buttons

// button1.addEventListener("click", () => {
//   content1.style.display = "block";
//   content2.style.display = "none";
//   content3.style.display = "none";
// });
// // button1.addEventListener("click", () => {
// //   content1.style.display = "block";
// //   content2.style.display = "block";
// //   content3.style.display = "block";
// // });

// button2.addEventListener("click", () => {
//   content1.style.display = "none";
//   content2.style.display = "block";
//   content3.style.display = "none";
// });
// // button2.addEventListener("click", () => {
// //   content1.style.display = "block";
// //   content2.style.display = "block";
// //   content3.style.display = "block";
// // });

// button3.addEventListener("click", () => {
//   content1.style.display = "none";
//   content2.style.display = "none";
//   content3.style.display = "block";
// });
// // button3.addEventListener("click", () => {
// //   content1.style.display = "block";
// //   content2.style.display = "block";
// //   content3.style.display = "block";
// // });

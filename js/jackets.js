const sizeButtons = document.querySelectorAll(".sizeButton");

// function clicked() {
//   for (let i = 0; i < clickedButton.length; i++) {}
//   clickedButton.style.backgroundColor = "green";
//   // document.querySelector("button").style.backgroundColor = "red";
// }

function changeBackgroundColor() {
  document.querySelector(".sizeButton").style.backgroundColor = "#ffaa00";
}
console.log(sizeButtons);
sizeButtons.onclick = changeBackgroundColor;

sizeButtons.forEach((sizeButton) => {
  sizeButton.classList.remove("selected-size-btn");
  sizeButton.addEventListener("click", () => {
    sizeButtons.forEach((sizeButton) => {
      sizeButton.classList.remove("selected-size-btn");
    });
    sizeButton.classList.add("selected-size-btn");
  });
});
// function secondClick() {
//   document.querySelector(".button").style.backgroundColor = "#ffaa00";
// }
// clickedButton.onclick = secondClick;

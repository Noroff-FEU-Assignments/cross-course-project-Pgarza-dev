const sizeButtons = document.querySelectorAll(".sizeButton");

function changeBackgroundColor() {
  document.querySelector(".sizeButton").style.backgroundColor = "#ffaa00";
}
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

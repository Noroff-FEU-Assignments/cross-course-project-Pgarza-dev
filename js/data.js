const windBreaker = {
  price: 599,
};

const itemsPurchase = document.querySelector(".orders-box");

itemsPurchase.innerHTML += `
                            <p>1 x WIND BREAKER - ${windBreaker.price}</p>
                            `;

const rainyDaysInsurace = {
  sixMonths: 99,
  twelveMonths: 199,
  eighteenMonths: 299,
};

const insuranceAdded = document.querySelector(".addedInsurance");

insuranceAdded.innerHTML += `<p>6 Months Ins - ${rainyDaysInsurace.sixMonths}</p>`;

let total = windBreaker.price + rainyDaysInsurace.sixMonths;
document.querySelector(".totalAmount").innerHTML = total + "  kr";

// insuranceAdded.addEventListener("click", function () {
//   const insurancePrice = document.createElement("p");
//   insurancePrice.textContent = rainyDaysInsurace.sixMonths;
//   document.body.appendChild(insurancePrice);
// });

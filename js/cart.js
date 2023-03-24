const addedItems = document.querySelector('.added-items');
const ordersBox = document.querySelector('.orders-box');
const cartItemsEl = document.querySelector('.orders-box');

const urlParams = new URLSearchParams(window.location.search);

const productId = urlParams.get('id');

// Find product with matching ID
const product = products.find((product) => product.imgSrc === productId);

// Set image on page to selected product image
const productImg = document.querySelector('.product-img');
productImg.src = product.imgSrc;

if (product) {
  addedItems.innerHTML = `<div class="product-box">
          <div class="items-added-box">
            <h1 class="items-added-title">1. ITEMS ADDED TO CART</h1>
            <img class="jacket-one" id="product-img" src="${product.imgSrc}" alt="${product.name}" />
          </div>
        </div>
        <div class="box-3 box-3-flex">
          <h1>Mens Hiking Jacket</h1>
          <h2>${product.name}</h2>
          <div class="jacket-page-colors">
            <p>Colors</p>
            <div class="color-choice">
              <a href="#" class="color-choice-black color-boxes"></a>
              <a href="#" class="color-choice-red color-boxes"></a>
              <a href="#" class="color-choice-blue color-boxes"></a>
              <a href="#" class="color-choice-green color-boxes"></a>
            </div>
          </div>
          <div>
            <a href="#" class="review-stars">
              <p><svg xmlns="http://www.w3.org/2000/svg" width="90" height="17" viewBox="0 0 90 17">
                  <g id="Group_22" data-name="Group 22" transform="translate(-0.416)">
                    <path id="Polygon_1" data-name="Polygon 1"
                      d="M9,0l2.125,6.493H18l-5.562,4.013L14.562,17,9,12.987,3.438,17l2.125-6.493L0,6.493H6.875Z"
                      transform="translate(0.416)" fill="#e11c37" />
                    <path id="Polygon_3" data-name="Polygon 3"
                      d="M9,0l2.125,6.493H18l-5.562,4.013L14.562,17,9,12.987,3.438,17l2.125-6.493L0,6.493H6.875Z"
                      transform="translate(18.416)" fill="#e11c37" />
                    <path id="Polygon_4" data-name="Polygon 4"
                      d="M9,0l2.125,6.493H18l-5.562,4.013L14.562,17,9,12.987,3.438,17l2.125-6.493L0,6.493H6.875Z"
                      transform="translate(36.416)" fill="#e11c37" />
                    <path id="Polygon_5" data-name="Polygon 5"
                      d="M9,0l2.125,6.493H18l-5.562,4.013L14.562,17,9,12.987,3.438,17l2.125-6.493L0,6.493H6.875Z"
                      transform="translate(54.416)" fill="#e11c37" />
                    <path id="Polygon_6" data-name="Polygon 6"
                      d="M9,0l2.125,6.493H18l-5.562,4.013L14.562,17,9,12.987,3.438,17l2.125-6.493L0,6.493H6.875Z"
                      transform="translate(72.416)" fill="#e11c37" />
                  </g>
                </svg>
              </p>
              <p>37 Reviews</p>
            </a>
          </div>
          <div class="sizes">
            <button class="s-button button sizeButton">S</button>
            <button class="button sizeButton">M</button>
            <button class="button sizeButton">L</button>
            <button class="button sizeButton">XL</button>
            <button class="xxl-button button sizeButton">XXL</button>
          </div>
          <button class=" button add-to-cart" onclick="changeNumberofUnits('minus', ${product.id})">+</button>
          <button class=" button add-to-cart" onclick="changeNumberofUnits('plus', ${product.id})">-</button>
          <button class=" button add-to-cart" onclick="addToCart(${product.id})">ADD TO CART</button>
        </div>        
        `;
  // ordersBox.innerHTML = `
  //           <p>${product.name}</p>
  //           <p>${product.price}</p>
  //           <a href="#">Remove</a>`;
} else {
  jacketProduct.innerHTML = '<p>Product not found.</p>';
}

// CART ARRAY
let cart = [];

//ADD TO CART
function addToCart(id) {
  //CHECK IF PRODUCT ALREADY EXIST IN CART
  if (cart.some((item) => item.id === id)) {
    alert('Product already in cart!');
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }
}

updateCart();

//UPDATE CART
function updateCart() {
  renderCartItems();
  //renderSubtotal();
}
//RENDER CART ITEM
function renderCartItems() {
  cartItemsEl.innerHTML = '';

  cartItemsEl.innerHTML += `<p>${product.name}</p>
              <p>${product.price}</p>
              <p>${product.numberOfUnits}</p>
              <a href="#">Remove</a>`;
}

//CHANGE NUMBER OF UNITS
function changeNumberofUnits(action, id) {
  cart = cart.map((item) => {
    let numberofUnits = item.numberOfUnits;
    if (item.id === id) {
      if (action === 'minus') {
        numberofUnits--;
      } else if (action === 'plus') {
        numberofUnits++;
      }
    }
    return {
      ...item,
      numberofUnits,
    };
  });

  updateCart();
}

// CHANGING BUTTON COLORS
const sizeButtons = document.querySelectorAll('.sizeButton');
const addButtons = document.querySelectorAll('.insuranceButton');

//changes bg color of size buttons
function changeBackgroundColor() {
  document.querySelector('.sizeButton').style.backgroundColor = '#ffaa00';
  // document.querySelector("addButtons").style.backgroundColor = "#ffaa00";
}
sizeButtons.onclick = changeBackgroundColor;
// addButtons.onclick = changeBackgroundColor;

sizeButtons.forEach((sizeButton) => {
  sizeButton.classList.remove('selected-size-btn');
  sizeButton.addEventListener('click', () => {
    sizeButtons.forEach((sizeButton) => {
      sizeButton.classList.remove('selected-size-btn');
    });
    sizeButton.classList.add('selected-size-btn');
  });
});

//changes bg color of add buttons
function addButtonsBackgroundColor() {
  document.querySelector('.insuranceButton').style.backgroundColor = '#ffaa00';
}
addButtons.onclick = addButtonsBackgroundColor;

addButtons.forEach((addButton) => {
  addButton.classList.remove('insuranceButton');
  addButton.addEventListener('click', () => {
    addButtons.forEach((addButton) => {
      addButton.classList.remove('insuranceButton');
    });
    addButton.classList.add('insuranceButton');
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

const addedItems = document.querySelector('.added-items');
const cartItemsEl = document.querySelector('.orders-box');

const urlParamsCart = new URLSearchParams(window.location.search);

const productIdCart = urlParamsCart.get('id');

const urlCart = 'http://pg-technologies.local/wp-json/wc/store/products/';

async function singleProductCart() {
  const response = await fetch(urlCart + productIdCart);
  const product = await response.json();

  console.log(product);

  renderCartProduct(product);
}
singleProductCart();

function renderCartProduct(product) {
  addedItems.innerHTML = `<div class="product-box">
        <div class="back-btn"><a href="index.html#mensJackets">Keep shopping</div></a>
          <div class="items-added-box">
            <h1 class="items-added-title">1. ITEMS ADDED TO CART</h1>
            <img class="jacket-one product-img" id="product-img" src="${product.images[0].src}"
              alt="${product.images[0].alt}" />
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
        </div>`;
  cartItemsEl.innerHTML = `<div> 
            <p>${product.name}</p>
            <p>${product.price_html}</p>
            <a href="#">Remove</a>
            </div>`;
}
renderCartProduct();

// CHANGING BUTTON COLORS
const addButtons = document.querySelectorAll('.insuranceButton');

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

// Get references to the buttons and content divs
const button1 = document.getElementById('six-months-button');
const button2 = document.getElementById('twelve-months-button');
const button3 = document.getElementById('eightee-months-button');

const content1 = document.getElementById('six-months');
const content2 = document.getElementById('twelve-months');
const content3 = document.getElementById('eighteen-months');

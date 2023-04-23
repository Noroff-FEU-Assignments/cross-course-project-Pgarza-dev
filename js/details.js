//SINGLE PRODUCTS
const urlParams = new URLSearchParams(window.location.search);

const productId = urlParams.get('id');

const url = 'http://pg-technologies.local/wp-json/wc/store/products/';

// SINGLE PRODUCTS RENDERED
async function singleProduct() {
  const response = await fetch(url + productId);
  const product = await response.json();

  console.log(product);

  renderProduct(product);
}
singleProduct();

// chatgptcode version one
function renderProduct(product) {
  const productContainer = document.querySelector('.jacketProduct');
  productContainer.innerHTML = `<div class="card">
<div class="back-btn"><a href="index.html#mensJackets">Keep shopping</div></a>    <div class="box-2" id="${product.id}">
      <img class="jacket-one" src="${product.images[0].src}" alt="${product.images[0].alt}">
    </div>
    <div class="box-3-jacket">
          <h1>Mens Hiking Jacket</h1>
          <h4>${product.name}</h4>
          <div class="jacket-page-colors">
            <p>Color</p>
            <a href="#">
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
                    <path id="Polygon_5" data-name="Polygon 5"/                       d="M9,0l2.125,6.493H18l-5.562,4.013L14.562,17,9,12.987,3.438,17l2.125-6.493L0,6.493H6.875Z"
                      transform="translate(54.416)" fill="#e11c37" />
                    <path id="Polygon_6" data-name="Polygon 6"
                      d="M9,0l2.125,6.493H18l-5.562,4.013L14.562,17,9,12.987,3.438,17l2.125-6.493L0,6.493H6.875Z"
                      transform="translate(72.416)" fill="#e11c37" />
                  </g>
                </svg>
                37 Reviews</p>
            </a>
          </div>
          <h3>${product.price_html}</h3>
          <div class="sizes">
            <button class="button s-button sizeButton">S</button>
            <button class="button sizeButton">M</button>
            <button class="button sizeButton">L</button>
            <button class="button sizeButton">XL</button>
            <button class="button xxl-button sizeButton">XXL</button>
          </div>
          <a href="cart.html?id=${product.id}"> <button class="button add-to-cart" >BUY</button></a>
        </div>
      <div class="box-4">
          <h3>ABOUT THIS ITEM</h3>
        <ul class="about-product">
            <li class="about-jacket about-product">${product.description}</li>

          </ul>
        </div>
  </div>`;
}
renderProduct();

const sizeButtons = document.querySelectorAll('.sizeButton');

function changeBackgroundColor() {
  document.querySelector('.sizeButton').style.backgroundColor = '#ffaa00';
}
sizeButtons.onclick = changeBackgroundColor;

sizeButtons.forEach((sizeButton) => {
  sizeButton.classList.remove('selected-size-btn');
  sizeButton.addEventListener('click', () => {
    sizeButtons.forEach((sizeButton) => {
      sizeButton.classList.remove('selected-size-btn');
    });
    sizeButton.classList.add('selected-size-btn');
  });
});

const jacketProduct = document.querySelector('.jacketProduct');

const urlParams = new URLSearchParams(window.location.search);

const productId = urlParams.get('id');

// Find product with matching ID
const product = products.find((product) => product.imgSrc === productId);

// Set image on page to selected product image
const productImg = document.querySelector('.product-img');
productImg.src = product.imgSrc;

if (product) {
  jacketProduct.innerHTML = `<div class="card">
      <div class="back-btn"><a href="index.html#mensJackets">Keep Shopping</a></div>

        <div class="box-2">
                  <img class="jacket-one" src="${product.imgSrc}" alt="${product.name}" />
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
                    <path id="Polygon_5" data-name="Polygon 5"
                      d="M9,0l2.125,6.493H18l-5.562,4.013L14.562,17,9,12.987,3.438,17l2.125-6.493L0,6.493H6.875Z"
                      transform="translate(54.416)" fill="#e11c37" />
                    <path id="Polygon_6" data-name="Polygon 6"
                      d="M9,0l2.125,6.493H18l-5.562,4.013L14.562,17,9,12.987,3.438,17l2.125-6.493L0,6.493H6.875Z"
                      transform="translate(72.416)" fill="#e11c37" />
                  </g>
                </svg>
                37 Reviews</p>
            </a>
          </div>
          <p class="in-stock-text">In stock - ${product.instock}</p>
          <h3>599.00 kr</h3>
          <div class="sizes">
            <button class="button s-button sizeButton">S</button>
            <button class="button sizeButton">M</button>
            <button class="button sizeButton">L</button>
            <button class="button sizeButton">XL</button>
            <button class="button xxl-button sizeButton">XXL</button>
          </div>
          
          <a href="cart.html?id=${product.imgSrc}"> <button class="button add-to-cart" >BUY NOW!</button></a>
        </div>
        <div class="box-4">
          <h3>ABOUT THIS ITEM</h3>
          <ul class="about-product">
            <li class="about-jacket about-product">${product.description}</li>
            <li class="about-jacket">
              Made from 100% recycled material!
            </li>
            <li class="about-jacket">
              5 percent of paid purchase is donated to Save the Earth foundation!
            </li>
          </ul>
        </div>
      </div>`;
} else {
  jacketProduct.innerHTML = '<p>Product not found.</p>';
}

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

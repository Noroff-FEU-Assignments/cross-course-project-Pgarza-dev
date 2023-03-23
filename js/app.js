//SELECT ELEMENTS
// const producstEl = document.querySelector('.box-2');

// RENDER PRODUCTS
// function renderProducts() {
//   products.forEach((product) => {
//     producstEl.innerHTML += `<section>
//       <div class="card">
//         <div class="box-1">
//           <span class="img-zoom">
//             <span class="thumbnail"><img src="${product.imgSrc}" alt="Wind breaker jacket close-up view">
//             </span>
//           </span>
//           <span class="thumbnail"><img src="${product.imgSrc}"
//               alt="Wind breaker jacket close-up view"></span>
//           <span class="thumbnail"><img src="${product.imgSrc}"
//               alt="Wind breaker jacket close-up view"></span>
//         </div>
//         <div class="box-2">
//           <img class="jacket-one" src="${product.imgSrc}" alt="${product.description}" />
//         </div>
//         <div class="box-3-jacket">
//           <h1>Mens Hiking Jacket</h1>
//           <h4>${product.name}</h4>
//           <div class="jacket-page-colors">
//             <p>Color</p>
//             <a href="#">
//               <p><svg xmlns="http://www.w3.org/2000/svg" width="90" height="17" viewBox="0 0 90 17">
//                   <g id="Group_22" data-name="Group 22" transform="translate(-0.416)">
//                     <path id="Polygon_1" data-name="Polygon 1"
//                       d="M9,0l2.125,6.493H18l-5.562,4.013L14.562,17,9,12.987,3.438,17l2.125-6.493L0,6.493H6.875Z"
//                       transform="translate(0.416)" fill="#e11c37" />
//                     <path id="Polygon_3" data-name="Polygon 3"
//                       d="M9,0l2.125,6.493H18l-5.562,4.013L14.562,17,9,12.987,3.438,17l2.125-6.493L0,6.493H6.875Z"
//                       transform="translate(18.416)" fill="#e11c37" />
//                     <path id="Polygon_4" data-name="Polygon 4"
//                       d="M9,0l2.125,6.493H18l-5.562,4.013L14.562,17,9,12.987,3.438,17l2.125-6.493L0,6.493H6.875Z"
//                       transform="translate(36.416)" fill="#e11c37" />
//                     <path id="Polygon_5" data-name="Polygon 5"
//                       d="M9,0l2.125,6.493H18l-5.562,4.013L14.562,17,9,12.987,3.438,17l2.125-6.493L0,6.493H6.875Z"
//                       transform="translate(54.416)" fill="#e11c37" />
//                     <path id="Polygon_6" data-name="Polygon 6"
//                       d="M9,0l2.125,6.493H18l-5.562,4.013L14.562,17,9,12.987,3.438,17l2.125-6.493L0,6.493H6.875Z"
//                       transform="translate(72.416)" fill="#e11c37" />
//                   </g>
//                 </svg>
//                 37 Reviews</p>
//             </a>
//           </div>
//           <p class="in-stock-text">In Stock</p>
//           <h3>${product.price}</h3>
//           <div class="sizes">
//             <button class="button s-button sizeButton">S</button>
//             <button class="button sizeButton">M</button>
//             <button class="button sizeButton">L</button>
//             <button class="button sizeButton">XL</button>
//             <button class="button xxl-button sizeButton">XXL</button>
//           </div>
//           <input type="number" class="quantity" name="quantity" id="quantity" pattern="" placeholder="Qty">
//           <a href="cart.html"> <button class="button add-to-cart">ADD TO CART</button></a>
//         </div>
//         <div class="box-4">
//           <h3>ABOUT THIS ITEM</h3>
//           <ul>
//             <li class="about-jacket">
//               ${product.description}
//             </li>
//             <li class="about-jacket">
//               Made from 100% recycled material!
//             </li>
//             <li class="about-jacket">
//               5 percent of paid purchase is donated to Save the Earth foundation!
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>`;
//   });
// }
// renderProducts();

const producstEl = document.querySelector('.article');

function renderProducts() {
  products.forEach((product) => {
    producstEl.innerHTML += `<section class="jacket-card">
          <h2>${product.activity}</h2>
          <img class="most-sold" src="${product.imgSrc}" alt="${
      product.name
    }" />
        <h3>${product.name}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="17" viewBox="0 0 90 17">
          <g id="Group_23" data-name="Group 23" transform="translate(-171 -1764)">
            <g id="Group_22" data-name="Group 22">
              <path id="Polygon_1" data-name="Polygon 1"
                d="M9,0l2.125,6.493H18l-5.562,4.013L14.562,17,9,12.987,3.438,17l2.125-6.493L0,6.493H6.875Z"
                transform="translate(171 1764)" fill="#e11c37" />
              <path id="Polygon_3" data-name="Polygon 3"
                d="M9,0l2.125,6.493H18l-5.562,4.013L14.562,17,9,12.987,3.438,17l2.125-6.493L0,6.493H6.875Z"
                transform="translate(189 1764)" fill="#e11c37" />
              <path id="Polygon_4" data-name="Polygon 4"
                d="M9,0l2.125,6.493H18l-5.562,4.013L14.562,17,9,12.987,3.438,17l2.125-6.493L0,6.493H6.875Z"
                transform="translate(207 1764)" fill="#e11c37" />
              <path id="Polygon_5" data-name="Polygon 5"
                d="M9,0l2.125,6.493H18l-5.562,4.013L14.562,17,9,12.987,3.438,17l2.125-6.493L0,6.493H6.875Z"
                transform="translate(225 1764)" fill="#e11c37" />
              <path id="Polygon_6" data-name="Polygon 6"
                d="M9,0l2.125,6.493H18l-5.562,4.013L14.562,17,9,12.987,3.438,17l2.125-6.493L0,6.493H6.875Z"
                transform="translate(243 1764)" fill="#e11c37" />
            </g>
          </g>
        </svg>
        <p>${product.price + '. kr'}</p>
        <div>
        <a href="jackets.html?id=${product.imgSrc}">
  <button class="add-to-cart" onclick="addToCart(${product.id})">
    ADD TO CART
  </button>
</a>
      </div
              </section>`;
  });
}
renderProducts();

//CART ARRAY
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

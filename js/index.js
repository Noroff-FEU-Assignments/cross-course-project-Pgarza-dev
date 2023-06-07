const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

//SELECT ELEMENTS
const producstEl = document.querySelector('.article');

function renderProducts() {
  products.forEach((product) => {
    producstEl.innerHTML += `<section class="jacket-card">
                              <h2>${product.activity}</h2>
                              <img class="most-sold" src="${
                                product.imgSrc
                              }" alt="${product.name}" />
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
                              <button class="button add-to-cart button-margin" onclick="addToCart(${
                                product.id
                              })">
                        TAKE A LOOK
                      </button>
                    </a>
                          </div
                              </section>`;
  });
}
renderProducts();

//CART ARRAY
// let cart = [];

// //ADD TO CART
// function addToCart(id) {
//   //CHECK IF PRODUCT ALREADY EXIST IN CART
//   if (cart.some((item) => item.id === id)) {
//     alert('Product already in cart!');
//   } else {
//     const item = products.find((product) => product.id === id);

//     cart.push({
//       ...item,
//       numberOfUnits: 1,
//     });
//   }
// }

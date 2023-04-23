const apiBase = 'http://pg-technologies.local';
const wooCommerceBase = '/wp-json/wc/store';
const productBase = '/products';
const pagesBase = '/wp-json/wp/v2/pages';
const featured = '?featured=true';
const fullPagesURl = apiBase + pagesBase;
const fullProductURL = apiBase + wooCommerceBase + productBase;
const fullFeaturedURL = apiBase + wooCommerceBase + productBase + featured;
const fullPagesURlExample =
  'http://pg-technologies.local/wp-json/wc/store/products';

// FETURED PRODUCT
async function getFeaturedProduct() {
  const response = await fetch(fullFeaturedURL);
  const featuredProducts = await response.json();

  return featuredProducts;
}
getFeaturedProduct();

// //featured product function
function createFeaturedHTML(featuredProducts) {
  const featuredContainer = document.querySelector('.featured-products');
  console.log(featuredProducts);

  for (let i = 0; i < featuredProducts.length; i++) {
    const imgData = featuredProducts[i];

    const featuredProductContainer = document.createElement('div');
    featuredProductContainer.classList.add('featured-jackets');

    const imgElement = document.createElement('img');
    imgElement.classList.add('most-sold');
    imgElement.src = imgData.images[0].thumbnail;
    imgElement.alt = imgData.alt;
    const featuredTitle = document.createElement('h3');
    featuredTitle.innerText = imgData.name;

    const featuredButton = document.createElement('button');
    featuredButton.classList.add('add-to-cart', 'button', 'button-margin');
    featuredButton.innerText = 'Take a look';
    featuredButton.onclick = function () {
      window.location.href = `../jackets.html?id=${imgData.id}`;
    };

    // featuredProductContainer.append(activityTitle);
    featuredContainer.append(featuredTitle);
    featuredProductContainer.append(imgElement);
    featuredContainer.append(featuredProductContainer);
    featuredContainer.append(featuredButton);
  }
}
// createFeaturedHTML();

async function featuredItem() {
  const featuredProductItem = await getFeaturedProduct();
  createFeaturedHTML(featuredProductItem);
}
featuredItem();

async function getProducts() {
  const response = await fetch(fullProductURL);
  const products = await response.json();

  return products;
}
getProducts();

function createProductHTML(product) {
  const container = document.querySelector('.article');
  const productContainer = document.createElement('section');
  productContainer.classList.add('jacket-card');
  productContainer.id = product.id;
  // Activity Titles
  const activityTitle = document.createElement('h2');
  activityTitle.classList.add('activity-titles');
  activityTitle.innerText = product.categories[0].name;
  productContainer.append(activityTitle);

  for (let i = 0; i < product.images.length; i++) {
    const imgData = product.images[i];

    const img = document.createElement('img');
    img.classList.add('most-sold');
    img.src = imgData.src;
    img.alt = imgData.alt;
    productContainer.append(img);
    const title = document.createElement('h3');
    title.innerText = product.name;
    productContainer.append(title);

    //buttons for products
    const addButton = document.createElement('button');
    addButton.classList.add('add-to-cart', 'button', 'button-margin');
    addButton.innerText = 'Take a look';
    addButton.onclick = function () {
      window.location.href = `../jackets.html?id=${product.id}`;
    };
    productContainer.append(addButton);
  }
  container.append(productContainer);
}

function createProductsHTML(products) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    createProductHTML(product);
  }
}

async function productPage() {
  const products = await getProducts();
  createProductsHTML(products);
  console.log(products);
}
productPage();

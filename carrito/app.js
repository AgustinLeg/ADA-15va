const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const $container = $("#container-products");
const $btnCart = $("#btn-cart");
const $cartModal = $("#cart-modal");
const $btnCloseCart = $("#btn-close-cart");
const $btnClearCart = $("#clear-cart");
let buttons, buttonsDeleteProduct;

let cart = [];

// Mostrar los products en el html

const generateProducts = (products) => {
  for (let { image, description, name, price, id } of products) {
    $container.innerHTML += `
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="${image}"
            alt="${description}"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">${name}</p>
          </div>
        </div>

        <div class="content">
          ${description}
        </div>
        <div class="media">
          <div class="media-content">
            <p class="title is-4">$ ${price}</p>
            <button class="button btn-product" id=${id}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
    `;
  }
};

generateProducts(products);

// ----- Carrito -----

buttons = $$(".btn-product");

const addProduct = (id) => {
  // buscar el producto por id
  const chosenProduct = findProduct(id);
  // verificar si el producto ya existe en el carrito
  if (isInCart(id)) {
    // modificar la cantidad del mismo producto
    cart.map((product) => {
      if (product.id === id) {
        product.quantity = product.quantity + 1;
      }
      return product;
    });
  } else {
    const newProduct = { ...chosenProduct, quantity: 1 };
    // newProduct.quantity = 1;

    cart.push(newProduct);
  }
};

const findProduct = (id) => products.find((product) => product.id === id);

const isInCart = (id) => cart.some((product) => product.id === id);

const showProductCart = () => {
  const $modalContent = $cartModal.querySelector(".product-list");
  $modalContent.innerHTML = "";
  for (const { image, name, id, price, quantity } of cart) {
    $modalContent.innerHTML += `
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="${image}" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">${name}
          <button class="button is-danger is-small" id="clear-cart" onclick="removeProduct(${id})" >X</button>
          </p>
          <p class="subtitle is-6">$${price}</p>
          <p class="subtitle is-6">cantidad ${quantity}</p>
  
        </div>
      </div>
    </div>
  </div>
    `;
  }
};

const clearCart = () => {
  const $modalContent = $cartModal.querySelector(".product-list");
  $modalContent.innerHTML = "";
  while (cart.length > 0) {
    cart.pop();
  }
};

const removeProduct = (id) => {
  cart = cart.filter((product) => product.id !== id);
  showProductCart();
};

// ---- eventos -----

$btnCart.addEventListener("click", () => {
  $cartModal.classList.add("is-active");
});
$btnCloseCart.addEventListener("click", () => {
  $cartModal.classList.remove("is-active");
});

for (const button of buttons) {
  button.addEventListener("click", (e) => {
    // agregar el producto al carrito
    addProduct(Number(e.target.id));
    showProductCart();
  });
}
1;

$btnClearCart.addEventListener("click", clearCart);

console.log(buttonsDeleteProduct);
// Vaciar el array

// let a = [1, 2, 3, 4];

// console.log(a);

// a = []

// a.length = 0;

// a.splice(0, a.length);

// while(a.length > 0){
//   a.pop();
// }

// console.log(a);

// const colores = ["rojo", "azul", "verde"];

// console.log(colores.filter(color => color !== 'azul'))

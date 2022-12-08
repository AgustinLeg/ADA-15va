const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const $container = $("#container-products");
const $btnCart = $("#btn-cart");
const $cartModal = $("#cart-modal");
const $btnCloseCart = $("#btn-close-cart");
const $btnClearCart = $("#clear-cart");
const $total = $("#total");

let buttons, buttonsDeleteProduct;

let cartStorage = localStorage.getItem("carrito");
let cart = cartStorage ? JSON.parse(cartStorage) : [];

// let cart =  JSON.parse(localStorage.getItem('carrito')) || [];


// ----- Carrito -----
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

  globalUpdateCart();
};

const findProduct = (id) => products.find((product) => product.id === id);

const isInCart = (id) => cart.some((product) => product.id === id);

const clearCart = () => {
  const $productList = $cartModal.querySelector(".product-list");
  $productList.innerHTML = "";
  while (cart.length > 0) {
    cart.pop();
  }
  globalUpdateCart();
};

const removeProduct = (id) => {
  const productCart = cart.find((product) => product.id === id);

  if (productCart.quantity > 1) {
    cart.map((product) => {
      if (product.id === id) {
        product.quantity = product.quantity - 1;
      }
      return product;
    });
  } else {
    cart = cart.filter((product) => product.id !== id);
  }

  globalUpdateCart();
};

const globalUpdateCart = () => {
  localStorage.setItem("carrito", JSON.stringify(cart));

  const total = calcularTotal();

  actualizarVistaTotal(total);

  showProductCart();
};

const calcularTotal = () => {
  let total = 0;
  for (const product of cart) {
    total += product.price * product.quantity;
  }
  return total;
};

const actualizarVistaTotal = (total) => {
  $total.innerText = `$ ${total}`;
};



// --------- Vista ----------

// Mostrar los products en el html
const generateProducts = () => {
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
          ${description || ""}
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

const showProductCart = () => {
  const $productList = $cartModal.querySelector(".product-list");
  $productList.innerHTML = "";
  for (const { image, name, id, price, quantity } of cart) {
    $productList.innerHTML += `
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
          <button class="button is-primary is-small" id="clear-cart" onclick="addProduct(${id})" >+</button>
          <button class="button is-danger is-small" id="clear-cart" onclick="removeProduct(${id})" >-</button>
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


// ---- eventos -----

$btnCart.addEventListener("click", () => {
  $cartModal.classList.add("is-active");
});
$btnCloseCart.addEventListener("click", () => {
  $cartModal.classList.remove("is-active");
});

$btnClearCart.addEventListener("click", clearCart);


// Inicio de Ecommerce
const initApp = () => {
  // genera las cards de productos
  generateProducts();

  buttons = $$(".btn-product");

  for (const button of buttons) {
    button.addEventListener("click", (e) => {
      // agregar el producto al carrito
      addProduct(Number(e.target.id));
    });
  }

  // genera las cards de productos en el carrito del local storage
  showProductCart();

  // actualizar el total del carrito del local storage
  const total = calcularTotal();
  actualizarVistaTotal(total);
};

initApp();


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

// localStorage.setItem('nombre','agustin')
// localStorage.setItem('nombre1','agustin')
// localStorage.setItem('nombre2','agustin')
// localStorage.setItem('nombre3','agustin')
// const pepe = localStorage.getItem('nombre')
// localStorage.removeItem('nombre')

// localStorage.clear()
// console.log(pepe)

// console.log(products)
// console.log(JSON.stringify(products))

// localStorage.setItem("products", JSON.stringify(products));

// const productsLocalStorage = JSON.parse(localStorage.getItem("products"));

// const productsParsed = JSON.parse(productsLocalStorage)

// console.log(productsParsed)

// for (const item of productsLocalStorage) {
//   console.log(item)
// }

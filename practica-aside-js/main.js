const $ = (selector) => document.querySelector(selector);

// Variables
let btnText = $("#btn-text");
let btnImg = $("#btn-img");
let contentImg = $("#content-img");
let contentText = $("#content-text");
let img = $("#img");

// inputs
let inputURL = $("#url-img");

// Cuando hago click en el boton texto tengo que mostrar el aside texto y ocultar el aside imagen
btnText.addEventListener("click", () => {
  // Con estilos
  // contentImg.style.display = "none";
  // contentText.style.display = "block";

  // con clases
  contentImg.classList.add("hidden");
  contentText.classList.remove("hidden");
});

btnImg.addEventListener("click", () => {
  // contentImg.style.display = "block";
  // contentText.style.display = "none";

  contentImg.classList.remove("hidden");
  contentText.classList.add("hidden");
});

inputURL.addEventListener("input", (event) => {
  // obtener el valor a traves del evento
  // console.log(event.target.value)

  // obtener el valor a traves del elemento ( por variable )
  // console.log(inputURL.value);
  // img.style.backgroundImage = "url(" + inputURL.value + ")";
  img.style.backgroundImage = `url(${inputURL.value})`;
});

// img.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2022/08/18/10/41/herring-gull-7394570_960_720.jpg)'

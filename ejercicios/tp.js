// utils
const $ = (selector) => document.querySelector(selector);

// variables
let topText = $("#top-text");
let bottomText = $("#bottom-text");
let inputText = $("#input-text");
let box = $("#box");
let inputBrillo = $("#input-brillo");
let inputOpacidad = $("#input-opacidad");
let imgBox = $("#img-box");
let btnResetear = $("#resetear-filtros");

// funciones
const actualizarFiltros = () => {
  let brightness = inputBrillo.value;
  let opacity = inputOpacidad.value;

  imgBox.style.filter = `brightness(${brightness}) opacity(${opacity}%)`;
};

const descargarMeme = () => {
  domtoimage.toBlob(contenedorImagen).then(function (blob) {
    saveAs(blob, "mi-meme.jpg");
  });
};

const resetearFiltros = () => {
  inputOpacidad.value = 100;
  inputBrillo.value = 0.5;

  actualizarFiltros();
};

// eventos
btnResetear.addEventListener("click", resetearFiltros);

inputText.addEventListener("input", (event) => {
  box.innerText = event.target.value;
});

bottomText.addEventListener("input", (event) => {
  box.innerText = event.target.value;
});

// Filtros
inputBrillo.addEventListener("change", actualizarFiltros);
inputOpacidad.addEventListener("change", actualizarFiltros);

// inputBrillo.addEventListener("change", (event) => {
//   console.log(event)
//   imgBox.style.filter = `brightness(${event.target.value})`;
// });

// inputOpacidad.addEventListener("change", (event) => {
//   imgBox.style.opacity = `${event.target.value}%`;
// });

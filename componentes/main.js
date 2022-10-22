// const $ = (selector) => document.querySelector(selector);

// // Botones
// let btn = $("#btn-modal");

// // Modal
// let modal = $("#modal");
// let modalBackdrop = $("#backdrop");
// let btnCloseModal = $("#close-modal");

// btn.addEventListener("click", () => {
//   modal.classList.add("open");
// });

// btnCloseModal.addEventListener("click", () => {
//   modal.classList.remove("open");
// });

// modalBackdrop.addEventListener("click", () => {
//   modal.classList.remove("open");
// });

// const $ = (selector) => document.querySelector(selector);

// // Botones
// let btnError = $("#btn-modal-error");
// let btnExito = $("#btn-modal-exito");

// // Modal
// let modal = $("#modal");
// let backdrop = $("#backdrop");
// let btnCloseModal = $("#close-modal");

// // Contenido Modal
// let modalError = $("#error");
// let modalExito = $("#modal #exito");

// backdrop.addEventListener("click", () => {
//   modal.classList.remove("open");
// });

// btnCloseModal.addEventListener("click", () => {
//   modal.classList.remove("open");
// });

// btnExito.addEventListener("click", () => {
//   modal.classList.add("open");
//   modalError.classList.add("oculto");
//   modalExito.classList.remove("oculto");
// });

// btnError.addEventListener("click", () => {
//   modal.classList.add("open");
//   modalError.classList.remove("oculto");
//   modalExito.classList.add("oculto");
// });

// Colecciones -> spoiler proximo modulo
// let botones = document.getElementsByClassName("btn");
// console.log(botones);

// Collapse

// const $ = (selector) => document.querySelector(selector);

// let collapse = $("#collapse-uno");
// let collapseHeader = $("#collapse-uno .header");

// collapseHeader.addEventListener("click", () => {
//   // collapse.classList.toggle("active");

//   if (collapse.classList.contains("active")) {
//     collapse.classList.remove("active");
//   } else {
//     collapse.classList.add("active");
//   }
// });

// Formularios
const $ = (selector) => document.querySelector(selector);

let formulario = $("#form");
let nombre = $("#name");
let email = $("#email");
let edad = $("#edad");
let btn = $("#btn-form");
let errorList = $("#error-list");

const regexEmail =
  /^[a-zA-Z.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let nombreValido, emailValido;

const validarFormulario = () => {
  nombreValido = nombre.value.length > 2;
  emailValido = regexEmail.test(email.value);
 };

const mostrarErrores = () => {
  if (nombreValido === false) {
    errorList.innerHTML = `<li>El nombre debe tener mas de 2 caracteres</li>`;
    nombre.classList.add("error");
  } else {
    nombre.classList.remove("error");
  }

  if (emailValido === false) {
    errorList.innerHTML = `<li>El email no es valido</li>`;
    email.classList.add("error");
  } else {
    email.classList.remove("error");
  }

};

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  // todo: validar el formulario
  validarFormulario();

  // todo: mostrar errores (si hay)
  mostrarErrores();

  // todo: mostrar alert('bienvenido ${nombre}') si pase la validacion

  if (nombreValido) {
    alert(`Bienvenido ${nombre.value}`);
  }
});

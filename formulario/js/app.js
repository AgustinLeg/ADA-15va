const $ = (selector) => document.querySelector(selector);

let emailEl = $("#email");
let passwordEl = $("#password");
let formEl = $("#form");

// Funciones de validacion

// Si el email es valido devuelve true, sino false
const esEmailValido = (email) => {
  const regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regexEmail.test(email);
};
// Si tiene contenido devuelve true, sino false
const esRequerido = (valor) => {
  if (valor) {
    return valor !== "";
  }
  return false;
};

// console.log(esRequerido()); // false
// console.log(esRequerido("Hola")); // true
// console.log(esRequerido("")); // false

// retorna true si el valor es mayor a la cantidad minima, sino false
const cantidadMinima = (valor, min) => valor.length > min;
// console.log(cantidadMinima("Hola", 10)); // false
// console.log(cantidadMinima("", 3)); // false

const cantidadMaxima = (valor, max) => valor.length < max;

// console.log(cantidadMaxima("hola", 5)); // true
// console.log(cantidadMaxima("hola mundo como estan?", 10)); // false

const minMax = (valor, min, max) => valor.length > min && valor.length < max;

// console.log(minMax('hola', 3,5)) // true
// console.log(minMax('hola como estas', 3,5)) // false

// Validaciones del formulario

// validar el mail del formulario
const validarEmail = () => {
  let email = emailEl.value;
  let esValido = false;

  if (!esRequerido(email)) {
    mostrarError(emailEl, "El email es obligatorio");
  } else if (!esEmailValido(email)) {
    mostrarError(emailEl, "El email no es valido");
  } else {
    mostrarValido(emailEl);
    esValido = true;
  }

  return esValido;
};

const validarPassword = () => {
  let password = passwordEl.value;
  let esValido = false;

  if (!esRequerido(password)) {
    mostrarError(passwordEl, "El password es obligatorio");
  } else if (!minMax(password, 6, 12)) {
    mostrarError(passwordEl, "El password no es valido");
  } else {
    mostrarValido(passwordEl);
    esValido = true;
  }

  return esValido;
};

const mostrarError = (elemento, mensaje) => {
  elemento.classList.add("is-danger");

  const formField = elemento.parentElement.parentElement;

  const errorEl = formField.querySelector("small");

  errorEl.classList.add("help", "is-danger");
  errorEl.innerText = mensaje;
};

const mostrarValido = (elemento) => {
  elemento.classList.remove("is-danger");
  elemento.classList.add("is-success");

  const formField = elemento.parentElement.parentElement;

  const errorEl = formField.querySelector("small");

  errorEl.classList.remove("help", "is-danger");
  errorEl.innerText = "";
};

formEl.addEventListener("submit", function (e) {
  // Evita el comportamiento por defecto del formulario (enviar y recargar pagina)
  e.preventDefault();

  if (validarEmail() && validarPassword()) {
    alert('PASO VALIDACION')
  } else {
    console.log("error");
  }
});

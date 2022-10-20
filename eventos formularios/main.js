// Repaso eventos

let body = document.body;
let titulo = document.querySelector("#titulo");
let btnTitulo = document.querySelector("#btn-titulo");
let btnAlerta = document.getElementById("btn-alerta");

btnTitulo.addEventListener("click", function (event) {
  console.log(event);

  titulo.classList.add("titulo");
  // mostrarAlerta();
  // mostrarAlerta();
  // mostrarAlerta();
  // mostrarAlerta();
});

btnAlerta.addEventListener("dblclick", mostrarAlerta);

function mostrarAlerta() {
  alert("Soy una alerta :D");
}

body.addEventListener("keydown", (event) => {
  // console.log(event);

  let code = event.code;

  if (code === "Space") {
    // alert("Saltaste");
  }

  if (code === "Enter") {
    // alert("Aceptaste");
  }
});

window.addEventListener("scroll", (event) => {
  // console.log(event)
  console.log("Scrolling...");
});

// ============ contador ===========

let btnSumar = document.getElementById("btn-sumar");
let btnRestar = document.getElementById("btn-restar");
let contador = document.getElementById("contador");

let numberContador = Number(contador.innerText);

// Sumar 1
btnSumar.addEventListener("click", () => {
  let resultado = numberContador + 1;

  numberContador = numberContador + 1;

  contador.innerText = resultado;
});

// Restar 1
btnRestar.addEventListener("click", () => {
  if (numberContador < 0 || numberContador === 0) {
    contador.innerText = "LLegaste 0 :D";
  } else {
    let resultado = numberContador - 1;

    numberContador = numberContador - 1;

    contador.innerText = resultado;
  }
});

// Eventos Input

// const $ = (elemento) => document.querySelector(elemento);

// let email = $("#email");
// let password = $('#password');
// let tituloEventos = $('#titulo-eventos');

// email.addEventListener('change', (event) => {

//   if(event.target.value.includes('@')){
//     console.log('contiene email')
//   }else{
//     alert('El email no es correcto')
//   }

// })

// let cambiarTitulo = (event) => {
//   tituloEventos.innerText = event.target.value
// }

// password.addEventListener('input', cambiarTitulo);
// password.addEventListener('keydown', cambiarTitulo);
// password.addEventListener('keyup', cambiarTitulo);
// password.addEventListener('blur', cambiarTitulo);

// const $ = (elemento) => document.querySelector(elemento);

// let edad = $('#edad');

// let mostrarEdad = (event) => {
//   console.log(event.target.value)
// }

// edad.addEventListener('change', mostrarEdad);
// edad.addEventListener('input', mostrarEdad);
// edad.addEventListener('blur', mostrarEdad);
// edad.addEventListener('focus', mostrarEdad);

// const $ = (elemento) => document.querySelector(elemento);

// let pais = $("#pais");

// let mostrarPais = (event) => {
//   console.log(event.target.value);
// };


// pais.addEventListener("change", mostrarPais);
// pais.addEventListener("blur", mostrarPais);
// pais.addEventListener("focus", mostrarPais);


// =======================


// Eventos Formulario 
const $ = (elemento) => document.querySelector(elemento);

let formulario = $('#formulario');
let sectionUsuario = $('#informacion-usuario');
let btnForm = $("#btn-form");

// ✅ evento submit en el formulario ✅
formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log(event.target.email.value)
  
  // console.log(event.target.email.value)
  // console.log(event.target.password.value)
  // console.log(event.target.edad.value)
  // console.log(event.target.pais.value)
  setTimeout(() => {
    console.log('se ejecuto el timeout')
    sectionUsuario.innerText = event.target.email.value;
  }, 1000)
})

// ❌ evento submit en el boton ❌
// btnForm.addEventListener('submit',  (event) => {
//   event.preventDefault();
//   setTimeout(() => {
//     console.log('se ejecuto el timeout')
//     sectionUsuario.innerText = 'Se envio el formulario';
//   }, 1000)
// })
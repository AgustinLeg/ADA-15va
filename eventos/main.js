/*
// const $ = (selector) => document.querySelector(selector);

let titulo = $("#titulo");
let boton = $("#btn-titulo");
let contenedor = $("#contenedor");

// primer parametro el tipo de evento y segundo una funcion callback
boton.addEventListener("click", function () {
  titulo.style.color = "papayawhip";
  titulo.innerText = "nuevo color :D";
});

contenedor.addEventListener("click", clickEnDiv);

function clickEnDiv() {
  titulo.innerText = "cambio desde el div";
}

function suma(a, b) {
  console.log(a + b);
}

suma(1, 2);

// 🤯
function imprimirEnConsola(){
  console.log('hola desde otra funcion')
}

function saludarAgustin(callback) {

  console.log('Hola agustin');
  callback();
}

saludarAgustin(imprimirEnConsola);

// palabra reservada
setTimeout(function() {
  console.log('se ejecuto');
  // alert('Se termino el tiempo')
}, 1000)

setTimeout(suma, 2000);

 // recibe un callback como primer parametro y el tiempo en milisegundos como segundo parametro
 setTimeout(function() {
  console.log('se ejecuto el timeout')
}, 10000)
 */

const $ = (selector) => document.querySelector(selector);

let titulo = $("#titulo");
let boton = $("#btn-titulo");
let contenedor = $("#contenedor");
let botonSecundario = $("#btn-secundario");

// setTimeout(function() {
//   boton.innerText = 'cambio en 1 segundo'
// }, 1000)

// ============== BOTON ===================

// Event Bubbling = 🤯
boton.addEventListener("click", function (event) {
  event.stopPropagation(); // prevenimos el event bubbling
  // console.log(event.screenX)
  // titulo.style.color = "papayawhip";
  // titulo.innerText = "nuevo color :D";
  console.log("click boton");
});

botonSecundario.addEventListener("click", pararPropagation );

botonSecundario.addEventListener("dblclick", (e) => {
  e.stopPropagation();
  console.log("doble click");
});

function pararPropagation(event) {
  event.stopPropagation();
}

// ============== CONTENEDOR (DIV) ===================

contenedor.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("click contenedor");
});

contenedor.addEventListener("mouseenter", mouseEnter);
contenedor.addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
  // console.log("entro en el contenedor");
}
function mouseLeave() {
  // console.log("salio en el contenedor");
}


let body = document.body;

// body.addEventListener('keydown', (event) => {
//   console.log(event)

//   if(event.code === 'Enter'){
//     alert('Bienvenido :D ')
//   }
  
// })

body.addEventListener('keyup', (event) => {
  console.log(event)

  if(event.code === 'Enter'){
    alert('Bienvenido :D ')
  }
  
})
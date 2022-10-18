// ### paises

// En un documento `html` crear una lista desordenada con distintos paises de cada continente (entre 2 y 4 por continente). Hacer un programa que al iniciarse pregunte mediante un `prompt` por un continente y destaque en rojo y en negrita aquellos paises de dicho continente.

let paises = document.getElementById("paises");
// let america = document.getElementsByClassName('america')
console.log(paises);
// console.log(america)
// console.log(window)
// console.log(document)

let america = document.querySelector("#america");
let europa = document.querySelector("#europa");

// let continente = prompt("Ingrese un continente (america)");
let continente = "america";

if (continente === "america") {
  console.log("ES AMERICA 🙋‍♂️");
  america.classList.add("continente");
}

if (continente === "europa") {
  console.log("ES EUROPA 🙋‍♂️");
  europa.classList.add("continente");
}

if (continente === "asia") {
  console.log("ES ASIA 🙋‍♂️");
  asia.classList.add("continente");
}

if (continente === "africa") {
  console.log("ES AFRICA 🙋‍♂️");
  africa.classList.add("continente");
}

// ### busqueda

// En un documento `html` crear una lista desordenada con al menos 10 items que consistan en oraciones, frases o citas. Hacer un programa que al iniciarse pregunte mediante un `prompt` por una palabra y destaque en rojo y en negrita aquellos items de la lista cuyo texto contenga dicha palabra.

let $ = (selector) => document.querySelector(selector);

// let oracionUno = document.querySelector('#oracionUno')
let oracionUno = $("#oracionUno");
let oracionDos = $("#oracionDos");
let oracionTres = $("#oracionTres");

let palabra = prompt('Ingrese una palabra')

console.log(oracionUno)

let textoOracionUno = oracionUno.innerText;
let textoOracionDos = oracionDos.innerText;
let textoOracionTres = oracionTres.innerText;

if(textoOracionUno.includes(palabra)){
  oracionUno.style.color = 'red';
  oracionUno.style.fontWeight = 'bold';
}

if(textoOracionDos.includes(palabra)){
  oracionDos.style.color = 'red';
  oracionDos.style.fontWeight = 'bold';
}

if(textoOracionTres.includes(palabra)){
  oracionTres.style.color = 'red';
  oracionTres.style.fontWeight = 'bold';
}
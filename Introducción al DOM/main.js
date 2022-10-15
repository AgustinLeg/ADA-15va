// Objeto

// let autoColor = 'azul';
// let autoMarca = 'ford';
// let autoPuertas = 4;

// Objeto creado de forma literal
let auto = {
  color: "azul",
  marca: "ford",
  puertas: 4,
  esNuevo: false,
};

// constructor
let objeto = new Object();

console.log(auto.color);
console.log(auto.marca);
console.log(auto.puertas);

console.log(objeto);

// BOM -> Objeto del navegador
// DOM -> Document Object Model -> Toda el contenido pagina web
// nodos

// Acceder a elementos del dom

// Obtener elementos por etiqueta
let h1 = window.document.getElementsByTagName("h1");
// let parrafos = document.getElementsByTagName('p');
// let sections = document.getElementsByTagName('section')

// console.log(h1);
// console.log(parrafos);
// console.log(sections);

// Obtener elementos por clase
let parrafosConClase = document.getElementsByClassName("parrafo");

let botonConID = document.getElementById("btn");

// console.log(parrafosConClase)
// console.log(botonConID)

// querySelector
// Siempre obtiene el primer elemento

// por clase
// let boton = document.querySelector('.btn-primary')

// por id
let boton = document.querySelector("#btn");
console.log(boton);

let titulo = document.querySelector("#main h1");

console.log(titulo);

let parrafos = document.querySelectorAll("p");

function obtenerElemento(selector) {
  // Version 1
  // let elemento = document.querySelector(selector)
  // return elemento

  // Version 2
  return document.querySelector(selector);
}

let nombreFunc = () => {
  return document.querySelector(selector);
};

let funcionFlecha = (selector) => /*return*/ document.querySelector(selector);

// truco
let $ = (selector) => document.querySelector(selector);
let $$ = (selector) => document.querySelectorAll(selector);

let span = $("span");

let div = $("#main");

let button = $("button");

console.log(button);

button.classList.add("error", "verde", "azul");

button.classList.remove("btn-primary");

button.classList.toggle("clase-nueva");

console.log(button.classList.contains("verde"));

div.classList.add("azul");

button.innerText = "nuevo boton";
button.innerHTML = "Cambiado otra vez";

let input = $("#emailID");

console.log(input);
console.log(input.type);
console.log(input.id);
console.log(input.placeholder);
console.log(input.name);

console.log(button.id);

input.setAttribute("placeholder", "Ingrese su email desde javascript");
input.removeAttribute("name");

// let parrafo = $('p')

$("p").innerText = "Nuevo texto en la etiqueta P";

$("h2").innerText = "Titulo cambiado";

console.log($("h4"));

console.error("Esto exploto");
console.warn("cuidado no es por aca...");

let nombre = 'Agustin';

// $('section').innerText = '<p>Hola con etiqueta</p>'
$("section").innerHTML = `
  <div>
    <p>Hola ${nombre }</p> 
    <button>nuevo boton</button>
  </div>
`;


$('h1').style.color = 'orange';

let color = prompt('ingrese su color favorito (en ingles)')

$('section').style.backgroundColor = color;



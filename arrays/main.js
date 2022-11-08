// Tipo de datos primitivos
const nombre = "Agustin";
const edad = 22;
const tieneAuto = false; // true;
// undefined, null

// Arrays
const arrayVacio = [];
// console.log(arrayVacio.length)
// console.log(arrayVacio);

// let arrayNumeros = [1, 2, 3, 4, 5];

// console.log(arrayNumeros);
// console.log(arrayNumeros.length);

// let frutas = ["pera", "manzana", "naranja"];

// let arrayElementos = [1, "Agustin", false, undefined];

// console.log(arrayElementos);

// console.log(frutas)

// alert(frutas[2]) // naranja

// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);

// console.log(frutas[0,1,2]) ❌ no trae todos los elementos

// document.body.innerHTML = document.body.innerHTML + `<p>Hola mundo</p> <p>Hola mundo</p>`;
// document.body.innerHTML += `<p>Hola mundo</p> <p>Hola mundo</p>`;
// document.body.innerHTML += `<p>Hola mundo</p>`;
// document.body.innerHTML += `<p>Hola mundo</p>`;
// document.body.innerHTML += `<p>Hola mundo</p>`;
// document.body.innerHTML += `<p>Hola mundo</p>`;
// document.body.innerHTML += `<p>Hola mundo</p>`;
// document.body.innerHTML += `<p>Hola mundo</p>`;

let arrayNumeros = [1, 2, 3, 4, 5];

// Bucle Infinito
// for (let i = 0; i < 100; ) {
//   console.log("hola");
// }

// ciclo
//   indice condicion incremento
// for(let i = 0; i <= 10; i += 2){
//   console.log(i)
// }

// for(let i = 0; i < 11; i += 2){
//   console.log(i)
// }

// Forma 2

// let indice = 0;

// for(indice; indice <= 5; indice++){
//   console.log(indice)
// }

// Repaso Scope

// let i = 0;

// let iterador = () => {
//   // let i = 1;

//   for(i; i <=5; i++){
//     console.log(i)
//   }

// }

// iterador();

// =    Asignacion

// Condiciones
// ==   Igualdad por valor
// === Igualdad estrictica por tipo y valor

// Agregar 5 parrafos al body
for (let i = 1; i <= 10; i++) {
  document.body.innerHTML += `<p>Hola mundo ${i}</p>`;
}

// Incremento al final del for
// for(let i = 1;i <= 5;){
//   document.body.innerHTML += `<p>Hola mundo ${i}</p>`;
//   i++;
// }

// Arrays.
let nombres = ["Agustin", "Gabo", "Cintia", "Poli"];

// metodos
// let numero = 10;
// numero.toFixed();

// let string = 'hola';
// string.slice();

// console.log(nombres.length)

// .pop(); => eliminar el ultimo elemento;
// antes del pop
// console.log(nombres);
// nombres.pop();
// despues del pop
// console.log(nombres);

// .push() => agrega un elemento al final del array
// nombres.push("Luciana")

// .shift() => eliminar el primer elemento;
// nombres.shift();

// .unshift() => agregar un elemento al inicio del array
// nombres.unshift("Luciana");

// .slice() =>  corta al array/string a partir de indices

// console.log(nombres.slice(2, 4));

// .splice() => cambiar el contenido de un array elimando elementos existentes y agregan/o agregando nuevos elementos;

// eliminar
// nombres.splice(2, 4);
// console.log(nombres);

// agregar
// nombres.splice(2, 4, "Juan");

// console.log(nombres);

// concat
let numerosUno = [1, 2, 3];
let numerosDos = [4, 5, 6];

let unionNumeros = numerosUno.concat(numerosDos);

// console.log(unionNumeros);

let frutas = ["naranja", "pera", "manzana", "frutilla", "Arandano", "Kiwi"];

// console.log(frutas.join(" - "));
// console.log(frutas.join(", "));
// console.log(frutas.join(" . "));
// console.log(frutas.join(" "));
// console.log(frutas.join(" y "));

// .sort() => ordena alfabeticamente
// ❌ no funciona con numeros
// console.log(frutas.sort());

// console.log(frutas[1]);

// console.log(frutas.length)
// // console.log(frutas[6])

// const body = document.body;

// body.innerHTML += `<h2> - Frutas - </h2>`;

// for (let i = 0; i < frutas.length; i++) {
//   let fruta = frutas[i];
//   body.innerHTML += `<p>${fruta}</p>`;
// }

// Matrices | Array de 2 dimensiones
let numeros = ['1', '2', ['3', '4']];

console.log(numeros[2][0]);

// numeros[2][0] => ['3','4'] => '3';


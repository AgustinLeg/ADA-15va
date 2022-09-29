// Variables
// Es case sensitive
// No es tipado

// ES5 => ES = EcmaScript
/*
 var nombre = "Gabo";
 var edad = 28;
*/

// ES6

// Strings
let nombre = "Agustin";
// let saludo = 'El nombre es "Agustin"';
let mensaje = "hola mundo";

// Numbers

let edad = 22;
let negativo = -2;
let conComa = 2.2;

// Boleans
// camelCase
const esMayorDeEdad = false;

// PascalCase
const EsMayorDeEdad = true;

//  UPPER_SNAKE_CASE
const ES_MAYOR_DE_EDAD = true;

// Snake_Case
const es_mayor_de_edad = true;

// Nulos
let sinDefinir; // = undefined
let sinValor = null;

// Infinity Y NaN
let infinito = Infinity;
// let infinito = -Infinity;
let noEsUnNumero = NaN;

nombre = "Gabo";
// no se puede cambiar el valor de una constante
// edad = 28;
// console.log(dni);
// console.log(nombre);
// console.log(edad);
// console.log(saludo);
// console.log(mensaje);
// console.log(EsMayorDeEdad);
// console.log(sinDefinir);
// console.log(sinValor);

// Operadores Aritmeticos
// Suma
// console.log("La suma de 2 + 2 =" + (2 + 2));

// Resta
// console.log("La resta de 10 -2 =", 10 - 2);

// Multiplicacion
// console.log(2 * 2);

// Division
// console.log(212312 / 68923.23);

// Modulo - Restante
// console.log(10 % 2);

// let saludoDos = "BIENVENIDO " + nombre + "Como estas?" + 412241;
let saludoDos = `BIENVENIDO ${nombre} Como estas? ${2 + 2}`;

// console.log(saludoDos);

const dni = 1123124512;
// console.log(typeof nombre);

let numeroUno = 10;
let numeroDos = "30";
let numeroTres = "hola";

// console.log(typeof numeroDos);
// console.log(typeof Number(numeroDos));

// NaN
// console.log(Number(numeroTres) + 1);

// sumar numero + un booleano
const prueba = false;
// console.log(10 + prueba);
// console.log(Number(prueba));

// console.log(Boolean(""));

// console.log(numeroUno + Number(numeroDos));

const bienvenida = `Nombre: ${nombre} - DNI: ${dni} - Edad: ${edad}`;

// console.log(bienvenida);
// Interactuar con el index.html (documento)
// document.write(bienvenida);

// Crear multiples variables
let variable1 = 1,
  varibale2 = 2,
  variablesTres = 3; // NO nombrar asi las variables ❌

// una constante no puede inicializar sin dato => undefined
// const constanteUndefined;

// console.log(typeof variable1);
// alert("hola");

// let saludoPrompt = prompt("hola");
// console.log(Number(saludoPrompt));

// confirm("Tenes mas de 18 años?");

// ---------- REPASO Y EJERCICIOS ----------

// variables
// var - let y const

// Ejercicio 1

// const user = "Agustin",
//     age= 22,
//     email = "agustin@agus.com";

let user = prompt("Ingrese su nombre:");
let age = Number(prompt("Ingrese su edad:"));
let email = prompt("Ingrese su email:");

console.log(typeof user);
console.log(typeof age);
console.log(typeof email);


let saludo = `Hola me llamo ${user} y tengo ${age} años y mi email ${email}. Y mi + 10 es ${
  age + 10
}`;

// console.log(user+age+email);

// console.log(user + " " + age + " " +email);

// console.log(`${user} ${age} ${email}`);

console.log(saludo);


// console.log(age * 10)

// console.log(age - 10)



// Ejercicio 3
document.write(saludo);

alert(saludo);


// Ejercicio 4

let numero1 = Number(prompt("Ingrese el numero"));
let numero2 = Number(prompt("Ingrese el segundo numero"));

// let resultado = numero1 + numero2;

document.write(`<br> El resultado de la suma es: ${numero1 + numero2}`);
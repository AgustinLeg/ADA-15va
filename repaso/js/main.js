// Case Sensitive
// var => ya no se recomienda usar.
// let y const

let contador = 1; // number
const email = "agustin@agustin.com"; // string
const domicilio = "Calle 123"; // string
const mensaje = 'nombre: "Agustin"';
let tengoGorra = true; // boolean
let remeraBlanca = false;
let variable = undefined;
let nulo = null;

// let miNombreEsAgustin => camel case
// let mi_nombre_es_agustin => snake_case
// const mi nombre es agustin ❌

// function expression
let suma = function (parametroUno, parametroDos) {
  console.log("valor parametro uno " + parametroUno);
  console.log("valor parametro dos " + parametroDos);
  let cuenta = contador + parametroUno;

  let cuentaCompleja = cuenta * parametroDos;
  // console.log(cuenta);
  return cuentaCompleja;
};

// function declaration
function nombreFunction() {}

// ES6 => EcmaScript 6

// Funcion Flecha
let superSuma = (a, b) => a + b;

// Ejecutar/Llamar Funcion

// console.log()
// alert()

let contadorNuevo = suma(10, 5);

console.log(contadorNuevo);
document.write(contadorNuevo);

console.log(superSuma(50, 22));

/*

### Ejercicio 7 ✅

- Crear una funcion que tome por argumento un numero y retorne un numero aleatorio entre el 0 y el argumento.


*/

console.log("==========================");

let numeroRandom = (numero) => {
  let resultado = Math.round(Math.random() * numero);

  return resultado;
};

console.log(numeroRandom(50));

/*

### Ejercicio 2/4

let string = "El artista WOS cantando QUEREME"

- Tomar la siguiente variable, convertirla a todo mayusculas y mostrar por consola. Hacer lo mismo pero con minusculas.

- Tomar la variable del ejercicio 2 y reemplazar "WOS" por "Queen" y "QUEREME" por "Bohemian Rhapsody"

*/

let string = "El artista WOS cantando QUEREME";

// 2 ✅
console.log(string.toUpperCase());
console.log(string.toLowerCase());

// 4

function ReemplazarString() {
  // Version 1
  // let stringModificado = string.replace("WOS", "Queen");
  // let resultado = stringModificado.replace("QUEREME", "Bohemian Rhapsody");
  // return resultado;

  // Version 2
  // let resultado = string
  //   .replace("WOS", "Queen")
  //   .replace("QUEREME", "Bohemian Rhapsody");

  // return resultado;

  // Version 2.5
  return string.replace("WOS", "Queen").replace("QUEREME", "Bohemian Rhapsody");
}

console.log(ReemplazarString());


let frase = "El artista Wos cantando Quereme";


let reemplazo = (parametro) => 
  console.log(
    parametro.replace("Wos", "Queen").replace("Quereme", "Bohemian Rhapsody")
  );
  
reemplazo(frase);

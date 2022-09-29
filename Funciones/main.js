/*
Funciones

- Tiene que hacer una tarea y hacerla bien.
- Puede recibor argumentos
- Se puede reutilizar
- Scope => Alcance

*/

let numeroUno = 10;
let numeroDos = 5;
// let resultado = 0;

// function declaration
function suma() {
  let resultado = numeroUno + numeroDos;
  console.log("Sumar = " + resultado);
}

// Recibir parametros => el orden importa
function restar(n1, n2) {
  let resultado = n1 - n2;

  console.log("Resta = " + resultado);
}

// Llamar a la funcion para que se ejecute.
suma();

// 100 - 25
restar(100, 25);

// document.write(resultado);
// console.log('RESULTADO GLOBAL ' + resultado);

function saludo(nombre) {
  console.log(`Hola ${nombre}`);
}

saludo("Agustin");
saludo("Gabo 2");

// Function Expression
let multiplicacion = function (n1, n2) {
  let resultado = n1 * n2;

  console.log("Multiplicacion = " + resultado);
};

let n1 = 5;
let n2 = 2;

multiplicacion(n1, n2);

let division = function (n1, n2) {
  let resultado = n1 / n2;

  return resultado;
};

let calculoComplejo = function (n1, n2) {
  let resultadoDivision = division(n1, n2); // => 2
  let resultadoFinal = resultadoDivision * 5 + n2;
  console.log("CALCULO COMPLEJO " + resultadoFinal);
};

calculoComplejo(4, 2);

// let variablePrueba = ;

// console.log(division(20, 5));
// document.write(division(100, 2));

// Arrow Functions

// No retorna nada
let saludar = (nombre) => {
  let saludoComplejo = `HOLA MUCHO GUSTO ${nombre}`;

  return saludoComplejo;

  // Si yo quiero retornar algo se agrega return ....
};

// let sumarCinco = (n1) => n1 + 5;

// Retornar de manera implicita
let sumarCinco = (n1) => n1 + 5; // => siempre retorna

let respuestaDeSaludo = saludar("Agustin") + " Como fue tu dia?";

document.write(respuestaDeSaludo);
console.log(respuestaDeSaludo);

console.log(sumarCinco(10));

// Ejercicio 3

let datosPersonales = function (nombre, edad, profesion, pais) {
  let presentacion = `Me llamo ${nombre}, tengo ${edad} anios, vivo en ${pais} y soy ${profesion}.`;
  return presentacion;
};

let presentacionGabo = datosPersonales(
  "Gabo",
  28,
  "Programador Frontend",
  "Argentina"
);

let presentacionAgustin = datosPersonales(
  "Agustin",
  22,
  "Programador Frontend",
  "Argentina"
);

document.write(presentacionAgustin);

console.log(presentacionGabo);

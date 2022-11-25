const numero = new Number(1); // 1
const string = new String("hola"); // 'hola'
const boolean = new Boolean(false); // false

// Objeto => es un tipo de dato que almecena informacion mas estructurada.

// Syntax de objeto
// const obj = { key : value }

// let nombre = "Agustin",
//   apellido = "Leguizamon",
//   edad = 22;

// let nombre1 = "Gabo",
//   apellido1 = "Gabito",
//   edad1 = 18;

const agustin = {
  nombre: "Agustin",
  apellido: "Leguizamon",
  edad: 22,
};

// console.log(agustin)

// Leyendo propiedades de un objeto (notacion de punto)

// console.log(gabo.nombre)
// console.log(gabo.apellido)
// console.log(gabo.edad)
// console.log(gabo.soltero)

// Leyendo propiedades de un objeto (notacion de corchetes)

// ventaja (acceder de manera dinamica)

// let propiedad = 'nombre';

// console.log(gabo[propiedad]);

// Modificar valor de una propiedad;

// gabo.edad = 19;
// gabo.nombre = "gabo";
// gabo.apellido = "GABITO";

// Object.values
// Devuelve un array con los valores del objeto que paso entre parentesis.

// console.log(Object.values(gabo));

// Object.keys
// Devuelve un array con las KEYS del objeto que paso entre parentesis.

// console.log(Object.keys(gabo));

// Object.entries
// Devuelve un array de 2 dimensiones en donde cada elemento es otro array y en la posicion 0 guarda la key y en la posicion 1 guarda el valor.

// console.log(Object.entries(gabo));

const gabo = {
  nombre: "Gabo",
  apellido: "Gabito",
  edad: 18,
};

// Bucle para objetos for...in
// for (let key in gabo) {
//   console.log(gabo[key]);
// }

// hasOwnProperty
// "preguntar" si existe cierta propiedad en un objeto

// console.log(gabo.hasOwnProperty('pepe'));

let num = 10;

// console.log(Number('5'));
// console.log(String(5));
// console.log(typeof num.toString());
// console.log(Boolean(undefined));

const objUno = {
  edad: 20,
  nombre: "Prueba",
};

// Problema con las referencias

const objDos = objUno;

objDos.edad = 30;

console.log("uno", objUno);
console.log("dos", objDos);

// Ambos objetos cambio su valor por que estan ocupando el mismo espacio en memoria.
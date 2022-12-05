// Metodos de Arrays

const numeros = [5, -12, 27, 91, 102, -48];

numeros.push(1);
numeros.push(2);
numeros.pop();
// foreach => solo recorre el array
numeros.forEach((numero, index) => {
  // console.log(numero, index);
});

// Filter => devuelve un array nuevo solo con los elementos que cumplen con una condicion dada.

const numerosPositivos = numeros.filter((numero) => numero > 0);

// console.log(numeros);
// console.log(numerosPositivos);

// Find => Devuelve el PRIMER ELEMENTO que coincide con una condicion dada.

const numero = numeros.find((numero) => numero > 0);

// console.log(numero )

// Map => devuelve un nuevo array CON LA MISMA CONTIDAD DE ELEMENTOS QUE EL ARRAY ORIGINAL pero con una modificacion dada

const numerosNuevos = numeros.map((numero) => {
  if (numero <= 50) {
    return numero + 100;
  }

  return numero;
});

console.log("map", numerosNuevos);

// Every => devuelve un boolean dependiendo de si TODOS los elementos cumplen con una condicion dada.

const hayNegativos = numeros.every((n) => n < 0);

const sonPositivos = numerosPositivos.every((n) => n > 0);

console.log({ hayNegativos });
console.log({ sonPositivos });

/*
// extra Objetos
const color = "rojo";

const obj = {
  color,
};

console.log(obj);

*/


// Some => devuelve un boolean dependiendo de si al menos UN elementos cumple con una condicion dada.

const hayNumeroCinco = numeros.some(n => n === 5)

console.log({hayNumeroCinco})
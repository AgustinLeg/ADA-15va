/*
### Ejercicio 5

- Como harian para usar las funciones del ejercicio 1 pero que los numeros se los pidamos al usuario?
- Repetir solucion pero para el ejercicio 2 y ejercicio 3

*/

let numeroUno = Number(prompt("Ingrese el primer numero"));
let numeroDos = Number(prompt("Ingrese el segundo numero"));

let sumar = (n1, n2) => n1 + n2;

let calcularSueldo = function (sueldo, porcentaje) {
  let calcularPorcentaje = (sueldo * porcentaje) / 100;
  let sueldoFinal = sueldo + calcularPorcentaje;

  return sueldoFinal;
};

// console.log(sumar(numeroUno, numeroDos)); opcion 1
let resultado = sumar(numeroUno, numeroDos); // opcion 2

console.log(`SUMA = ${resultado}`);

console.log(`SUELDO = ${calcularSueldo(1000, 10)}`);

/* 
### Bonus:

- Crear una funcion contador() que cada vez que se ejecute, sume en una unidad a una variable.
*/

// Solucion 1 ✅
// let contador = 0;
// let bonus = function (n1) {
//   let calculo = n1 + 1;

//   return calculo;
// };

// contador = bonus(contador);
// console.log(`bonus = ${contador}`);

// contador = bonus(contador);
// console.log(`bonus = ${contador}`);

// contador = bonus(contador);
// console.log(`bonus = ${contador}`);

// Solucion 2
let contador = 0;
let bonus = function () {
  contador = contador + 5;
};

console.log(contador);
bonus();
console.log(contador);
bonus();
console.log(contador);
bonus();
console.log(contador);

// let a = 0;
// if(a==0) alert(a);

let a = 5;

const suma = () => {
  a = 6;
  b = 6;
  return a + b;
};

// console.log(suma());

const nombreCompleto = "Agustin" + "Leguizamon";

const array = [1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   if(element === 3){
//     console.log('ES TREEES')
//     break;
//   }else{
//     console.log('NO ES TRES')
//   }
// }

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   if (element === 3) {
//     continue;
//   }
//   console.log("NO ES TRES", element);
// }

/*
Escribir un programa que muestre en pantalla los números del 1 al 100, sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 (o de 15), por la palabra “fizzbuzz”.
*/

// for (let i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     // i % 3 === 0 && i % 5 === 0
//     console.log("fizzbuzz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else {
//     console.log(i);
//   }
// }

const numbers = [33, 2, 8];

numbers.sort((a, b) => {
  if (a < b) {
    return 1;
  }

  if (a > b) {
    return -1;
  }

  return 0;
}); 

// [2,33,8]
// console.log(numbers);



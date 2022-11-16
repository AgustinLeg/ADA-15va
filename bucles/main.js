const parrafos = document.getElementsByClassName("parrafo");

for (let i = 0; i < parrafos.length; i++) {
  let parrafo = parrafos[i];
  parrafo.style.color = "red";
}

// while

// let numero = 0;

// while (numero < 5) {
//   console.log("hola while");

//   numero++;
// }

// let confirmar = confirm("Acepta nuestras politicas?");

// while (confirmar === false) {
//   confirmar = confirm("Acepta nuestras politicas?");
// }

// do while;

// let confirmar;

// do {
//   confirmar = confirm("Acepta nuestras politicas?");
// } while (confirmar === false);

// for...of

const numeros = [1, 2, 3, 4, 5, 6];
const letras = ["a", "b", "c"];
const nombre = "Agustin";

// for(let numero of numeros){
//   console.log(numero)
// }

// for(let letra of letras){
//   console.log(letra)
// }

// for(let caracter of nombre){
//   console.log(caracter)
// }

let dosDimensiones = [
  [1, 2],
  [3, 4],
];

// MEGA EXTRA
// for(let [primero, segundo] of dosDimensiones){
//   console.log(primero)
//   console.log(segundo)
// }

// for...in

// en arrays nos devuelve los indices
// for(let index in numeros){
//   console.log(index)
// }

const persona = {
  nombre: "Agustin",
  edad: 22,
  dni: 12345678,
  // p: 'funciona'
};

// mas comun
// console.log(persona.nombre)
// console.log(persona.dni)
// console.log(persona.edad)

// se usa cuando buscamos una propiedad dinamica
// console.log(persona['nombre'])

// console.log(persona.p)

// la key de cada propiedad de un objeto
// for (let p in persona) {
//   console.log(p);
//   console.log(persona[p]);
// }

// Haciendo un menú de comandos con while y switch

// 1 -> comprar pan
// 2 -> ir a la plaza
// 3 -> comporar agua
// 4 -> salir

// let opcion = prompt(
//   "Ingrese una opcion \n 1) Comprar Pan \n 2) Ir a la plaza \n 3) Comprar Agua \n 4) Salir"
// );

// while (Number(opcion) !== 4) {
//   switch (opcion) {
//     case '1':
//       console.log("Comprar Pan");
//       break;
//     case '2':
//       console.log("Ir a la plaza");
//       break;
//     case '3':
//       console.log("Comprar Agua");
//       break;
//     case '4':
//       console.log("Chau 👋🏾...");
//       break;
//     default:
//       console.log("OPCION INCORRECTA");
//       break;
//   }

//   opcion = prompt(
//     "Ingrese una opcion \n 1) Comprar Pan \n 2) Ir a la plaza \n 3) Comprar Agua \n 4) Salir"
//   );
// }

// do while

let opcion;

// do {
//   opcion = Number(
//     prompt(
//       "Ingrese una opcion \n 1) Comprar Pan \n 2) Ir a la plaza \n 3) Comprar Agua \n 4) Salir"
//     )
//   );
//   switch (opcion) {
//     case 1:
//       console.log("Comprar Pan");
//       break;
//     case 2:
//       console.log("Ir a la plaza");
//       break;
//     case 3:
//       console.log("Comprar Agua");
//       break;
//     case 4:
//       console.log("Chau 👋🏾...");
//       break;
//     default:
//       console.log("OPCION INCORRECTA");
//       break;
//   }
// } while (opcion !== 4);

// ============= EJERCICIOS MUMUKI =================
const estanJuntos = (personajes) => {
  const Sam = "Sam";
  const Frodo = "Frodo";
  for (let i = 0; i < personajes.length; i++) {
    if (personajes[i] === Frodo) {
      return personajes[i - 1] === Sam || personajes[i + 1] === Sam;
    }
  }
};

console.log(estanJuntos(["Sam", "Frodo", "Legolas"])); // true
console.log(estanJuntos(["Aragorn", "Frodo", "Sam"])); // true
console.log(estanJuntos(["Sam", "Orco", "Frodo"])); // false

const germinar = (plantines) => {
  let plantinesGerminados = plantines[0]; // => '🌷🌷🌻🌻'

  for (let i = 1; i < plantines.length; i++) {
    if (plantines[i] === "🌱") {
      plantinesGerminados += plantines[i - 1];
    } else {
      plantinesGerminados += plantines[i];
    }
  }
  return plantinesGerminados;
};

console.log(germinar("🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱"));

const invertirCaso = (string) => {
  let stringInvertido = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      stringInvertido += string.charAt[i].toLowerCase();
    } else {
      stringInvertido += string[i].toUpperCase();
    }
  }

  return stringInvertido;
};


const comer = (string) => {
  let posicionConejo =string.indexOf('C')
  let posicionProhibido =string.indexOf('P')

  string = string.slice(0,posicionConejo) + string.slice(posicionProhibido + 1)

  return string
}

comer('CzlzP'); // => ''
// 🐰🥕🥬🥕🚫
comer('zlCzzzP');//=>🥬🥕
// 🥕🥬🐰🥕🥕🥕🚫
comer('pzpCplppPf'); // => 🌱🥕🌱🌷
// 🌱🥕🌱🐰🌱🥬🌱🌱🚫🌷
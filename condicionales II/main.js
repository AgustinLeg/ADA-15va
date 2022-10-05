// Condicionales

let edad = 18;
const PERMISO_FIESTA = "18";

// Operadores de comparacion

// == igualdad
// === igualdad estricta
// != distinto
// !== distinto estricto
// > mayor
// >= mayor o igual
// < menor
// <= menor o igual

if (edad === PERMISO_FIESTA) {
  alert("Podes ingresar");
} else {
  console.log("No podes ingresar a esta fiesta");
}

// if(edad < 18){
//   console.log('No podes ingresar a esta fiesta')
// }

/*
Ejercicios
tienenMismaLongitud(a, b)
Crear una función tienenMismaLongitud que tome como argumentos dos strings a y b y devuelva true si tienen la misma longitud o false de lo contrario

 tienenMismaLongitud('javascript', 'java') // false
 tienenMismaLongitud('manzana', 'cerveza') // true 
*/

let tienenMismaLongitud = (a, b) => {
  // Version 1
  let longitudA = a.length;
  let longitudB = b.length;

  if (longitudA == longitudB) {
    return true;
  } else {
    return false;
  }

  // Version 2
  // if(a.length === b.length){
  //   return true;
  // }else{
  //   return false
  // }

  // Version 3
  // return a.length === b.length;
};

let tienenMismaLongitudFlecha = (a, b) => a.length === b.length;

// console.log(tienenMismaLongitud("javascript", "java"));
// console.log(tienenMismaLongitud("manzana", "cerveza"));
// console.log(tienenMismaLongitud("hola", "hola"));

// Ejercicio
/*

Crear una función `puedeVerPelicula` que tome como argumentos un número `edad` y un booleano `tieneAutorizacion`, y devuelva `true` si la persona está habilitada para ver la película o `false` si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
*/

function puedeVerPelicula(edad, tieneAutorizacion) {
  if (edad >= 15) {
    return true;
  }

  if (tieneAutorizacion) {
    return true;
  }

  return false;
}

// && => and => y => todas mis condiciones se tienen que cumplir(true)

// || => or => o => es suficiente que se cumpla UNA sola condicion

function puedeVerPelicula(edad, tieneAutorizacion) {
  // Version doble if

  // if(edad >= 15){
  //   if(tieneAutorizacion === true){
  //     return true
  //   }
  // }else{
  //   return false
  // }

  // Tienen que cumplirse las 2 condiciones
  // if(edad >= 15 && tieneAutorizacion === true ){
  //   return true
  // }else{
  //   return false
  // }

  // Debe cumplirse 1 condicion
  if (edad >= 15 || tieneAutorizacion === true) {
    return true;
  } else {
    return false;
  }
}

console.log(puedeVerPelicula(12, true)); // true

console.log(puedeVerPelicula(16, false)); // true


let edadConductor = Number(prompt('Ingrese su edad:'));
let sabeManejar = prompt('Sabe manejar? si - no');

// Para poder ser aceptado en UBER tiene que ser mayor de 18 anios y saber manejar


function postulacionUBER() {
  let sabeManejarLowerCase = sabeManejar.toLowerCase()
  // Si
  // SI
  // sI
  // si
  // if (
  //   edadConductor >= 18 && (sabeManejarLowerCase === "si" || sabeManejarLowerCase === "sí")
  // ) {
  //   document.write("Bienvenido a UBER");
  // } else {

  //   document.write("Segui participando 👋🏾");
  // }

  // if (edadConductor >= 18) {
  //   // si se cumple la condicion hace tal cosa
  // } else if (condicion) {
  //   // si no se cumple la condicion hace esto
  // } 


}


postulacionUBER();


// spoiler else if
function puedeVerPeliculaDos(edad, tieneAutorizacion) {
  if(edad >= 15){

    console.log('PUEDE VER LA PELICULA mayor a 15')

  }else if(tieneAutorizacion){

    console.log('PUEDE VER LA PELICULA tiene permisos')
    
  } else {
    console.log('NO PUEDE VER LA PELICULAR')
  }
}


puedeVerPeliculaDos(12, false); // true
// Condicionales

// if else - switch

// if(condicion) {
//   console.log('se cumple')
// } else {
//   console.log('no se cumplio')
// }

let nombre = "agustin";
let variable = null;

if (nombre) {
  console.log(nombre);
} else {
  console.log("No tenes nombre");
}

if (variable) {
  console.log("La variable tiene info");
} else {
  console.log("NO tenemos informacion");
}

// Numbers: Si tengo cualquier numero distinto de 0 = true. Porque 0 = false
// String Si tengo un string vacio devuelve false. Si tengo mas de un caracter en mi string devuelve true
// Booleans true - false
// undefined devuelve false
// null devuelve false

let edad = 22;

/*
Operadores de comparacion

== igualdad => valor
=== igualdad estricta => valor y tipo de dato
!= distinto
!== distinto estricto

> mayor que
>= mayor o igual
< menor que
<= menor o igual

*/

console.log("===================== ");

if (nombre == "agustin") {
  console.log("BIENVENIDO Agustin");
} else {
  console.log("Usuario no identificado");
}

console.log(typeof edad);
console.log(typeof "22");

if (edad === 22) {
  let cuenta = edad + 10;
  console.log(cuenta);
  console.log("Sos mayor de edad");
} else {
  console.log("Sos MENOR de edad");
}

console.log("===================== ");
let edadGabo = 18;

if (edadGabo >= 18) {
  console.log("FELICIDADES GABO MAYOR DE EDAD");
} else {
  console.log("Sos MENOR de edad GABO");
}

console.log("===================== ");
let stock = 0;

if (stock <= 10) {
  console.log("Stock bajo");
}

if (stock < 5) {
  console.log("Stock MUY bajo");
}

if (stock === 0) {
  console.log("No hay stock");
}

let usuario = "Pepe";

console.log("===================== ");

if (usuario != "agustin") {
  console.log(`Bienvenido ${usuario}`);
} else {
  alert("NO ESTAS INVITADO Agustin");
}

let esDistinto = "22" !== 22; // true
let esDistintoDos = "22" != 22; // false *el valor es el mismo

console.log("===================== ");

let password = "12312312312";

// if (password.length >= 6) {
//   alert("Contresenia Correcta");
// } else {
//   console.log("Contrasenia incorrecta");
// }

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

let edadPelicula = Number(prompt("Ingrese su Edad"));

// console.log(puedeVerPelicula(12, false));

// console.log(puedeVerPelicula(12, true));

// console.log(puedeVerPelicula(16, false));

// console.log(puedeVerPelicula(18, true));

function puedeVerPeliculaAvanzado(edad) {

  if (edad < 15) {
    let autorizacionPelicula = prompt("Estas autorizado a ver esta pelicula?");

    if (autorizacionPelicula !== "SI") {
      return false;
    }
  }

  return true;
}

let usuarioActivado = true;
let usuarioSuscrito = true;
let usuarioPremium = true;

let validarUsuario = () => {
  
  if(usuarioActivado){
     console.log('esta activado');

    if(usuarioSuscrito){
      console.log('esta suscrito')


      if(usuarioPremium){

        console.log('es premium')

      }
    }
    
  }else{
    console.log('usuario no esta activado')
  }
  
}

validarUsuario();

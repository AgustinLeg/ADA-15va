// Funciones Nativas

// Metodos
// .length => largo de una cadena de caracteres
// .toUpperCase() => transformar un texto a mayusculas
// .toLowerCase() => transformar un texto a minusculas
// .slice() => recortar un texto desde el primer indice hasta el segundo indice
// .includes() =>buscar un caracter o un texto dentro de una cadena de caracteres/texto
// .indexOf() => busca  en el texto el indice de la primera posicion de un caracter en una cadena de carecteres
// .lastIndexof() => busca  en el texto el indice de la ultima posicion de un caracter en una cadena de carecteres
// .replace() => este metodo necesita dos parametros el primero es la palabra a buscar y la segunda para remplazar
// .trim() => eliminar los espacios
// .toString() => transformar a string

let nombre = "Agusttin";
let saludo = "Hola como estas?";
let nombreDos = "   a ";

let password = "123"; // prompt("Ingrese contrasenia");

console.log(password.length);
console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());
console.log(saludo.slice(0, 1));
console.log(nombre.includes("Agus"));
console.log(saludo.includes("como estas"));
console.log(nombre.indexOf("tin"));

const mezcla = nombre.slice(nombre.indexOf("tin"), 10);

console.log(mezcla);

console.log("====================================");

console.log(nombre.lastIndexOf("tin"));

console.log(nombre.replace("t", "m"));

// concatenar metodos
console.log(nombreDos.trim().length);
console.log(nombreDos.trimEnd().trimStart().length);

let edad = 22;

console.log(edad.toString());

// Expresiones regulares / Regex

// ej validar email

// oiasfhoiasfr ❌
// osdfjioas@aosidnasio ❌
// asoidfbnaio@sdfoaifo.kok ✅

const validarEmail =
  /^[a-zA-Z.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    "asoifnasio@aoidsn.com"
  ); // => retorna un boolean;

console.log(validarEmail);

// Math
// min()
// max()
// round() => redondea segun el decima menor o mayor a 5
// ceil() => redondea para arriba
// floor() => redondea para abajo
// random() => un numero aleatorio entre el 0 y el 1

// Objeto Math

console.log("====================================");

console.log(Math.min(400, 412, 4, 56, 5, 6, 7, 8, 9));
console.log(Math.max(400, 412, 4, 56, 5, 6, 7, 8, 9));
console.log(Math.round(3.5));
console.log(Math.ceil(3.1));
console.log(Math.ceil(Math.PI));
console.log(Math.ceil(Math.PI));
console.log(Math.floor(300.1));
console.log(Math.round(Math.random() * 100));
console.log(Math.sqrt(9));

console.log("number ", isNaN(123));
console.log("string ", isNaN("Hola"));
console.log("null ", isNaN(null));
console.log("undefined ", isNaN(undefined));
console.log("boolean ", isNaN(false));

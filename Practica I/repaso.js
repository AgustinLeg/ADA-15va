//obtenerDiasMes(mes)
//Crear una función obtenerDiasMes que tome como argumento un string mes y
//devuelva un número dependiendo de la cantidad de días que tenga ese mes
//
//obtenerDiasMes("diciembre") // 31
//obtenerDiasMes("febrero")   // 29

const obtenerDiasMes = (mes) => {
  if (
    mes === "enero" ||
    mes === "marzo" ||
    mes === "mayo" ||
    mes === "julio" ||
    mes === "agosto" ||
    mes === "octubre" ||
    mes === "diciembre"
  ) {
    console.log(31);
  } else if (
    mes === "abril" ||
    mes === "junio" ||
    mes === "septiembre" ||
    mes === "noviembre"
  ) {
    console.log(30);
  } else if (mes === "febrero") {
    console.log(29);
  } else {
    console.log("Mes invalido");
  }
};

// obtenerDiasMes("diciembre");
// obtenerDiasMes("febrero");
// obtenerDiasMes("mayo");
// obtenerDiasMes("hola");

/*Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no
 */

// function esHoraValida(hora) {
//   let HH = hora.slice(0, 2);
//   let mm = hora.slice(3, 5);

//   if ((HH >= 0 && HH < 24 )&& (mm >= 0 && mm < 60)) {
//     return true;
//   } else {
//     return false;
//   }
//   // if (HH > 24 || mm > 60) return false;
// }

function esHoraValida(hora) {
  if (/^[0-2][0-9]:[0-5][0-9]$/.test(hora)) {
    // hora = '10:30'
    /*var*/ horas = hora.slice(0, 2); // 10
    /*var*/ minutos = hora.slice(3, 5); // 30

    /*var*/ horasNumber = Number(horas); // 10
    /*var*/ minutosNumber = Number(minutos); // 30

    if (horasNumber <= 23 && minutosNumber <= 60) return true;
  }
  return false;
}

//es esta la forma correcta??

console.log(esHoraValida("11:20")); // true
console.log(esHoraValida("14:70")); // false
console.log(esHoraValida("28:05")); // false
console.log(esHoraValida("00:40")); // true
console.log(esHoraValida("23:30"));

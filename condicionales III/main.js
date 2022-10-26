let body = document.body;
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  // body.classList.toggle('light-theme');
  let estaModoOscuro = body.classList.contains("dark-theme"); // booleano

  if (estaModoOscuro) {
    btn.innerText = "Modo Claro";
  } else {
    btn.innerText = "Modo Oscuro";
  }
});

// favoritos
// Crear dos contenedores, uno para imágenes y otro para favoritos. En el contenedor de imágenes, agregar al menos 10 imágenes (cualesquiera). Al clickear una imagen en el contenedor de imágenes, se debe agregar la misma imagen en el contenedor de favoritos. Al clickear una imagen en el contenedor de favoritos, se debe eliminar la imagen seleccionada de dicho contenedor.

// let $ = (selector) => document.querySelector(selector);

// let uno = $(".uno");
// let dos = $(".dos");
// let tres = $(".tres");
// let cuatro = $(".cuatro");
// let cinco = $(".cinco");
// let seis = $(".seis");
// let favoritos = $(".favoritos");

// let elegidos = "";

// let elegirFavorito = (event) => {
//   console.log(event)
//   let urlImagen = event.path[0].currentSrc;
//   console.log("urlImagen", urlImagen);

//   let clase = event.path[0].classList[0];
//   console.log("clase", clase);

//   let etiquetaImg = `<img src="${urlImagen}" alt="" class="${clase}-nuevo">`;
//   console.log("etiquetaImg", etiquetaImg);

//   elegidos = elegidos + etiquetaImg;

//   favoritos.innerHTML = elegidos;

//   let unoNuevo = $(".uno-nuevo");
//   console.log("unoNuevo", unoNuevo);

//   unoNuevo.addEventListener("click", () => {
//     unoNuevo.style.display = "none";
//   });
// };

// uno.addEventListener("click", elegirFavorito);
// dos.addEventListener("click", elegirFavorito);
// tres.addEventListener("click", elegirFavorito);
// cuatro.addEventListener("click", elegirFavorito);
// cinco.addEventListener("click", elegirFavorito);
// seis.addEventListener("click", elegirFavorito);

let $ = (selector) => document.querySelector(selector);

// Condicionales III

// let numero = prompt('Ingrese un numero');

// if(numero < 10){

//   console.log('El numero es menor a diez');

// } else {

//   console.log('El numero es mayor');
// }

// let mes = prompt("Ingrese un mes").toLowerCase();

// // else if
// if (mes === "enero") {
//   console.log("ENERO");
// } else if (mes === "febrero") {
//   console.log("FEBRERO");
// } else if (mes === "marzo") {
//   console.log("MARZO");
// } else {
//   alert("Mes incorrecto");
// }

// switch

// switch(mes){
//   case 'enero':
//     console.log('ENERO');
//     break;
//   case 'febrero':
//     console.log('FEBRERO');
//     break;
//   case 'marzo':
//     console.log('MARZO');
//     break;
//   case 'abril':
//     console.log('ABRIL');
//     break;
//   default:
//     alert("Mes incorrecto");
//     break;
// }

// let opcion = Number(prompt("Ingrese una opcion"));

// switch (opcion) {
//   case 10: {
//     console.log("ES EL NUMERO DIEZ");
//     break;
//   }
//   default: {
//     console.log("NO ES UN NUMERO");
//     break;
//   }
// }

// Operador Ternario

let numero = 4;
let nombre = "Agustin";

// operador ternario
let esMenorCinco = numero < 5 ? "ES MENOR A 5" : "ES MAYOR A 5";

// if(numero < 5){
//   esMenorCinco = 'ES MENOR A 5'
// }else{
//   esMenorCinco = 'ES MAYOR A 5'
// }

// condicion ? pasa esto : pasa esto otro;

const terminosCondiciones = () => {
  const aceptaLosTerminos = confirm("Acepta los terminos y condiciones")
    ? "Acepto"
    : "No acepto";

  // if(aceptaLosTerminos){
  //   console.log('Acepto')
  // }else{
  //   console.log('No acepto')
  // }

  // let acepto = aceptaLosTerminos ? 'Acepto' : 'No acepto';

  // console.log(aceptaLosTerminos ? 'Acepto' : 'No acepto')

  console.log(aceptaLosTerminos);
};

// terminosCondiciones();

let contador = 5;
let btnSumar = document.getElementById("btn-sumar");
let btnRestar = document.getElementById("btn-restar");

btnSumar.addEventListener("click", () => {
  // contador = contador + 1
  // contador += 1; // se puede cambiar el "salto" ej => 2
  contador++;
  console.log(contador);
});

btnRestar.addEventListener("click", () => {
  // contador = contador - 1;
  // contador -= 1;
  contador--;
  console.log(contador);
});

// Extra funciones

function saludar() {
  console.log("Hola");

  console.log("Como");
  console.log("Estas");

  return console.log("?");
}

saludar();

function condicion(nombre) {
  if (nombre === "agustin") {
    console.log("Hola agustin");
    return;
  }

  if (nombre === "lu") {
    console.log("Hola lu");
    return;
  }

  console.log("se corto");
}

condicion("agustin");
condicion("lu");

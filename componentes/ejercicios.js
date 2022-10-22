// progreso
// Crear un documento html con
// una barra de progreso (con un div dentro de otro)
// un elemento de texto que indique el progreso (p. ej. 50%)
// dos botones, uno para incrementar y otro para dismininuir la barra (- y +)
// cuando se apretan los botones, la barra de progreso tiene que aumentar o disminuir respectivamente y el texto que indica el porcentaje de progreso tiene que actualizarse
// lo mismo tiene que pasar cuando se apreta la flecha derecha (aumentar progreso) y la flecha izquierda (disminuir progreso)
// el incremento/decremento es del 10%

const $ = (selector) => document.querySelector(selector);

let btnSumar = $("#btn-sumar");
let btnRestar = $("#btn-restar");
let titulo = $("#titulo");
let barraProgreso = $("#barra-progreso");

let progreso = 0; // %
const porcentaje = 10; // incremento/decremento es del 10%

btnSumar.addEventListener("click", () => {
  console.log(progreso);

  let resultado = progreso + porcentaje; // = 10

  if (resultado <= 100) {
    progreso = resultado;
    titulo.innerText = `Progreso ${progreso}%`;
    barraProgreso.style.width = `${progreso}%`;
  } else {
    alert("llegaste al maximo valor");
  }
});

btnRestar.addEventListener("click", () => {
  let resultado = progreso - porcentaje;

  if (resultado >= 0) {
    progreso = resultado;
    titulo.innerText = `Progreso ${progreso}%`;
    barraProgreso.style.width = `${progreso}%`;
  }
});

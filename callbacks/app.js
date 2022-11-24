// Callback
// es pasar una funcion como parametro a otra funcion

// setTimeout
// recibe como primer parametro un callback y como segundo el tiempo. Ejecuta el callback cuando finalice el tiempo.

// setTimeout(() => {
//   // alert('se termino el tiempo!')
// }, 5000);

// elemento.addEventListener("click", () => {
//   // callback
// });

// elemento.addEventListener("click", eventoClick);

// function eventoClick() {
//   console.log("click");
// }

// setInterval
// recibe un callback y un tiempo. Se ejecuta el callback cada vez que se cumple el tiempo.

let intervaloEl = document.querySelector("#intervalo");
let btnStopEl = document.querySelector("#btn-stop");
let btnStartEl = document.querySelector("#btn-start");

let contador = 0;
let interval;
// let interval = setInterval(() => {
//   contador += 1;
//   console.log(`se ejecuto ${contador} veces`);
//   intervaloEl.innerHTML = `se ejecuto ${contador} veces`;
// }, 1000);

// clearTimeout

// clearInterval
// setTimeout(() => {
//   clearInterval(interval);
// }, 5000);

btnStopEl.addEventListener("click", () => {
  clearInterval(interval);
});

btnStartEl.addEventListener("click", () => {
  interval = setInterval(() => {
    contador += 1;
    console.log(`se ejecuto ${contador} veces`);
    intervaloEl.innerHTML = `se ejecuto ${contador} veces`;
  }, 1000);
});

const mostrarAlerta = (mensaje) => {
  alert(mensaje);
};

const mostrarConsoleLog = (mensaje) => {
  console.log(mensaje);
};

const calcular = (a, b, callback) => {
  // console.log(a, b, callback);
  let total = a + b;
  console.log(total);
  callback(`El total es ${total}`);
};

calcular(1, 2, mostrarAlerta);
calcular(1, 2, mostrarConsoleLog);

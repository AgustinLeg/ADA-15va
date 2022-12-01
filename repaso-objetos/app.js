const autoUno = {
  color: "rojo",
  year: 2022,
  esNuevo: true,
  extras: {
    ruedas: 4,
    motor: 1.6,
  },
};

// const objetoVacio = {};

// console.log(objetoVacio.auto);

const mostrarColor = (auto) => {
  // document.write(auto["color"]);
  document.write(auto.year);
};
mostrarColor(autoUno);

// for (const key in autoUno) {
//   if(key === 'extras'){
//     console.log(autoUno[key].ruedas)
//   }else{
//     console.log(autoUno[key])
//   }
// }

const mostrarInfoAuto = (auto) => {
  const {
    color,
    year,
    esNuevo: nuevo, // renombrar
    extras: { ruedas, motor }, // destructuring anidado
  } = auto;

  console.log(color);
  console.log(year);
  console.log(nuevo);
  console.log(ruedas);
  console.log(motor);
};

// mostrarInfoAuto(autoUno);

// console.log(autoUno.extras.ruedas);

// Pasaje por valor vs pasaje por referencia

let numero = 10;

// const cambiarValor = (valor) => {
//   valor = valor * 10;

//   console.log(`Dentro de la funcion, el valor es ${valor}`);
// };

// cambiarValor(numero);

// console.log(`Por fuera de la funcion, el valor es ${numero}`);

// const arrayNumeros = [numero];

// const cambiarPorReferencia = (valor) => {
//   valor[0] = valor[0] * 10;

//   console.log(`Dentro de la funcion, el valor es ${valor}`);
// };

// cambiarPorReferencia(arrayNumeros);

// console.log(`Por fuera de la funcion, el valor es ${arrayNumeros}`);

const autoDos = {
  color: "azul",
  year: 2015,
};

// shallow copy
// const autoTres = autoDos;

// autoTres.year = 2020;

// console.log('auto Dos',autoDos)
// console.log('auto Tres',autoTres)

// Deep Copy
// copiar un objeto con spread operator
const autoTres = { ...autoDos, marca: "bmw", year: 2020 };

// autoTres.year = 2020;

// console.log("auto Dos", autoDos);
// console.log("auto Tres", autoTres);

const arrayNum = [numero];

// funcion pura no puedce modificar nada que este fuera de su ambito
const inmutabilidad = (valor) => {
  const array = [...valor];
  array[0] = array[0] * 10;

  console.log(array);
};

inmutabilidad(arrayNum);

// side effects
console.log(arrayNum);

// Localstorage

// agregamos un item
// localStorage.setItem("color", "rojo");

// obtenemos un item
// console.log(localStorage.getItem("color"))

// eliminar item
// localStorage.removeItem("");

// vaciar
// localStorage.clear()

localStorage.setItem("numero", 10);

const n = Number(localStorage.getItem("numero"));

console.log(n + 10);

localStorage.setItem(
  "auto",
  JSON.stringify({
    color: "rojo",
    year: 2022,
    esNuevo: true,
    extras: {
      ruedas: 4,
      motor: 1.6,
    },
  })
);

const autoStorage = JSON.parse(localStorage.getItem("auto"));
// const autoParseado = JSON.parse(autoStorage);

console.log(autoStorage.year);

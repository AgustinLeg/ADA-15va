// objetos II

/*
const persona = {
  nombre: 'agustin',
  edad: 22,
  leGustaProgramar: true,
  lenguajes: ['Javascript', 'PHP','Python'],
  auto: {
    ruedas: 4,
    puertas: 5,
    color: 'rojo',
  }  
}


// console.log(persona)

// array dentro de un objeto
for (let i = 0; i < persona.lenguajes.length; i++) {
  const lenguaje = persona.lenguajes[i];
  // console.log(lenguaje)
}

// objeto dentro de un objeto
// console.log(persona.auto.color)


// Operador delete => para eliminar una propiedad de un objeto


delete persona.auto;
delete persona.edad;

// console.log(persona)

*/

const persona = {
  nombre: "agustin",
  edad: 22,
  leGustaProgramar: true,
  lenguajes: ["Javascript", "PHP", "Python"],
  auto: {
    ruedas: 4,
    puertas: 5,
    color: "rojo",
  },
  agregarLenguaje: function (lenguaje) {
    this.lenguajes.push(lenguaje);
  },
};

persona.agregarLenguaje("C#");
persona.agregarLenguaje("C++");
persona.agregarLenguaje("Golang");

// console.log(persona);

// Copiar objetos

// Spread Operator => copia un array u objeto, podemos modificar esta copia y por lo tanto no mutar la variable original

const arrayUno = [1, 2, 3];
const arrayDos = [4, 5, 6];

const arrayFinal = [...arrayUno, "hola soy un string", ...arrayDos]; // 1,2,3,4,5,6

// console.log(arrayFinal);

const personaDos = { ...persona };

delete personaDos.nombre;
delete personaDos.auto;
delete personaDos.lenguajes;

// console.log("persona", persona);
// console.log("persona2", personaDos);

// Destructuring => sustraer/guardar propiedad que necesitamos

const saludarPersona = (persona) => {
  const {
    nombre: primerNombre,
    apellido,
    edad,
    color: colorFavorito,
  } = persona;

  const nombreCompleto = `${primerNombre} ${apellido}`;

  console.log(
    `Hola ${nombreCompleto}, edad ${edad}, color favorito = ${colorFavorito}`
  );
};

const gabo = {
  nombre: "Gabo",
  apellido: "Apellido",
  edad: 26,
  color: "verde",
};

// saludarPersona(gabo);

// Destructuring de arrays

const arrayTres = [1, 4, 5, 6, { saludo: "hola" }];

const [, cuatro, , , saludo] = arrayTres;

// console.log(cuatro);
// console.log(cinco)
// console.log(seis)

// console.log(saludo)

const estudiantes = [
  {
    edad: 17,
    familiar: "Salamandra",
    casa: "Hufflepuff",
    nombreCompleto: {
      nombre: "Ellis",
      apellido: "Reeves",
    },
    hechizoPreferido: "Expecto Patronum",
  },
  {
    edad: 15,
    familiar: "Salamandra",
    casa: "Gryffindor",
    nombreCompleto: {
      nombre: "Neal",
      apellido: "Spence",
    },
    hechizoPreferido: "Lumos",
  },
  {
    edad: 17,
    familiar: "Sapo",
    casa: "Slytherin",
    nombreCompleto: {
      nombre: "Lucy",
      apellido: "Talley",
    },
    hechizoPreferido: "Expelliarmus",
  },
  {
    edad: 21,
    familiar: "Lechuza",
    casa: "Slytherin",
    nombreCompleto: {
      nombre: "Gloria",
      apellido: "Woods",
    },
    hechizoPreferido: "Lumos",
  },
  {
    edad: 20,
    familiar: "Sapo",
    casa: "Gryffindor",
    nombreCompleto: {
      nombre: "Sharp",
      apellido: "Collier",
    },
    hechizoPreferido: "Lumos",
  },
];

// for (const estudiante of estudiantes) {
//   const { casa, edad, familiar } = estudiante;
//   console.log(casa);
//   console.log(edad);
//   console.log(familiar);
// }

// for (const { casa, edad, familiar } of estudiantes) {
//   console.log(casa);
//   console.log(edad);
//   console.log(familiar);
// }

const mostrarEstudiante = ({ casa, edad, familiar }) => {
  // const { casa, edad, familiar } = estudiante;
  console.log(casa);
  console.log(edad);
  console.log(familiar);
};

// mostrarEstudiante(estudiantes[4]);

// Rest Operator

const sumarAntes = (n1, n2) => {
  return n1 + n2;
};

console.log(sumarAntes(1, 2, 3, 4, 5, 6, 7, 8));
// solucion sin rest operator
// const sumar = (numeros) => {
//   let resultado = 0;

//   for (const numero of numeros) {
//     resultado += numero;
//   }

//   return resultado;
// };

// console.log(sumar([1, 2, 3, 4, 5, 6, 7, 8]));

// solucion con el rest operator
const sumar = (primero, ...numeros) => {
  let resultado = 0;

  console.log(primero);

  for (const numero of numeros) {
    resultado += numero;
  }

  return resultado;
};

console.log(sumar("hola", 1, 2, 3, 4, 5, 6, 7, 8));

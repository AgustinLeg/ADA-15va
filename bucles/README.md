# Estructuras de datos: Arrays

# Parte 1 - Repaso

## Ejercicio Array 001

- Dado el array `playlistFoo`, mostrar en consola la canción que está en segundo y quinto lugar.

```js
const playlistFoo = [
  "Everlong",
  "The Pretender",
  "Learn to Fly",
  "Best of You",
  "All My Life",
  "Monkey Wrench",
  "The Sky is a Neighborhood",
];
```

## Ejercicio Array 002

- Crear un array con el nombre **notas** y asignar un array con 10 valores numéricos de 1 a 10
- Sumar los valores de la primera, cuarta, quinta y última entrega
- Cada nota del array notas corresponde a una entrega de las alumnas

## Ejercicio Array 003

- Declarar un array con el nombre **discoNevermind** y asignar los siguientes valores:
  - Smells Like Teen Spirit
  - In Bloom
  - Come As You Are
  - Immodium
  - Lithium
  - Polly
  - Territorial Pissings
  - Drain You
  - Lounge Act
  - Pay To Play
  - On a Plain
  - Endless, Nameless
- Reemplazar `Immodium` por `Breed`
- Reemplazar `Pay To Play` por `Stay Away`
- Reemplazar `Tim` por `Something in the Way`
- Mostrar en consola la lista de canciones modificada
- El resultado debería ser: `["Smells Like Teen Spirit", "In Bloom", "Come As You Are", "Breed", "Lithium", "Polly", "Territorial Pissings", "Drain You", "Lounge Act", "Stay Away", "On a Plain", "Something in the Way"]`

## Ejercicio Array 004

- Declarar una variable `etiquetasHtml` con varios de los nombres de las etiquetas de HTML que ya conocés
- Mostrar en consola el nombre de la 2da etiqueta del array **en mayúsculas**
- Mostrar en consola el nombre de la 5ta etiqueta del array **en minúsculas**
- Mostrar en consola la cantidad de etiquetas guardadas en el array

## Ejercicio Array 005

- Teniendo el array `ganadorasRupaul`, mostrar en consola el nombre de la primer y última ganadora.
- Para la última ganadora no se puede usar un índice a mano sino que hay que hacerlo de forma dinámica _como si no supieramos la cantidad exacta de elementos_

```js
const ganadorasRupaul = [
  "BeBe Zahara Benet",
  "Tyra Sanchez",
  "Raja",
  "Sharon Needles",
  "Jinkx Monsoon",
  "Bianca del Rio",
  "Violet Chachki",
  "Bob the Drag Queen",
  "Sasha Velour",
  "Aquaria",
];
```

## Ejercicio Array 006

- Teniendo dos arrays de canciones, comparar sus longitudes y mostrar en pantalla “La playlist de Nirvana tiene más canciones” si el array `playlistNirvana` tiene más canciones, o “La playlist de Foo Fighters tiene más canciones” si el array `playlistFoo` tiene más elementos.

```js
const playlistNirvana = [
  "Smells Like Teen Spirit",
  "Come As You Are",
  "Heart-Shaped Box",
  "Lithium",
];
const playlistFoo = ["Everlong", "The Pretender", "Learn to Fly"];
```

## Ejercicio Array 007

- Crear un documento con el nombre arr_011.js
- Eliminá el primer elemento del array y colocá en su lugar tu fruta o verdura preferida utilizando `shift` y `unshift`.

```js
const frutas = ["Manzana", "Banana"];
```

## Ejercicio Array 008

- Declarar una variable llamada `concreteAndGold` y asignarle un array vacio `[]`
- Agregar al array las siguientes canciones:
  - T-Shirt
  - Run
  - Make It Right
  - The Sky Is a Neighborhood
  - La Dee Da
  - Dirty Water
  - Arrows
  - Happy Ever After (Zero Hour)
  - Sunday Rain
  - The Line
  - Concrete and Gold
- No se puede utilizar índices numéricos
- Utilizar alguna de las siguientes funciones: `shift`, `unshift`, `push`, `pop`
- Los elementos tienen que guardarse en el mismo orden que se van ingresando
- Mostrar en consola la primera y última canción
- Mostrar en consola el contenido del array
- Resultado esperado:

```bash
"T-Shirt"
"Concrete and Gold"
["T-Shirt", "Run", "Make It Right", "The Sky Is a Neighborhood", "La Dee Da", "Dirty Water", "Arrows", "Happy Ever After (Zero Hour)", "Sunday Rain", "The Line", "Concrete and Gold"]
```

## Ejercicio Array 009

- Declarar una variable llamada `concreteAndGold` y asignarle un array vacio `[]`
- Agregar al array las siguientes canciones:
  - T-Shirt
  - Run
  - Make It Right
  - The Sky Is a Neighborhood
  - La Dee Da
  - Dirty Water
  - Arrows
  - Happy Ever After (Zero Hour)
  - Sunday Rain
  - The Line
  - Concrete and Gold
- No se puede utilizar índices numéricos
- Utilizar alguna de las siguientes funciones: `shift`, `unshift`, `push`, `pop`
- Los elementos tienen que guardarse en el orden inverso al que se van ingresando
- Mostrar en consola la primera y última canción
- Mostrar en consola el contenido del array
- Resultado esperado:

```bash
"Concrete and Gold"
"T-Shirt"
["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"]
```

## Ejercicio Array 010

- Partiendo del siguiente array de números `const numeros = [6, 1, 2, 3, 4, 5];`
- Eliminar el primer elemento, y agregarlo al final del array.
- Mostrar el resultado final.
- Resultado esperado

```bash
[1, 2, 3, 4, 5, 6]
```

## Ejercicio Array 011

- Crear un documento con el nombre arr_016.js
- Teniendo las siguientes variables `playlist` y `playlistEscuchada`:

```js
const playlist = [
  "Smells Like Teen Spirit",
  "Come As You Are",
  "Heart-Shaped Box",
  "Lithium",
];
const playlistEscuchada = ["School"];
```

- Eliminar la primer canción del array `playlist`, y agregar el elemento eliminado al final del array `playlistEscuchada`
- Mostrar el contenido de `playlist`
- Mostrar el contenido de `playlistEscuchada`
- Resultado espeardo:

```bash
playlist: ["Come As You Are", "Heart-Shaped Box", "Lithium"]
playlistEscuchada: ["School", "Smells Like Teen Spirit"]
```

## Ejercicio Array 012

- Crear un documento con el nombre arr_018.js
- Si tenemos el array `womenInTech`

```js
const womenInTech = [
  "Ada Lovelace",
  "Hedy Lamarr",
  "Grace Hopper",
  "Radia Perlman",
  "Janie Tsao",
  "Sheryl Sandberg",
  "Susan Kare",
  "Parisa Tabriz",
];
```

- Ordenar el array
- Mostrar en la consola el array ordenado
- Revertir el orden de la lista ordenada
- Mostrar en la consola el array revertido
- Unir los nombres de todas las mujeres en tecnología utilizando `" - "` para separa

## Ejercicio Array 013

- Crear un documento con el nombre arr_019.js
- Si tenemos dos arrays `playlistNirvana` y `playlistFoo`:

```js
const playlistNirvana = [
  "Smells Like Teen Spirit",
  "Come As You Are",
  "Heart-Shaped Box",
  "Lithium",
];
const playlistFoo = ["Everlong", "The Pretender", "Learn to Fly"];
```

- Crear una variable `playlistCompleta`, con los nombres de todas las canciones que hay en `playlistNirvana` y `playlistFoo`.
- Mostrar en consola los siguiente nombres de forma individual (uno por linea):
  - Nombres de las canciones de nirvana (a mano utilizando índices)
  - Nombres de los canciones de foo fighters (utilizando while)
  - Nombres de todas las canciones entre ambas listas (utilizando for)

## Ejercicio Array 014

- Tenemos un array de canciones de Spotify. Queremos mostrar por consola la siguiente información:
  - Posición de la canción **Lithium**
  - Posición de la canción **On a Plain**
- Completar el siguiente código para que pueda mostrarnos lo que solicitamos

```js
const playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];


// completar las dos asignaciones de abajo
const indiceLithium = ;
const indiceOnAPlain = ;

console.log("El índice de la canción Lithium es:");
console.log(indiceLithium); // deberia mostrar 3
console.log("El índice de la canción On a Plain es:");
console.log(indiceOnAPlain); // deberia mostrar -1
```

## Ejercicio Array 015

- Tenemos un array con todas las ganadoras de RuPaul’s Drag Race, en la variable `ganadorasRupaul`. Vamos a escribir un programa en el que queremos saber la siguiente información:
  - Que número de ganadora es **Sharon Needles**
  - Mostrar por pantalla si **Latrice Royale** fue una ganadora del concurso.
- Completar el siguiente código para que pueda mostrarnos lo que solicitamos

```js
const ganadorasRupaul = ["Tyra Sanchez", "Chad Michaels", "Raja", "Trixie Mattel", "Aquaria", "Bebe Zahara Benet", "Sharon Needles", "Jinkx Monsoon", "Alaska Thunderfuck 5000", "Bianca Del Rio", "Violet Chachki", "Bob the Drag Queen", "Sasha Velour"];

// completar el código para el primero punto
const posicionSharonNeedles = ;
// si Latrice Royale está en el array de ganadoras, asignamos TRUE... si no está, asignamos FALSE
const latriceRoyaleGano = ;

console.log("Sharon Needles es la ganadora número:");
console.log(posicionSharonNeedles); // deberia mostrar 5

if (latriceRoyaleGano) {
  console.log("Latrice Royale fue ganadora de RuPaul's Drag Race");
} else {
  console.log("Latrice Royale NO fue ganadora de RuPaul's Drag Race");
}
// deberia mostrar "Latrice Royale NO fue ganadora de RuPaul's Drag Race"
```

## Ejercicio Array 016

- Tenemos un array llamado `womenInTech` sobre el que tenés que realizar las siguientes operaciones:

  - eliminar a "Bill Gates", que está en la última posición
  - agregar "Parisa Tabriz" al final del array

- Luego de realizar las dos operaciones, vamos a mostrar la siguiente información por consola:
  - la longitud del array
  - quien está en la posición 3
  - mostrar todos los elementos del array, uno debajo del otro

```js
const womenInTech = ["Ada Lovelace", "Hedy Lamarr", "Grace Hopper", "Radia Perlman", "Janie Tsao", "Sheryl Sandberg", "Susan Kare", "Bill Gates"];

// ACA VA EL CODIGO DE LA PRIMERA PARTE DEL EJERCICIO
// UNA VEZ QUE REALIZAMOS LAS OPERACIONES PASAMOS AL SIGUIENTE PASO

// completar las cuatro asignaciones de abajo
const longitud = ;
const enLaPosicion3 = ;

console.log("La longitud del array es:");
console.log(longitud);
console.log("En la posición 3 está:");
console.log(enLaPosicion3);

// utilizar un for para mostrar cada nombre del array
```

## Ejercicio Array 017

- Tenemos un array llamado `womenInTech` con nombres de mujeres influyentes en la tecnología.
- Queremos transformar el array en un string sin usar **join**, separando los nombres con un guión y guardando el string resultante en la variable `nombresSeparadosPorGuion`

```js
const womenInTech = [
  "Ada Lovelace",
  "Hedy Lamarr",
  "Grace Hopper",
  "Radia Perlman",
  "Janie Tsao",
  "Sheryl Sandberg",
  "Susan Kare",
  "Parisa Tabriz",
];
const nombresSeparadosPorGuion = "";

// aca va la solucion

console.log(nombresSeparadosPorGuion);
// deberia mostrar "Ada Lovelace - Hedy Lamarr - Grace Hopper - Radia Perlman - Janie Tsao - Sheryl Sandberg - Susan Kare - Parisa Tabriz"
```

## Ejercicio Array 018

- Tenemos un array llamado `numbers` con números enteros al azar.
- Queremos calcular la suma de todos los números que están en el array.
- Por ejemplo: Si tenemos `[1, 2, 3]`, la suma de todos los números es **6**

```js
const numbers = [6, 1, 34, 94, 3, 17];
const sum = 0;

// solucion

console.log(sum);
// deberia mostrar 155
```

## Ejercicio Array 019

- Tenemos un array llamado `notasDeTPs` con números del 1 al 10, que representan las notas de los distintos trabajos prácticos entregados por Grace Hopper en el curso de Ada.
- Queremos calcular la nota promedio final de trabajos prácticos _(el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad de notas)_.
- Por ejemplo: Si tenemos `[7, 8, 9, 10]`, la nota final es **8.5**

```js
const notasDeTPs = [4, 7, 8, 5, 10];
const notaFinal = 0;

// SOLUCION

console.log(notaFinal);
// deberia mostrar 6.8
```

## Ejercicio Array 020

- Tenemos un array en una variable `masNumeros` con números al azar.
- También tenemos dos arrays vacios en las dos variables `numerosPares` y `numerosImpares`.
- Recorré el array `masNumeros` y:
  - Si el número es par, agregalo al array `numerosPares`
  - Si el número es impar, agregalo al array `numerosImpares`
- Por ejemplo: Si tenemos `[7, 8, 9, 10]`, `numerosPares` quedaría `[8, 10]` y `numerosImpares` quedaría `[7, 9]`

```js
const masNumeros = [
  43,
  11,
  18,
  46,
  44,
  37,
  42,
  29,
  9,
  3,
  37,
  0,
  40,
  10,
  38,
  34,
  25,
  40,
  4,
  32,
];
const numerosPares = [];
const numerosImpares = [];

// SOLUCION

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]
```

# Parte 2 - ForEach

## Ejercicio Array 001

- Tenemos un array en una variable `playlist` con una lista de canciones de un disco.
- Recorrer la lista con la función **forEach** y mostrarlas una por una utilizando `console.log()`

```js
const playlist = [
  "Concrete and Gold",
  "The Line",
  "Sunday Rain",
  "Happy Ever After (Zero Hour)",
  "Arrows",
  "Dirty Water",
  "La Dee Da",
  "The Sky Is a Neighborhood",
  "Make It Right",
  "Run",
  "T-Shirt",
];
```

## Ejercicio Array 002

- Tenemos un array en una variable `librosDeJS` con una lista de libros de javascript.
- Queremos saber la cantidad de libros que tenemos en el array
- Nos pidieron que evitemos usar la propiedad `length` para contar los elementos de un array y que tenemos que usar si o si un `forEach`
- Completá el siguiente código para que funcione el último `console.log()` y muestre el mensaje **Mi lista de libros de JavaScript tiene 9 libros**

```js
const librosDeJS = [
  "JavaScript for Kids: A Playful Introduction to Programming",
  "Composing Software",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "JavaScript: The Good Parts",
  "Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
  "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
  "JavaScript: The Definitive Guide",
  "You Don’t Know JS",
  "JavaScript Allongé: The Six Edition",
];

/// ¡escribir en este espacio la solución del ejercicio!

console.log(
  "Mi lista de libros de JavaScript tiene " + totalLibros + " libros"
);
```

## Ejercicio Array 003

- Tenemos un array en una variable `playlist` con una lista de canciones de un disco.
- Recorrer la lista con la función **forEach** y mostrar la posición y el nombre de la canción utilizando un `console.log()`

```js
const playlist = [
  "Concrete and Gold",
  "The Line",
  "Sunday Rain",
  "Happy Ever After (Zero Hour)",
  "Arrows",
  "Dirty Water",
  "La Dee Da",
  "The Sky Is a Neighborhood",
  "Make It Right",
  "Run",
  "T-Shirt",
];

/// completá acá el código

// resultado esperado
// 0 - Concrete and Gold
// 1 - The Line
// 2 - Sunday Rain
// 3 - Happy Ever After (Zero Hour)
// 4 - Arrows
// 5 - Dirty Water
// 6 - La Dee Da
// 7 - The Sky Is a Neighborhood
// 8 - Make It Right
// 9 - Run
// 10 - T-Shirt
```

## Ejercicio Array 004

- Tenemos un array llamado `numbers` con números enteros al azar.
- Queremos calcular la suma de todos los números que están en el array.
- Por ejemplo: Si tenemos `[1, 2, 3]`, la suma de todos los números es **6**
- Es necesario utilizar `forEach` para conseguir la suma

```js
const numbers = [6, 1, 34, 94, 3, 17];
const sum = 0;

// codea debajo de este comentario la solucion al ejercicio

console.log(sum);
// deberia mostrar 155
```

## Ejercicio Array 005

- Tenemos un array llamado `notasDeTPs` con números del 1 al 10, que representan las notas de los distintos trabajos prácticos entregados por Grace Hopper en el curso de Ada.
- Queremos calcular la nota promedio final de trabajos prácticos _(el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad de notas)_.
- Por ejemplo: Si tenemos `[7, 8, 9, 10]`, la nota final es **8.5**
- Es obligatorio utilizar `forEach` para conseguir el promedio

```js
const notasDeTPs = [4, 7, 8, 5, 10];
const notaFinal = 0;

// codea debajo de este comentario la solucion al ejercicio

console.log(notaFinal);
// deberia mostrar 6.8
```

## Ejercicio Array 006

- Tenemos un array en una variable `masNumeros` con números al azar.
- También tenemos dos arrays vacios en las dos variables `numerosPares` y `numerosImpares`.
- Recorré el array `masNumeros` (**utilizando forEach**) y:
  - Si el número es par, agregalo al array `numerosPares`
  - Si el número es impar, agregalo al array `numerosImpares`
- Por ejemplo: Si tenemos `[7, 8, 9, 10]`, `numerosPares` quedaría `[8, 10]` y `numerosImpares` quedaría `[7, 9]`

```js
const masNumeros = [
  43,
  11,
  18,
  46,
  44,
  37,
  42,
  29,
  9,
  3,
  37,
  0,
  40,
  10,
  38,
  34,
  25,
  40,
  4,
  32,
];
const numerosPares = [];
const numerosImpares = [];

// SOLUCION

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]
```

## Ejercicio Array 007

- Tenemos un array en una variable `valores` con números al azar.
- También tenemos un array vacio en la variable `dobles`.
- Recorré el array `valores` (**utilizando forEach**) y guardá, en el mismo orden, cada número pero multiplicándolo por 2.
- Por ejemplo: Si tenemos `[1, 4, 7]`, `dobles` quedaría `[2, 8, 14]`

```js
const valores = [6, 0, 5, 2, 3, 8, 7, 4, 1, 9];
const dobles = [];

// codea aca tu solución al ejercicio

console.log("valores: ", valores);
console.log("dobles: ", dobles);
// deberias tener como resultado
// valores:  [ 6, 0, 5, 2, 3, 8, 7, 4, 1, 9 ]
// dobles:  [ 12, 0, 10, 4, 6, 16, 14, 8, 2, 18 ]
```

# Parte 3 - Map

## Ejercicio Array 001

- Tenemos un array en una variable `numeros` con números al azar.
- Usá la función `map` para crear un nuevo array incrementando cada valor del array en 10, y guardarlo en la variable `numerosMasDiez`
- Mostrar por consola el array original y el nuevo

```js
const numeros = [1, 2, 3, 4, 5];

const numerosMasDiez;

// codear acá la solución del ejercicio

console.log(numeros); // [1, 2, 3, 4, 5]
console.log(numerosMasDiez); // [11, 12, 13, 14, 15]
```

## Ejercicio Array 002

- Tenemos un array en una variable `numeros` con números al azar.
- Usar la función `map` para crear un nuevo array multiplicando cada valor del array por 2, y guardarlo en la variable `dobles`
- Mostrar por consola el array original y el nuevo

```js
const numeros = [3, 7, 13, 99];

// codear acá la solución del ejercicio

console.log(numeros); // [3, 7, 13, 99]
console.log(dobles); // [6, 14, 26, 198]
```

## Ejercicio Array 003

- Tenemos un array en una variable `frases` con frases al azar.
- Usar la función `map` para crear un nuevo array donde cada frase empiece y termine con signo de exclamación.
- Mostrar por consola el array original y el nuevo

```js
const frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];

// codear acá la solución del ejercicio

console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]
```

## Ejercicio Array 004

- Tenemos un array en una variable `libros` con libros para leer sobre Javascript.
- Usar la función `map` para crear un nuevo array donde cada titulo de los libros esté encerrado en una etiqueta `<li></li>`.
- Mostrar por consola el array nuevo, encerrándolo entre `<ul></ul>`

```js
const librosDeJS = [
  "JavaScript for Kids: A Playful Introduction to Programming",
  "Composing Software",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "JavaScript: The Good Parts",
  "Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
  "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
  "JavaScript: The Definitive Guide",
  "You Don’t Know JS",
  "JavaScript Allongé: The Six Edition",
];

// codear acá la solución del ejercicio

// el resultado final debería ser
// <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li></ul>
```

## Ejercicio Array 005

- Tenemos un array en una variable `frases` con frases al azar.
- Usar la función `map` para crear un nuevo array que contenga la longitud de cada palabra.
- Mostrar por consola el array original y el nuevo.

```js
const frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];

// codear acá la solución del ejercicio

console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(longitudes); // [ 17, 18, 16 ]
```

## Ejercicio Array 006

- Tenemos un array en una variable `playlist` con una lista de canciones de un disco.
- Usar la función `map` para agregar a cada título de la canción el número de posición en la que está dentro del array.

```js
const playlist = ["Everlong", "The Pretender", "Learn to Fly"];

/// completá acá el código

// RESULTADO ESPERADO
// [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]
```

## Ejercicio Array 007

- Tenemos un array en una variable `playlist` con una lista de canciones de un disco.
- Usar la función `map` para agregar a cada título de la canción el número de posición en la que está dentro del array.

```js
const playlist = ["Everlong", "The Pretender", "Learn to Fly"];

/// completá acá el código

// RESULTADO ESPERADO
// [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]
```

## Ejercicio Array 008

- Tenemos un array en una variable `costos` con números que representan costos de diferentes productos.
- Completar el siguiente código para llegar al resultado esperado
- A un costo primero se le agrega la ganancia y después el IVA

```js
const costos = [12.5, 56, 98, 45.75];

const agregarIVA = function (costo) {
  return costo * 1.21;
};

const sumarGanancia = function (costo) {
  return costo * 1.5;
};

// codear acá la solución del ejercicio

console.log(preciosFinales);
// deberia mostrar
// [ 22.6875, 101.64, 177.87, 83.03625 ]
```

## Ejercicio Array 009

- Tenemos un array en una variable `costos` con números que representan costos de diferentes productos.
- También tenemos un array en una variable `productos` con los nombres de cada producto.
- Completar el siguiente código para llegar al resultado esperado
- A un costo primero se le agrega la ganancia y después el IVA
- El nombre de un producto en una posición, se corresponde con el precio que está en la misma posición. Por ejemplo: el producto que está en la posición **1** tiene un costo igual al elemento en la posición **1** del array `costos`

```js
const productos = ["celular", "notebook", "monitor"];
const costos = [12.5, 56, 98];

const agregarIVA = function (costo) {
  return costo * 1.21;
};

const sumarGanancia = function (costo) {
  return costo * 1.5;
};

// codear acá la solución del ejercicio

console.log(preciosFinales);
// deberia mostrar
// [ "celular 22.6875", "notebook 101.64", "monitor 177.87" ]
```

# Parte 4 - Filter

## Ejercicio Array 001

- Tenemos un array en una variable `costos` con números que representan costos de diferentes productos.
- Usando `filter`, crear un nuevo array con los precios más caros (mayores a 50) y guardarlo en la variable `losMasCaros`
- Mostrar el array original y el filtrado

```js
const costos = [
  39,
  53,
  17,
  99,
  7,
  9,
  6,
  68,
  54,
  97,
  27,
  90,
  92,
  75,
  26,
  86,
  22,
  42,
  20,
  14,
];
// codear acá la solución del ejercicio

console.log(costos);
console.log(losMasCaros);
// deberia mostrar
// [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]
```

## Ejercicio Array 002

- Tenemos un array en una variable `frases` con frases al azar.
- Usando `filter`, crear un nuevo array con las frases que tengan menos de 20 caracteres y guardarlo en la variable `frasesCortas`
- Mostrar el array resultante

```js
const frases = [
  'Ut vero.',
  'Gubergren labore clita et duo accusam diam dolor. Ipsum nonumy et labore kasd lorem takimata ea sed dolor. Kasd no.',
  'Diam rebum nonumy et.',
  'Kasd stet.',
  'Sit et dolor.',
  'Est diam justo gubergren dolores et vero.',
  'Et sanctus sanctus et dolor clita.',
  'Dolores.',
  'Diam sea takimata voluptua ipsum labore voluptua kasd. At consetetur dolore diam.'
];

// codear acá la solución del ejercicio
const frasesCortas = ;

console.log(frasesCortas);
// deberia mostrar
// [ 'Ut vero.', 'Kasd stet.', 'Sit et dolor.', 'Dolores.' ]
```

## Ejercicio Array 003

- Tenemos un array en una variable `numeros` con números al azar.
- También tenemos dos arrays vacios en las dos variables `numerosPares` y `numerosImpares`.
- Utilizando `filter` crear un nuevo array con todos los números pares y guardalo en la variable `numerosPares`
- Utilizando `filter` crear un nuevo array con todos los números impares y guardalo en la variable `numerosImpares`

```js
const masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

// codea acá tu solución
const numerosPares = ;
const numerosImpares = ;

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]
```

## Ejercicio Array 004

- Tenemos un array en una variable `mix` con varios elementos, de distintos tipos de datos.
- Usando `filter`, crear un nuevo array con todos los elementos que sean strings y guardalo en la variable `soloStrings`.
- Ayuda: para saber si algo es un string en javascript, podés usar typeof [ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/typeof)
- Mostrar el array resultante

```js
const mix = [
  "Ut vero.",
  2,
  function () {
    console.log("hola mundo!");
  },
  56,
  "Diam rebum nonumy et.",
  true,
  false,
  "Kasd stet.",
  "Sit et dolor.",
  null,
  null,
  [1, 2, 3],
  "Dolore.",
];

// codear acá la solución del ejercicio

console.log(soloStrings);
// deberia mostrar
// [ 'Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]
```

## Ejercicio Array 005

- Tenemos un array `playlist` con canciones seleccionadas al azar por spotify para reproducir.
- Tenemos otro array `playlistEscuchada` que tiene canciones que ya escuchamos anteriormente.
- Usando `filter`, queremos crear una nueva lista que solo contenga aquellas canciones guardadas en `playlist` que no están en `playlistEscuchada`
- Guarda el resultado en la variable `playlistSinEscuchar`

```js
const playlist = [
  "Smells Like Teen Spirit",
  "Everlong",
  "Come As You Are",
  "The Pretender",
  "Heart-Shaped Box",
  "Learn to Fly",
  "Lithium",
];
const playlistEscuchada = ["The Pretender", "Lithium", "Come As You Are"];

/// codea aca tu solución

console.log(playlistSinEscuchar);
// deberia mostrar
// [ 'Smells Like Teen Spirit', 'Everlong', 'Heart-Shaped Box', 'Learn to Fly' ]
```



# 🔄 Estructuras de control: bucles

## Funciones

### `obtenerIndice(valor, array)`

Crear una función `obtenerIndice` que tome como argumento un valor cualquiera `valor` y un array cualquiera `array` y devuelva el índice del _primer ítem_ con dicho valor en el array, o -1 si no hay ninguno.

```javascript
obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]) // 2
obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]) // -1
```

### `repetir(valor, cantidad)`

Crear una función `repetir` que tome como argumento un valor `valor` y un número entero `cantidad`, y devuelva una array con `valor` repetido `cantidad` de veces.

```javascript
repetir('lovelace', 3) // ['lovelace', 'lovelace', 'lovelace']
repetir('a', 5) // ['a', 'a', 'a', 'a', 'a']
repetir('html', 0) // []
```

### `sumarImparesHasta(numero)`

Crear una función `sumarImparesHasta` que tome como argumento un número `numero` y que devuelva la suma de todos los impares empezando desde 0 hasta dicho `numero` inclusive.

```javascript
sumarImparesHasta(5) // 9 (1 + 3 + 5 = 9)
sumarImparesHasta(13) // 49
sumarImparesHasta(47) // 576
```

### `crearCuentaRegresiva(numeroInicial)`

Crear una función `crearCuentaRegresiva` que tome como argumento un número entero `numeroInicial` y que devuelva un array con cuyo primer ítem sea `numeroInicial` y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.

```javascript
crearCuentaRegresiva(3) // [3, 2, 1, 0]
crearCuentaRegresiva(5) // [5, 4, 3, 2, 1, 0]
```

### `invertir(array)`

Crear una función `invertir` que tome como argumento un array `array` y que devuelva un array con los mismos valores pero en orden invertido.

```javascript
invertir([1, 2, 3]) // [3, 2, 1]
invertir([5, 7, 99, 34, 54, 2, 12]) // [12, 2, 54, 34, 99, 7, 5]
```

### `removerDuplicados(array)`

Crear una función `removerDuplicados` que tome como argumento un array `array` y que devuelva un array con los mismos valores de `array` pero sin valores duplicados.

```javascript
removerDuplicados([1, 1, 1]) // [1]
removerDuplicados([1, 1, 2, 2, 3, 3]) // [1, 2 ,3]
removerDuplicados([5, 23, 8, 5, 5, 44, 23]) // [5, 23 ,8, 44]
```

### `repetirLetras(palabra, cantidad)`

Crear una función `repetirLetras` que tome como argumento un string `palabra` y un número entero `cantidad`, y devuelva una string donde cada letra de `palabra` esté repetida `cantidad` de veces.

```javascript
repetirLetras('hola', 2) // 'hhoollaa'
repetirLetras('ada', 3) // 'aaadddaaa'
repetirLetras('ah!', 5) // 'aaaaahhhhh!!!!!'
repetirLetras('basta', 1) // 'basta'
```

### `capitalizarPalabras(string)`

Crear una función `capitalizarPalabras` tome como argumento un string `string` y devuelva un string donde cada palabra está capitalizada (con la primera letra ma´yuscula). Dejar las demás letras como están.

```javascript
capitalizarPalabras('Esto es un título') // 'Esto Es Un Título'
capitalizarPalabras('había una vez') // 'Había Una Vez'
makeTitle('OMG') // 'OMG'
```

### `sumarSeccion(array, comienzo, cantidad)`

Crear una función `sumarSeccion` que tome como argumento un array de números enteros `array`, un número entero `comienzo` y un número entero `cantidad`, y que devuelva la suma de `cantidad` de números de `array` empezando a contar desde el ítem con índice `comienzo`.

```javascript
sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3) // 8 (2 + 2 + 4 = 8)
sumarSeccion([2, 2, 4, 3, 10, 20, 5], 2, 4) // 37 (4 + 8 + 10 + 20 = 37)
sumarSeccion([2, 2, 4, 3, 10, 20, 5], 4, 1) // 3
```

### `esSubconjunto(subconjunto, conjunto)`

Crear una función `esSubconjunto` que tome como argumento dos arrays, `subconjunto` y `conjunto`, y devuelva `true` si `subconjunto` es realmente subconjunto de `conjunto`, es decir, si todos los valores de `subconjunto` están en `conjunto`.

```javascript
esSubconjunto([1], [1, 2, 3]) // true
esSubconjunto([1, 2, 3], [1, 2, 3, 4, 5]) // true
esSubconjunto([27, 49, 54], [54, 27, 8, 27, 49]) // true
esSubconjunto([1, 2, 3], [1, 2]) // false
esSubconjunto([1], [2, 3, 4]) // false
```

### `tieneBloque(array)`

Crear una función `hayBloque` que tome como argumento un array `array` y devuelva `true` si dicho `array` tiene un bloque de 3 o más ítems consecutivos idénticos, o `false` si no tiene.

```javascript
tieneBloque([1, 2, 3]) // false
tieneBloque([1, 1, 1, 2, 3]) // true
tieneBloque([1, 2, 3, 3, 3]) // true
tieneBloque([1, 2, 3, 3, 3, 8]) // true
tieneBloque([1, 2, 2, 3, 3, 4]) // false
```

### `esPalindromo(palabra)`

Crear una función `esPalindromo` que tenga como par´ámetro un string `palabra` y devuelva `true` si dicha palabra es palíndroma, es decir, si puede leerse de igual manera de izquierda a derecha que de derecha a izquierda, o `false` sino.

```javascript
esPalindromo('ada') // true
esPalindromo('reconocer') // true
esPalindromo('mama') // false
esPalindromo('javascript') // false
```

**BONUS:** hacer que funcione con oraciones y no con palabras. [Ejemplos](https://es.wikipedia.org/wiki/Pal%C3%ADndromo#Ejemplos).

## Programas

Los siguientes ejercicios se realizan usando:

- `prompt` para pedir ingresar datos
- `confirm` para pedir por sí o por no (opción binaria)
- `alert` para mostrar información

Crear un archivo de `.js` para cada ejercicio.

Ejemplo de consigna:

Crear un programa que pida ingresar un nombre, pregunta si el nombre es correcto, y si lo es, muestre un mensaje saludando a la persona con dicho nombre.

```javascript
const nombre = prompt('Por favor, ingresá tu nombre')
const respuesta = confirm('¿Estás segura que te llamás así?')

if (respuesta) {
  alert(`¡Hola ${nombre}!`)
}
```

## Ejercicios con bucle `for`

### 🔢 Números impares

Crear un programa que muestre en consola los números impares entre el 0 y el 20

### 📀 Playlist

Crear un programa que pida al usuario ingresar el nombre de una playlist y cuántas canciones desea agregar a la misma. Luego debe ir pidiendo agregar la cantidad de canciones elegidas de a una. Se debe ir mostrando la cantidad de canciones que quedan por agregar y la playlist con los temas hasta el momento a medida que se va a actualizando. Al finalizar mostrar un mensaje con el nombre de la playlist y la lista de canciones.

### 🔍 Número mayor o menor

Crear un programa que pregunte si se desea buscar el mayor o el menor número de un conjunto. Luego, preguntar entre cuántos se desea buscar. Ir pidiendo ingresar uno por uno la cantidad de números que se eligió, y al finalizar mostrar el número mayor o menor de todos los ingresados según el elegido.

### ❗️ Factorial

Crear un programa que pida ingresar un número, y muestre su factorial. Este se calcula multiplicando el mismo número y todos los números que le anteceden hasta el 1. Por ejemplo: 4 ⇒ 4 _ 3 _ 2 \* 1 = 24

### 🏃‍♀️ Carrera

Crear un programa para controlar las vueltas de una deportista. Debe pedir al usuario la cantidad de vueltas que va a realizar e ir preguntando el tiempo en segundos de cada vuelta. Al final, se debe mostrar un mensaje listando los tiempos de cada vuelta y el promedio del tiempo de las vueltas (suma de las vueltas / cantidad de vueltas). Ejemplo:

```
Cantidad de vueltas: 3
Vuelta 1: 133s
Vuelta 2: 145s
Vuelta 3: 166s
⏱ Promedio: 144.45s
```

### ✊🤚✌️ Piedra, papel, tijera II

Al ejercicio de **Piedra, papel, tijera** de _condicionales_, agregarle la posibilidad de jugar la cantidad de rondas que se deseen. Por cada ronda, se debe mostrar ambas jugadas (usuario y computadora), quién gano la ronda, puntaje parcial hasta el momento y rondas restantes. Al finalizar se debe indicar quién ganó. Ejemplo:

```
Ronda: 2 de 5
🙍‍♀️ Jugadora: Piedra
👾 Computadora: Tijera
Jugadora ha ganado esta ronda 🎉
Puntaje: 2 (Jugadora) - 0 (Computadora)
```

<br>

## Ejercicios con bucle `while`

### 🔐 Múltiples intentos

Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.

### 💲Cara o cruz

Crear un programa que permita escoger entre cara o cruz. El programa luego debe generar un resultado aleatorio y mostrar si se acertó o no. El programa debe mostrar en cada vuelta cuántas rondas seguidas acertadas van, y si en algún momento se erra, reiniciar el contador a 0. También debe llevar una cuenta de la cantidad máxima de rondas seguidas que se hizo sin errar. Cuando se ingresa la palabra SALIR, en vez de CARA o CRUZ, el programa debe mostrar la cantidad máxima de rondas seguidas acertadas junto a un mensaje de despedida, y terminar su ejecución.

### ⚖️ Mayor o menor

Crear un programa que elija un número al azar entre 1 y 10. El programa debe luego pedir al usuario que intente adivinar el número. Por cada intento, debe avisar si el número a adivinar es mayor o menor que el número ingresado. El programa debe terminar cuando se adivina el número.

### 🤔 Adivinar palabra

Crear un programa que elija una palabra al azar de un conjunto de palabras posibles, y permita al usuario intentar adivinarla. Por cada intento sucesivo, el programa debe ir mostrando como pista la palabra de forma parcial, empezando con la primera letra y agregando una letra a la vez. El programa debe terminar cuando se adivina la palabra o se muestran todas las letras de la misma. Por ejemplo, si la palabra a adivinar es LOVELACE, mostrar como sugerencia primero L, luego LO, luego LOV, luego LOVE, luego LOVEL, etc.

### 🎾 Tenis

Crear un programa para llevar la cuenta del puntaje de un partido de tenis. Debe pedir inicialmente por los nombres de las jugadoras, y luego ir pidiendo el nombre de la ganadora de cada set, y mostrando el puntaje actualizado. Si alguna de las dos llega a los 3 puntos, el programa debe terminar y anunciar la ganadora

### 🧨 Explosión

Crear un programa que permita ingresar una serie de números separados por espacio. El programa debe disminuyendo cada número en 1 por ronda e ir mostrando el resultado (en consola, o en un string concatenado) hasta que todos lleguen a 0 (cuando lleguen a no deben seguir disminuyendo) y se produzca la explosión. Ejemplo

```
⏱ 3 1 0 2
⏱ 2 0 0 1
⏱ 1 0 0 0
💥💥💥💥💥
```

### 🎨 Simón dice II

Replicar el juego de Simón dice. El programa debe mostrar una secuencia de colores, agregando por cada ronda que pase otro color más. El usuario debe ingresar los colores de la secuencia uno por uno. Si erra la secuencia (es decir, si ingresa algún color mal), el programa debe terminar. Los colores posibles son: rojo, azul, verde y amarillo. Hay dos variantes posibles: o el juego continúa indefinidamente hasta que se erra la secuencia, y muestra cuántas rondas se sobrevivió, o el programa permite elegir al principio cuántas rondas se desea hacer, y mostrar un mensaje de victoria si se llega a esa cantidad de rondas sin errarle a la secuencia.

### 🏝 Isla desierta

- Crear un programa que permita mover un barco hacia una isla. El programa debe permitir ingresar los valores AVANZAR o RETROCEDER, siendo que AVANZAR acerca el barco un espacio hacia la isla y RETROCEDER lo aleja. El programa debe terminar cuando el barco llega a la isla. Ejemplo:

```
⛵️🌊🌊🌊🏝
// AVANZAR
🌊⛵️🌊🌊🏝
// AVANZAR
🌊🌊⛵️🌊🏝
// RETROCEDER
🌊⛵️🌊🌊🏝
// AVANZAR
🌊🌊⛵️🌊🏝
// AVANZAR
🌊🌊🌊⛵️🏝
¡Has llegado a la isla!
```

### 🏧 ATM II

- Crear un programa que tenga un dinero inicial
- El programa también deberá contar con un menú con las siguientes opciones:
  - **EXTRAER:** debe pedir al usuario cuánto desea extraer y _si el dinero a extraer es menor o igual al saldo actual_, restar el dinero extraído al saldo
  - **DEPOSITAR:** debe pedir al usuario la cantidad a ingresar y sumarla al saldo actual
  - **CONSULTAR SALDO:** debe mostrar el saldo actual
  - **VER ÚLTIMOS MOVIMIENTOS:** debe mostrar una lista de los últimos moviemientos realizados
  - **SALIR:** debe terminar la ejecución del programa
- El programa debe mostrar el menú de opciones, y permitir ingresar una opción. Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú. Si se elige SALIR, debe terminar el programa. Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, volver al menú de opciones. Las acciones de EXTRAER y DEPOSITAR y CONSULTAR SALDO deben registrarse cada vez que se realicen para poder consultarse luego, por ejemplo:

```
 ULTIMOS MOVIMIENTOS
 - Depositado: $550
 - Extraido: $1000
 - Consultado saldo: $3400
 - Depositado: $100
```

**📝 Lista de tareas**

- Crear un programa que tenga un menú con las siguientes opciones:
  - **AGREGAR TAREA:** debe pedir al usuario ingresar una tarea y agregarla a la lista de tareas
  - **MODIFICAR TAREA:** debe pedir al usuario ingresar el número de tarea que se desea modificar, mostrarla, y pedir que ingrese la tarea a reemplazarla o modificarla
  - **ELIMINAR TAREA:** debe pedir al usuario ingresar el número de tarea a eliminar, mostrarla, y pedirle confirmar si desea eliminarla o no
  - **VER TAREAS:** debe listar todas las tareas hasta el momento
  - **SALIR:** debe terminar la ejecución del programa
- El programa debe mostrar el menú de opciones, y permitir ingresar una opción. Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú. Si se elige SALIR, debe terminar el programa. Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, volver al menú de opciones.

### 👾 Monstruo

Crear un juego de combate contra un monstruo.

- El juego debe contar con las siguientes variables:
  - Vida jugadora
  - Vida monstruo
  - Cantidad de pociones
  - Ataque máximo jugadora
  - Ataque máximo monstruo
  - Curación máxima poción
- Todos los valores anteriores deben ser números enteros (a elecci´ón)
- El juego debe tener las siguientes acciones posibles:
  - **ATACAR MONSTRUO:** genera un número aleatorio entre 1 y `Ataque máximo jugadora` y lo resta a `Vida monstruo`
  - **TOMAR POCION:** genera un número aleatorio entre 1 y `Curación máxima poción` y lo suma a `Vida jugadora` y resta 1 a `Cantidad de pociones`
  - **BUSCAR POCION:** genera un número entre 1 y 4, si sale 1 suma una poción, sino no encuentra nada
  - **SALIR:** termina el programa
- En todo momento se debe mostrar un mensaje de lo que está pasando
- Luego de cada acción, el monstruo ataca a la jugadora y le resta a `Vida jugadora` un número aleatorio entre 1 y `Ataque máximo monstruo`
- Luego del ataque del monstruo, se debe mostrar la vida de ambos
- El programa termina cuando o la jugadora o el monstruo se quedan con vida igual o menor a 0
- Mostrar un mensaje con el resultado final
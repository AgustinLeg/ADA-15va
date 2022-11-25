# 📦 Objetos

### Contenido

- [Conceptos bases](#primera-parte---conceptos-bases)
- [Objetos dinámicos](#segunda-parte---objetos-dinamicos)


## Primera parte - conceptos bases

### 01 - sobre mi

- Crear una variable llamada sobreMi, a la que le vamos a asignar un objeto.
- El objeto tiene que tener 3 propiedades: nombre, apellido, edad
- Mostrar en consola el objeto sobreMi

### 02 - presentar

- Crear una variable llamada user, a la que le vamos a asignar un objeto.
- El objeto tiene que tener 3 propiedades: fullname, email, age
- Mostrar en consola el objeto user
- Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE] y tengo [ACA LA EDAD] años"

### 03 - cancion

- Tenemos un objeto en la variable `song` con diferentes propiedades que representan una canción de spotify.
- Queremos crear un nuevo objeto, guardandolo en la variable `cancion`, a partir de las propiedades del objeto que tenemos en `song`
- El nuevo objeto tiene que tener las propiedades **titulo**, **banda**, y **duracion** (en segundos, ya que en el objeto original `song` está en milisegundos)

```js
var song = {
  title: "Rock and Roll",
  bandName: "Led Zeppelin",
  duration: 166000,
  album: "Led Zeppelin IV",
};

var cancion = {
  // completar el codigo
};

console.log(cancion); // { titulo: 'Rock and Roll', banda: 'Led Zeppelin', duracion: 166 }
```

### 03 - base de datos

- Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos
- Los datos que tenemos son un id, email, nombre y teléfono
- Crear un objeto para cada persona que nos pasaron
- Mostrar por consola todos los objetos creados

```js
// DATOS DE LAS PERSONAS QUE NECESITAMOS GUARDAR EN UNA BASE DE DATOS
// 1,ada@gmail.com,Ada Lovelace,1234567890
// 2,grace@hotmail.com,Grace Hopper,0987654321
// 3,hedy@gmail.com,Hedy Lamarr,6789054321
// 4,radia@yahoo.com,Radia Perlman,1234509876
// 5,Sheryl@facebook.com,Sheryl Sandberg,5432167890

// Ejemplo del formato de cada objeto: 0,ejemplo@terra.com,Ejemplo,1029384756
// var example = {
//   id: 0,
//   nombre: "Ejemplo",
//   email: "ejemplo@terra.com",
//   telefono: "1029384756"
// }

// Escribi aca abajo los objetos para cada uno de las personas que nos enviaron
```

- Nos pidieron mostrar en la consola los siguientes datos de cada persona:

```js
//// TENEMOS QUE MOSTRAR LOS SIGUIENTES DATOS

// 1. El nombre de Ada:
console.log();

// 2. El ID de Grace
console.log();

// 3. El email de Hedy
console.log();

// 4. El ID y nombre de Radia
console.log();

// 5. El telefono de Sheryl
console.log();
```

### 04 - correción de datos

- Tenemos la variable `datos` que tiene un objeto con los datos de una persona
- El teléfono está mal y tenemos que modificarlo, pero no podemos modificar la definición/creación del objeto. El télefono correcto es **0192837465**
- También tenemos que modificar la edad, ya que es un **string** y necesitamos que sea un número.

```js
var datos = {
  id: 1,
  nombre: "Ada",
  apellido: "Lovelace",
  email: "ada.lovelace@gmail.com",
  telefono: "1234567890",
  edad: "29",
  programa: true,
};

// codea aca la solucion

// finalmente, mostramos los datos
console.log(datos);
// { id: 1,
//   nombre: 'Ada',
//   apellido: 'Lovelace',
//   email: 'ada.lovelace@gmail.com',
//   telefono: '0192837465',
//   edad: 29,
//   programa: true }
```

### 05 - lenguaje favorito

- Tenemos la variable `datos` con un objeto que guarda datos de personas
- Tenemos que programar la siguiente lógica
  - SI la propiedad `programa` es true
    - Agregá la propiedad `lenguajeFavorito`, y asignale "Javascript"

```js
var datos = {
  id: 1,
  nombre: "Ada",
  apellido: "Lovelace",
  email: "ada.lovelace@gmail.com",
  telefono: "1234567890",
  edad: 29,
  programa: true,
};

// codea aca la solucion

// finalmente, mostramos los datos
console.log(datos);
// { id: 1,
//   nombre: 'Ada',
//   apellido: 'Lovelace',
//   email: 'ada.lovelace@gmail.com',
//   telefono: '1234567890',
//   edad: 29,
//   programa: true,
//   lenguajeFavorito: 'Javascript' }
```

### 06 - lenguaje favorito 2

- Tenemos la variable `datos` con un objeto que guarda datos de una persona
- Tenemos que programar la siguiente lógica
  - SI la propiedad `programa` es true
    - Agregá la propiedad `lenguajesFavoritos`, y asignale un array con dos lenguajes de programación
- Al final, mostrar en la consola la siguiente frase: "Hola, mi nombre es **[ACA EL NOMBRE]** y programo en **[ACA EL LISTADO DE LENGUAJES FAVORITOS]**"

```js
var datos = {
  id: 1,
  nombre: "Ada",
  apellido: "Lovelace",
  email: "ada.lovelace@gmail.com",
  telefono: "1234567890",
  edad: 29,
  programa: true,
};

// codea aca la solucion

// aca mostrar la frase
console.log(
  "Hola, mi nombre es [ACA EL NOMBRE] y programo en [ACA EL LISTADO DE LENGUAJES FAVORITOS]"
);
// por ejemplo "Hola, mi nombre es Ada y me programo en Javascript,C++"
```

### 07 - disco

- Tenemos la variable `disco` con un objeto que guarda datos de un album musical
- Queremos obtener el nombre y año de lanzamiento del disco y nombre de la banda, para mostrar el mensaje "El disco [NOMBRE DISCO] de la banda [NOMBRE DE LA BANDA] se lanzó en el año [AÑO DE LANZAMIENTO DEL DISCO]"
- Completá el código para lograr el resultado esperado

```js
var disco = {
  id: 1,
  nombre: 'Wasting Light',
  anioLanzamiento: 2011,
  cantidadDeTemas: 12,
  banda: {
    nombre: 'Foo Fighters',
    anioFormacion: 1994
  }
};

// codea aca la solucion
var nombreDisco = ;
var anioDisco = ;
var nombreBanda = ;

console.log("El disco " + nombreDisco + " de la banda " + nombreBanda + " se lanzó en el año " + anioDisco);
// Debería mostrar
// El disco Wasting Light de la banda Foo Fighters se lanzó en el año 2011
```

### 08 - skills

- Tenemos la variable `user`, que es un objeto con datos de una persona en linkedin
- En el objeto hay una propiedad `skills`, que es un array con las distintas habilidades de la persona
- Necesitamos actualizar el perfil y agregar **"Javascript"** al array de de skills

```js
var user = {
  id: 123456789,
  name: "Ada Lovelace",
  url: "https://www.linkedin.com/in/ada-lovelace",
  skills: ["HTML", "CSS", "SASS"],
};

// codea aca la solucion

// despues de la solucion
console.log(user);
// deberia mostrar
// { id: 123456789,
//   name: 'Ada Lovelace',
//   url: 'https://www.linkedin.com/in/ada-lovelace',
//   skills: [ 'HTML', 'CSS', 'SASS', 'Javascript' ] }
```

### 09 - playlist

- Creá un objeto donde vamos a guardar información sobre una playlist de spotify
- El objeto va a tener las propiedades `nombre` (un string), `privada` (un booleano) y `canciones` (un array de strings).
- En líneas separadas (un console.log por cada una), mostrá la información de la lista para que sea vea de la siguiente forma:

```
Lista de Nirvana
Privada: Si
Canciones:
Smells Like Teen Spirit
In Bloom
Come As You Are
```

- Privada tiene que mostrar **Si** en el caso que la propiedad `privada` sea `true`, o **No** si la prop

### 10 - ganadora

- Tenemos un array de objetos, con las ganadoras de algunas temporadas de Rupaul.
- Cada objeto tiene las propiedades `nombre`, `temporada` y `foto`.
- Iterá/Recorré el array utilizando `for` y mostrá el nombre y la temporada que ganó. Por ejemplo: **Bianca Del Rio ganó la temporada 6**

```js
var ganadoras = [
  {
    nombre: "Bebe Zahara Benet",
    temporada: "1",
    foto: "http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg",
  },
  {
    nombre: "Tyra Sanchez",
    temporada: "2",
    foto: "http://www.nokeynoshade.party/images/tyra-sanchez.jpg",
  },
  {
    nombre: "Raja",
    temporada: "3",
    foto: "http://www.nokeynoshade.party/images/raja.jpg",
  },
  {
    nombre: "Sharon Needles",
    temporada: "4",
    foto: "http://www.nokeynoshade.party/images/sharon-needles.jpg",
  },
  {
    nombre: "Jinkx Monsoon",
    temporada: "5",
    foto: "http://www.nokeynoshade.party/images/jinkx-monsoon.jpg",
  },
  {
    nombre: "Bianca Del Rio",
    temporada: "6",
    foto: "http://www.nokeynoshade.party/images/bianca-del-rio.jpg",
  },
];

///// RESULTADO
// Bebe Zahara Benet ganó la temporada 1
// Tyra Sanchez ganó la temporada 2
// Raja ganó la temporada 3
// Sharon Needles ganó la temporada 4
// Jinkx Monsoon ganó la temporada 5
// Bianca Del Rio ganó la temporada 6
```

### 11 - canciones

- Tenemos un array de objetos, que representa un listado de bandas
- Cada objeto representa una banda, y tiene las propidades `id`, `nombre`, `fundacion`, `activa`
- Mostrar en consola cada banda del array, con la siguiente lógica:
  - Si la banda está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] está activa desde el año [AÑO DE FUNDACIÓN]"
  - Si la banda NO está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] no está activa"

```js
var bandas = [
  { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
  { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
  { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
  { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
  { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];

///// RESULTADO
// Nirvana no está activa
// Foo Fighters está activa desde el año 1994
// Led Zeppelin no está activa
// Queens of the Stone Age está activa desde el año 1997
// Pearl Jam está activa desde el año 1990
```

### 12 - banda

- Tenemos un objeto en la variable `banda`, con datos de una banda (nombre, año de lanzamiento, si sigue en actividad, una foto, los integrantes y una lista de sus discos).
- Queremos mostrar:
  1. La duración total del disco (suma de la duración de cada canción)
  2. La duración promedio por canción (un promedio entre todas las duraciones)

```js
var banda = {
  name: "Led Zeppelin",
  year: 1968,
  active: false,
  thumbnail:
    "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
  members: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
  albums: [
    {
      name: "Led Zeppelin",
      year: 1969,
      songs: ["Good Times, Bad Times", "Communication Breakdown"],
      duration: 2691,
    },
    {
      name: "Led Zeppelin II",
      year: 1969,
      songs: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
      duration: 2502,
    },
    {
      name: "Led Zeppelin III",
      year: 1970,
      songs: ["Immigrant Song"],
      duration: 2489,
    },
    {
      name: "Led Zeppelin IV",
      year: 1971,
      songs: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"],
      duration: 2559,
    },
  ],
};

// completa el codigo para lograr el resultado esperado

///// RESULTADO
console.log("Led Zeppelin se fundó en el año " + anioLanzamiento);
console.log("Tiene " + cantidadMiembros + " miembros: " + miembros);
console.log("Tiene en total " + cantidadDiscos + " discos");
console.log(
  "Tiene en total " +
    cantidadTotalCanciones +
    " canciones entre todos los discos."
);
console.log("En promedio, cada canción dura " + promedioDuracion + " segundos");
// ESPERADO
// Led Zeppelin se fundó en el año 1968
// Tiene 4 miembros: Jimmy Page, Robert Plant, John Paul Jones, John Bonham
// Tiene en total 4 discos
// Tiene en total 9 canciones entre todos los discos.
// En promedio, cada canción dura 1137.888888888889 segundos
```

###

## Segunda parte - objetos dinamicos

### 01 - persona

- Declarar una variable con el nombre **propiedadNombre** y asignar el valor nombre
- Declarar una variable con el nombre **propiedadEdad** y asignar el valor edad
- Crear un objeto **persona** con las propiedades nombre y edad
- Asignar a las propiedades del objeto **persona** tu nombre y edad
- Mostrar en consola los valores de cada propiedad del objeto persona utilizando corchetes y los valores: 'nombre' y 'edad' en lugar de utilizar el punto
- Mostrar en consola los valores de cada propiedad del objeto persona utilizando las variables **propiedadNombre** y **propiedadEdad**

### 02 - keys

- Partiendo de un objeto guardado en la variable `producto`
- Mostrar en la consola el nombre de todas las propiedades que tiene el producto
- Utilizar el método **keys**

```js
const producto = {
  id: 'ADA-020',
  title: 'Gubergren sed est amet voluptua',
  price: 123.75,
  picture: 'https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg',
  condition: 'nuevo',
  free_shipping: true,
  location: 'Capital Federal'
};

// completá acá el código
var todasLasPropiedades = ;

console.log(todasLasPropiedades);
// resultado esperado
// [ 'id',
//   'title',
//   'price',
//   'picture',
//   'condition',
//   'free_shipping',
//   'location' ]
```

### 03 - producto

- Partiendo de un objeto guardado en la variable `producto`
- Mostrar en la consola el nombre y valor de todas las propiedades que tiene el producto
- Utilizar el método **keys**
- El formato para mostrar la propiedad y valor es: "producto['[ACA NOMBRE DE LA PROPIEDAD]'] -> [ACA VALOR DE LA PROPIEDAD]"

```js
const producto = {
  id: "ADA-020",
  title: "Gubergren sed est amet voluptua",
  price: 123.75,
  picture:
    "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
  condition: "nuevo",
  free_shipping: true,
  location: "Capital Federal",
};

// completá acá el código

/////
// RESULTADO ESPERADO
// producto['id'] -> ADA-020
// producto['title'] -> Gubergren sed est amet voluptua
// producto['price'] -> 123.75
// producto['picture'] -> https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg
// producto['condition'] -> nuevo
// producto['free_shipping'] -> true
// producto['location'] -> Capital Federal
```

### 04 - email

- Partiendo de un objeto guardado en la variable `user`
- Verificar si tiene la propiedad `email`
  - Si no la tiene, mostrar en pantalla: 'El usuario no tiene la propiedad email'
  - Si la tiene, mostrar en pantalla: 'El usuario tiene la propiedad email'

```js
const user = {
  username: "ada_lovelace",
  password: "1234567890!",
};

// acá tu solucion
```

### 05 - propiedad

- Completa el código dentro de la función `hasProperty`
  - Si el objeto de la variable `object` tiene la propiedad que recibe en la variable `property`, retorna `true`
  - Sino retorna `false`

```js
const hasProperty = (object, property) => {
  // return true si el objeto (object) tiene la propiedad (property) que llega por parametro
  // property es un string
  // sino return false
  return !!object[property];
};

const user = {
  username: "ada_lovelace",
  password: "1234567890!",
};

const user2 = {
  username: "grace_hopper",
  password: "1234567890!",
  email: "grace@hopper.com",
};

console.log(hasProperty(user, "email")); // false
console.log(hasProperty(user, "password")); // true
console.log(hasProperty(user, "id")); // false

console.log(hasProperty(user2, "email")); // true
console.log(hasProperty(user2, "password")); // true
console.log(hasProperty(user2, "id")); // false
```
// Crear un documento html con un body de 2000px de alto. Cuando se scrollea el body, cambiar el color de fondo cada 500px, por ejemplo:

let body = document.body;

document.addEventListener("scroll", () => {
  if (scrollY <= 500) {
    body.style.backgroundColor = "red";
  } else if (scrollY <= 1000) {
    body.style.backgroundColor = "green";
  } else if (scrollY <= 1500) {
    body.style.backgroundColor = "blue";
  } else {
    body.style.backgroundColor = "orange";
  }
});

// Crear dos contenedores, uno para imágenes y otro para favoritos. En el contenedor de imágenes, agregar al menos 10 imágenes (cualesquiera). Al clickear una imagen en el contenedor de imágenes, se debe agregar la misma imagen en el contenedor de favoritos. Al clickear una imagen en el contenedor de favoritos, se debe eliminar la imagen seleccionada de dicho contenedor.

const $ = (selector) => document.querySelector(selector);

let contenedorImagenes = $("#imagenes");
let contenedorFavoritos = $("#favoritos");

// Primer solucion

// contenedorImagenes.addEventListener("click", (event) => {
//   let elemento = event.target;
//   if (elemento.classList.contains("img")) {
//     contenedorFavoritos.innerHTML += `<img src=${elemento.src} alt="" class="img" id=${elemento.id}>`;
//     elemento.remove();
//   }
// });

// contenedorFavoritos.addEventListener("click", (event) => {
//   let elemento = event.target;

//   if (elemento.classList.contains("img")) {
//     contenedorImagenes.innerHTML += `<img src=${elemento.src} alt="" class="img" id=${elemento.id}>`;
//     elemento.remove();
//   }
// });

// Segunda

contenedorImagenes.addEventListener("click", (event) => {
  let elemento = event.target;
  if (elemento.classList.contains("img")) {
    if (contenedorFavoritos.classList.contains(elemento.id)) {
      alert("ya esta en favoritos esta imagen");
    } else {
      contenedorFavoritos.innerHTML += `<img src=${elemento.src} alt="" class="img" id=${elemento.id}>`;
      contenedorFavoritos.classList.add(elemento.id);
    }
  }
});

contenedorFavoritos.addEventListener("click", (event) => {
  let elemento = event.target;

  if (elemento.classList.contains("img")) {
    contenedorFavoritos.classList.remove(elemento.id);
    elemento.remove();
  }
});

let contenedorImagen = document.getElementById("img-descargar");
let btn = document.getElementById("btn");

const descargarMeme = () => {
  domtoimage.toBlob(contenedorImagen).then(function (blob) {
    saveAs(blob, "mi-meme.jpg");
  });
};

btn.addEventListener("click", descargarMeme);

// Repaso Inputs

let inputColor = document.getElementById("input-color");
let inputTexto = document.getElementById("input-text");
let box = document.getElementById("box");

inputTexto.addEventListener("input", (event) => {
  box.innerHTML = event.target.value;
});

inputColor.addEventListener("change", (event) => {
  let color = event.target.value;
  box.style.backgroundColor = color;
});

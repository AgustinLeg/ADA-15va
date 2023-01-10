// Fetch => then, catch, finally
// Promise => pending, rejected, fullfilled

// Methods => GET, POST, PUT - PATCH, DELETE

const $ = (selector) => document.querySelector(selector);

// Como se arama una URL con parametros
// https://rickandmortyapi.com/api/character?page=1&parametroDos=valorDos&parametroTres=valorTres
// ? el signo da comienzo al primer parametro
// & concatenar mas paremetros (mandar mas de 1 parametro)

const BASE_URL = "https://rickandmortyapi.com/api";

const container = $("#container");
const containerDetails = $("#container_details");
let total_pages = 0;

const getCharacters = (params = "") => {
  // por defecto hace una peticion GET
  fetch(`${BASE_URL}/character?${params}`, {
    method: "GET", // No es necesario con el GET
  })
    .then((response) => response.json())
    .then((data) => {
      total_pages = data.info.pages;
      showCharacters(data.results);
    })
    .catch((error) => {
      $("#error_container").innerHTML =
        "No es posible acceder a los personajes en este momento.";
      $("#error_container").classList.add("notification", "is-danger");
    })
    .finally(() => {
      console.log("FINALLY");
    });
};

const getCharacter = (id) => {
  fetch(`${BASE_URL}/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
      showCharacterDetail(data);
    })
    // .then(showCharacterDetail) //lo mismo que arriba :)
    .catch((error) => {
      console.log("hubo un error en los detalles del id", id);
    });
};

getCharacters();

const showCharacterDetail = (character) => {
  const { image, name, gender, status, species } = character;
  containerDetails.innerHTML = `<div class="card">
    <div class="card-image">
      <figure class="image is-128x128">
        <img src="${image}" alt="Avatar de ${name}" >
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-6">${name}</p>
          <p class="subtitle is-6">${gender}</p>
          <p class="subtitle is-6">${status}</p>
          <p class="subtitle is-6">${species}</p>
        </div>
      </div>
    </div>
  </div>`;
};

const showCharacters = (characters) => {
  container.innerHTML = "";
  for (const { image, name, gender, status, species, id } of characters) {
    container.innerHTML += `<div class="card">
    <div class="card-image">
      <figure class="image is-128x128">
        <img src="${image}" alt="Avatar de ${name}" >
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-6">${name}</p>
          <p class="subtitle is-6">${gender}</p>
          <p class="subtitle is-6">${status}</p>
          <p class="subtitle is-6">${species}</p>
          <button  class="button is-ghost" onclick="getCharacter(${id})">Ver detalles</button>
        </div>
      </div>
    </div>
  </div>`;
  }
};

const $btnPrev = $("#btn-prev");
const $btnNext = $("#btn-next");
let page = 1;

const nextPage = () => {
  // if (page < total_pages) {
  page = page + 1;
  // }
};

const prevPage = () => {
  // if (page > 1) {
  page = page - 1;
  // }
};

$btnNext.addEventListener("click", () => {
  if (page < total_pages) {
    $btnPrev.removeAttribute("disabled");
    nextPage();
    getCharacters(`page=${page}`);
  } else {
    $btnNext.setAttribute("disabled", true);
  }
});

$btnPrev.addEventListener("click", () => {
  if (page > 1) {
    $btnNext.removeAttribute("disabled");
    prevPage();
    getCharacters(`page=${page}`);
  } else {
    $btnPrev.setAttribute("disabled", true);
  }
});

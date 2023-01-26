const $ = (selector) => document.querySelector(selector);

const $contCards = $("#container");
const $modal = $("#myModal");
const $commentsContainer = $("#commentaries");
const $modalClose = $("#close");

const URL_BASE = "https://my-json-server.typicode.com/matiasbenary/dbJsonDogs/";

const openModal = async (id) => {
  $modal.classList.add("is-visible");
  $commentsContainer.innerHTML = "";

  const comments = await getDogs(`dogs/${id}/comments`);

  for (const { user, avatar, commentary } of comments) {
    $commentsContainer.innerHTML += ` <div class="commentary">
    <img class="commentary__img" src="${avatar}" alt="${user} avatar">
    <div>
      <h4>${user}</h4>
      <p>${commentary}</p>
    </div>
</div>`;
  }
};

const rendersDogs = (dogs) => {
  $contCards.innerHTML = "";

  for (const { img, name, like, id } of dogs) {
    $contCards.innerHTML += `
        <div class="card"   onclick="openModal(${id})">
        <img src=${img} alt="">
        <h2>${name}</h2>
        <div class="card__footer"><i class="fas fa-paw"></i>${like}</div>
    </div>`;
  }
};

const getDogs = async (params) => {
  try {
    const response = await fetch(`${URL_BASE}${params}`);
    const dogs = await response.json();
    return dogs;
  } catch (error) {
    alert(error);
  }
};

const openApp = async () => {
  const dogs = await getDogs("dogsss");

  // si falla la peticion
  // dogs = {} => dogs.length = undefined == falsy

  // si NO falla la peticion
  // dogs = [{...},{...}] => dogs.length = "numero" == truthy

  if (dogs.length) {
    rendersDogs(dogs);
  }else{
    alert('Hubo un error al obtener los perritos :(')
  }
};

openApp();

// eventos

$modalClose.addEventListener("click", () => {
  $modal.classList.remove("is-visible");
});

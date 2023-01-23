const BASE_URL = "https://api.punkapi.com/v2";

const beersContainer = document.querySelector("#beers");
const cards = document.querySelectorAll(".card");

const getBeers = () => {
  fetch(`${BASE_URL}/beers`)
    .then((response) => response.json())
    .then((data) => {
      renderCards(data);
      // replaceCards(data);
    });
};

const renderCards = (beers) => {
  beersContainer.innerHTML = "";

  for (const beer of beers) {
    const { name, image_url, description } = beer;
    beersContainer.innerHTML += `
    <div id="card" class="card">
    <h2>${name}</h2>
    <img
      src="${image_url}"
      alt="beer ${name}"
      height="180"
    />
    <p class="card__description">
      ${description}
    </p>
  </div>
    `;
  }
};

const replaceCards = (data) => {
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.querySelector("img").src = data[i].image_url;
    card.querySelector(".card__description").textContent = data[i].description;

    card.querySelector("h2").textContent = data[i].name;
  }
};

getBeers();

const $ = (selector) => document.querySelector(selector);

$pokemon_card = $("#pokemon-card");
$form = $("#form");

const BASE_URL = "https://pokeapi.co/api/v2";

const searchPokemon = (pokemonName) => {
  fetch(`${BASE_URL}/pokemon/${pokemonName}`, {})
    .then((response) => response.json())
    .then((data) => generateCard(data))
    .catch((error) => pokemonNotFound());
};

const pokemonNotFound = () => {
  $pokemon_card.innerHTML = `
  <div class="alert alert-danger d-flex align-items-center" role="alert">
      <div>
          Porfa tipea bien peregil
      </div>
  </div>
`;
};

const generateCard = (pokemon) => {
  const { sprites, stats, name } = pokemon;
  $pokemon_card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${sprites.front_default}" id="pokemon-img" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${stats[0].stat.name}: ${stats[0].base_stat}</p>
                <p class="card-text">${stats[1].stat.name}: ${stats[1].base_stat}</p>
                <p class="card-text">${stats[2].stat.name}: ${stats[2].base_stat}</p>
            </div>
        </div>
    `;

  $pokemon_card.addEventListener("click", (e) => {
    if (e.target.src === sprites.front_default) {
      e.target.src = sprites.back_default;
    } else {
      e.target.src = sprites.front_default;
    }
  });
};

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  let pokemonName = $("#search").value;
  searchPokemon(pokemonName);
});

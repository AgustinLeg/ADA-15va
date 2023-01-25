const containerBeers = document.getElementById("container_beers");
const btnLow = document.querySelector("#btn-low");
const btnMd = document.querySelector("#btn-md");
const btnHg = document.querySelector("#btn-hg");
const btnAll = document.querySelector("#btn-all");

const getBeers = (min, max) => {
  const params = `?abv_gt=${min}&abv_lt=${max}`;

  const url = min >= 0 && max ? params : ""

  fetch(`https://api.punkapi.com/v2/beers${url}`)
    .then((response) => response.json())
    .then((data) => {
      createCards(data);
    });
};

const createCards = (beers) => {
  containerBeers.innerHTML = "";
  beers.forEach((beer) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.innerText = `${beer.id} - ${beer.name} - ${beer.abv}`;

    const img = document.createElement("img");
    img.src = beer.image_url;
    img.alt = beer.name;
    img.height = 180;

    const description = document.createElement("p");
    description.classList.add("card__description");
    description.innerText = beer.description;

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(description);
    containerBeers.appendChild(card);
  });
};

btnLow.addEventListener("click", () => {
  getBeers(0, 5);
});

btnMd.addEventListener("click", () => {
  getBeers(5.1, 7.5);
});

btnHg.addEventListener("click", () => {
  getBeers(7.6, 50);
});

btnAll.addEventListener("click", () => {
  getBeers();
});


getBeers();


form.addEventListener('submit' , e => {
  e.preventDefault();
  // ejecutar validacion
  // if( si paso la validacion){
  //   createJob();
  // }else{
  //   muestre error
  // }
  
})
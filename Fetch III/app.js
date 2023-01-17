// DOCUMENTACION https://developers.themoviedb.org/3/getting-started/introduction

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const API_KEY = "1918b3647354cca4928921198943ecb5";
const BASE_URL = "https://api.themoviedb.org/3";

const $container_movies = $("#container-movies");
const $prev = $("#prev");
const $next = $("#next");
const $pagination = $("#pagination");
const $current_page = $("#current-page");
const $total_results = $("#total-results");
const $buttons = $$(".btn-primary");

let page = 1;
let total_pages = 0;
let current_endpoint = "";

const getMovies = (endpoint, page) => {
  fetch(`${BASE_URL}/movie/${endpoint}?api_key=${API_KEY}&page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      total_pages = data.total_pages;
      showMovies(data.results);
      handlePage(data);
    });
};

const handlePage = (data) => {
  $current_page.innerHTML = data.page;
  $total_results.innerHTML = data.total_results;
};

const showMovies = (movies) => {
  $container_movies.innerHTML = "";
  for (const {
    original_title,
    backdrop_path,
    overview,
    adult,
    release_date,
    poster_path,
  } of movies) {
    $container_movies.innerHTML += `
    <div className="card " style="width: 18rem;">
      <img src="https://image.tmdb.org/t/p/w300${
        backdrop_path || poster_path
      }" alt="${original_title}">
      <div className="card-body">
        <h5 class="card-title">${original_title}</h5>
        <p className="card-text">${overview}</p>
        <p className="card-text">${adult ? "+18" : "ATP"}</p>
        <p className="card-text">${release_date}</p>
      </div>
    </div>
  `;
  }

  /*<img src="${
    backdrop_path
      ? `https://image.tmdb.org/t/p/w300${backdrop_path}`
      : "http://placekitten.com/g/300/300"
  }" alt="${original_title}">*/
};

for (const button of $buttons) {
  // console.log(button.name)
  button.addEventListener("click", () => {
    getMovies(button.name);
    current_endpoint = button.name;
    page = 1;
    $pagination.classList.remove("d-none");
  });
}

$next.addEventListener("click", () => {
  $prev.removeAttribute("disabled");
  // el numero 5 lo tomamos como total_pages
  if (page < total_pages) {
    page = page + 1;
    getMovies(current_endpoint, page);
  }

  if (page === total_pages) {
    $next.setAttribute("disabled", true);
  }
});

$prev.addEventListener("click", () => {
  $next.removeAttribute("disabled");

  if (page > 0) {
    page = page - 1;
    getMovies(current_endpoint, page);
  }

  if (page === 1) {
    $prev.setAttribute("disabled", true);
  }
});

// getMovies();

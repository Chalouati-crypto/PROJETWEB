import displayShows from "./displayHandler.js";

const MOVIE_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1470ab160678dad609361dceb50618e2&page=1`;
const SERIE_URL = `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=1470ab160678dad609361dceb50618e2&page=1`;
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=1470ab160678dad609361dceb50618e2&query="`;
const input = document.querySelector(".searcher");
const trendingShowsContainer = document.querySelector(".swiper-wrapper");
const recommendedShowsContainer = document.querySelector(".recommended-shows");

// get initial movies

displayShows(
  MOVIE_URL,
  IMG_PATH,
  trendingShowsContainer,
  recommendedShowsContainer
);

input.addEventListener("input", function (e) {
  if (e.target.value.length < 3) return;
  const searchTerm = e.target.value;
  console.log(searchTerm);
});

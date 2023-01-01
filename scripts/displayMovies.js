import displayShows from "./displayHandler.js";
import displaySearchResults from "./displaySearchResults.js";
import { MOVIE_URL, IMG_PATH, MOVIES_SEARCH_URL } from "./apiLinks.js";

const form = document.querySelector(".form");
const searchInput = document.querySelector(".searcher");
const trendingShowsContainer = document.querySelector(".swiper-wrapper");
const recommendedShowsContainer = document.querySelector(".recommended-shows");

// get initial movies

displayShows(
  MOVIE_URL,
  IMG_PATH,
  trendingShowsContainer,
  recommendedShowsContainer
);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let searchTerm = searchInput.value;
  searchInput.value = "";
  if (searchTerm && searchTerm != "") {
    displaySearchResults(
      MOVIES_SEARCH_URL + searchTerm,
      IMG_PATH,
      trendingShowsContainer
    );
  } else {
    window.location.reload();
  }
});

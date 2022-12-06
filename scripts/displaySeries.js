import displayShows from "./displayHandler.js";
import displaySearchResults from "./displaySearchResults.js";
import { SERIE_URL, IMG_PATH, SERIES_SEARCH_URL } from "./apiLinks.js";
const form = document.querySelector(".form");
const searchInput = document.querySelector(".searcher");
const trendingShowsContainer = document.querySelector(".swiper-wrapper");
const recommendedShowsContainer = document.querySelector(".recommended-shows");
displayShows(
  SERIE_URL,
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
      SERIES_SEARCH_URL + searchTerm,
      IMG_PATH,
      trendingShowsContainer
    );
  } else {
    window.location.reload();
  }
});

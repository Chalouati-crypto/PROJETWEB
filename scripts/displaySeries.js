import displayShows from "./displayHandler.js";

const SERIE_URL = `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=1470ab160678dad609361dceb50618e2&page=1`;
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;
const trendingShowsContainer = document.querySelector(".swiper-wrapper");
const recommendedShowsContainer = document.querySelector(".recommended-shows");
displayShows(
  SERIE_URL,
  IMG_PATH,
  trendingShowsContainer,
  recommendedShowsContainer
);

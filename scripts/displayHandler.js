export default async function displayShows(
  url,
  IMG_PATH,
  trendingShowsContainer,
  recommendedShowsContainer,
  trending
) {
  const response = await fetch(url);
  const { results } = await response.json();
  console.log(results);
  let i, showElement;
  for (i = 0; i < 6; i++) {
    showElement = document.createElement("div");
    showElement.className = "swiper-slide trending-show";
    showElement.innerHTML = `
        <img class="trending-show__cover" src="${IMG_PATH}${
      results[i].backdrop_path
    }" alt="" />
        <div class="show__details">
        <p>${
          results[i].release_date == ""
            ? "unknown"
            : results[i].release_date
            ? results[i].release_date.slice(0, 4)
            : results[i].first_air_date.slice(0, 4)
        }</p>
        <img src=${
          results[i].release_date
            ? "assets/icons/movies.svg"
            : "../assets/icons/series.svg"
        } alt="" />
        <p>${results[i].original_language}</p>
        </div>
        <h3 class="trending-show__title">${
          results[i].original_title
            ? results[i].original_title
            : results[i].name
        }</h3>
      `;
    trendingShowsContainer.appendChild(showElement);
  }
  for (i = 6; i < results.length; i++) {
    showElement = document.createElement("div");
    showElement.className = "recommended-show";
    showElement.innerHTML = `
      <img class="recommended-show__cover" src="${IMG_PATH}${
      results[i].backdrop_path
    }" alt="" />
      <div class="show__details">
        <p>${
          results[i].release_date
            ? results[i].release_date.slice(0, 4)
            : results[i].first_air_date.slice(0, 4)
        }</p>
        <img src=${
          results[i].release_date
            ? "assets/icons/movies.svg"
            : "../assets/icons/series.svg"
        } alt="" />
        <p>${results[i].original_language}</p>
      </div>
      <h3 class="recommended-show__title">${
        results[i].original_title ? results[i].original_title : results[i].name
      }</h3>
      `;
    recommendedShowsContainer.appendChild(showElement);
  }
}

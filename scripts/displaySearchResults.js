export default async function displaySearchResults(
  url,
  IMG_PATH,
  trendingShowsContainer
) {
  const response = await fetch(url);
  const { results } = await response.json();
  console.log(results);
  trendingShowsContainer.innerHTML = "";

  let showElement;
  results.forEach((show) => {
    showElement = document.createElement("div");
    showElement.className = "swiper-slide trending-show";
    showElement.innerHTML = `
        <img class="trending-show__cover" src="${IMG_PATH}${
      show.backdrop_path
    }" alt="" />
        <div class="show__details">
        <p>${
          show.release_date == ""
            ? "unknown"
            : show.release_date
            ? show.release_date.slice(0, 4)
            : show.first_air_date.slice(0, 4)
        }</p>
        <img src=${
          show.release_date
            ? "assets/icons/movies.svg"
            : "../assets/icons/series.svg"
        } alt="" />
        <p>${show.original_language}</p>
        </div>
        <h3 class="trending-show__title">${
          show.original_title ? show.original_title : show.name
        }</h3>
      `;
    trendingShowsContainer.appendChild(showElement);
  });
}

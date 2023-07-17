const apiKey = '5d8e05f59cb9f03a2c99f8723cacd37d'
const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&language=pt-br&limit=10`
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const main = document.getElementById('main');
const genreSelect = document.getElementById('selecionar__genero')


function getMovies() {

    const selectedGenre = genreSelect.value;
    let url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&language=pt-br`;

    if (selectedGenre) {
        url += `&with_genres=${selectedGenre}`;
    }

      fetch(url).then(res => res.json()).then(data => {
          console.log(data.results)
          if(data.results.length !== 0){
              showMovies(data.results);
            }  
      })
}
  
  
  function showMovies(data) {
      main.innerHTML = '';
  
      data.forEach(movie => {
          const {title, poster_path, vote_average, overview} = movie;
          const movieEl = document.createElement('div');
          movieEl.classList.add('movie');
          movieEl.innerHTML = 
          `
          <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">
          
          <div class="vote">
          <h4>${vote_average}</h4>

          <div class="movie-info">
                  <h3>${title}</h3>
              </div> 
              <div class="overview">
  
                  <h3>Resumo</h3>
                  ${overview}
                  <br/> 
              </div>
          `
          main.appendChild(movieEl);
  
      })
  }

  genreSelect.addEventListener('change', getMovies)

  getMovies();


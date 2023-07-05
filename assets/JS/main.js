const apiKey = '5d8e05f59cb9f03a2c99f8723cacd37d'
const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&language=pt-br&limit=10`
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const main = document.getElementById('main');

function getMovies(url) {

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
          
          <div class="movie-info">
                  <h3>${title}</h3>
              </div>
  
              <div class="overview">
  
                  <h3>Overview</h3>
                  ${overview}
                  <br/> 
              </div>
          `
          main.appendChild(movieEl);
  
      })
  }

  getMovies(url);











  /*async function getAllPosts() {
    const response = await fetch(url)

    const data = await response.json();
    
    console.log(data);




    data.map(() => {
    
        const div = document.createElement('div')
        const title = document.createElement('h2')
        const body = document.createElement('p')
       
      title.innerText = page.title

      div.appendChild(title);
        div.appendChild(body);

       postsContainer.appendChild(div);
    })

}

getAllPosts();

/*getAllPosts();*/























/*fetch(url).then((response) => {
    return response.json();

}).then((jsonParsed) => {

    /*const divFilmes = document.getElementById('filmes');
    
    jsonParsed.data.results.forEach(element => {
       const tituloFilme = data.results

       
        creatDivFilme = (tituloFilme)*/

        /*console.log(jsonParsed);*/

    


/*function creatDivFilme(tituloFilme) {
    const divPai = document.createElement('div')
    const divFilho = document.createElement('div')
    const textName = document.createElement('text')


    textName.textContent = tituloFilme

    divFilho.appendChild(textName)
    divPai.appendChild(divFilho)
    divToAppend.appendChild(divPai)

    divPai.classList.add('personagem');
}*/
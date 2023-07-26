const apiKey = '5d8e05f59cb9f03a2c99f8723cacd37d';
const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&limit=100`;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const main = document.getElementById('main');
const genreSelect = document.getElementById('selecionar__genero');
let currentPage = 1;

function vaiParaPaginaAnterior() {
    if (currentPage > 1) {
        currentPage--;
        getMovies(`${url}&page=${currentPage}`);
    }
}

function vaiParaProximaPagina() {
    if (currentPage < 50) {
        currentPage++;
        getMovies(`${url}&page=${currentPage}`);
    }
}

function getMovies(url) {
    const selectedGenre = genreSelect.value;

    if (selectedGenre) {
        url += `&with_genres=${selectedGenre}`;
    }

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.results.length !== 0) {
                showMovies(data.results);
            }
        });
}

function hideOverview(movieEl) {
    const modal = movieEl.querySelector('.overview');
    modal.style.display = 'none';
}

function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const { id, title, poster_path, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="${poster_path ? IMG_URL + poster_path : "http://via.placeholder.com/1080x1580"}" class="img__movie" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
            </div>
            <div class="overview" style="display: none;">
                <img src="${poster_path ? IMG_URL + poster_path : "http://via.placeholder.com/1080x1580"}" class="img__overview" alt="${title}">
                <h3>${title}</h3>
                <h4>Rating: ${vote_average}</h4>
                <p>${overview}</p>
                <button class="close-btn">Fechar</button>
            </div>
        `;
        main.appendChild(movieEl);

        movieEl.addEventListener('click', function () {
            const modal = movieEl.querySelector('.overview');
            modal.style.display = 'block';
        });

        const closeBtn = movieEl.querySelector('.close-btn');
        closeBtn.addEventListener('click', function (event) {
            event.stopPropagation();
            hideOverview(movieEl);
        });
    });
}



main.addEventListener('click', function (event) {
    if (event.target.classList.contains('img__movie')) {
        const movieElement = event.target.closest('.movie');
        hideOverview(movieElement);
    }
});




genreSelect.addEventListener('change', () => {
    currentPage = 1;
    getMovies(`${url}&page=${currentPage}`);
});


getMovies(`${url}&page=${currentPage}`);



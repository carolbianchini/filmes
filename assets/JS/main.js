const apiKey = '5d8e05f59cb9f03a2c99f8723cacd37d'

fetch(`https://api.themoviedb.org/3/movie/157336?api_key=${apiKey}&limit=40`).then((response) => {
    return response.json();

}).then((jsonParsed) => {

    const divFilmes = document.getElementById('filmes');
    jsonParsed.data.forEach(element => {
        const tituloFilme = element.original_title

       
        creatDivFilme = (tituloFilme)

        console.log(jsonParsed);
    })
})
    



function creatDivFilme(tituloFilme) {
    const divPai = document.createElement('div')
    const divFilho = document.createElement('div')
    const textName = document.createElement('text')


    textName.textContent = tituloFilme

    divFilho.appendChild(textName)
    divPai.appendChild(divFilho)
    divToAppend.appendChild(divPai)

    divPai.classList.add('personagem');
}

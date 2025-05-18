// DATA REQUESTS
// http://www.omdbapi.com/?i=tt3896198&apikey=8efecdd2TS
// POSTER REQUESTS
// http://img.omdbapi.com/?apikey=8efecdd2&

 const moviesBody = document.querySelector('.movies');
 const moviesWrapper = document.querySelector('.movie-list');
 const inputEl = document.querySelector('.movie__name');
 const searchTerm = document.querySelector('.search__term')
 

let currentArr = [];

function searchMovies(event) {
    getMovies(event.target.value);
    inputEl.innerHTML = event.target.value;
    searchTerm.innerHTML = event.target.value;
    moviesBody.classList += (' movies__loading');
 }

function load(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getMovies(movieSearch) {      
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8efecdd2&s=${movieSearch}`);
    const moviesData = await movies.json();
    await load(1500);    
    currentArr = moviesData.Search;    
    displayMovies(currentArr);
    }

function displayMovies(currentArr) {
    moviesWrapper.innerHTML = currentArr
    .map((movie) => {
    return `<div class="movie-card" onclick="showMovie('${movie.Title}')">
                <div class="movie-card__container">
                    <img src="${movie.Poster}" alt="${movie.Title}">
                    <h3>${movie.Title}</h3>
                    <p><b>Year:</b> ${movie.Year}</p>
                    <p><b>Type:</b> ${movie.Type}</p>
                    <p><b>IMDB ID:</b> ${movie.imdbID}</p>
                </div>
            </div>`;         
    })
    .slice(0, 6).join("");    
}

function filterMovies(event) {
   const filterValue = event.target.value;

   let filteredMovies = [...currentArr];

    if (filterValue === "newest") {
         filteredMovies.sort((a, b) => b.Year - a.Year);
    } else if (filterValue === "oldest") {
         filteredMovies.sort((a, b) => a.Year - b.Year);
    }
    
    displayMovies(filteredMovies);
}








            
            
 









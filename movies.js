// DATA REQUESTS
// http://www.omdbapi.com/?i=tt3896198&apikey=8efecdd2
// POSTER REQUESTS
// http://img.omdbapi.com/?apikey=8efecdd2&

//async function main() {
//    const movies = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=8efecdd2&s=fast");
//    const movieData = await movies.json();
//    const movieListEl = document.querySelector('.user-card')
//
//    movieListEl.innerHTML = 
//    movieData.Search.map(
//    (movie) => 
//    `<div class="user-card">
//        <div class="user-card__container">
//            <h3>Title</h4>
//            <p><b>Poster:</b> <a href="https://website.website" target="_blank">website.website</a></p>
//            <p><b>Year:</b> XXXX</p>
//            <p><b>Type:</b> Movie</p>
//        </div>
//    </div>`
//)  
//.join("")
//}
//
//main();
async function main() {
    const movies = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=8efecdd2&s=fast");
    const movieData = await movies.json();
    const movieListEl = document.querySelector('.user-card');

    movieListEl.innerHTML = movieData.Search.map(
        (movies) =>
        `<div class="user-card">
        <div class="user-card__container">
            <h3>${movies.Title}</h3>
            <p><b>Poster:</b><a>${movies.Poster}</a></p>
            <p><b>Year:</b> ${movies.Year}</p>
            <p><b>Type:</b> ${movies.Type}</p>
        </div>
    </div>`
        ).join()
    }

main();

function showMovieLists(id) {
   
}


const iconWrapper = document.querySelector(".btn");
const searchData = document.querySelector(".search__container");

function openMenu() {
    document.body.classList.add('menu--open'); 
 }
 
 function closeMenu() {
 document.body.classList.remove('menu--open');
 }

 function changeIcon() {    
     iconWrapper.addEventListener('click', () => {//Why does it take two button presses to work corectly inside these braces?//
        })
        iconWrapper.innerHTML = `<i class="fa-solid fa-spinner"></i>`;
        iconWrapper.classList.add('btn__loading');
    }



//async function main(event) {
//    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=8efecdd2&s=${encodeURI(event)}`;
//    const search = await fetch(`${url}`);
//    const data = await search.json();
//    localStorage.setItem('movieData', JSON.stringify(data.Search));
//    window.location.href = `${window.location.origin}/movies.html`;
//}
//
//
//searchData.addEventListener('submit', (event) => {
//    const searchValue = document.getElementById("searchbar").value;
//
//   event.preventDefault();
//   // localStorage.setItem('key', searchTerm);
//   // const searchKey = localStorage.getItem('key');
//    main(searchTerm); 
//})
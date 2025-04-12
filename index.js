function openMenu() {
    document.body.classList.add('menu--open'); 
 }
 
 function closeMenu() {
 document.body.classList.remove('menu--open');
 }

 function changeIcon() {
    const iconWrapper = document.querySelector(".btn");

    iconWrapper.classList += ' '
    if (icon.classList.contains("fa-magnifying-glass")) {
        icon.classList.remove("fa-magnifying-glass");
        icon.classList.add("fa-spinner");
    } 
    //else {
    //    icon.classList.remove("fa-heart");
    //    icon.classList.add("fa-star");
    //}
}

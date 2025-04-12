function openMenu() {
    document.body.classList.add('menu--open'); 
 }
 
 function closeMenu() {
 document.body.classList.remove('menu--open');
 }

 function changeIcon() {
    const iconWrapper = document.querySelector(".btn");
    iconWrapper.innerHTML = `<i class="fa-solid fa-spinner"></i>`;
    
    iconWrapper.addEventListener('click', () => {
        iconWrapper.classList.add('btn__loading');
     })
 }


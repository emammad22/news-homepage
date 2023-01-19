var burger = document.getElementById('burger');
var sidebar = document.getElementById('sidenav');

burger.addEventListener('click', openMenu);


function openMenu() {
    for (let i = 0; i < burger.children.length; i++) {
        burger.children[i].classList.toggle('burger-bar');
        burger.classList.toggle('fixedBurger');
    }

    sidebar.classList.toggle('open');

}
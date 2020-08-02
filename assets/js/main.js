let menuElem = document.getElementById('navbar__menu');
let titleElem = menuElem.querySelector('.burger');

function burgerMenu(icon) {
   icon.classList.toggle("change");
   icon.classList.toggle("hover");
   menuElem.classList.toggle('open');
}

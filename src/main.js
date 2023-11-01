const elementToToggle = document.querySelector('.overlay');
const toggleButton = document.querySelector('#open-menu');
const closeButton = document.querySelector('#close-menu');
const headerMobMenu = document.querySelector('.header-mob-menu');
function toggleClass() {
  elementToToggle.classList.toggle('is-open');
}
closeButton.addEventListener('click', toggleClass);
toggleButton.addEventListener('click', toggleClass);
elementToToggle.addEventListener('click', toggleClass);
headerMobMenu.addEventListener('click', e => e.stopImmediatePropagation());

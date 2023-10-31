const elementToToggle = document.querySelector(".overlay");
const toggleButton = document.querySelector("#open-menu");
const closeButton = document.querySelector("#close-menu");
function toggleClass() {
  elementToToggle.classList.toggle("is-open-header");
}
closeButton.addEventListener("click", toggleClass);
toggleButton.addEventListener("click", toggleClass);
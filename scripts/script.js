// JavaScript Document

deButton = document.querySelector("header button");






deButton.addEventListener("click", toggleMenu);





function toggleMenu(event) {
    deNav = event.target.parentNode;
    deNav.classList.toggle("toonMenu");
}
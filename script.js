const hamburger = document.getElementById("hamburger");
const ul = document.querySelector("ul");

document.getElementById('hamburger').addEventListener('click', function() {
    const navMenu = document.querySelector("ul");
    ul.classList.toggle("show");
 });

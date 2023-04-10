const hamburger = document.querySelector(".hamburger"),
navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// DARK & LIGHT MODE THEME 
const checkbox = document.querySelector("input[type='checkbox']");
checkbox.addEventListener("click", () => {
    document.body.classList.toggle("light");
});
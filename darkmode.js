
// DARK & LIGHT MODE THEME 
const checkbox = document.querySelector("input[type='checkbox']");
checkbox.addEventListener("click", () => {
    document.body.classList.toggle("light");
});
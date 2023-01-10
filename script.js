const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    nav.classList.toggle("active");
})
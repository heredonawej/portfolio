console.log("Bienvenue sur mon portfolio !");

const titre = document.querySelector("header h1");

titre.addEventListener("click", function () {
    titre.textContent = "Bienvenue dans mon monde de développeur";
});

const formulaire = document.querySelector("#contactForm");
const confirmation = document.querySelector("#confirmation");

formulaire.addEventListener("submit", function (event) {
    even.preventDefault();

    confirmation.textContent = "Message envoyé avec succès !";

    formaire.reset();
});

const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});
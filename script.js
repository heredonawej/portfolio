console.log("Bienvenue sur mon portfolio !");

const titre = document.querySelector("header h1");

if (titre) {
    titre.addEventListener("click", function () {
        titre.textContent = "Bienvenue dans mon monde de développeur";
    });
}

const formulaire = document.querySelector("#contactForm");
const confirmation = document.querySelector("#confirmation");

if (formulaire) {
    formulaire.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = {
            name: formulaire.querySelector("#nom").value,
            email: formulaire.querySelector("#email").value,
            message: formulaire.querySelector("#message").value
        };

        confirmation.textContent = "Envoi en cours...";

        try {
            const response = await fetch(
                "https://portfolio-backend-3e96.onrender.com/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (response.ok && data.success) {
                confirmation.textContent = "Message envoyé avec succès ! ✅";
                formulaire.reset();
            } else {
                confirmation.textContent = "Erreur lors de l'envoi ❌";
                console.error(data);
            }

        } catch (error) {
            console.error(error);
            confirmation.textContent = "Erreur de connexion au serveur ❌";
        }
    });
}

const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        if (menu.style.display === "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    });
}
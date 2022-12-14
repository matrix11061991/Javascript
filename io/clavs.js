// Définir le texte à écrire

let text = "Bonjour, comment allez-vous ?";

// Définir la vitesse d'écriture en milisecondes

let speed = 50;

// Fonction pour simuler l'écriture au clavier

function simulateKeyboardTyping() {

  let i = 0;

  let interval = setInterval(() => {

    // Ajouter chaque lettre au texte existant

    document.getElementById("input").value = text.substring(0, i);

    i++;
    // Si tout le texte a été écrit, arrêter l'intervalle

    if (i >= text.length) {

      clearInterval(interval);

    }

  }, speed);

}

// Appeler la fonction pour démarrer la simulation

simulateKeyboardTyping();

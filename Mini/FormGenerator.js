const formGenerator = {
  generateFormHTML(fields) {
    // Initialise le code HTML du formulaire
    let formHTML = '<form>';
  
    // Itère sur chaque champ de formulaire
    for (const field of fields) {
      // Génère le code HTML du champ de formulaire
      let fieldHTML = '';
      if (field.type === 'text') {
        fieldHTML = `<label>${field.label}: <input type="text" name="${field.name}"></label>`;
      } else if (field.type === 'checkbox') {
        fieldHTML = `<label><input type="checkbox" name="${field.name}"> ${field.label}</label>`;
      }
      // Ajoute le code HTML du champ de formulaire au code HTML du formulaire
      formHTML += fieldHTML;
    }
  
    // Ferme la balise form et renvoie le code HTML complet du formulaire
    formHTML += '</form>';
    return formHTML;
  },
};

// Crée un tableau de champs de formulaire
const fields = [
  { type: 'text', label: 'Nom', name: 'name' },
  { type: 'text', label: 'Adresse e-mail', name: 'email' },
  { type: 'checkbox', label: 'Recevoir des newsletters', name: 'newsletter' },
];

// Génère le code HTML du formulaire
const formHTML = formGenerator.generateFormHTML(fields);

// Ajoute le formulaire à la page web
document.getElementById('form-container').innerHTML = formHTML;

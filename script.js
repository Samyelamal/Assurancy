(function(){
    emailjs.init("oA6aN9sf4RzRgQhBv"); // Remplace ici avec ton User ID EmailJS
  })();
  
  document.getElementById("insurance-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const serviceID = "service_ym319fj";   // Remplace ici
    const templateID = "template_917rrxu"; // Remplace ici
  
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        document.getElementById("status-message").innerText = "Formulaire envoyé avec succès !";
        this.reset();
      }, (err) => {
        document.getElementById("status-message").innerText = "Erreur lors de l'envoi.";
        console.error("Erreur:", err);
      });
  });
  
const loading = document.getElementById("loading");
const portal = document.getElementById("portal");
const status = document.getElementById("status");

const messages = [
"Recherche du dossier HX-0910-A...",
"Vérification de l'identité...",
"Participation confirmée...",
"Niveau d'accès autorisé...",
"Déclassification du dossier...",
"Chargement du portail..."
];

let i = 0;

const interval = setInterval(() => {

status.textContent = messages[i];

i++;

if(i >= messages.length){

clearInterval(interval);

setTimeout(()=>{

loading.style.display="none";
portal.classList.remove("hidden");

},800);

}

},1000);

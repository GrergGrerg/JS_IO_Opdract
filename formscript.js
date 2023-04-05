// Declaratie
const button = document.querySelector("#button");
let errors = new Array();

const voornaam = document.querySelector("#voornaam");
const naam = document.querySelector("#naam");
const gebruiker = document.querySelector("#gebruikersnaam");
const email = document.querySelector("#email");
const wachtwoord1 = document.querySelector("#wachtwoord1");
const wachtwoord2 = document.querySelector("#wachtwoord2");
const adres = document.querySelector("#adres");
const land = document.querySelector("#land");
const provincie = document.querySelector("#provincie");
const postcode = document.querySelector("#postcode");
const nieuwsbrief = document.querySelector("#nieuwsbrief");
const voorwaarden = document.querySelector("#voorwaarden");

const error = document.querySelector("#rood");
const errorlijst = document.querySelector("#foutmelding");
const gelukt = document.querySelector("#groen");
const betaling = document.querySelector("#blauw");

// Alerts verbergen
error.style.display = "none";
gelukt.style.display = "none";
betaling.style.display = "none";



const validateForm = () => {
    let errors = new Array();
    error.style.display = "block";
    checkEmptyField(voornaam.textContent, "Het veld voornaam is vereist.");
    console.log(errors);
    errors.forEach(element => {
        errorlijst.textContent += element; 
    });
    
};

const checkEmptyField = (veld, melding) => {
    // https://www.w3schools.com/js/js_validation.asp
    let x = veld;
    if (x == "") {
        errors.push(melding);
        
    }
};

button.addEventListener('click', validateForm, false);
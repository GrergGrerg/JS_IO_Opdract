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
    
    
    const checkEmptyField = (veld, melding) => {
        // https://www.w3schools.com/js/js_validation.asp
        
        if (veld == "" || veld == "Kies een land" || veld == "Kies een provincie") {
            errors.push(melding + "<br>");
        }
        console.log(errors);
    };
    checkEmptyField(voornaam.value, "Het veld voornaam is vereist.");
    checkEmptyField(naam.value, "Het veld naam is vereist.");
    checkEmptyField(gebruiker.value, "Het veld gebruikersnaam is vereist.");
    checkEmptyField(email.value, "Het veld email is vereist.");
    checkEmptyField(wachtwoord1.value, "Het veld wachtwoord is vereist.");
    checkEmptyField(wachtwoord2.value, "Het veld herhaal wachtwoord is vereist.");
    checkEmptyField(adres.value, "Adres is vereist.");
    checkEmptyField(land.value, "Het veld land is vereist.");
    checkEmptyField(provincie.value, "Provincie is vereist.");
    checkEmptyField(postcode.value, "Het veld postcode is vereist.");
    for (let index = 0; index < errors.length; index++) {
        const element = errors[index];
        errorlijst.innerHTML += element;
    }
    console.log(errors);

    
};



button.addEventListener('click', validateForm, false);
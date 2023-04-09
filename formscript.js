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

const keuze1 = document.querySelector("#betaling1");
const keuze2 = document.querySelector("#betaling2");
const keuze3 = document.querySelector("#betaling3");
const keuze4 = document.querySelector("#betaling4");


const error = document.querySelector("#rood");
const errorlijst = document.querySelector("#foutmelding");
const gelukt = document.querySelector("#groen");
const betaling = document.querySelector("#blauw");
const betalingtekst = document.querySelector("#betalingmelding");

// Alerts verbergen
error.style.display = "none";
gelukt.style.display = "none";
betaling.style.display = "none";



const validateForm = () => {
    errorlijst.innerHTML = "";
    let errors = new Array();
    error.style.display = "block";
    
    
    const checkEmptyField = (veld, melding) => {
        // https://www.w3schools.com/js/js_validation.asp
        
        if (veld == "" || veld == "Kies een land" || veld == "Kies een provincie") {
            errors.push(melding + "<br>");
        }
        
    };

    const validateMail = emailadres => {
        // https://www.w3resource.com/javascript/form/email-validation.php
        if (/^[^.-]+([\.-]?\w+)*@^[0-9a-zA-Z]+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailadres))
        {
        return (true)
        }
        // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailadres)
        return (false)
    };

    const validateWachtwoord = (password1, password2) => {
        // https://stackoverflow.com/questions/26430716/form-validation-in-javascript-minimum-characters
        if (password1.length <= 7) {
            errors.push("Wachtwoord moet langer dan 7 karakters zijn." + "<br>");
        }
        if (password1 != password2) {
            errors.push("Je wachtwoorden komen niet overeen." + "<br>");
        }
    };

    const validatePayment = veld => {
        // https://www.javatpoint.com/how-to-check-a-radio-button-using-javascript#:~:text=Check%20the%20radio%20button%20is,two%20DOM%20methods%20for%20this.&text=The%20input%20radio%20checked%20property,Use%20document.
        
        if (veld.checked) {
            betalingtekst.innerHTML = "Je betalingswijze is " + veld.value + ".";
        }
        
        

    };

    

    checkEmptyField(voornaam.value, "Het veld voornaam is vereist.");
    checkEmptyField(naam.value, "Het veld naam is vereist.");
    checkEmptyField(gebruiker.value, "Het veld gebruikersnaam is vereist.");
    checkEmptyField(email.value, "Het veld email is vereist.");
    checkEmptyField(wachtwoord1.value, "Het veld wachtwoord is vereist.");
    checkEmptyField(wachtwoord2.value, "Het veld herhaal wachtwoord is vereist.");
    checkEmptyField(adres.value, "Adres is vereist.");
    checkEmptyField(land.value, "Land is vereist.");
    checkEmptyField(provincie.value, "Provincie is vereist.");
    checkEmptyField(postcode.value, "Postcode is vereist.");

    
    if (!validateMail(email.value)) {
        errors.push("E-mailadres is niet correct." + "<br>")
    }

    validateWachtwoord(wachtwoord1.value, wachtwoord2.value);

    for (let index = 0; index < errors.length; index++) {
        const element = errors[index];
        errorlijst.innerHTML += element;
    }
    
    betaling.style.display = "block";
    validatePayment(keuze1);
    validatePayment(keuze2);
    validatePayment(keuze3);
    validatePayment(keuze4);
};



button.addEventListener('click', validateForm, false);
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
    errorlijst.innerHTML = "";
    let errors = new Array();
    error.style.display = "block";
    
    
    const checkEmptyField = (veld, melding) => {
        // https://www.w3schools.com/js/js_validation.asp
        
        if (veld == "" || veld == "Kies een land" || veld == "Kies een provincie") {
            errors.push(melding + "<br>");
        }
        console.log(errors);
    };

    const validateMail = emailadres => {
        // https://www.w3resource.com/javascript/form/email-validation.php
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailadres))
        {
        return (true)
        }
        
        return (false)
    };

    const validateWachtwoord = (password1, password2) => {
        // 
        if (password1==null || inputs[index].value=="" || inputs[index].value.length < 6) {
            alert("Field is not 6 characters minimum!");
            return false;
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
        errors.push("E-mailadres is niet correct.")
    }


    for (let index = 0; index < errors.length; index++) {
        const element = errors[index];
        errorlijst.innerHTML += element;
    }
    console.log(errors);
    
};



button.addEventListener('click', validateForm, false);
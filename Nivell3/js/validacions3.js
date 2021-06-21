//Inputs html
const form = document.getElementById("myFormId");

//Abstracció de entrades login
const posaMail = document.getElementById('entraMail');
const posaPass = document.getElementById('entraPass');

//Abstracció de entrades registre
const ficaNom = document.getElementById('entraNom');
const ficaMail = document.getElementById('introMail');
const ficaPass = document.getElementById('inputPassword');
const ficaPass2 = document.getElementById('inputPassword2');
const ficaProv = document.getElementById('inputProvince');

//Variable acumulació errors a zero
let aplegaErrors = 0;

//declaracio variables log
/* let entraMail = document.getElementById('entraMail');
let entraPass = document.getElementById('entraPass'); */



//camps
const llistaErrors = {
    campOblig: 'El camp és obligat',
    formatAde: 'El correu introduït no té el format adequat',
    valitPass: "Contrasenya a d'incloure mínim de 8 caràcters, mínim una majúscula i mínim un número",
    iguPass: 'Ambdues contrasenyes no coincideixen',
    triaProv: 'Triar província'
}

const llistaId = {
    mail: 'errorMail',
    mail2: 'errorIntroMail',
    pass: 'errorPass',
    pass2: 'errorPassword',
    pass3: 'errorPassword2',
    nom: 'errorNom',
    provincia: 'errorProvince'
}




function validacio(target, errorText, text) {
    target.classList.add('is-invalid');
    document.getElementById(errorText).textContent = text;
    aplegaErrors++;
};

function validacio2(target, errorText, text) {
    target.classList.add('is-invalid');
    document.getElementById(errorText).textContent = text;
    aplegaErrors++;
}

//Funcio validar accés
function entraLog(e) {

    e.preventDefault();


    //Condicionals errors

    if (entraMail.value == '') {
        /* validacio(e.target[1].value, errorMail, 'El camp és obligat'); */
        validacio2(posaMail, llistaId.mail, llistaErrors.campOblig);
    } else if (!validaEmail(entraMail.value)) {
        validacio2(posaMail, llistaId.mail, llistaErrors.formatAde);
    } else {
        entraMail = entraMail.value;
    }

    if (entraPass.value == '') {
        /* validacio(e.target[1].value, errorPass, 'El camp és obligat'); */
        validacio2(posaPass, llistaId.pass, llistaErrors.campOblig);
    } else if (!validaContra(entraPass.value)) {
        validacio2(posaPass, llistaId.pass, llistaErrors.valitPass);

    } else {
        entraPass = entraPass.value;
    }

    if (aplegaErrors > 0) {
        return false;
    } else {
        //alert('Validat');
        return true;

    }
}

/* const forms = document.getElementById("myFormReg");
const inputs = document.querySelectorAll('#myFormReg input option'); */




//Funcio registre usuari
function registre() {
    //e.preventDefault();


    if (entraNom.value == '') {
        //validacio(e.target[1].value, errorMail, 'El camp és obligat');
        validacio2(ficaNom, llistaId.nom, llistaErrors.campOblig);

    } else {
        entraNom = entraNom.value;
    }

    if (introMail.value == '') {
        /* validacio(e.target[1].value, errorMail, 'El camp és obligat'); */
        validacio2(ficaMail, llistaId.mail2, llistaErrors.campOblig);
    } else if (!validaEmail(introMail.value)) {
        validacio2(ficaMail, llistaId.mail2, llistaErrors.formatAde);
    } else {
        introMail = introMail.value;
    }

    if (inputPassword.value == '') {
        validacio2(ficaPass, llistaId.pass2, llistaErrors.campOblig);
    } else if (!validaContra(inputPassword.value)) {
        validacio2(ficaPass, llistaId.pass2, llistaErrors.valitPass);
    } else {
        inputPassword = inputPassword.value;
    }

    if (inputPassword2.value == '') {
        validacio2(ficaPass2, llistaId.pass3, llistaErrors.campOblig);
    } else if (!validaContra(inputPassword2.value)) {
        validacio2(ficaPass2, llistaId.pass3, llistaErrors.valitPass);
    } else if (inputPassword2 == inputPassword) {
        validacio2(ficaPass2, llistaId.pass3, llistaErrors.iguPass);
    } else {
        inputPassword2 = inputPassword2.value;
    }

    if (inputProvince.value == '') {
        validacio2(ficaProv, llistaId.provincia, llistaErrors.campOblig);

    } else {
        inputProvince = inputProvince.value;
    }

    if (aplegaErrors > 0) {
        return false;
    } else {
        //alert('Validat');
        return true;

    }
    //declaració variables regitres


    //Condicions camps vuits i validacions
    /*  if (entraNom.value == '') {
         entraNom.classList.add('is-invalid');
         document.getElementById('errorNom').textContent = 'El camp és obligatori';
         aplegaErrors++;
     } else {
         entraNom = entraNom.value;
         //console.log(entraNom);
     }
 
     if (introMail.value == '') {
         introMail.classList.add('is-invalid');
         document.getElementById('errorIntroMail').textContent = 'El camp és obligatori';
         aplegaErrors++;
     } else if (!validaEmail(introMail.value)) {
         introMail.classList.add('is-invalid');
         document.getElementById('errorIntroMail').textContent = 'El correu introduït no té el format adequat';
         aplegaErrors++;
     } else {
         introMail = introMail.value;
         //console.log(introMail);
     }
 
     if (inputPassword.value == '') {
         inputPassword.classList.add('is-invalid');
         document.getElementById('errorPassword').textContent = 'El camp és obligatori';
         aplegaErrors++;
     } else if (!validaContra(inputPassword.value)) {
         inputPassword.classList.add('is-invalid');
         document.getElementById('errorPassword').textContent = "Contrasenya a d'incloure mínim de 8 caràcters, mínim una majúscula i mínim un número";
         aplegaErrors++;
     } else {
         inputPassword = inputPassword.value;
         // console.log(inputPassword);
     }
 
     if (inputPassword2.value == '') {
         inputPassword2.classList.add('is-invalid');
         document.getElementById('errorPassword2').textContent = 'El camp és obligatori';
         aplegaErrors++;
     } else if (!validaContra(inputPassword2.value)) {
         inputPassword2.classList.add('is-invalid');
         document.getElementById('errorPassword2').textContent = "Contrasenya a d'incloure mínim de 8 caràcters, mínim una majúscula i mínim un número";
         aplegaErrors++;
     } else if (inputPassword2 == inputPassword) {
         inputPassword2.classList.add('is-invalid');
         document.getElementById('errorPassword2').textContent = 'Ambdues contrasenyes no coincideixen';
         aplegaErrors++;
     }
 
     if (inputProvince.value == '') {
         inputProvince.classList.add('is-invalid');
         document.getElementById('errorProvince').textContent = 'Triar província';
         aplegaErrors++;
     } else {
         inputProvince = inputProvince.value;
         //console.log(inputProvince);
     } */

    /* if (aplegaErrors > 0) {
        return false;
    } else { */
    //alert('Registrat');
    //}
    //cridem al modal de dades finals
}
/* modal();
$('#campsValits').modal();
return true; */






//Efecte blur
form.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != '') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

//Validació de Email
function validaEmail(email) {
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

//Validació contrasenya
function validaContra(password) {
    let regex = /(?=.*[A-Z])(?=.*[0-9]).{8,}/;
    return regex.test(password) ? true : false;
}


//Modal retor dades registre
function modal() {

    indocument.getElementById('valiMail').innerHTML = entraNom;
    indocument.getElementById('valiMail').innerHTML = introMail;
    indocument.getElementById('valiMail').innerHTML = inputPassword;
    indocument.getElementById('valiMail').innerHTML = inputProvince;
}
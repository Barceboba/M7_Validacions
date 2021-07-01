//Abstracció de entrades login
const posaMail = document.getElementById('entraMail');
const posaPass = document.getElementById('entraPass');

//Abstracció de entrades registre
const ficaNom = document.getElementById('entraNom');
const ficaMail = document.getElementById('introMail');
const ficaPass = document.getElementById('inputPassword');
const ficaPass2 = document.getElementById('inputPassword2');
const ficaProv = document.getElementById('inputProvince');
let emailPass = new Map();




//camps
const llistaErrors = {
    campOblig: 'El camp és obligat',
    formatAde: 'El correu introduït no té el format adequat',
    valitPass: "Contrasenya a d'incloure mínim de 8 caràcters, mínim una majúscula i mínim un número",
    iguPass: 'Ambdues contrasenyes no coincideixen',
    triaProv: 'Triar província',
    emailExistent: 'Aquesta adreça electrònica ja és al registre. Anar a accés.',
    emailNoExistent: 'Aquesta adreça electrònica no és d\'alta. Procedir a registre.'
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


function validacio2(target, errorText, text) {
    target.classList.add('is-invalid');
    document.getElementById(errorText).textContent = text;
    aplegaErrors++;
}

//Funcio validar accés
function entraLog(e) {

    e.preventDefault();
    //Variable acumulació errors a zero
    let aplegaErrors = 0;

    //Condicionals errors
    if (entraMail.value == '') {
        validacio2(posaMail, llistaId.mail, llistaErrors.campOblig);
    } else if (!validaEmail(entraMail.value)) {
        validacio2(posaMail, llistaId.mail, llistaErrors.formatAde);
    }


    if (entraPass.value == '') {
        validacio2(posaPass, llistaId.pass, llistaErrors.campOblig);
    } else if (!validaContra(entraPass.value)) {
        validacio2(posaPass, llistaId.pass, llistaErrors.valitPass);
    } else if (!emailPass.get(entraMail.value, entraPass.value)) {
        validacio2(posaMail, llistaId.mail, llistaErrors.emailNoExistent);

    }

    if (aplegaErrors > 0) {

        return false;
    } else {


        return true;

    }


}

//Funcio registre usuari
function registre(e) {
    e.preventDefault();
    //Variable acumulació errors a zero
    aplegaErrors = 0;


    if (entraNom.value == '') {

        validacio2(ficaNom, llistaId.nom, llistaErrors.campOblig);

    } /* else {
        ficaNom = entraNom.value;
    } */

    if (introMail.value == '') {

        validacio2(ficaMail, llistaId.mail2, llistaErrors.campOblig);
    } else if (!validaEmail(introMail.value)) {
        validacio2(ficaMail, llistaId.mail2, llistaErrors.formatAde);
    }

    if (inputPassword.value == '') {
        validacio2(ficaPass, llistaId.pass2, llistaErrors.campOblig);
    } else if (!validaContra(inputPassword.value)) {
        validacio2(ficaPass, llistaId.pass2, llistaErrors.valitPass);
    } else if (emailPass.get(introMail.value, inputPassword.value)) {
        validacio2(ficaMail, llistaId.mail2, llistaErrors.emailExistent);
    }

    if (inputPassword2.value == '') {
        validacio2(ficaPass2, llistaId.pass3, llistaErrors.campOblig);
    } else if (!validaContra(inputPassword2.value)) {
        validacio2(ficaPass2, llistaId.pass3, llistaErrors.valitPass);
    } else if (inputPassword2.value !== inputPassword.value) {
        validacio2(ficaPass2, llistaId.pass3, llistaErrors.iguPass);
    }

    if (inputProvince.value == '') {
        validacio2(ficaProv, llistaId.provincia, llistaErrors.campOblig);

    }

    if (aplegaErrors > 0) {


        return false;
    } else {

        $("#close1_open2").click(function () {
            $("#registre").modal('hide');

            document.getElementById('valiNom').innerHTML = ficaNom.value;
            document.getElementById('valiMail').innerHTML = ficaMail.value;
            document.getElementById('valiContra').innerHTML = ficaPass.value;
            document.getElementById('valiProvi').innerHTML = ficaProv.value;

            $("#campsValits").modal('show');

        });
        emailPass.set(ficaNom.value, ficaNom.value)
            .set(ficaMail.value, ficaMail.value)
            .set(ficaPass.value, ficaPass.value);
        console.log(emailPass);

        return true;

    }


}

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



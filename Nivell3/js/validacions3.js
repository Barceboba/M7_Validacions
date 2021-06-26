//Inputs html
/* const form = document.getElementById('myFormId');
const forms = document.getElementById('logRegId'); */


//Abstracció de entrades login
const posaMail = document.getElementById('entraMail');
const posaPass = document.getElementById('entraPass');

//Abstracció de entrades registre
const ficaNom = document.getElementById('entraNom');
const ficaMail = document.getElementById('introMail');
const ficaPass = document.getElementById('inputPassword');
const ficaPass2 = document.getElementById('inputPassword2');
const ficaProv = document.getElementById('inputProvince');
var arrayComprobacio = ['asdasdasd@dddd.com'];


//Variable acumulació errors a zero
let aplegaErrors = 0;


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




/* function validacio(target, errorText, text) {
    target.classList.add('is-invalid');
    document.getElementById(errorText).textContent = text;
    aplegaErrors++;
}; */

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
    } else if (!arrayComprobacio.includes(entraMail.value)) {
        validacio2(posaMail, llistaId.mail, llistaErrors.emailNoExistent);
    } else {

        arrayComprobacio.push(entraMail.value);
        
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
function registre(e) {
    e.preventDefault();


    if (entraNom.value == '') {

        validacio2(ficaNom, llistaId.nom, llistaErrors.campOblig);

    } else {
        entraNom = entraNom.value;
    }

    if (introMail.value == '') {

        validacio2(ficaMail, llistaId.mail2, llistaErrors.campOblig);
    } else if (!validaEmail(introMail.value)) {
        validacio2(ficaMail, llistaId.mail2, llistaErrors.formatAde);
    } else if (arrayComprobacio.includes(introMail.value)) {
        validacio2(ficaMail, llistaId.mail2, llistaErrors.emailExistent);
    }
    else {
        
        introMail = introMail.value;
        arrayComprobacio.push(introMail);
        console.log(arrayComprobacio);

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
    } else if (inputPassword2.value !== inputPassword) {
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
        /* $('.modal.in').modal('hide');
        dadesModal();
        $('#campsValits').modal(); */

        $("#close1_open2").click(function () {
            $("#registre").modal('hide');

            document.getElementById('valiNom').innerHTML = entraNom;
            document.getElementById('valiMail').innerHTML = introMail;
            document.getElementById('valiContra').innerHTML = inputPassword;
            document.getElementById('valiProvi').innerHTML = inputProvince;

            $("#campsValits").modal('show');

        });
        return true;
    }

}


/* function dadesModal() {
    document.getElementById("modal").click();
    form.reset();
  } */

//Efecte blur
/* form.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != '') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

forms.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != '') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true); */

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

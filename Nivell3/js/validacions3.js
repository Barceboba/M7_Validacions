//Inputs html
const form = document.getElementById("myFormId");

//Abstracció de entrades login
const posaMail = document.getElementById('entraMail');
const posaPass = document.getElementById('entraPass');

const llistaErrors = {
    campOblig: 'El camp és obligat',
    formatAde: 'El correu introduït no té el format adequat',
    valitPass: "Contrasenya a d'incloure mínim de 8 caràcters, mínim una majúscula i mínim un número",
    iguPass: 'Ambdues contrasenyes no coincideixen',
    triaProv: 'Triar província'




}

const llistaId = {
    mail: 'errorMail',
    pass: 'errorPass',
    nom: 'errorNom',
    provincia: 'errorProvince'


}


//Variable acumulació errors a zero
//let aplegaErrors = 0;

function validacio(target, errorText, text) {
    target.className.add('is-invalid');
    document.getElementById(errorText).textContent = text;
    aplegaErrors++;
};

function validacio2(target, errorText, text) {
    target.className.add('is-invalid');
    document.getElementById(errorText).textContent = text;
    aplegaErrors++;
}

//Funcio validar accés
function validacioAcces(e) {

    e.preventDefault();




    //declaracio variables log
    // let entraMail = document.getElementById('entraMail');
    // let entraPass = document.getElementById('entraPass');

    //Condicionals errors

    if (entraMail.value == '') {
        validacio(e.target[1].value, errorMail, 'El camp és obligat');
        validacio2(posaMail, llistaId.mail, campOblig);

    } else {
        entraMail = entraMail.value;
    }

   /*  if (entraMail.value == "") {
        entraMail.classList.add('is-invalid');
        document.getElementById('errorMail').textContent = 'El camp és obligat';
        aplegaErrors++;
    } else if (!validaEmail(entraMail.value)) {
        entraMail.classList.add('is-invalid');
        document.getElementById('errorMail').textContent = 'El correu introduït no té el format adequat';
        aplegaErrors++;
    }

    if (entraPass.value == "") {
        entraPass.classList.add('is-invalid');
        document.getElementById('errorPass').textContent = 'El camp és obligat';
        aplegaErrors++;
    } else if (!validaContra(entraPass.value)) {
        entraPass.classList.add('is-invalid');
        document.getElementById('errorPass').textContent = "Contrasenya a d'incloure mínim de 8 caràcters, mínim una majúscula i mínim un número";
        aplegaErrors++;
    }

    if (aplegaErrors > 0) {
        return false;
    } else {
        //alert('Validat');
        return true;

    } */
}

const forms = document.getElementById("myFormReg");
const inputs = document.querySelectorAll('#myFormReg input option');

//Abstracció de entrades registre
const ficaNom = document.getElementById('entraNom');
const ficaMail = document.getElementById('introMail');
const ficaPass = document.getElementById('inputPassword');
const ficaPass2 = document.getElementById('inputPassword2');
const ficaProv = document.getElementById('inputProvince');
//Funcio registre usuari
function entradaRegistre(e) {
    e.preventDefault();


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

    if (aplegaErrors > 0) {
        return false;
    } else {
        //alert('Registrat');

        //cridem al modal de dades finals
        modal();
        $('#campsValits').modal();
        return true;
    }

}



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

    document.getElementById('valiNom').innerHTML = entraNom;
    document.getElementById('valiMail').textContent = introMail;
    document.getElementById('valiContra').textContent = inputPassword;
    document.getElementById('valiProvi').textContent = inputProvince;
}
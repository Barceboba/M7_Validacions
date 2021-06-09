//Inputs html
const form = document.getElementById("myFormId");

 //Variable acumulació errors a zero
 let aplegaErrors = 0;
 
//Funcio validar accés
function validacioAcces() {

   

    //declaracio variables log
    // let entraMail = document.getElementById('entraMail');
    // let entraPass = document.getElementById('entraPass');

    //Condicionals errors


    if (entraMail.value == "") {
        entraMail.classList.add('is-invalid');
        document.getElementById('errorMail').textContent = 'El camp és obligat';
        aplegaErrors++;
    } else if (!validaEmail(entraMail.value)) {
        entraMail.classList.add('is-invalid');
        document.getElementById('errorMail').textContent = 'El correu introduït no té el format adequat';
        aplegaErrors ++;
    }

    if (entraPass.value == "") {
        entraPass.classList.add('is-invalid');
        document.getElementById('errorPass').textContent = 'El camp és obligat';
        aplegaErrors++;
    } else if (!validaContra(entraPass.value)) {
        entraPass.classList.add('is-invalid');
        document.getElementById('errorPass').textContent = "Contrasenya a d'incloure mínim de 8 caràcters, mínim una majúscula i mínim un número";
    }

    if (aplegaErrors > 0) {
        return false;
    } else {
        return true;
    }
}


//Funcio registre usuari
function entradaRegistre() {



    //declaració variables regitres


    //Condicions camps vuits i validacions
    if (entraNom.value == '') {
        entraNom.classList.add('is-invalid');
        document.getElementById('errorNom').textContent = 'El camp és obligatori';
        aplegaErrors ++;
    }

    if (introMail.value == '') {
        introMail.classList.add('is-invalid');
        document.getElementById('errorIntroMail').textContent = 'El camp és obligatori';
        aplegaErrors ++;
    } else if (!validaEmail(introMail.value)) {
        introMail.classList.add('is-invalid');
        document.getElementById('errorIntroMail').textContent = 'El correu introduït no té el format adequat';
        aplegaErrors ++;
    }

    if (inputPassword.value == '') {
        inputPassword.classList.add('is-invalid');
        document.getElementById('errorPassword').textContent = 'El camp és obligatori';
        aplegaErrors ++;
    } else if (!validaContra(password.value)) {
        inputPassword.classList.add('is-invalid');
        document.getElementById('errorPassword').textContent = "Contrasenya a d'incloure mínim de 8 caràcters, mínim una majúscula i mínim un número";
        aplegaErrors ++;
    }

    if (inputPassword2.value == '') {
        inputPassword2.classList.add('is-invalid');
        document.getElementById('errorPassword2').textContent = 'El camp és obligatori';
        aplegaErrors ++;
    }

    if (inputPassword2 !== inputPassword) {
        inputPassword2.classList.add('is-invalid');;
        document.getElementById('errorPassword2').textContent = 'Ambdues contrasenyes no coincideixen';
        aplegaErrors ++;
    }

    if (inputProvince.value == '') {
        inputProvince.classList.add('is-invalid');
        document.getElementById('errorProvince').textContent = 'Triar província';
        aplegaErrors ++;

    }

    if (aplegaErrors > 0) {
        return false;
    } else {
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
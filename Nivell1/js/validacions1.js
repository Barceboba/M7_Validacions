//Inputs html
const form = document.getElementById("myFormId");

//Funcio validar accés
function validacioAcces() {

    //Variable acumulació errors a zero
    let aplegaErrors = 0;

    
    let entraMail = document.getElementById('entraMail');
    let entraPass = document.getElementById('entraPass');

    //Condicionals errors
    

    if (entraMail.value == "") {
        entraMail.classList.add('is-invalid');
        document.getElementById('errorMail').textContent = 'El camp és obligat';
        aplegaErrors++;
    
    }

    if (entraPass.value == "") {
        entraPass.classList.add('is-invalid');
        document.getElementById('errorPass').textContent = 'El camp és obligat';
        aplegaErrors++;
    }

    if (aplegaErrors > 0) {
        return false;
    } else {
        return true;
    }
}


//Funcio registre usuari
function entradaRegistre() {

}



//Efecte blur
form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);
//Inputs html
const form = document.getElementById("myFormId");

function validacioAcces() {

    //Variable acumulació errors a zero
    let aplegaErrors = 0;

    
    let entraMail = document.getElementById('entrMail');
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

//Efecte blur
/*form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);*/
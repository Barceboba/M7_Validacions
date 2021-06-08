const form = document.getElementById('myFormId');

function registerValidate() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
	//var inputEmail = document.forms["myForm"]["inputEmail"];

	var inputEmail = document.getElementById('inputEmail');
	
	var inputPassword1 = document.forms["myForm"]["inputPassword1"];
	var inputPassword2 = document.forms["myForm"]["inputPassword2"];
	var inputPassword3 = document.forms["myForm"]["inputPassword3"];
	var inputUser = document.forms["myForm"]["inputUser"];
	var inputProvince = document.forms["myForm"]["inputProvince"];
	//var inputCity = document.forms["myForm"]["inputCity"];
	//var inputZip = document.forms["myForm"]["inputZip"];
	var gridCheck = document.forms["myForm"]["gridCheck"];

	//Condicionals per descartar errors
	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El camp és obligatori";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "L'email no compleix el format";
		acumErrores ++;
	}

    if(inputPassword1.value == "") {
		inputPassword1.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "El camp és obligatori";
		acumErrores ++;
	}

	if(inputPassword2.value == "") {
		inputPassword2.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "El camp és obligatori";
		acumErrores ++;
	}

	if(inputPassword3.value == "") {
		inputPassword3.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "El camp és obligatori";
		acumErrores ++;
	}
	
   if(inputUser.value == "") {
		inputAddress.classList.add("is-invalid");
		document.getElementById("errorUser").textContent = "El camp és obligatori";
		acumErrores ++;
	}

    if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "La província és obligatòria";
		acumErrores ++;
	}
	
	/*No hi ha aquests camps
	if(inputCity.value == "") {
		inputCity.classList.add("is-invalid");
		document.getElementById("errorCity").textContent = "Falta la ciutat";
		acumErrores ++;
	}
	
	if(inputZip.value == "" || inputZip.length!=5) {
		inputZip.classList.add("is-invalid");
		document.getElementById("errorZip").textContent = "El codi postal no compleix els requisitis";
		acumErrores ++;
	}*/
	
	if(!gridCheck.checked) {
		gridCheck.classList.add("is-invalid");
		document.getElementById("errorCheck").textContent = "Accepta les bases";
		acumErrores ++;
	}

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}



form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

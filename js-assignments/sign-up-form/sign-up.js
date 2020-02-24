//Write your javascript logic here
function validate() {
    if (validateFirstName() && validateLastName() && validateMobileNumber() && validateEmail() && validateMobileNumber() && validateConfirmPassword()) {
        alert("successfully submitted");
        return true;
    }
    else {
        alert("fields are empty please fill");
        return false;
    }
}
let regex = /\b[a-zA-z]+\b/;

function validateFirstName() {
    let userFirstName = document.getElementById('firstName').value;
    if (regex.test(userFirstName)) {
        document.getElementById('ifFirstNameInvalid').style.visibility = "hidden";
        document.getElementById('firstName').style.border = "1px solid black";
        return true;
    }
    else if (userFirstName.length === 0) {}
    else {
        document.getElementById('ifFirstNameInvalid').style.visibility = "visible";
        //alert(`${userFirstName} Invalid`);
        document.getElementById('firstName').style.border = "1px solid red";
        //userFirstName[-2].remove();
        return false;
    }
}

function validateLastName() {
    let userLastName = document.getElementById('lastName').value;
    if (regex.test(userLastName)) {
        document.getElementById('ifLastNameInvalid').style.visibility = "hidden";
        document.getElementById('lastName').style.border = "1px solid black";
        return true;
    }
    else if (userLastName.length === 0) {}
    else {
        alert(`${userLastName} Invalid`);
        document.getElementById('ifLastNameInvalid').style.visibility = "visible";
        document.getElementById('lastName').style.border = "1px solid red";
        return false;
    }
}

function validateMobileNumber() {
    let regexNumbers = /\b\d+\b/;
    let userMobileNumber = document.getElementById('mobileNumber').value;
    if ((regexNumbers.test(userMobileNumber)) && (userMobileNumber.length <= 10)) {
        document.getElementById('ifMobileNumberInvalid').style.visibility = "hidden";
        document.getElementById('mobileNumber').style.border = "1px solid black";
        return true;
    }
    else if (userMobileNumber.length === 0) {}
    else {

        // alert(`${userMobileNumber} Invalid Number`);
        document.getElementById('ifMobileNumberInvalid').style.visibility = "visible";
        document.getElementById('mobileNumber').style.border = "1px solid red";
        return false;
    }
}

function validateEmail() {
    let regexEmail = /\b[\w]+@[a-zA-z]+\.[a-zA-z]{2,3}\b/;
    let userEmail = document.getElementById('email').value;
    if ((userEmail.match(regexEmail))) {
        //   alert(userEmail);
        document.getElementById('ifEmailInvalid').style.visibility = "hidden";
        document.getElementById('email').style.border = "1px solid black";
        return true;
    }
    else {
        document.getElementById('ifEmailInvalid').style.visibility = "visible";
        // alert(`${userEmail} Invalid Number`);
        document.getElementById('email').style.border = "1px solid red";
        return false;
    }
}

function validatePassword() {
    let regexPassword = /\b(?=.*[a-z])(?=.*[A-Z])(.)+\b/;
    let userPassword = document.getElementById('password').value;
    if ((regexPassword.test(userPassword))) {
        document.getElementById('ifPasswordInvalid').style.visibility = "hidden";
        document.getElementById('password').style.border = "1px solid black";
        return true;
    }
    else {
        document.getElementById('ifPasswordInvalid').style.visibility = "visible";
        // alert(`${userEmail} Invalid Number`);
        document.getElementById('password').style.border = "1px solid red";
        return false;
    }
}

function validateConfirmPassword() {
    let password = document.getElementById('password').value;
    // alert(password);
    let userConfirmPassword = document.getElementById('confirmPassword').value;
    if (password === userConfirmPassword) {
        document.getElementById('ifConfirmPasswordInvalid').style.visibility = "hidden";
        document.getElementById('confirmPassword').style.border = "1px solid black";
        return true;
    }
    else {
        document.getElementById('ifConfirmPasswordInvalid').style.visibility = "visible";
        // alert(`${userEmail} Invalid Number`);
        document.getElementById('confirmPassword').style.border = "1px solid red";
        return false;
    }
}

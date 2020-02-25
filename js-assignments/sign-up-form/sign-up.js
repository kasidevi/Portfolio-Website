//Write your javascript logic here

function validate() {

    let firstName = validateFirstName();
    let lastName = validateLastName();
    let mobileNumber = validateMobileNumber();
    let email = validateEmail();
    let password = validatePassword();
    let confirmPassword = validateConfirmPassword();
    let dob = validateDOB();
    let gender = genderSelection();
    let terms = termsConditions();
    if (firstName && lastName && mobileNumber && email && password && confirmPassword && dob && gender && terms) {
        alert(`${document.getElementById('firstName').value} \n Your form successfully submitted`);
        console.log('submitted');
        console.log(`Form background color: ${document.getElementById('body').style.background}`);
        console.log(`First Name: ${document.getElementById('firstName').value}`);
        console.log(`Last Name: ${document.getElementById('lastName').value}`);
        console.log(`Mobile Number: ${document.getElementById('mobileNumber').value}`);
        console.log(`Email: ${document.getElementById('email').value}`);
        console.log(`Password: ${document.getElementById('password').value}`);
        console.log(`Confirm Password: ${document.getElementById('confirmPassword').value}`);
        console.log(`Gender: ${document.getElementById('gender').value}`);
        console.log(`Branch: ${document.getElementById('branchName').value}`);
        console.log(`DOB: ${document.getElementById('dateOfBirth').value}`);
        console.log(`Address: ${document.getElementById('address').value}`);
        console.log(`Typing speed:${document.getElementById('typingSpeed').value}`);
        console.log(`Terms & conditions: ${document.getElementsByClassName('checkBox').value}`);
        return true;
    }
    else {
        console.log("Please change the invalid fields");
        alert("Please change the invalid fields");
        return false;
    }
}

function changeTheme() {
    let rightSide = document.getElementById('colorTheme1').value;
    let leftSide = document.getElementById('colorTheme2').value;
    document.getElementById('body').style.background = `linear-gradient(to left, ${leftSide} 0%, ${rightSide} 100%)`;
}

let regex = /\b[a-zA-z]+\b/;

function validateFirstName() {
    let userFirstName = document.getElementById('firstName').value;
    if (regex.test(userFirstName)) {
        document.getElementById('ifFirstNameInvalid').style.visibility = "hidden";
        document.getElementById('requriedFirstName').style.visibility = "hidden";
        document.getElementById('firstName').style.border = "1px solid black";
        return true;
    }
    else if (userFirstName.length === 0) {
        document.getElementById('requriedFirstName').style.visibility = "visible";
        document.getElementById('ifFirstNameInvalid').style.visibility = "hidden";
    }
    else {
        document.getElementById('ifFirstNameInvalid').style.visibility = "visible";
        document.getElementById('firstName').style.border = "1px solid red";
        document.getElementById('requriedFirstName').style.visibility = "hidden";
        return false;
    }
}

function validateLastName() {
    let userLastName = document.getElementById('lastName').value;
    if (regex.test(userLastName)) {
        document.getElementById('requriedLastName').style.visibility = "hidden";
        document.getElementById('ifLastNameInvalid').style.visibility = "hidden";
        document.getElementById('lastName').style.border = "1px solid black";
        return true;
    }
    else if (userLastName.length === 0) {
        document.getElementById('requriedLastName').style.visibility = "visible";
        document.getElementById('ifLastNameInvalid').style.visibility = "hidden";
    }
    else {
        // alert(`${userLastName} Invalid`);
        document.getElementById('ifLastNameInvalid').style.visibility = "visible";
        document.getElementById('lastName').style.border = "1px solid red";
        document.getElementById('requriedLastName').style.visibility = "hidden";
        return false;
    }
}

function validateMobileNumber() {
    let regexNumbers = /^\d+$/;
    let userMobileNumber = document.getElementById('mobileNumber').value;
    if ((regexNumbers.test(userMobileNumber)) && (userMobileNumber.length <= 10)) {
        document.getElementById('requriedMobileNumber').style.visibility = "hidden";
        document.getElementById('ifMobileNumberInvalid').style.visibility = "hidden";
        document.getElementById('mobileNumber').style.border = "1px solid black";
        return true;
    }
    else if (userMobileNumber.length === 0) {
        document.getElementById('requriedMobileNumber').style.visibility = "visible";
        document.getElementById('ifMobileNumberInvalid').style.visibility = "hidden";
    }
    else {
        document.getElementById('ifMobileNumberInvalid').style.visibility = "visible";
        document.getElementById('mobileNumber').style.border = "1px solid red";
        document.getElementById('requriedMobileNumber').style.visibility = "hidden";
        return false;
    }
}

function validateEmail() {
    let regexEmail = /\b[\w]+@[a-zA-z]+\.[a-zA-z]{2,3}\b/;
    let userEmail = document.getElementById('email').value;
    if ((userEmail.match(regexEmail))) {
        document.getElementById('requriedEmail').style.visibility = "hidden";
        document.getElementById('ifEmailInvalid').style.visibility = "hidden";
        document.getElementById('email').style.border = "1px solid black";
        return true;
    }
    else if (userEmail.length === 0) {
        document.getElementById('requriedEmail').style.visibility = "visible";
        document.getElementById('ifEmailInvalid').style.visibility = "hidden";
    }
    else {
        document.getElementById('ifEmailInvalid').style.visibility = "visible";
        document.getElementById('email').style.border = "1px solid red";
        document.getElementById('requriedEmail').style.visibility = "hidden";
        return false;
    }
}

function validatePassword() {
    let regexPassword = /\b(?=.*[a-z])(?=.*[A-Z])(.)+\b/;
    let userPassword = document.getElementById('password').value;
    if ((regexPassword.test(userPassword))) {
        document.getElementById('requriedPassword').style.visibility = "hidden";
        document.getElementById('ifPasswordInvalid').style.visibility = "hidden";
        document.getElementById('password').style.border = "1px solid black";
        return true;
    }
    else if (userPassword.length === 0) {
        document.getElementById('requriedPassword').style.visibility = "visible";
        document.getElementById('ifPasswordInvalid').style.visibility = "hidden";
    }
    else {
        document.getElementById('ifPasswordInvalid').style.visibility = "visible";
        document.getElementById('password').style.border = "1px solid red";
        document.getElementById('requriedPassword').style.visibility = "hidden";
        return false;
    }
}

function validateConfirmPassword() {
    let password = document.getElementById('password').value;
    let userConfirmPassword = document.getElementById('confirmPassword').value;
    if (userConfirmPassword.length === 0) {
        document.getElementById('requriedConfirmPassword').style.visibility = "visible";
        document.getElementById('ifConfirmPasswordInvalid').style.visibility = "hidden";
    }
    else if (password === userConfirmPassword) {
        document.getElementById('requriedConfirmPassword').style.visibility = "hidden";
        document.getElementById('ifConfirmPasswordInvalid').style.visibility = "hidden";
        document.getElementById('confirmPassword').style.border = "1px solid black";
        return true;
    }
    else {
        document.getElementById('ifConfirmPasswordInvalid').style.visibility = "visible";
        document.getElementById('confirmPassword').style.border = "1px solid red";
        document.getElementById('requriedConfirmPassword').style.visibility = "hidden";
        return false;
    }
}


function genderSelection() {
    if (document.getElementById("genderMale").checked || document.getElementById("genderFemale").checked || document.getElementById("other").checked) {
        document.getElementById('requriedGender').style.visibility = "hidden";
        return true;
    }
    else {
        document.getElementById('requriedGender').style.visibility = "visible";
        return false;
    }
}

function validateDOB() {
    document.getElementById('dateOfBirth').min = "2002-01-01";
    let validateDate = document.getElementById('dateOfBirth').value;
    if (validateDate.length === 0) {
        document.getElementById('requriedDOB').style.visibility = "visible";
    }
    else if (validateDate < document.getElementById('dateOfBirth').min) {
        document.getElementById('dateOfBirth').style.border = "1px solid red";
        alert(`${validateDate} \nPlease give date after 2002`);
        document.getElementById('requriedDOB').style.visibility = "hidden";
        document.getElementById('ifDobInvalid').style.visibility = "visible";
        return false;
    }
    else {
        document.getElementById('ifDobInvalid').style.visibility = "hidden";
        document.getElementById('dateOfBirth').style.border = "1px solid black";
        return true;
    }
}

function termsConditions() {
    if (document.getElementById('checkBox').checked) {
        document.getElementById('ifCheckboxNotSelected').style.visibility = "hidden";
        return true;
    }
    else {
        document.getElementById('ifCheckboxNotSelected').style.visibility = "visible";
        return false;
    }
}

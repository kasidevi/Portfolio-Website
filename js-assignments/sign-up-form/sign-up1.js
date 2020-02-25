let firstName = document.getElementById('firstName').value;
//alert(firstName);


let firstNameErrorMsg = document.getElementById('firstNameErrorMsg');

let firstNameElement.onblur = (event) => {

    if (firstName === 0) {
        firstNameErrorMsg.innerHTML = "*required";
    }
};

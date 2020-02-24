//second
const nameElement = document.getElementById('name');
nameElement.onkeypress = event => {
    alert('Value of keypress', event.target.value);
};
/*
//third
const nameElement1 = document.getElementById('name1');
nameElement1.onchange = event => {
    console.log('Will log when value changes,blurred', event.target.value);
};

//fourth
const buttonElement = document.getElementById("loginButton");
buttonElement.onclick = () => {
    console.log('Button clicked', event.target.value);
};
//5th


document.getElementById('name2').onkeydown = (event) => {
    if (event.keyCode === 13) document.getElementById('password').focus();
};
document.getElementById('password').onkeydown = (event) => {
    if (event.keyCode === 13) document.getElementById('submit').click();
};

//6th
document.getElementById('image').onload = () => {
    console.log('Image is downloaded');
};
*/
//23/2/20 self practice

/*//second
const nameElement = document.getElementById('name');
nameElement.onkeypress = event => {
    alert('Value of keypress', event.target.value);
};

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
//26/2/20 self practice
const firstEle = document.getElementById('one');
const secondEle = document.getElementById('two');
const thirdEle = document.getElementById('three');
//event listener/event handler & event bubbling

console.log(firstEle);
firstEle.onclick = () => {
    console.log(event.currentTarget);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
};

console.log(secondEle);
secondEle.onclick = () => {
    console.log(event.target);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    //  event.stopPropagation();
};

console.log(thirdEle);
thirdEle.onclick = () => {
    console.log(event.currentTarget);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    // event.stopPropagation();
};
/*
//Addeventlistener
secondEle.addEventListener('click', () => {
    console.log('Second event listener');
    //   console.log(event.currentTarget);
    console.log('Log2>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
}, false);
thirdEle.addEventListener('click', () => {
    console.log('third event listener');
    //  console.log(event.currentTarget);
    console.log('Log3>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
}, false);
*/

//28-02-2020
/*
const submitBtnEle = document.getElementById('submitBtn');
const formEle = document.getElementById('loginForm');
// submitBtnEle.onclick = event => {
//     event.preventDefault();
//     console.log('submit btn clicked');
// };

formEle.onsubmit = (event) => {
    event.preventDefault(); //for this typed data is not erase 
    console.log('submit btn clicked');
};
//to store the data in
*/

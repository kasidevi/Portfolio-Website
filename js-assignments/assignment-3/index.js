//Write your javascript logic here

let TurnOnFunction = () => {
    let myImage = document.getElementById("bulb_status");
    myImage.src = "assets/on.png";
};

let TurnOffFunction = () => {
    let myImage = document.getElementById("bulb_status");
    myImage.src = "assets/off.png";
};

//Write your javascript logic here
const remaining = document.getElementById('remaining');
const glasses = document.querySelectorAll("li");
const filledPercentage = document.getElementById('filledPercentage');
const resetButton = document.getElementById('button');
let waterremained;
let water;
let percentage;
let nextIndexState;
remaining.innerHTML = `2.00L Remained`;
glasses.forEach(function(glass, index) {
    glasses[index].onclick = () => {
        let styleBackGroundColor = window.getComputedStyle(glasses[index]).backgroundColor;
        if (styleBackGroundColor === 'rgb(255, 255, 255)') {
            changeThemeWhiteToSkyblue(index);
            waterAddingInBigGlass(index);
        }
        else {
            changeThemeSkyblueTowhite(index);
            waterRemovingFromBigGlass(index);
        }
    };
});

function changeThemeWhiteToSkyblue(index) {

    for (let i = 0; i <= index; i++) {
        glasses[i].style.backgroundColor = "#66c2ff";
        glasses[i].style.color = "white";
    }
    waterremained = parseFloat(2.00 - (index + 1) * 0.25).toFixed(2);
    remaining.innerHTML = `${waterremained}L\nRemained`;
}

function changeThemeSkyblueTowhite(index) {
    if (index + 1 < glasses.length) {
        nextIndexState = window.getComputedStyle(glasses[index + 1]).backgroundColor;
    }
    if (nextIndexState === 'rgb(255, 255, 255)' || (index === glasses.length - 1)) {
        glasses[index].style.backgroundColor = "white";
        glasses[index].style.color = "blue";
        waterremained = parseFloat(2.00 - (index) * 0.25).toFixed(2);
    }
    else {
        for (let i = index + 1; i < glasses.length; i++) {
            glasses[i].style.backgroundColor = "white";
            glasses[i].style.color = "blue";
        }
        waterremained = parseFloat(2.00 - (index - 1) * 0.25).toFixed(2);
    }
    if (nextIndexState === 'rgb(255, 255, 255)') {
        water = 50 * index;
        waterremained = parseFloat(2.00 - (index) * 0.25).toFixed(2);
    }
    if (nextIndexState !== 'rgb(255, 255, 255)') {
        water = 50 * (index + 1);
        waterremained = parseFloat(2.00 - (index + 1) * 0.25).toFixed(2);
    }
    remaining.innerHTML = `${waterremained}L\nRemained`;
}

function waterAddingInBigGlass(index) {
    water = 50 * (index + 1);
    percentage = (water / 400) * 100;
    if (percentage === 100) {
        remaining.innerHTML = "";
    }
    remaining.style.height = 400 - water + "px";
    filledPercentage.innerHTML = `${percentage}%`;
    filledPercentage.style.height = water + 'px';
    filledPercentage.style.backgroundColor = "#66c2ff";
}

function waterRemovingFromBigGlass(index) {
    percentage = (water / 400) * 100;
    remaining.style.height = 400 - water + "px";
    filledPercentage.style.height = water + 'px';
    filledPercentage.style.backgroundColor = "#66c2ff";
    if (percentage === 0)
        filledPercentage.innerHTML = "";
    else
        filledPercentage.innerHTML = `${percentage}%`;
}

resetButton.onclick = () => {
    glasses.forEach(function(glass) {
        glass.style.backgroundColor = "white";
        glass.style.color = "blue";
    });
    filledPercentage.style.backgroundColor = '';
    filledPercentage.innerHTML = '';
    remaining.innerHTML = `2.00L \n Remained`;
    remaining.style.height = '400px';
};

/*//1st Method
function changeThemeSkyblueTowhite(index) {
    for (let i = index; i < glasses.length; i++) {
        glasses[i].style.backgroundColor = "white";
        glasses[i].style.color = "blue";
    }
    waterremained = parseFloat(2.00 - (index - 1) * 0.25).toFixed(2);
    remaining.innerHTML = `${waterremained}L\nRemained`;
}
*/

/*
//2nd Method
function waterRemovingFromBigGlass(index) {
    water = 50 * index;
    percentage = (water / 400) * 100;
    remaining.style.height = 400 - water + "px";
    if (percentage === 0)
        filledPercentage.innerHTML = "";
    else
        filledPercentage.innerHTML = `${percentage}%`;

    filledPercentage.style.height = water + 'px';
    filledPercentage.style.backgroundColor = "#66c2ff";
}*/

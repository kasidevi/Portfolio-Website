//Write your javascript logic here
const remaining = document.getElementById('remaining');
const glasses = document.querySelectorAll("li");
const filledPercentage = document.getElementById('filledPercentage');
let waterremained;
let water;
let percentage;
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
        glasses[i].style.backgroundColor = "skyblue";
        glasses[i].style.color = "white";
    }
    waterremained = parseFloat(2.00 - (index + 1) * 0.25).toFixed(2);
    remaining.innerHTML = `${waterremained}L Remained`;
}

function changeThemeSkyblueTowhite(index) {
    for (let i = index; i < glasses.length; i++) {
        glasses[i].style.backgroundColor = "white";
        glasses[i].style.color = "blue";
    }
    waterremained = parseFloat(2.00 - (index) * 0.25).toFixed(2);
    remaining.innerHTML = `${waterremained}L Remained`;
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
    filledPercentage.style.backgroundColor = "skyblue";
}

function waterRemovingFromBigGlass(index) {
    water = 50 * (index);
    percentage = (water / 400) * 100;
    remaining.style.height = 400 - water + "px";
    if (percentage === 0)
        filledPercentage.innerHTML = "";
    else
        filledPercentage.innerHTML = `${percentage}%`;
    filledPercentage.style.height = water + 'px';
    filledPercentage.style.backgroundColor = "skyblue";
}

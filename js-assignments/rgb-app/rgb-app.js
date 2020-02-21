//Write your javascript logic here
function VerticalBoxChangeThemeRed() {
    document.getElementById("VerticalComponent").style.backgroundColor = "#990000";
    document.getElementById("VerticalBoxChangeThemeRed").style.color = "#990000";
    document.getElementById("VerticalBoxChangeThemeBlue").style.color = "white";
    document.getElementById("VerticalBoxChangeThemeGreen").style.color = "white";
}

function VerticalBoxChangeThemeBlue() {
    document.getElementById("VerticalComponent").style.backgroundColor = "#0059b3";
    document.getElementById("VerticalBoxChangeThemeRed").style.color = "white";
    document.getElementById("VerticalBoxChangeThemeBlue").style.color = "#0059b3";
    document.getElementById("VerticalBoxChangeThemeGreen").style.color = "white";
}

function VerticalBoxChangeThemeGreen() {
    document.getElementById("VerticalComponent").style.backgroundColor = "#009900";
    document.getElementById("VerticalBoxChangeThemeRed").style.color = "white";
    document.getElementById("VerticalBoxChangeThemeBlue").style.color = "white";
    document.getElementById("VerticalBoxChangeThemeGreen").style.color = "#009900";
}

function Horizontaldiv1ChangeThemeRed() {
    document.getElementById("DisplayHorizontalComponent1").style.backgroundColor = "#990000";
    document.getElementById("Horizontaldiv1ChangeThemeRed").style.color = "#990000";
    document.getElementById("Horizontaldiv1ChangeThemeBlue").style.color = "white";
    document.getElementById("Horizontaldiv1ChangeThemeGreen").style.color = "white";
}

function Horizontaldiv1ChangeThemeBlue() {
    document.getElementById("DisplayHorizontalComponent1").style.backgroundColor = "#0059b3";
    document.getElementById("Horizontaldiv1ChangeThemeRed").style.color = "white";
    document.getElementById("Horizontaldiv1ChangeThemeBlue").style.color = "#0059b3";
    document.getElementById("Horizontaldiv1ChangeThemeGreen").style.color = "white";
}

function Horizontaldiv1ChangeThemeGreen() {
    document.getElementById("DisplayHorizontalComponent1").style.backgroundColor = "#009900";
    document.getElementById("Horizontaldiv1ChangeThemeRed").style.color = "white";
    document.getElementById("Horizontaldiv1ChangeThemeBlue").style.color = "white";
    document.getElementById("Horizontaldiv1ChangeThemeGreen").style.color = "#009900";
}

function Horizontaldiv2ChangeThemeRed() {
    document.getElementById("DisplayHorizontalComponent2").style.backgroundColor = "#990000";
    document.getElementById("Horizontaldiv2ChangeThemeRed").style.color = "#990000";
    document.getElementById("Horizontaldiv2ChangeThemeBlue").style.color = "white";
    document.getElementById("Horizontaldiv2ChangeThemeGreen").style.color = "white";
}

function Horizontaldiv2ChangeThemeBlue() {
    document.getElementById("DisplayHorizontalComponent2").style.backgroundColor = "#0059b3";
    document.getElementById("Horizontaldiv2ChangeThemeRed").style.color = "white";
    document.getElementById("Horizontaldiv2ChangeThemeBlue").style.color = "#0059b3";
    document.getElementById("Horizontaldiv2ChangeThemeGreen").style.color = "white";
}

function Horizontaldiv2ChangeThemeGreen() {
    document.getElementById("DisplayHorizontalComponent2").style.backgroundColor = "#009900";
    document.getElementById("Horizontaldiv2ChangeThemeRed").style.color = "white";
    document.getElementById("Horizontaldiv2ChangeThemeBlue").style.color = "white";
    document.getElementById("Horizontaldiv2ChangeThemeGreen").style.color = "#009900";
}

function Horizontaldiv3ChangeThemeRed() {
    document.getElementById("DisplayHorizontalComponent3").style.backgroundColor = "#990000";
    document.getElementById("Horizontaldiv3ChangeThemeRed").style.color = "#990000";
    document.getElementById("Horizontaldiv3ChangeThemeBlue").style.color = "white";
    document.getElementById("Horizontaldiv3ChangeThemeGreen").style.color = "white";
}

function Horizontaldiv3ChangeThemeBlue() {
    document.getElementById("DisplayHorizontalComponent3").style.backgroundColor = "#0059b3";
    document.getElementById("Horizontaldiv3ChangeThemeRed").style.color = "white";
    document.getElementById("Horizontaldiv3ChangeThemeBlue").style.color = "#0059b3";
    document.getElementById("Horizontaldiv3ChangeThemeGreen").style.color = "white";
}

function Horizontaldiv3ChangeThemeGreen() {
    document.getElementById("DisplayHorizontalComponent3").style.backgroundColor = "#009900";
    document.getElementById("Horizontaldiv3ChangeThemeRed").style.color = "white";
    document.getElementById("Horizontaldiv3ChangeThemeBlue").style.color = "white";
    document.getElementById("Horizontaldiv3ChangeThemeGreen").style.color = "#009900";
}
//VerticalComponent ,HorizontalComponents
function SwapVerticalBoxLeftToRight() {
    document.getElementById("VerticalComponent").style.order = "0";
    document.getElementById("HorizontalComponents").style.order = "1";
}

function SwapVerticalBoxRightToLeft() {
    document.getElementById("HorizontalComponents").style.order = "0";
    document.getElementById("VerticalComponent").style.order = "1";
}

function SwapBox1ToBox2() {
    let ColorOfBox2 = document.getElementById("DisplayHorizontalComponent2").style.backgroundColor;
    let ColorOfBox1 = document.getElementById("DisplayHorizontalComponent1").style.backgroundColor;
    document.getElementById("DisplayHorizontalComponent2").style.backgroundColor = ColorOfBox1;
    document.getElementById("DisplayHorizontalComponent1").style.backgroundColor = ColorOfBox2;
}

function SwapBox2ToBox1() {
    SwapBox1ToBox2();
}

function SwapBox2ToBox3() {
    let ColorOfBox2 = document.getElementById("DisplayHorizontalComponent2").style.backgroundColor;
    let ColorOfBox3 = document.getElementById("DisplayHorizontalComponent3").style.backgroundColor;
    document.getElementById("DisplayHorizontalComponent2").style.backgroundColor = ColorOfBox3;
    document.getElementById("DisplayHorizontalComponent3").style.backgroundColor = ColorOfBox2;
}

function SwapBox3ToBox2() {
    SwapBox2ToBox3();
}

function SwapBox3ToBox1() {
    let ColorOfBox1 = document.getElementById("DisplayHorizontalComponent1").style.backgroundColor;
    let ColorOfBox3 = document.getElementById("DisplayHorizontalComponent3").style.backgroundColor;
    document.getElementById("DisplayHorizontalComponent1").style.backgroundColor = ColorOfBox3;
    document.getElementById("DisplayHorizontalComponent3").style.backgroundColor = ColorOfBox1;
}

function SwapBox1ToBox3() {
    SwapBox3ToBox1()
}


function IncrementHeightOfVerticalComponent() {
    let Height = document.getElementById("VerticalComponent").offsetHeight;
    if (Height < 82)
        alert("Hey stop! I'm reached my minimum height!");
    else
        document.getElementById("VerticalComponent").style.height = ((Height - 10) + "px");
}

function DecrementHeightOfVerticalComponent() {
    let Height = document.getElementById("VerticalComponent").offsetHeight;
    if (Height > 282)
        alert("Hey stop! I'm reached my maximum height!");
    else
        document.getElementById("VerticalComponent").style.height = ((Height + 10) + "px");
}

//Write your javascript logic here
function red() {
    document.getElementById("display_vertical_component").style.backgroundColor = "#990000";
    document.getElementById("displayred").style.color = "#990000";
    document.getElementById("displayblue").style.color = "white";
    document.getElementById("displaygreen").style.color = "white";
}

function blue() {
    document.getElementById("display_vertical_component").style.backgroundColor = "#0059b3";
    document.getElementById("displayred").style.color = "white";
    document.getElementById("displayblue").style.color = "#0059b3";
    document.getElementById("displaygreen").style.color = "white";
}

function green() {
    document.getElementById("display_vertical_component").style.backgroundColor = "#009900";
    document.getElementById("displayred").style.color = "white";
    document.getElementById("displayblue").style.color = "white";
    document.getElementById("displaygreen").style.color = "#009900";
}

function hor_red1() {
    document.getElementById("display_horizontal_component_child1").style.backgroundColor = "#990000";
    document.getElementById("displayred1").style.color = "#990000";
    document.getElementById("displayblue1").style.color = "white";
    document.getElementById("displaygreen1").style.color = "white";
}

function hor_blue1() {
    document.getElementById("display_horizontal_component_child1").style.backgroundColor = "#0059b3";
    document.getElementById("displayred1").style.color = "white";
    document.getElementById("displayblue1").style.color = "#0059b3";
    document.getElementById("displaygreen1").style.color = "white";
}

function hor_green1() {
    document.getElementById("display_horizontal_component_child1").style.backgroundColor = "#009900";
    document.getElementById("displayred1").style.color = "white";
    document.getElementById("displayblue1").style.color = "white";
    document.getElementById("displaygreen1").style.color = "#009900";
}

function hor_red2() {
    document.getElementById("display_horizontal_component_child2").style.backgroundColor = "#990000";
    document.getElementById("displayred2").style.color = "#990000";
    document.getElementById("displayblue2").style.color = "white";
    document.getElementById("displaygreen2").style.color = "white";
}

function hor_blue2() {
    document.getElementById("display_horizontal_component_child2").style.backgroundColor = "#0059b3";
    document.getElementById("displayred2").style.color = "white";
    document.getElementById("displayblue2").style.color = "#0059b3";
    document.getElementById("displaygreen2").style.color = "white";
}

function hor_green2() {
    document.getElementById("display_horizontal_component_child2").style.backgroundColor = "#009900";
    document.getElementById("displayred2").style.color = "white";
    document.getElementById("displayblue2").style.color = "white";
    document.getElementById("displaygreen2").style.color = "#009900";
}

function hor_red3() {
    document.getElementById("display_horizontal_component_child3").style.backgroundColor = "#990000";
    document.getElementById("displayred3").style.color = "#990000";
    document.getElementById("displayblue3").style.color = "white";
    document.getElementById("displaygreen3").style.color = "white";
}

function hor_blue3() {
    document.getElementById("display_horizontal_component_child3").style.backgroundColor = "#0059b3";
    document.getElementById("displayred3").style.color = "white";
    document.getElementById("displayblue3").style.color = "#0059b3";
    document.getElementById("displaygreen3").style.color = "white";
}

function hor_green3() {
    document.getElementById("display_horizontal_component_child3").style.backgroundColor = "#009900";
    document.getElementById("displayred3").style.color = "white";
    document.getElementById("displayblue3").style.color = "white";
    document.getElementById("displaygreen3").style.color = "#009900";
}
//display_vertical_component ,horizontal_components
function Vertical_left_Arrow() {
    document.getElementById("display_vertical_component").style.order = "0";
    document.getElementById("horizontal_components").style.order = "1";
}

function Vertical_right_Arrow() {
    document.getElementById("horizontal_components").style.order = "0";
    document.getElementById("display_vertical_component").style.order = "1";
}

function rightside_box1Downarrow() {
    let x = document.getElementById("display_horizontal_component_child2").style.backgroundColor;
    let y = document.getElementById("display_horizontal_component_child1").style.backgroundColor;
    document.getElementById("display_horizontal_component_child2").style.backgroundColor = y;
    document.getElementById("display_horizontal_component_child1").style.backgroundColor = x;
}

function rightside_box2Uparrow() {
    rightside_box1Downarrow();
}

function rightside_box2Downarrow() {
    let x = document.getElementById("display_horizontal_component_child2").style.backgroundColor;
    let y = document.getElementById("display_horizontal_component_child3").style.backgroundColor;
    document.getElementById("display_horizontal_component_child2").style.backgroundColor = y;
    document.getElementById("display_horizontal_component_child3").style.backgroundColor = x;
}

function rightside_box3Uparrow() {
    rightside_box2Downarrow();
}

function rightSideBox3DownArrow() {
    let x = document.getElementById("display_horizontal_component_child1").style.backgroundColor;
    let y = document.getElementById("display_horizontal_component_child3").style.backgroundColor;
    document.getElementById("display_horizontal_component_child1").style.backgroundColor = y;
    document.getElementById("display_horizontal_component_child3").style.backgroundColor = x;
}

function rightSideBox1UpArrow() {
    rightSideBox3DownArrow()
}


function Vertical_Up_ArrowIncrement() {
    let x = document.getElementById("display_vertical_component").offsetHeight;
    if (x === 82)
        alert("Hey stop! I'm reached my minimum height!");
    else
        document.getElementById("display_vertical_component").style.height = ((x - 10) + "px");
}

function Vertical_Down_ArrowDecrement() {
    let x = document.getElementById("display_vertical_component").offsetHeight;
    if (x === 282)
        alert("Hey stop! I'm reached my maximum height!");
    else
        document.getElementById("display_vertical_component").style.height = ((x + 10) + "px");
}

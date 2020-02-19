//Write your javascript logic here

function display_input(element) {

  let expression = document.getElementById('result_bar');

  if (element == "=") {
    let output = getExpressionOutput(expression.innerHTML);
    document.getElementById('result_bar').innerHTML = output;
  }

  else if (element == "AC") {
    document.getElementById('result_bar').innerHTML = '0';
  }

  else if (document.getElementById('result_bar').innerHTML == 0) {
    expression.innerHTML = element;
  }

  else {
    expression.innerHTML += element;
  }

}

function getExpressionOutput(input) {
  try {
    return eval(input);
  }
  catch (input) {
    return "Invalid Expression";
  }

}









/*
function onClickShowOutput() {
  let expression = '2+4*5';
  // let expression = onClick(value);
  const output = getExpressionOutput(expression);
  console.log(output);
  document.getElementById('output').innerHTML = output;
}
*/

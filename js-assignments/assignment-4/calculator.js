//Write your javascript logic here

function onClick(argument) {

  let expression = document.getElementById('result_bar');
  if (argument == "=") {
    let output = getExpressionOutput(expression.innerHTML);
    // alert(output)
    document.getElementById('result_bar').innerHTML = output;
  }
  else if (argument == "AC") {
    document.getElementById('result_bar').innerHTML = '0';
  }
  else {
    expression.innerHTML += argument;
  }
}

function getExpressionOutput(input) {
  try {
    // alert(eval(input))
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

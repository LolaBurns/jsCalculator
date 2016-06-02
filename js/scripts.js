var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);

alert(result);

// subtraction
var subtraction = function(number1, number2) {
  return number1 - number2;
};

var difference = subtraction(number1, number2);

alert(difference);

// multiplication
var multiplication = function(number1, number2) {
  return number1 * number2;
};

var product = multiplication(number1, number2);

alert(product);

// division
var division = function(number1, number2) {
  return number1 / number2;
};

var quotient = division(number1, number2);

alert(quotient);

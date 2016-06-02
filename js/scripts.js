var add = function(number1, number2) {
  return number1 + number2;
};

// subtraction
var subtraction = function(number1, number2) {
  return number1 - number2;
};


// multiplication
var multiplication = function(number1, number2) {
  return number1 * number2;
};


// division
var division = function(number1, number2) {
  return number1 / number2;
};

//Front-end logic
$(document).ready(function() {
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert(add(number1, number2));
});

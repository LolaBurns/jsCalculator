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
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtraction(number1, number2);
    $("#difference").text(result);
  });
  $("form#multiplication").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiplication1").val());
    var number2 = parseInt($("#multiplication2").val());
    var result = multiplication(number1, number2);
    $("#product").text(result);
  });
  $("form#division").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#division1").val());
    var number2 = parseInt($("#division2").val());
    var result = division(number1, number2);
    $("#quotient").text(result);
  });
});

$(document).ready(function() {
  $("form#tracker").submit(function(event) {
debugger;
    var number1 = parseFloat($("#input1").val());
    var number2 = parseFloat($("#input2").val());
    var number3 = parseFloat($("#input3").val());
    var result;
    console.log("starting branching");
    if (number1 < number2 && number2 < number3 && (number1 + number2 <= number3) ) {
      result = "not a triangle";
    } else if (number1 < number2 && number3 < number2 && (number1 + number3 <= number2) ) {
      result = "not a triangle";
    } else if (number2 < number1 && number3 < number1 && (number2 + number3 <= number1) ) {
      result = "not a triangle";
    }
    else if (number1 === number2 && number2 === number3) {
      result = "equilateral";
    } else if (number1 === number2 || number2 === number3 || number3 === number1) {
      result = "isosceles";
    } else if (number1 !== number2 && number2 !== number3 && number3 !== number1) {
      result = "scalene";
    }




    $("#output").text(result);
    event.preventDefault();
  });
});

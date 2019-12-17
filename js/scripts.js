$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#userNumber").val());
    var result = factorial(number);

      function factorial(number) {
        for (var index = number -1; index >= 1; index -= 1) {
          number *= index;}

        return number;
      };

    $("#result").text(result);
  });
});


var trackGen = function(q1, q2, q3, q4, q5, q6) {

  var result = q1 + q2 + q3 + q4 + q5 + q6;

  // C# 6-9 , Java 12-15 , PHP 18-21, Ruby 22-24

  if (result >= 6 && result <= 9) {
    return ".c-track";
  } else if (result >= 12 && result <= 15) {
    return ".java-track";
  } else if (result >= 18 && result <= 21) {
    return ".php-track";
  } else if (result >= 22 && result <= 24) {
    return ".ruby-track";
  }

};

$(document).ready(function() {

  $("form#quiz").submit(function(event) {
    var q1 = parseInt($("#q1").val());
    var q2 = parseInt($("#q2").val());
    var q3 = parseInt($("#q3").val());
    var q4 = parseInt($("#q4").val());
    var q5 = parseInt($("#q5").val());
    var q6 = parseInt($("#q6").val());

    var answer = trackGen(q1, q2, q3, q4, q5, q6).toString();

    $(answer).show();

    event.preventDefault();

  });

});

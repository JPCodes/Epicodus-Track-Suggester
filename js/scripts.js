
var trackGen = function(q1, q2, q3, q4, q5, q6) {

  var result = q1 + q2 + q3 + q4 + q5 + q6;

  // C# 6-9 , Java 10-14 , PHP 15-19, Ruby 20-24

  if (q3 != 2 && q3 != 2) { // Overrides result to give Java track to Mobile App Devs on Questions 1, 3
    if (result > 5 && result < 10) {
      return ".c-track";
    } else if (result > 9 && result < 15) {
      return ".java-track";
    } else if (result > 14 && result < 20) {
      return ".php-track";
    } else if (result > 19) {
      return ".ruby-track";
    }
  } else {
    return ".java-track"
  };

};

$(document).ready(function() {

  $("form#quiz").submit(function(event) {
    debugger;
    var q1 = parseInt($("#q1").val());
    var q2 = parseInt($("#q2").val());
    var q3 = parseInt($("#q3").val());
    var q4 = parseInt($("#q4").val());
    var q5 = parseInt($("#q5").val());
    var q6 = parseInt($("#q6").val());

    var answer = trackGen(q1, q2, q3, q4, q5, q6).toString();

    $(".track").hide();
    $(answer).show();

    event.preventDefault();

  });

});

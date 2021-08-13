// Business
function add(answer1, answer2, answer3, answer4, answer5) {
  return (answer1 + answer2 + answer3 + answer4 + answer5);
}



// Logic
$(document).ready(function() {
  $("form#intro").submit(function(e) {
    e.preventDefault();
    $("#intro").hide();
    $("#questions").fadeIn();
  });

  $("form#questions").submit(function(e) {
    e.preventDefault();
    let answer1 = parseInt($("#answer1").val());
    let answer2 = parseInt($("#answer2").val());
    let answer3 = parseInt($("#answer3").val());
    let answer4 = parseInt($("#answer4").val());
    let answer5 = parseInt($("#answer5").val());
    let result = add(answer1, answer2, answer3, answer4, answer5);

    if (result <= 6) {
      $("#csharp").show();
    } else if (result > 6 && result <= 13) {
      $("#python").show();
    } else if (result > 13 && result <= 19) {
      $("#javascript").show();
    } else if (result > 19) {
      $("#swift").show();
    }

    $("#questions").fadeOut();
    $("#retakebtn, #resultheader").fadeIn();
  });

  $("form#retakebtn").submit(function(e) {
    e.preventDefault();
    $("#csharp, #python, #javascript, #swift, #retakebtn, #resultheader").fadeOut();
    $("#questions").fadeIn();
  });
});
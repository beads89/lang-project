// Business
function add(answer1, answer2, answer3, answer4, answer5) {
  return (answer1 + answer2 + answer3 + answer4 + answer5);
}



// Logic
$(document).ready(function() {
  $("form#intro").submit(function(e) {
    e.preventDefault();
    $("#intro").hide();
    $("#questions").show();
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
      $("#csharp").delay(11500).show(1);
    } else if (result > 6 && result <= 13) {
      $("#python").delay(11500).show(1);
    } else if (result > 13 && result <= 19) {
      $("#javascript").delay(11500).show(1);
    } else if (result > 19) {
      $("#swift").delay(11500).show(1);
    }

    $("#ironman").show().delay(11500).hide(1);
    $("#questions").hide();
    $("#retakebtn, #resultheader").delay(11500).show(1);
  });

  $("form#retakebtn").submit(function(e) {
    e.preventDefault();
    $("#csharp, #python, #javascript, #swift, #retakebtn, #resultheader").fadeOut();
    $("#questions").fadeIn();
  });
});
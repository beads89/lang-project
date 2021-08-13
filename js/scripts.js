// Business
function add(answer1, answer2, answer3, answer4, answer5) {
  return (answer1 + answer2 + answer3 + answer4 + answer5);
}




$(document).ready(function() {
// Show intro page, when clicking "next" button, hide this and show questionnaire 
  $("form#intro").submit(function(e) {
    e.preventDefault();
    $("#intro").hide();
    $("#questions").fadeIn();
  })
// If else statement that combines combination of answers or uses a point system to
// determine what language will show up.
// Displys independently from intro.
  $("form#questions").submit(function(e) {
    e.preventDefault();
    let answer1 = parseInt($("#answer1").val());
    let answer2 = parseInt($("#answer2").val());
    let answer3 = parseInt($("#answer3").val());
    let answer4 = parseInt($("#answer4").val());
    let answer5 = parseInt($("#answer5").val());
    let result = add(answer1, answer2, answer3, answer4, answer5);
    // Add if else, for values and show based on sum of answers
    // Sum of:
    //  1-6 = C#
    //  7-13 = Python
    //  14-19 = JavaScript
    //  20-25 = Swift
    //Hide questions and show results page
    $("#questions").fadeOut();
    $("#retakebtn").fadeIn();
    $("#resultheader").fadeIn();
  });
// Displays results, has a "try again" button to take user back to questionaire.
// Maybe add another button that takes them to intro if they want?
  $("form#retakebtn").submit(function(e) {
    e.preventDefault();
    $("#retakebtn").fadeOut();
    $("#resultheader").fadeOut();
    $("#questions").fadeIn();
  })
});
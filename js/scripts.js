$(document).ready(function() {

// Show intro page, when clicking "next" button, hide this and show questionaire 
  $("form#intro").submit(function(e) {
    e.preventDefault();

  })
// If else statement that combines combination of answers or uses a point system to
// determine what language will show up.
// Displys independently from intro.
  $("form#questions").submit(function(e) {
    e.preventDefault();
    let id1 = $("select#id1").val();
    let id2 = $("select#id2").val();
    let id3 = $("select#id3").val();
    let id4 = $("select#id4").val();
    let id5 = $("select#id5").val();

  });
// Displays results, has a "try again" button to take user back to questionaire.
// Maybe add another button that takes them to intro if they want?
  $("form#results").submit(function(e) {
    e.preventDefault();

  })
});
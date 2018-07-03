// Set variable for the button
var $buttonClickD3 = d3.select("#clickToAddD3");

// Add click even listener to the button
$buttonClickD3.on("click", function() {
  // Prompt user for favorite color
  var favoriteColorD3 = prompt("What is your favorite Language? ");

  // Create paragraph element
  var textD3 = "Your favorite Language is " + favoriteColorD3 + " With d3.";


  d3.select("#langD3")
  .text(textD3)

});

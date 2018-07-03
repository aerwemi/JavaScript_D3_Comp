// Set variable for the button
var $buttonClick = document.querySelector("#clickToAddJvs");

// Add click even listener to the button
$buttonClick.addEventListener("click", function() {
  // Prompt user for favorite color
  var favoriteColor = prompt("What is your favorite Language? ");

  // Create paragraph element
  var colorText = "Your favorite Language is " + favoriteColor + ".";

  // Select the id tag for color
  var color = document.querySelector("#lang");

  // Add new html line to color
  color.innerHTML = colorText;
});

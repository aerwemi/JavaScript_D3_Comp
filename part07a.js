var $countJvs07 = document.getElementById("counter07a");
// Reference the Increment and Decrement buttons by their classes
var $incrementBtnJvs07 = document.getElementById("incrJvs07");
var $decrementBtnJvs07 = document.querySelector("#decrJvs07");



// Initialize the count07js at 0
var count07js = 0;

var red = 0; // Initialize colors at 0
var blue = 0;

var fontSize = 40; // Initialize fontSize at 40

renderCountJs07(); // intial rerder 

function renderCountJs07() {

  $countJvs07.innerText = count07js;

  $countJvs07.style.color = "rgb(" + red + ", 0, " + blue + ")";
  // Alternatively, you can use template literals for a cleaner look
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  // $count07js.style.color = `rgb(${red},${0},${blue})`;  
  // Update the font size of the $count07js element
  $countJvs07.style.fontSize = "" + fontSize + "px";
  // $count07js.style.fontSize = `${fontSize}px`
}


// ****
// Add click event listeners to the buttons, call the functions passed in
$decrementBtnJvs07.addEventListener("click", decrementClick07a);

function decrementClick07a() {
  count07js -= 2;
  red += 10;
  blue -= 10;
  fontSize -= 1;
  renderCountJs07();
}

//****



//****
// Add click event listeners to the buttons, call the functions passed in
$incrementBtnJvs07.addEventListener("click", incrementClick07a);

function incrementClick07a() {
  count07js += 2;
  red -= 10;
  blue += 10;
  fontSize += 1;
  renderCountJs07();
}
//****

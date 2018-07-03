// Getting references to the h1 tag that will display the count, the increment, and decrement buttons
var $countJvs = document.querySelector(".panel h1"); //0
var $incrementBtnJvs = document.querySelector("#incrJvs"); //00
var $decrementBtnJvs = document.querySelector("#decrJvs"); //000


// Initialize the count at 0  # 1
var countJvs = 0;

// Render the count value to the page for the first time when it loads
renderCountJvs(); //1_2

function renderCountJvs() {
  // Update the inner text of the $countJvs element
  $countJvs.innerText = countJvs;
} // 1_3


// Add click event listeners to the buttons, call the functions passed in
$incrementBtnJvs.addEventListener("click", jvsIncrementClick); //2
$decrementBtnJvs.addEventListener("click", jvsDecrementClick); // 


// handleDecrementClick decreases count by 1 and re-renders the count to DOM
function jvsDecrementClick() {
  countJvs--;
  renderCountJvs(); // go to line 13
}
//2_#
// handleIncrementClick increases count by 1 and re-renders the count to DOM
function jvsIncrementClick() {
  //count++;
  countJvs +=1;
  renderCountJvs(); // go to line 13 
}
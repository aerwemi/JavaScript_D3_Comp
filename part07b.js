
var count07b= 0;

var redb = 0; 
var blueb = 0;
var fontSize = 40; 


function renderCountD307() {


  d3.select("#counter07b")
  .html("")
  .text(count07b)
  .style('font-size', "" + fontSize + "px")
  .style('color', "rgb(" + redb + ", 0, " + blueb + ")");
}; // 1_3

renderCountD307();


/// Decr 

var $decrementBtnD307 = d3.select("#decrD307");
$decrementBtnD307.on("click", function decrementClick07b() {
                
                  count07b  -= 2;
                  redb      += 10;
                  blueb     -= 10;
                  fontSize  -= 1;
                  renderCountD307();

});

/// Incr 

var $incrementBtnD307 = d3.select("#incrD307");
$incrementBtnD307.on("click", function incrementClick07b() {
                
                  count07b+= 2;
                  redb -= 10;
                  blueb += 10;
                  fontSize += 1;
                  renderCountD307();

});




// Initialize the count at 0  # 1
var countD3 = 0;


function renderCountD3() {


  d3.select(".h102 h1")
  .html("")
  .text(countD3)
}; // 1_3

renderCountD3();




/// Incr 

var $incrementBtnD3 = d3.select("#incrD3");
$incrementBtnD3.on("click", function D3IncrementClick() {
                
                countD3 +=1;
                renderCountD3();

});


//// Decr
var $decrementBtnD3 = d3.select("#decrD3");
$decrementBtnD3.on("click", function D3DecrementClick() {
                countD3--;
                renderCountD3();

});







///**************************************************************/

// PART 03


var langList03b = ["HTML", "CSS", "Bootstrap", "JavaScript", "D3.Js"];
console.log(langList03b);

// Getting a reference to the button on the page with the id property set to `remove-todo`
var $clickToRemoveBtnD3 = d3.select("#clickToRemoveD3");


// This function is triggered when the removeTodoBtn is clicked
$clickToRemoveBtnD3.on("click", function() {
  // pop is an Array method which removes the last element
  langList03b.pop();
  renderTodos3b();
  console.log(langList03b)
});

var ToRemoveWithD3 = d3.select("#toLearnD3")

function renderTodos3b() {
  ToRemoveWithD3
  .selectAll("li")
  .remove();
 
  for (var i =0; i< langList03b.length; i++){
      ToRemoveWithD3
      .append("li")
      .text(langList03b[i])
  };
};


renderTodos3b();


/// End PART 03


///**************************************************************/
















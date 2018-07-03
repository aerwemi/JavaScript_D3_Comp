





///**************************************************************/

// PART 03


// Getting a reference to the button on the page with the id property set to `remove-todo`
var $clickToRemoveBtn = document.querySelector("#clickToRemove");


// This function is triggered when the removeTodoBtn is clicked
$clickToRemoveBtn.addEventListener("click", function() {
  // pop is an Array method which removes the last element
  langList.pop();
  renderTodos();
});


function renderTodos() {
  // document.querySelector can be used to store a reference to a DOM element
  var todoList = document.querySelector("#toLearn");
  var todoHTML = "";
  for (var i = 0; i < langList.length; i++) {
    todoHTML += "<li>" + langList[i].text + "</li>";

  }

  todoList.innerHTML = todoHTML;
}

renderTodos();




/// End PART 03


///**************************************************************/
















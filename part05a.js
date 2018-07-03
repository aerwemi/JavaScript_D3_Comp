// empty array 

var yourLangs =[];

// Getting references to button and input field
var $addLangBtn = document.querySelector("#clickToAdd");

$addLangBtn.addEventListener("click", function(event){

    var $addLang      = document.querySelector("#addLang")
    var $yourLangList = document.querySelector("#yourLangList")

    var inputText = $addLang.value;

    var lang05 ={
        text : inputText,
        learned : false
    };

    yourLangs.push(lang05);

    renderYourLangList();

    $addLang.value = "";

});

// render yourLangs puts the list items on the page
function renderYourLangList() {
    var $yourLangList = document.querySelector("#yourLangList");


    $yourLangList.innerHTML = "";
  
    for (var i = 0; i <yourLangs.length; i++) {
      var lang = yourLangs[i];
      var langItem = document.createElement("li");
  
      langItem.innerHTML = lang.text;
      $yourLangList.appendChild(langItem);
    }
  }
  
  // Rendering the list of todos to the DOM
  renderYourLangList();
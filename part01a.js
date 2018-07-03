// PART 01

function renderHTML01(){
    // Getting a reference to the element on the page with an ID
    var $langs = document.querySelector("#langL"); // will need this later to append 
  
  // for the heading   
  var headingS = "Languages you will be learning SOON :-)"
  var heading = document.createElement("h1");// create elments 
  heading.innerHTML = headingS;// inner HTML  // Update the innerHTML property of these elements
  $langs.appendChild(heading); // Use 'appendChild' to put the heading and paragraph into the container
    
  
  // for the writeUP
  var stringS = "Python, HTML, CSS, JavaS"
  stringS += " and D3.js etc...."; // just to show the adding opr
  
  var writeUp = document.createElement("h4");
  writeUp.innerHTML = stringS;
  $langs.appendChild(writeUp);
  
  };
  
  
  //  Calling the renderHTML function
  renderHTML01();
  
  
  /// End PART 01
  
  
  ///**************************************************************/
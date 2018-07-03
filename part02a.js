// PART 02

var langList = [
    {
      complete: false,
      text: "HTML",
      rate: 15
    },
    {
      complete: false,
      text: "CSS",
      rate: 60
    },
    {
      complete: false,
      text: "Bootstrap",
      rate: 40
    },
    {
      complete: false,
      text: "JavaScript",
      rate: 100
    },
    {
      complete: false,
      text: "D3.Js",
      rate:80
    }
  ];
  
  
  function renderlangList() {
    // document.querySelector stores a reference to a DOM element
    var $langList = document.querySelector("#langList");
  
    // Loop through array and store in HTML
    for (var i = 0; i < langList.length; i++) {
      // Empty String to hold HTML
      var langToLearn = document.createElement("li");
  
      // Retrieve lang object from langList list
      var lang = langList[i];
  
      // Update langToLearn's innerHTML w/ the text of the lang object
      langToLearn.innerHTML = lang.text;
  
      // Add lang to the list
      $langList.appendChild(langToLearn);
    }
  }
  
  // Calling render langList to run the function when the page loads
  renderlangList();
  
  
  /// End PART 02
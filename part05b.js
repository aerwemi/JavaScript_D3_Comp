// empty array 

var yourLangsD3 =[];

// Getting references to button and input field
var $addLangBtnD3 = d3.select("#clickToAddD35b");


$addLangBtnD3.on("click", function(event){


    var $addLangD3      = d3.select("#addLangD35b");
    yourLangsD3.push($addLangD3.node().value);
    $addLangD3.node().value = "";

    renderYourLangListWithD3();


});


 function renderYourLangListWithD3(){

    var yourLangListD3 = d3.select("#yourLangListD3");
    yourLangListD3
    .selectAll("li")
    .remove();

    for (var i=0; i< yourLangsD3.length; i++ ){
        yourLangListD3
        .append("li")
        .text(yourLangsD3[i]);

    };



 };


 renderYourLangListWithD3();
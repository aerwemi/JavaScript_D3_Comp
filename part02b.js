
/*
for (var i = 0; i < langList.length; i++){

  d3.select("#langListD3")
  .append("li")
  .text(langList[i].text)

};


d3.select("#langListD3")
  .selectAll("li")
  .data(langList)
  .enter()
  .append("li")
  .classed("lang list", true)
  .html(function(d){
      return d.text
  });


  */


  d3.select("#langListD3")
  .selectAll("li")
  .data(langList)
  .enter()
  .append("li")
  .classed("lang list", true)
  .html(d => d.text);
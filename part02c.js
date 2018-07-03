// Define SVG area dimensions
var svgWidth = 400;
var svgHeight = 250;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};



// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3.select("#SVG")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth)

// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
.attr("transform", "translate(" + chartMargin.right + ", " + chartMargin.top + ")");

// Configure a band scale, with a range between 0 and the chartWidth and a padding of 0.1 (10%)
var xBandScale = d3.scaleBand().range([0, chartWidth]).padding(0.1);

// Create a linear scale, with a range between the chartHeight and 0.
var yLinearScale = d3.scaleLinear().range([chartHeight, 0]);


// data


  // Set the domain of the band scale to the names of x domain
  xBandScale
  .domain(langList.map(function (data) {
    console.log(data.text)
    console.log('map for the data.text')
    return data.text;
  }));

  // Set the domain of the linear scale to 0 and the largest number of hours watched in data
  yLinearScale.domain([0, d3.max(langList, function (data) {
    console.log(data.rate)
    //data.rate = +data.rate;
    return +data.rate;
  })]);


    // Create two new functions passing our scales in as arguments
  // These will be used to create the chart's axes
  var bottomAxis = d3.axisBottom(xBandScale);
  var leftAxis = d3.axisLeft(yLinearScale).ticks(10);


    // Create one SVG rectangle per piece of data
  // Use the linear and band scales to position each rectangle within the chart


  chartGroup.selectAll(".bar")
  .data(langList)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", function (data) {
    return xBandScale(data.text);
  })
  .attr("y", function (data) {
    return yLinearScale(data.rate);
  })
  .attr("width", xBandScale.bandwidth())
  .attr("height", function (data) {
    return chartHeight - yLinearScale(data.rate);
  });

// Append two SVG group elements to the chartGroup area,
// and create the bottom and left axes inside of them
chartGroup.append("g")
  .call(leftAxis);

chartGroup.append("g")
  .attr("transform", "translate(0, " + chartHeight + ")")
  .call(bottomAxis);
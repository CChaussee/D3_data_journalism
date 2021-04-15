//svg container
const svgHeight = 960
const svgWidth = 1000
//margins
const margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
  };

const height = svgHeight - margin.top - margin.bottom;
const width = svgWidth - margin.left - margin.right;

const svg = d3.select("#scatter")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);
// appending chartgroup
const chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);
function makeGraph(peopleData) {
  // xScale
  xScale = d3.scaleLinear()
  .domain([0,22])
  .range([0, width])
svg.append('g')
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(xScale));
//yscale
  yScale = d3.scaleLinear() 
  .domain([0, 28])
  .range([height,0])
svg.append("g")
  .call(d3.axisLeft(yScale));

//Creating dots for scatter plot, thank you D3 graph gallery
renderCircles =
  svg.append('g')
    .selectAll("dot")
    .data(peopleData)
    .enter()
    .append("circle")
    .attr("cx" , xScale)
    .attr("cy", yScale)
    .attr("r", 12)
    .style("fill", "blue")

updateToolTip =
  d3.select("body").append("div")
    .attr("class", "tooltip");

}










    //reading the csv  
d3.csv("assets/data/data.csv").then(function(peopleData) { 
  console.log(peopleData)
  makeGraph(peopleData);
})



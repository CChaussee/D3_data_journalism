// @TODO: YOUR CODE HERE!
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

const chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);
//reading the csv  
d3.csv("assets/data/data.csv").then(function(data) { 
  console.log(data);
})    
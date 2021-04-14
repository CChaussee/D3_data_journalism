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
// appending chartgroup
const chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);
//reading the csv  
d3.csv("assets/data/data.csv").then(function(data) { 
  console.log(data);
})
// xScale
function xScale(peopleData, "income") {
  const xLinearScale = d3.scaleLinear()
  .domain([d3.min(peopleData, d => d["income"]) * 0.8,
    d3.max(peopleData, d => d["income"]) * 1.2])
  .range([0, width]);
}
//yScale
function yScale()

function renderAxes
function renderCircles
function updateToolTip
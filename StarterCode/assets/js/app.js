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
    .attr("width", svgWidth)
const chartGroup = svg.append("g")    
    .attr("transform", `translate(${margin.left}, ${margin.top})`);
// appending chartgroup
function makeGraph(peopleData) {
  // xScale
  const xScale = d3.scaleLinear()
    .domain(d3.extent(peopleData, d => d.poverty).reverse())
    .range([0, width])  
//yscale
  const yScale = d3.scaleLinear() 
    .domain([0, d3.max(peopleData, d => d.healthcare)])
    .range([height,0])
// creating more variables so it is easier to label later    
  let xAxis = d3.axisBottom(xScale);
  let yAxis = d3.axisLeft(yScale);
  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxis);
  chartGroup.append("g")
    .call(yAxis)
  
//Creating dots for scatter plot, thank you D3 graph gallery
  svg.append('g')
    .selectAll("dot")
    .data(peopleData)
    .enter()
    .append("circle")
    .attr("cx" , xScale)
    .attr("cy", yScale)
    .attr("r", 12)
    .style("fill", "blue")
    .attr("opacity", "0.5");
// looping through data    
  let parsing = peopleData.forEach(function(data) {
    data.healthcare = +data.healthcare;
    data.poverty = +data.poverty;
// axis labels
  chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left + 40)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .attr("class", "axisText")
    .style("text-anchor", "middle")
    .text("Lacks Healthcare (%)");
  chartGroup.append("text")
    .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
    .attr("class", "axisText")
    .style("text-anchor", "middle")
    .text("In Poverty (%)");

})
}
    //reading the csv  
d3.csv("assets/data/data.csv").then(function(peopleData) { 
  //testing connection
  //console.log(peopleData)
  
  makeGraph(peopleData);
})



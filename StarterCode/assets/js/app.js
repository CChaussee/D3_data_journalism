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
    .attr("transform", `translate(0, ${height})`)
    .append("g");
const chartGroup = svg.append("g");
    //reading the csv  
d3.csv("assets/data/data.csv").then(function(peopleData) { 
  //testing connection
  //console.log(peopleData)
  peopleData.forEach(function(data) {
    data.healthcare = +data.healthcare;
    data.poverty = +data.poverty;})

  // xScale
  const xScale = d3.scaleLinear()
    .range([0, width])  
//yscale
  const yScale = d3.scaleLinear() 
    .range([height,0])
// creating more variables so it is easier to label later    
  let xAxis = d3.axisBottom(xScale);
  let yAxis = d3.axisLeft(yScale);
//AskBCS helped with this bit, honestly not sure what it does exactly
  var xMin;
  var xMax;
  var yMin;
  var yMax;

  xMin = d3.min(peopleData, function(data) {
    return +data.poverty * 1.01
  });

  xMax = d3.max(peopleData, function(data) {
    return +data.poverty * 0.99
  });

  yMin = d3.max(peopleData, function(data) {
    return +data.healthcare * 1.01
  });

  yMax = d3.max(peopleData, function(data) {
    return +data.healthcare * 0.99
  });
  xScale.domain([xMin, xMax])
  yScale.domain([yMin, yMax])
// Tool Time
  const toolTip = d3
        .tip()
        .attr("class", "tooltip")
        .offset([80, -60])
        .html(function(data) {
            const stateAbbr = data.state;
            const money = +data.poverty;
            const exercise = +data.healthcare;
            return (
                stateName + '<br> Poverty: ' + money + '% <br> Physically Active: ' + healthcare +'%'
            );
        });
  chartGroup.call(toolTip);

//Creating dots for scatter plot, thank you D3 graph gallery
  chartGroup.selectAll("dot")
    .data(peopleData)
    .enter()
    .append("circle")
      .attr("cx" , xScale)
      .attr("cy", yScale)
      .attr("r", 12)
      .style("fill", "blue")
      .attr("opacity", "0.5");

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

function makeGraph(peopleData) {
  makeGraph(peopleData);
}

//My orginal code was a hot mess so I am starting from scratch with the help of AskBCS
// Creating margins for graph, thank you AskBCS, my first attempt was a huge graph
// I wasnt creating boundaries for my graph to sit in orginally
const width = parseInt(d3.select("#scatter").style("width"));
const height = width - width / 4.0;
const margin = 20
const labelArea = 110;
const bottomPad = 30;
const leftPad = 30;
const svg = d3.select("#scatter")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "chart");
//Axes labels
svg.append("g").attr("class", "xText");
const xText = d3.select(".xText");
xText.append("text")
  .attr("y",-26)
  .attr("data-name","poverty")
  .attr("data-axis","x")
  .attr("class","aText active x")
  .text("InPoverty(%)");
svg.append("g").attr("class", "yText");
//Have to rotate text for y axis
const yText = d3.select(".yText")
  .attr("transform","translate("+leftTextX+","+leftTextY+")rotate(-90)")
  .append("text")
  .attr("y", -26)
  .attr("data-name", "obesity")
  .attr("data-axis", "y")
  .attr("class", "aText active y")
  .text("Obese (%)")
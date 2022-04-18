// Create an array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);

// Create an array of music provider labels
var labels = Object.keys(data.us)

// Display the default plot
function init(){
  var data = [{
    values:us,
    labels: labels,
    type: "pie"
  }];

  var layout = {
    height: 600,
    width: 800,
  };

  Plotly.newPlot("pie", data, layout)
}

// On change to the DOM, call getData()
d3.select("#selectDataset").on("change", getData);

// Function called by DOM changes
function getData(){
  var dropdown = d3.select("#selectDataset");

  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdown.property("value")

  // Initialize an empty array for the country's data
  var data = [];

  switch(dataset){
    case "us":
      data = us;
      break;
    case "uk":
      data = uk;
      break;
    case "canada":
      data = canada;
      break;
  }

  updatePlot(data);

};

// Update the restyled plot's values
function updatePlot(newData){
  Plotly.restyle("pie", "values", [newData])
}

init();

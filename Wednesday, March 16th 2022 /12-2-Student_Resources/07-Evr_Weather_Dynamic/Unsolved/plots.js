// Submit Button handler
function handleSubmit() {
  // @TODO: YOUR CODE HERE:
  var city = d3.select("#cityInput").node().value;

  // Select the input value from the form:
  // Clear the input value:
  d3.select("#cityInput").node().value = "";

  // Build the plot with the new stock
  buildPlot(city);
}

function getTimes(owmData) {
  return owmData.list.map(x => x.dt_txt)
}

function getTemps(owmData) {
  return owmData.list.map(x => x.main.temp)
}

function buildPlot(stock) {
  var apiKey = "a39bee94dc73be4ae8794905484c851";

  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`

  d3.json(url).then(function(data) {
    console.log(data);

    times = getTimes(data);
    temps = getTemps(data);

    var trace1 = {
      type: "scatter",
      mode: "lines",
      x: times,
      y: temps,
      line: {
        color: "#17BECF",
      }
    };

    var plotData = [trace1];

    var layout = {
      title: `${data.city.name} 5-day forecast`,
    };

    Plotly.newPlot("plot", plotData, layout);
  })
}

// Add event listener for submit button
// @TODO: YOUR CODE HERE
d3.select("#submit").on("click", handleSubmit);
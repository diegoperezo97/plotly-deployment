// MODULE 12: Plotly & Belly Button Biodiversity
// By Diego Pérez Ortega
// plots.js

// 0. Import the data from data.js
const cityGrowths = data;

// 1. Sort and select the cities:
var sortedCities = cityGrowths.sort((a, b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();

// 2. Select only the top five cities by population growth:
var topFiveCityNames = sortedCities.slice(0, 5);

// 3. Create arrays of city names and growth figures:
var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

// 4. Create a bar chart with the arrays:
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};

var data = [trace];

var layout = {
    title: "MOST RAPIDLY GROWING CITIES",
    xaxis: { title: "CITY" },
    yaxis: { title: "POPULATION GROWTH, 2016 - 2017" }
};

Plotly.newPlot("bar-plot", data, layout)

// MODULE 12: Plotly & Belly Button Biodiversity
// By Diego Pérez Ortega
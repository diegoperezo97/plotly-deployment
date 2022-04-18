// Filter the top 15 cities with a population increase greater than 15,000
//  and then graph each city on the x-axis and the respective population on the y-axis.

// 1. Create a custom filtering function that returns
// the cities with a population increase greater than 15,000.
function filterCities(city) {
    return parseInt(city.Increase_from_2016) > 150000;
}

// 2. Use filter() to pass the function as its argument
var filteredCities = top15Cities.filter(filterCities);

// Check to make sure you filtered your cities correctly
// HINT: console.log() is your friend.
console.log(filteredCities);

// 3. Use the map method with the arrow function to return all the filtered cities' names.
var cityNames = filteredCities.map(city => city.City)

//  Check your filtered cities
console.log(cityNames);

// 4. Use the map method with the arrow function to return all the filtered cities' populations.
var populations = filteredCities.map(city => city.population)

//  Check the populations of your filtered cities
console.log(populations)

// 5. Create your trace.
var trace1 = {
    x: cityNames,
    y: populations,
    type: "bar",
    name: "Population"
}

// 6. Create the data array for our plot
var data1 = [trace1]

// 7. Define our plot layout
var layout1 = {
    title: "Fastest Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "2017 Population" }
}

// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot1", data1, layout1)

var growthRates = filteredCities.map(city => {
    var population2016 = parseInt(city.population) - parseInt(city.Increase_from_2016);
    var populationIncrease = parseInt(city.Increase_from_2016);
    return populationIncrease / population2016;
});

var trace2 = {
    x: cityNames,
    y: growthRates,
    type: "line",
    yaxis: "y2",
    name: "Growth Rate"
}

var data2 = [trace1, trace2]

var layout2 = {
    title: "Fastest Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "2017 Population" },
    yaxis2: {
        title: "Growth Rate [%]",
        side: "right",
        overlaying: "y"
    }
}

Plotly.newPlot("bar-plot2", data2, layout2)
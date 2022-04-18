// Sort the data by Greek search results
var sortedByGreekSearch = data.sort((a, b) => b.greekSearchResults - a.greekSearchResults);

// Slice the first 10 objects for plotting
var slicedData = sortedByGreekSearch.slice(0, 10);

// Reverse the array to accommodate Plotly's defaults
var reversedData = slicedData.reverse();

// Trace1 for the Greek Data
var trace = {
    x: reversedData.map(obj => obj.greekSearchResults),
    y: reversedData.map(obj => obj.greekName),
    text: reversedData.map(obj => obj.greekName),
    name: "GREEK",
    type: "bar",
    orietation: "h"
};

// data
var data = [trace];

// Apply the group bar mode to the layout
var layout = {
    title: "GREEK GOD SEARCH RESULTS",
    margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100,
    }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout)
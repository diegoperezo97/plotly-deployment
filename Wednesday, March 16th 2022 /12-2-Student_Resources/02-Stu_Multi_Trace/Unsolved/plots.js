console.log(data);

// Trace1 for the Greek Data
var trace1 = {
    x: data.map(row => row.pair),
    y: data.map(row => row.greekSearchResults),
    text: data.map(row => row.greekName),
    name: "GREEK",
    type: "bar"
}

// Trace 2 for the Roman Data
var trace2 = {
    x: data.map(row => row.pair),
    y: data.map(row => row.romanSearchResults),
    text: data.map(row => row.romanName),
    name: "ROMAN",
    type: "bar"
}

// Combining both traces
var data = [trace1, trace2];

// Apply the group barmode to the layout
var layout = {
    title: "GREEK VS. ROMAN GOD NAMES",
    barmode: "group"
}

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout)
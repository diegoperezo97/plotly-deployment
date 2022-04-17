// MODULE 12: Plotly & Belly Button Biodiversity
// By Diego Pérez Ortega
// plots.js

Plotly.newPlot("plotArea1", [{ x: [1, 2, 3], y: [10, 20, 30] }]);

var trace2 = {
    x: [10, 18, 5],
    y: [10, 18, 5],
    type: "bar"
};

Plotly.newPlot("plotArea2", [trace2]);

var trace3 = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};

Plotly.newPlot("plotArea3", [trace3]);

var layout4 = {
    title: "Luncheon Survey",
    xaxis: { title: "Food Option" },
    yaxis: { title: "Number of Respondents" }
};

Plotly.newPlot("plotArea4", [trace3], layout4);

var trace5 = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};

var layout5 = {
    title: "'Bar' Chart",
    xaxis: { title: "Drinks" },
    yaxis: { title: "% of Drinks Ordered" }
};

Plotly.newPlot("plotArea5", [trace5], layout5);

var trace6 = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "pie"
};

var layout6 = {
    title: "'Pie' Chart",
};

Plotly.newPlot("plotArea6", [trace6], layout6);

// MODULE 12: Plotly & Belly Button Biodiversity
// By Diego Pérez Ortega
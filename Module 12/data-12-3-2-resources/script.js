// MODULE 12: Plotly & Belly Button Biodiversity
// By Diego Pérez Ortega
// samples.js

// Syntax used to retrieve data from an external data file, instead of a web API, is the same:
// IMPORTANT: When reading an external data file such as a CSV or JSON file into a script, you must run a server. 
// You cannot directly open index.html with your browser.
d3.json("samples.json").then(function (data) {
    console.log(data);
});

// Extract only the wfreq and filter out null values:
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

// Display the metadata of any individual from the dataset:
d3.json("samples.json").then(function (data) {
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) => 
        {console.log(key + ": " + value);})
});

// MODULE 12: Plotly & Belly Button Biodiversity
// By Diego Pérez Ortega
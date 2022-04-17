// MODULE 12: Plotly & Belly Button Biodiversity
// By Diego Pérez Ortega
// spaceX.js

const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

// Retrieve the details only from the Vandenberg Air Force Base:
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// Access the latitude of the Vandenberg Airforce Base:
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

// Use map() to print only the latitude and longitude coordinates of each SpaceX launch station:
d3.json(url).then(spaceXResults => spaceXResults.map(function(station){
    console.log(station.location.latitude);
    console.log(station.location.longitude);
}))

// MODULE 12: Plotly & Belly Button Biodiversity
// By Diego Pérez Ortega
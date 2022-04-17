// MODULE 12: Plotly & Belly Button Biodiversity
// By Diego Pérez Ortega
// map.js

var numbers = [1, 2, 3, 4, 5];

var doubled = numbers.map(function (num) {
    return num * 2;
});

console.log(doubled);

var numbers = [0, 2, 4, 6, 8];

var addTwo = numbers.map(function (num) {
    return num + 2;
});

console.log(addTwo);

var cities = [
    {
        "Rank": 1,
        "City": "San Antonio ",
        "State": "Texas",
        "Increase_from_2016": "24208",
        "population": "1511946"
    },
    {
        "Rank": 2,
        "City": "Phoenix ",
        "State": "Arizona",
        "Increase_from_2016": "24036",
        "population": "1626078"
    },
    {
        "Rank": 3,
        "City": "Dallas",
        "State": "Texas",
        "Increase_from_2016": "18935",
        "population": "1341075"
    }
];

var cityNames = cities.map(function (city) {
    return city.City;
});

console.log(cityNames);

var cityPopulation = cities.map(function (city) {
    return city.population;
});

console.log(cityPopulation);

// The anonymous function inside map() and filter() can be simplified as an arrow function:

var numbers = [1,2,3,4,5];

var doubled = numbers.map(num => num * 2);

console.log(doubled);

// MODULE 12: Plotly & Belly Button Biodiversity
// By Diego Pérez Ortega
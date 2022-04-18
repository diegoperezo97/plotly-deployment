// Filter the data for movies with an IMDb rating greater than 8.9
//  and then graph each title on the x-axis and the respective metascore on the y-axis.

// 0. Import the data from data.js
const topMovies = data;

// 1. Use the filter method to create a custom filtering function
// that returns the movies with a rating greater than 8.9
function filterMovieRatings(movie){
    return parseFloat(movie.imbdRating) > 8.9;
}

// 2. Use filter() to pass the function as its argument
// var filteredMovies = topMovies.filter(filterMovieRatings);
var filteredMovies = topMovies.filter(movie => parseFloat(movie.imbdRating) > 8.9);

//  Check to make sure your are filtering your movies.
console.log(filteredMovies);

// 3. Use the map method with the arrow function to return all the filtered movie titles.
var movieTitles = filteredMovies.map(movie => movie.title)

//  Check your filtered movie titles.
console.log(movieTitles);

// 4. Use the map method with the arrow function to return all the filtered movie metascores.
var movieRatings = filteredMovies.map(movie => parseInt(movie.metascore));

//  Check your filtered movie metascores.
console.log(movieRatings);

// 5. Create your trace.
var trace = {
    x: movieTitles,
    y: movieRatings,
    type: "bar"
}

var trace = {
    x: topMovies.filter(movie => parseFloat(movie.imbdRating) > 8.9).map(movie => movie.title),
    y: topMovies.filter(movie => parseFloat(movie.imbdRating) > 8.9).map(movie => parseInt(movie.metascore)),
    type: "bar"
}

// 6. Create the data array for our plot
data = [trace]

// 7. Define our plot layout
var layout = {
    title: "Acclaimed Movies",
    xaxis: {title: "Title"},
    yaxis: {title: "Metascore Rating"}
};

// 8. Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout)
// MODULE 12: Plotly & Belly Button Biodiversity
// By Diego Pérez Ortega
// script.js

d3.selectAll("body").on("change", updatePage);

function updatePage(){
    var dropdownMenu = d3.selectAll("#selectOption").node();
    var dropdownMenuID = dropdownMenu.id;
    var selectedOption = dropdownMenu.value;

    console.log(dropdownMenuID);
    console.log(selectedOption);
}

// MODULE 12: Plotly & Belly Button Biodiversity
// By Diego Pérez Ortega
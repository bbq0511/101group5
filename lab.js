// index.js - purpose and description here
// Author: Logan de Vries
// Created: 29 April

// Define Variables

$(document).ready(function() {
  $('#mini .image-button').click(function() {
    $(this).find('.description').toggle();
  });
});

  // Add button to the Problems section
  var problemsButton = $("<button>").text("Press Me");
  $("#problems").append(problemsButton);

  // Add button to the Results section
  var resultsButton = $("<button>").text("Press Me");
  $("#results").append(resultsButton);

  // Click event for the buttons
  $("button").on("click", function() {
    var section = $(this).closest(".minor-section");
    section.find("div").toggleClass("special");
  });
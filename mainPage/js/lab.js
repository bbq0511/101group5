$(document).ready(function() {
    var intervalId;
    var colors = ["#cd5c5c", "#e9967a", "#bdb76b", "#ffa07a"]; //color lists
  
    function changeBackgroundColor() {
      var colorIndex = 0;
  
      intervalId = setInterval(function() {
        $("body").css("background-color", colors[colorIndex]);
  
        colorIndex = (colorIndex + 5) % colors.length;
      }, 1000); // Change color every 1 second
    }
  
    

  $(document).ready(function() {
    $(".toggle-button").click(function() {
      $(this).next(".content").toggleClass("expanded");
    });
  });

  
  
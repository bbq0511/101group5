$(document).ready(function() {
    var intervalId;
    var colors = ["#ff0000", "#00ff00", "#0000ff"]; //color lists
  
    function changeBackgroundColor() {
      var colorIndex = 0;
  
      intervalId = setInterval(function() {
        $("body").css("background-color", colors[colorIndex]);
  
        colorIndex = (colorIndex + 5) % colors.length;
      }, 1000); // Change color every 1 second
    }
  
    $("#startButton").click(function() {
      changeBackgroundColor();
    });
  
    $("#stopButton").click(function() {
      clearInterval(intervalId);
    });
  });

  $(document).ready(function() {
    $(".toggle-button").click(function() {
      $(this).next(".content").toggleClass("expanded");
    });
  });
  
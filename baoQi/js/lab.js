/*
 * Author: Baoqi Yu
 * Created: 21 May 2023
 * Email: <byu27@ucsc.edu>
 * Group 5 Project-Personal Page
 */ 


function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Function to change the page colors
  function changeColors() {
    var body = document.body;
    var colorStyle = document.getElementById("colorStyle");
  
    // Generate random background and text colors
    var bgColor = getRandomColor();
    var textColor = getRandomColor();
  
    // Apply the new colors
    body.style.backgroundColor = bgColor;
    colorStyle.innerHTML = "body { background-color: " + bgColor + "; color: " + textColor + "; }";
  }
  
  // Change colors every 3 seconds
  setInterval(changeColors, 3000);
  
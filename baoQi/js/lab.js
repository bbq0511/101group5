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

  $(document).ready(function() {
    $('#yesButton').click(function() {
      $('#result').text('Excellent!');
    });
  
    $('#noButton').click(function() {
      $('#result').text('Choose Again!!!');
    });
  });
  

  var buttonDetails = [
    {
      title: "Action Games",
      details: "Action games challenge the player’s reflexes, hand-eye coordination and reaction time. The best action games include a mix of vibrant visuals and a punch of adrenaline rush, delivering a unique experience to the gamers."
    },
    {
      title: "Sports Games",
      details: "Sports games simulate traditional physical sports, while the opposing team is controlled by artificial intelligence (AI) or bots. Some games are based on actual sport tactics and rules, and others underline the strategy behind the sport."
    },
    {
      title: "Adventure Games",
      details: "Adventure games involve a vast storyline, jam-packed action, and exciting visuals that take gamers on a different type of adventure. Noteworthy factors of adventure games are reflex-based gameplay, item collecting, puzzle-solving, and environmental exploration."
    },
    {
      title: "Battle Royale Games",
      details: "Battle Royale games have taken the gaming world by storm with titles like Fortnite and PlayerUnknown's Battlegrounds (PubG). These games offer a unique multiplayer experience where players compete to be the last person standing."
    },
    {
      title: "Role-Playing Games",
      details: "Role-Playing games (RPGs) allow players to control a fictional character and embark on quests in immersive fantasy worlds. These games often feature rich storylines, character development, and strategic combat."
    },
    {
      title: "Racing Games",
      details: "Racing games offer thrilling experiences with high-speed competitions. Players can race against AI opponents or other players, enjoying realistic graphics and intense gameplay."
    },
    {
      title: "Fighting Games",
      details: "Fighting games involve one-on-one combat between characters, testing players' skills and strategies. These games often feature a diverse roster of characters, each with unique abilities and fighting styles."
    },
    {
      title: "Real-Time Strategy Games",
      details: "Real-Time Strategy games (RTS) require players to manage resources, build bases, and command armies in real-time battles. These games emphasize strategic thinking and tactical decision-making."
    },
    {
      title: "Simulation Games",
      details: "Simulation games allow players to simulate real-world activities or situations. These games often involve managing resources, making decisions, and experiencing the consequences of those choices."
    },
    {
      title: "First Person Shooter (FPP) Games",
      details: "First Person Shooter games (FPS) put players in the shoes of a character who engages in combat from a first-person perspective. These games often feature fast-paced action and multiplayer modes."
    }
  ];

  var buttonCount = buttonDetails.length;

  // Create buttons and content sections dynamically
  for (var i = 0; i < buttonCount; i++) {
    (function () {
      var buttonId = i + 1;
      var button = document.createElement("button");
      button.innerText = buttonDetails[i].title; // Set button text from the provided details array
      button.addEventListener("click", function () {
        showContent(buttonId);
      });
      document.getElementById("buttons").appendChild(button);

      var content = document.createElement("div");
      content.id = "content" + buttonId;
      content.style.display = "none";
      content.innerHTML = "<h2>" + buttonDetails[i].title + "</h2><p>" + buttonDetails[i].details + "</p>"; // Set content text from the provided details array
      document.getElementById("contentContainer").appendChild(content);
    })();
  }

  function showContent(buttonId) {
    var contentId = "content" + buttonId;
    var contentElement = document.getElementById(contentId);
    contentElement.style.display = "block";
  }
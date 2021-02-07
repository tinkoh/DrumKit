
var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    this.style.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

  })
}

document.addEventListener("keydown", function(event) {

  makeSound(event.key);
  var keyToButton = "." + event.key;
  console.log(keyToButton);
  document.querySelector(keyToButton).style.color = colorArray[Math.floor(Math.random() * colorArray.length)];

})

function makeSound(key) {
  switch (key) {
    case "w":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "j":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log("Error");
      console.log(buttonInnerHTML);
      break;

  }
}

colorArray = ["#3d6cb9", "#b5ff7d", "#2eb872", "#ffbd39", "#ba52ed", "#f37121", "#da0463"]

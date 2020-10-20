


//Clicking on drum buttons checker
var butPtr = document.querySelectorAll(".drum");
var butPtrLen = butPtr.length;
var btnChar;

for(var i = 0; i < butPtrLen; i++) {


  butPtr[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    this.style.color = "white";

    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  document.querySelector("." + event.key).style.color = "white";

  buttonAnimation(event.key);
});

function makeSound(soundKey) {
  var sound;
  switch (soundKey) {
    case "w" :
    sound = new Audio("sounds/tom-1.mp3");
    break;

    case "a" :
    sound = new Audio("sounds/tom-2.mp3");
    break;

    case "s" :
    sound = new Audio("sounds/tom-3.mp3");
    break;

    case "d" :
    sound = new Audio("sounds/tom-4.mp3");
    break;

    case "j" :
    sound = new Audio("sounds/crash.mp3");
    break;

    case "k" :
    sound = new Audio("sounds/kick-bass.mp3");
    break;

    case "l" :
    sound = new Audio("sounds/snare.mp3");
    break;
  }
  sound.play();
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}




// var sound = new Audio("sounds/tom-1.mp3");
// sound.play();

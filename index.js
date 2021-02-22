

var numOfButtons = document.querySelectorAll(".drum").length;
// with a mouse
for (var i=0; i<numOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
   var letter = this.innerHTML;
   music(letter);
});
}
// with a keyboard
document.addEventListener("keypress", function(board) {
   var keys = board.key;
   music(keys);

 });



function music(musicSound) {

  var animatedButton = document.querySelector("." + musicSound);
  animatedButton.classList.add("animate");

  setTimeout(function() {
    animatedButton.classList.remove("animate")
}, 100);

   if (musicSound == "w") {
      var drum1 = new Audio('sounds/tom-1.mp3');
      drum1.play();
   }
    else if (musicSound == "a") {
      var drum2 = new Audio('sounds/tom-2.mp3');
      drum2.play();
    }
     else if (musicSound == "s") {
      var drum3 = new Audio('sounds/tom-3.mp3');
      drum3.play();
    }
   else if (musicSound == "d") {
      var drum4 = new Audio('sounds/tom-4.mp3');
      drum4.play();
    }
    else if (musicSound == "j") {
      var drum2 = new Audio('sounds/crash.mp3');
      drum2.play();
    }
     else if (musicSound == "k") {
      var drum3 = new Audio('sounds/kick-bass.mp3');
      drum3.play();
    }
   else if (musicSound == "l") {
      var drum4 = new Audio('sounds/snare.mp3');
      drum4.play();
    }
  }

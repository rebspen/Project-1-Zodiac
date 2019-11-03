const $canvas = document.querySelector('canvas');
const game = new Game($canvas, 2);

//start game

window.onload = function() {

};

document.getElementById("start-button").onclick = function() {
    game.start();
  }
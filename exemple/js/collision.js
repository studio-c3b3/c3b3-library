var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
document.getElementById("myCanvas").style.backgroundColor = 'rgba(0, 88, 255, 0.74)';
var HEIGHT = 320; // = y = longeur
var WIDTH = 480; // = x = largeur
var image = [];
gameProperty = {};

// Rien en particulier : Regarder la console

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateJoueurPosition();
  updateCollision();
  drawImage();
}
registerEntity(1, 0, 0, 10, "../assets/img/bateauPirates.png", 128, 128, 0);
registerEntity(0, 100, 100, 30, "../assets/img/goblin.png", 26, 26, 1);

registerStatic(1, 128);
registerStatic(0, 26);

setInterval(update, 10);

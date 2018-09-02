var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
document.getElementById("myCanvas").style.backgroundColor = 'rgba(0, 88, 255, 0.74)';
var HEIGHT = 320; // = y = longeur
var WIDTH = 480; // = x = largeur
var image = [];
gameProperty = {};



function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updatePlayerPosition();
  updateCollision();
  drawImage();
}
registerEntity(0, 0, 0, 10, "../assets/img/bateauPirates.png", 128, 128, true);
registerEntity(1, 0, 0, 30, "../assets/img/goblin.png", 26, 26, false);

registerStatic(0, 128,false,2);
registerStatic(1, 26);

setInterval(update, 10);

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
document.getElementById("myCanvas").style.backgroundColor = 'rgba(0, 88, 255, 0.74)';
var HEIGHT = 320; // = y = longeur
var WIDTH = 480; // = x = largeur
var image = [];
gameProperty = {};

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateJoueurPosition();
  drawImage();
}

// registerEntity(id, x, y, speed, srcImage, width, height, player);
registerEntity(0, 0, 0, 10, "../assets/img/bateauPirates.png", 128, 128, 0);

// Regarder en console l'array entite[] !
// Type 0 : player (permet de se déplacer avec zqsd), enregistre l'id sur gameProperty.player
// Type 1 : PNJ sans ia ni de dommage envers le joueur !

setInterval(update, 10);

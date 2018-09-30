const HEIGHT = 448;
const WIDTH = 640;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var entite = [];
var image = [];
var maps = [];
var tileset = [];
var gameProperty = {};

gameProperty.mapsReader = "xy";
gameProperty.mapsid = 0;
gameProperty.player = 0;
gameProperty.ready = false;

function update() {
  if (gameProperty.ready){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateMaps();
    updateJoueurPosition();
    drawImage();
  }

}

registerMap(0, "assets/maps/map1.json");

registerEntity(0, 0, 0, 10, "assets/img/bateauPirates.png", 128, 128, 0);
registerAnimation(20, 128, 0, true, 1);


setInterval(update, 10);

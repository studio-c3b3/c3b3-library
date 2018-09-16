var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
document.getElementById("myCanvas").style.backgroundColor = 'rgba(0, 88, 255, 0.74)';
var entity = [];
var image = [];
const HEIGHT = 448; // = y
const WIDTH = 640; // = x = largeur
var gameProperty = {};
var maps = [];
var tileset = [];



gameProperty.mapsReader = "xy"; //xy or x
gameProperty.mapsid = 1;
gameProperty.player = null;

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateMaps();
  updatePlayerPosition();
  drawImage();
  debug.release();

}

createMap(0, "assets/maps/map1.json");
createMap(1, "assets/maps/map2.json");

setInterval(update, 10);

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
document.getElementById("myCanvas").style.backgroundColor = 'rgba(0, 88, 255, 0.74)';
var entity = [];
var image = [];
var HEIGHT = 448; // = y
var WIDTH = 640; // = x = largeur
var gameProperty = {};
var maps = [];
var tileset = [];

gameProperty.mapsid = 0;

function createTileset(id,src) {
  tileset[id] = new Image();
  tileset[id].src = src
}

function createMap(id, src, tileSize,idImage) {
  var tilesA;
  var request = new XMLHttpRequest();
  request.open('GET', src);
  function finish() {
    if (request.readyState == 4) {
      var JsonRep = request.response;
      tilesA = JsonRep.tile;
      console.log(tilesA);
      var MapO = {
        tailleTile: tileSize,
        tiles: tilesA,
        idImage:idImage
      }
      maps[id] = MapO;
    }
  }
  request.responseType = 'json';
  request.onreadystatechange = finish;
  request.send();

}

function updateMaps() {
  for(key in maps) {
    for(var y = 0; y < WIDTH/maps[key].tailleTile; y++){
      for(var x = 0; x < HEIGHT/maps[key].tailleTile; x++){
        ctx.drawImage(tileset[maps[key].idImage], maps[key].tailleTile*maps[key].tiles[(y*HEIGHT/maps[key].tailleTile)+x], 0, maps[key].tailleTile, maps[key].tailleTile, x*maps[key].tailleTile, y*maps[key].tailleTile, maps[key].tailleTile, maps[key].tailleTile);
    }
  }
}
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateMaps();
  updatePlayerPosition();
  drawImage();



  debug.release();

}

createTileset(0, "assets/tileset/tiletest.png")
createMap(0, "assets/maps/map1.json", 64, 0)
registerEntity(0, 0, 0, 10, document.getElementById("source"), 128, 128, true);

registerAnimation(30, 128, 0);

setInterval(update, 10);

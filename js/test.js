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
gameProperty.player = null;

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
    for(var y = 0; y < HEIGHT/maps[gameProperty.mapsid].tailleTile; y++){
      for(var x = 0; x < WIDTH/maps[gameProperty.mapsid].tailleTile; x++){
        ctx.drawImage(tileset[maps[gameProperty.mapsid].idImage], maps[gameProperty.mapsid].tailleTile*(maps[gameProperty.mapsid].tiles[gameMath.tiles(y,x)]), 0, maps[gameProperty.mapsid].tailleTile, maps[gameProperty.mapsid].tailleTile, x*maps[gameProperty.mapsid].tailleTile, y*maps[gameProperty.mapsid].tailleTile, maps[gameProperty.mapsid].tailleTile, maps[gameProperty.mapsid].tailleTile);
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

setInterval(update, 10);

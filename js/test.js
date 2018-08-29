var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
document.getElementById("myCanvas").style.backgroundColor = 'rgba(0, 88, 255, 0.74)';
var entity = [];
var image = [];
var HEIGHT = 320; // = y
var WIDTH = 480; // = x = largeur
var gameProperty = {};
var maps = [];

gameProperty.mapsid = 0;

function createMap(id, src, tileSize) {
  var tilesA;
  var request = new XMLHttpRequest();
  request.open('GET', src);
  function finish() {
    if (request.readyState == 4) {
      var JsonRep = request.response;
      tilesA = JsonRep.tile;
      console.log(tilesA);
    }
  }
  request.responseType = 'json';
  request.onreadystatechange = finish;
  request.send();
  request.onload = function() {
    var JsonRep = this.response;
    tilesA = JsonRep.tile;
  }


  var MapO = {
    id:id,
    tailleTile: tileSize,
    tiles: tilesA
  }
  maps[id] = MapO;
}

function updateMaps() {

}


function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateMaps();
  updatePlayerPosition();
  drawImage();



  debug.release();

}

createMap(0, "assets/maps/map1.json", 64)
registerEntity(0, 0, 0, 10, document.getElementById("source"), 128, 128, true);

registerAnimation(30, 128, 0);

setInterval(update, 10);

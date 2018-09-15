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
var loading = {load : false,loading:[],loadtemp,loadDivision};


gameProperty.mapsReader = "xy"; //xy or x
gameProperty.mapsid = 1;
gameProperty.player = null;

function createMap(id, src) {
  //loading.loading.push(false)
  fetch(src).then(response => response.json()).then(function(data){
    //loading.loading.
    var tilesetSrcR = data.tileset;
    var tilesR = data.tile;
    var tileSizeR = data.tileSize;
    var MapO = {
      tileSize: tileSizeR,
      tiles: tilesR,
      tileset : new Image(),
    }
    MapO.tileset.src = tilesetSrcR
    maps[id] = MapO;
  })
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateMaps();
  updatePlayerPosition();
  drawImage();



  debug.release();

}

createMap(0, "assets/maps/map1.json");
createMap(1, "assets/maps/map2.json");

/*loading.loadDivision = 100 / loading.loading.length
while (load === false){
  loading.loadtemp = 0
  for(key in loading){
    if(loading.loading[key] === true) loading.loadtemp++
  }
}*/

setInterval(update, 10);

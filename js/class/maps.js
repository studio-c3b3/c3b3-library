//require gameProperty[] and maps[]
var maps = [];

function registerMap(id, src) {
  fetch(src).then(response => response.json()).then(function(data){
    var tilesetSrcR = data.tileset;
    var tilesR = data.tile;
    var tileSizeR = data.tileSize;
    var tileSizeReelR = data.tileSizeReel;
    var MapO = {
      tileSizeReel : tileSizeReelR,
      tileSize: tileSizeR,
      tiles: tilesR,
      tileset : new Image(),
    }
    MapO.tileset.src = tilesetSrcR;
    maps[id] = MapO;
    gameProperty.ready = true;
  })
}
function updateMaps() {
  if(gameProperty.mapsReader === "xy"){
    for(var y = 0; y < HEIGHT/maps[gameProperty.mapsid].tileSize; y++){
      for(var x = 0; x < WIDTH/maps[gameProperty.mapsid].tileSize; x++){
        ctx.drawImage(
          maps[gameProperty.mapsid].tileset,
          maps[gameProperty.mapsid].tileSizeReel*maps[gameProperty.mapsid].tiles[y][x],
          0,
          maps[gameProperty.mapsid].tileSizeReel,
          maps[gameProperty.mapsid].tileSizeReel,
          x*maps[gameProperty.mapsid].tileSize,
          y*maps[gameProperty.mapsid].tileSize,
          maps[gameProperty.mapsid].tileSize,
          maps[gameProperty.mapsid].tileSize);
      }
    }
  }else {
    for(var y = 0; y < HEIGHT/maps[gameProperty.mapsid].tileSize; y++){
      for(var x = 0; x < WIDTH/maps[gameProperty.mapsid].tileSize; x++){
        ctx.drawImage(
          maps[gameProperty.mapsid].tileset,
          maps[gameProperty.mapsid].tileSize*(maps[gameProperty.mapsid].tiles[gameMath.tiles(y,x)]),
          0,
          maps[gameProperty.mapsid].tileSize,
          maps[gameProperty.mapsid].tileSize,
          x*maps[gameProperty.mapsid].tileSize,
          y*maps[gameProperty.mapsid].tileSize,
          maps[gameProperty.mapsid].tileSize,
          maps[gameProperty.mapsid].tileSize);
      }
    }
  }
}

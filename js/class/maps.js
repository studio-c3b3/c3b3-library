//require gamePropriete[] and maps[]
var maps = [];

function declarerMap(id, src) {
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
    gamePropriete.pret = true;
  })
}
function updateMaps() {
  if(gamePropriete.mapsReader === "xy"){
    for(var y = 0; y < HEIGHT/maps[gamePropriete.mapsid].tileSize; y++){
      for(var x = 0; x < WIDTH/maps[gamePropriete.mapsid].tileSize; x++){
        ctx.drawImage(
          maps[gamePropriete.mapsid].tileset,
          maps[gamePropriete.mapsid].tileSizeReel*maps[gamePropriete.mapsid].tiles[y][x],
          0,
          maps[gamePropriete.mapsid].tileSizeReel,
          maps[gamePropriete.mapsid].tileSizeReel,
          x*maps[gamePropriete.mapsid].tileSize,
          y*maps[gamePropriete.mapsid].tileSize,
          maps[gamePropriete.mapsid].tileSize,
          maps[gamePropriete.mapsid].tileSize);
      }
    }
  }else {
    for(var y = 0; y < HEIGHT/maps[gamePropriete.mapsid].tileSize; y++){
      for(var x = 0; x < WIDTH/maps[gamePropriete.mapsid].tileSize; x++){
        ctx.drawImage(
          maps[gamePropriete.mapsid].tileset,
          maps[gamePropriete.mapsid].tileSize*(maps[gamePropriete.mapsid].tiles[gameMath.tiles(y,x)]),
          0,
          maps[gamePropriete.mapsid].tileSize,
          maps[gamePropriete.mapsid].tileSize,
          x*maps[gamePropriete.mapsid].tileSize,
          y*maps[gamePropriete.mapsid].tileSize,
          maps[gamePropriete.mapsid].tileSize,
          maps[gamePropriete.mapsid].tileSize);
      }
    }
  }
}

var entity = [];
function registerEntity(id,x,y,speed,imageA,width,height,playerB) {
  console.log("Ajout de "+id+" en tant que Entity");
  if (playerB) {
    var entityC = {
      name:name,
      x:x,
      y:y,
      speed:speed,
      animation: {},
      player: true,
      pressingDown:false,
      pressingUp:false,
      pressingLeft:false,
      pressingRight:false,
      image:imageA,
      width:width,
      height:height
    }
    gameProperty.player = id;
    console.log("Définition de "+id+" en tant que Joueur");
    console.log('%c Définition de '+id+' en tant que Joueur', 'color: white; background: #66b3ff; font-weight: bold; display: block');
  }
  else {
    var entityC = {
      name:name,
      x:x,
      y:y,
      speed:speed,
      animation: {},
      player: false,
      image:imageA,
      width:width,
      height:height
    }
  }
  entity[id] = entityC;
}

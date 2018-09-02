var entity = [];
function registerEntity(id,x,y,speed,srcImage,width,height,playerB) {
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
      image:new Image(),
      width:width,
      height:height
    }
    entityC.image.src = srcImage;
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
      image:new Image(),
      width:width,
      height:height
    }
    entityC.image.src = srcImage;
  }
  entity[id] = entityC;
}

var entity = [];
function registerEntity(id,x,y,speed,srcImage,width,height,type) {
  var entityC;
  switch (type){
    case 0:
      entityC = {
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
        height:height,
        render: false,
        imageRender : {}
      }
      entity[id] = entityC;
      gameProperty.player = id;
      console.log("Définition de "+id+" en tant que Joueur");
      console.log('%c Définition de '+id+' en tant que Joueur', 'color: white; background: #66b3ff; font-weight: bold; display: block');

    case 1:
      entityC = {
        x:x,
        y:y,
        speed:speed,
        animation: {},
        player: false,
        image:new Image(),
        width:width,
        height:height,
        render: false,
        imageRender : {}
      }
      entity[id] = entityC;
    default:

  }
  console.log("Ajout de "+id+" en tant que Entity");
  entityC.image.src = srcImage;
  entity[id] = entityC;
}

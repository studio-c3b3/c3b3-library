var entity = [];
function registerEntity(id,x,y,speed,srcImage,width,height,type) {
  var entityC;
  switch (type){
    case 0: //joueur
      entiteC = {
        type: 0,
        x:x,
        y:y,
        speed:speed,
        pressingDown:false,
        pressingUp:false,
        pressingLeft:false,
        pressingRight:false,
        image:new Image(),
        width:width,
        height:height,
        rendu: false,
        imageRendu : {},
        genCollision : function(type) {
          console.log("Collision !");
        }
      }
      entiteC.image.src = srcImage;
      gameProperty.joueur = id;
      console.log('%c Définition de '+id+' en tant que Joueur', 'color: white; background: #66b3ff; font-weight: bold; display: block');
      break

    case 1: // PNJ non enemy
      entiteC = {
        type: 1,
        x:x,
        y:y,
        speed:speed,
        collision : true,
        joueur: false,
        image:new Image(),
        width:width,
        height:height,
        rendu: false,
        imageRendu : {}
      }
      entiteC.image.src = srcImage;
      break
  }

  console.log("Ajout de "+id+" en tant qu'entite");

  entite[id] = entiteC;
}

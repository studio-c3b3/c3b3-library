var entite = [];
function declarerEntite(id,x,y,vitesse,srcImage,width,height,type) {
  switch (type){
    case 0: //joueur
      entiteC = {
        type: 0,
        x:x,
        y:y,
        vitesse:vitesse,
        appuyerBas:false,
        appuyerHaut:false,
        appuyerGauche:false,
        appuyerDroite:false,
        image:new Image(),
        width:width,
        height:height,
        rendu: false,
        imageRendu : {},
        genCollision : function(type) {
          console.log("Collision !");
        }
      };
      entiteC.image.src = srcImage;
      gamePropriete.joueur = id;
      console.log('%c Définition de '+id+' en tant que Joueur', 'color: white; background: #66b3ff; font-weight: bold; display: block');
      break;

    case 1: // PNJ non enemy
      entiteC = {
        type: 1,
        x: x,
        y: y,
        vitesse: vitesse,
        collision: true,
        joueur: false,
        image: new Image(),
        width: width,
        height: height,
        rendu: false,
        imageRendu: {}
      };
      entiteC.image.src = srcImage;
      break;

  case 2: // Elements de menu
    entiteC = {
      type: 2,
      x:x,
      y:y,
      collision : false,
      joueur: false,
      image:new Image(),
      width:width,
      height:height,
      rendu: false,
      imageRendu : {}
    };
    entiteC.image.src = srcImage;
    break
}

  console.log("Ajout de "+id+" en tant qu'entite");

  entite[id] = entiteC;
}

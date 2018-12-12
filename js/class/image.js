//require Entite.js for entite[id]
let frameCompteur = 0;


function declarerStatic(id,width,height,zoom,zoomFacteur) {
  console.log("Ajout de "+id+" avec comme taille "+width+"*"+height);
  var fixeC = {
    id: id,
    image: entite[id].image,
    height : height,
    width : width,
    type: 1,
    zoom: zoom,
    zoomFacteur: zoomFacteur,

    gen: function () {
      ctx.beginPath();
      if(zoom){
        ctx.drawImage(this.image, 0, 0, this.width, this.height, entite[id].x, entite[id].y, this.width*this.zoomFacteur, this.height*this.zoomFacteur);
      }
      else{
        ctx.drawImage(this.image, 0, 0, this.width, this.height, entite[id].x, entite[id].y, this.width/this.zoomFacteur, this.height/this.zoomFacteur);
      }
      ctx.closePath();

      }
    };
  if(typeof zoom && zoomFacteur === undefined) {
      fixeC.zoom = true;
      fixeC.zoomFacteur = 1;
  }
  entite[id].imageRendu = fixeC;
  entite[id].rendu = true;
}

function declarerAnimation(frameLimit,width,height,tailleAnimation,id,zoom,zoomFacteur) {
  console.log("Ajout de "+id+" avec comme taille d'animation "+tailleAnimation);
  var animationC = {
    id: id,
    frameLimit: frameLimit,
    image: entite[id].image,
    tailleImage : tailleAnimation,
    taille: 0,
    type: 0,
    zoom: zoom,
    zoomFacteur: zoomFacteur,
    gen: function () {
      ctx.beginPath();
      if(zoom){
        ctx.drawImage(this.image, this.taille, 0, this.tailleImage, this.tailleImage, entite[id].x, entite[id].y, this.tailleImage*this.zoomFacteur, this.tailleImage*this.zoomFacteur);
      }
      else{
        ctx.drawImage(this.image, this.taille, 0, this.tailleImage, this.tailleImage, entite[id].x, entite[id].y, this.tailleImage/this.zoomFacteur, this.tailleImage/this.zoomFacteur);
      }
      ctx.closePath();
      if (frameCompteur % this.frameLimit === 0) {
        if (this.taille < this.tailleImage) {
          this.taille += this.tailleImage;

        }
        else {
            this.taille = 0;
        }
      }
    }
  };
  if(typeof zoom && zoomFacteur === undefined) {
    animationC.zoom = true;
    animationC.zoomFacteur = 1;
  }
  entite[id].imageRendu = animationC;
  entite[id].rendu = true;
}

function drawImage() {
  for (let key in entite) {
    if(entite[key].rendu){entite[key].imageRendu.gen()}
  }
  frameCompteur++;
}

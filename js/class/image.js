//require entity.js for entity[id]

var animation = [];
var frameCount = 0;


function registerStatic(id,tailleImage,zoom,zoomNumber) {
  console.log("Ajout de "+id+" avec comme taille "+tailleImage);
  var staticC = {
    id: id,
    image: entity[id].image,
    tailleImage : tailleImage,
    type: 1,
    zoom: zoom,
    zoomNumber: zoomNumber,

    make: function () {
      ctx.beginPath();
      if(zoom){
        ctx.drawImage(this.image, 0, 0, this.tailleImage, this.tailleImage, entity[id].x, entity[id].y, this.tailleImage*this.zoomNumber, this.tailleImage*this.zoomNumber);
      }
      else{
        ctx.drawImage(this.image, 0, 0, this.tailleImage, this.tailleImage, entity[id].x, entity[id].y, this.tailleImage/this.zoomNumber, this.tailleImage/this.zoomNumber);
      }
      ctx.closePath();

      }
    }
  if(typeof zoom && zoomNumber === undefined) {
      staticC.zoom = true;
      staticC.zoomNumber = 1;
  }
  image[id] = staticC;

}

function registerAnimation(frameLimit,tailleAnimation,id,zoom,zoomNumber) {
  console.log("Ajout de "+id+" avec comme taille d'animation "+tailleAnimation);

  var animationC = {
    id: id,
    frameLimit: frameLimit,
    image: entity[id].image,
    tailleImage : tailleAnimation,
    taille: 0,
    type: 0,
    zoom: zoom,
    zoomNumber: zoomNumber,
    make: function () {
      ctx.beginPath();
      if(zoom){
        ctx.drawImage(this.image, this.taille, 0, this.tailleImage, this.tailleImage, entity[id].x, entity[id].y, this.tailleImage*this.zoomNumber, this.tailleImage*this.zoomNumber);
      }
      else{
        ctx.drawImage(this.image, this.taille, 0, this.tailleImage, this.tailleImage, entity[id].x, entity[id].y, this.tailleImage/this.zoomNumber, this.tailleImage/this.zoomNumber);
      }
      ctx.closePath();
      if (frameCount % this.frameLimit == 0) {
        if (this.taille < this.tailleImage) {
          this.taille += this.tailleImage;

        }
        else {
            this.taille = 0;
        }
      }
    }
  }
  if(typeof zoom && zoomNumber === undefined) {
    animationC.zoom = true;
    animationC.zoomNumber = 1;
  }
  image[id] = animationC;
}

function drawImage() {
  for (var i = 0; i < image.length; i++) {

    image[i].make();


  }
  frameCount++;
}

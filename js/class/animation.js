//require entity.js for entity[id]


var animation = []
var frameCount = 0

function registerAnimation(frameLimit,tailleAnimation,id/*debug*/) {
  console.log("Ajout de "+id+" avec comme taille d'animation "+tailleAnimation);
  var animationC = {
    id: id, //debug
    frameLimit: frameLimit,
    image: entity[id].image,
    tailleImage : tailleAnimation,
    taille: 0,
    type: 0,
    //x: x,
    //y: y,
    make: function () {
      ctx.beginPath();
      ctx.drawImage(this.image, this.taille, 0, this.tailleImage, this.tailleImage, entity[id].x, entity[id].y, this.tailleImage, this.tailleImage);
      ctx.closePath();
      if (frameCount % this.frameLimit === 0) {
        if (this.taille < this.tailleAnimation) {
          this.taille += this.tailleAnimation;

        }
        else {
            this.taille = 0;

        }
      }
    }
}

  image[id] = animationC;

}

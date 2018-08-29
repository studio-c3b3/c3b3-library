//require entity.js for entity[id]

var animation = [];
var frameCount = 0;


function registerStatic(id,tailleImage) {
  console.log("Ajout de "+id+" avec comme taille "+tailleImage);
  var staticC = {
    id: id,
    image: entity[id].image,
    tailleImage : tailleImage,
    type: 1,

    make: function () {
      ctx.beginPath();
      ctx.drawImage(this.image, 0, 0, this.tailleImage, this.tailleImage, entity[id].x, entity[id].y, this.tailleImage, this.tailleImage);
      ctx.closePath();

      }
    }

  image[id] = staticC;

}

function registerAnimation(frameLimit,tailleAnimation,id) {
  console.log("Ajout de "+id+" avec comme taille d'animation "+tailleAnimation);
  var animationC = {
    id: id,
    frameLimit: frameLimit,
    image: entity[id].image,
    tailleImage : tailleAnimation,
    taille: 0,
    type: 0,
    make: function () {
      ctx.beginPath();
      ctx.drawImage(this.image, this.taille, 0, this.tailleImage, this.tailleImage, entity[id].x, entity[id].y, this.tailleImage, this.tailleImage);
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

  image[id] = animationC;

}

function drawImage() {
  for (var i = 0; i < image.length; i++) {

    image[i].make();


  }
  frameCount++;
}

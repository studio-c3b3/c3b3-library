//require entity.js for entity[id]

var static = []

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

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
document.getElementById("myCanvas").style.backgroundColor = 'rgba(0, 88, 255, 0.74)';
var animation = []
var frameCount = 0

function registerAnimation(frameLimit,tailleAnimation,id/*debug*/) {
  console.log("Ajout de "+id+" avec comme taille d'animation "+tailleAnimation);
  var animationC = {
  id: id, //debug
  frameLimit: frameLimit,
  image: entity[id].image,
  tailleAnimation : tailleAnimation,
  taille: 0,
  //x: x,
  //y: y,
  makeAnimation: function () {
    ctx.beginPath();
    ctx.drawImage(this.image, this.taille, 0, this.tailleAnimation, this.tailleAnimation, entity[id].x, entity[id].y, this.tailleAnimation, this.tailleAnimation);
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

  animation[id] = animationC;

}

function draw() {
  for (var i = 0; i < animation.length; i++) {

    animation[i].makeAnimation();

}

  frameCount++;

}

function update() {
  draw();

}
//setInterval(update, 10);

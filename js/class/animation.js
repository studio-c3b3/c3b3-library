var animation = []
var frameCount = 0

function registerAnimation(frameLimit,image,tailleAnimation,x,y,name/*debug*/) {
  console.log("Ajout de "+name+" avec comme taille d'animation "+tailleAnimation);
  var animationC = {
  name: name, //debug
  frameLimit: frameLimit,
  image: image,
  tailleAnimation : tailleAnimation,
  taille: 0,
  x: x,
  y: y,
  makeAnimation: function () {
    ctx.beginPath();
    ctx.drawImage(this.image, this.taille, 0, this.tailleAnimation, this.tailleAnimation, this.x, this.y, this.tailleAnimation, this.tailleAnimation);
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

  animation.push(animationC);

}

function draw() {
  for (var i = 0; i < animation.length; i++) {

    animation[i].makeAnimation();

}

  frameCount++;

}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();

}
setInterval(update, 10);

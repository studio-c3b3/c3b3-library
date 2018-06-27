var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
document.getElementById("myCanvas").style.backgroundColor = 'rgba(0, 88, 255, 0.74)';
var animation = []
var frameCount = 0

function registerAnimation(frameLimit,image,tailleAnimation) {
  var animationClass = {
  frameLimit: frameLimit,
  image: image,
  tailleAnimation : tailleAnimation,
  taille: 0,
  makeAnimation: function () {
    ctx.beginPath();
    ctx.drawImage(image, taille, 0, this.tailleAnimation, this.tailleAnimation, 0, 0, this.tailleAnimation, this.tailleAnimation);
    ctx.closePath();
    //console.log("Salut 5 " + frameCount + taille);
    if (frameCount % this.frameLimit === 0) {
      if (taille < this.tailleAnimation) {
        taille += this.tailleAnimation;
        //console.log("Salut 1 " + frameCount + taille);
      }
      else {
          taille = 0;
          //console.log("Salut 2 " + frameCount + taille);
      }
    }





  }
}
  animation.push(animationClass);






}
function draw() {
  for (i = 0; i < animation.lenght; i++) {
    animation[i].makeAnimation();

}
  frameCount++;

}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();

}
setInterval(update, 10);

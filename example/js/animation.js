var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
document.getElementById("myCanvas").style.backgroundColor = 'rgba(0, 88, 255, 0.74)';
var image = [];
var frameCount = 0;

// registerEntity(id , x, y, speed, image, tailleX, tailleY, player);
registerEntity(0, 0, 0, 30, document.getElementById("source1"), 26, 26, false);

// registerAnimation(frameLimit, tailleAnimation, id);
registerAnimation(15, 26, 0);

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawImage();
}

setInterval(update, 10);

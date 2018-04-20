var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var image = document.getElementById("source");
document.getElementById("myCanvas").style.backgroundColor = 'rgba(0, 88, 255, 0.74)';
var taille = 0;
var frameCount = 0;
var frameLimit = 30;

//Test pour essayer de faire une annimation
function draw() {
  if (frameCount < frameLimit) {
    frameCount +=1;
  }
  else {
    frameCount = 0;
  }
  if (taille < 128) {
    if (frameCount == frameLimit)
    taille += 128;
  }
  else {
    if (frameCount == frameLimit) {
      taille = 0;
    }

  }


  ctx.beginPath();
  ctx.drawImage(image, taille, 0, 128, 128, 0, 0, 128, 128);

  ctx.closePath();
  console.log(frameCount);

}


function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
}
setInterval(update, 10);

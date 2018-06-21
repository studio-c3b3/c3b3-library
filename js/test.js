var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var image = document.getElementById("source");
document.getElementById("myCanvas").style.backgroundColor = 'rgba(0, 88, 255, 0.74)';
var taille = 0;
var frameCount = 0;


//Test pour essayer de faire une annimation
function draw() {
  ctx.beginPath();
  ctx.drawImage(image, taille, 0, 128, 128, 0, 0, 128, 128);
  ctx.closePath();
  //console.log("Salut 5 " + frameCount + taille);
  if (frameCount % 30 === 0) {
    if (taille < 128) {
      taille += 128;
      //console.log("Salut 1 " + frameCount + taille);
    }
    else {
        taille = 0;
        //console.log("Salut 2 " + frameCount + taille);
    }
  }
  frameCount++;
  //console.log("Salut 3 " + frameCount + taille);




  //console.log(frameCount);


}


function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  //console.log("Salut 4 " + frameCount + taille);
}
setInterval(update, 10);

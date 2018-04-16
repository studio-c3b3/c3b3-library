var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
document.getElementById("myCanvas").style.backgroundColor = 'rgba(0, 88, 255, 0.74)';


//Test pour essayer de faire une annimation

function draw(a) {
  ctx.beginPath();
  ctx.drawImage(/assets/img/bateauPirates.png,0,0,128,128,50,50,128,128); //Sa marche pas :(

  ctx.closePath();
}


function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
}
setInterval(update, 10);

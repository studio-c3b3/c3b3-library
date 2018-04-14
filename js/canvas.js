var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var test = 0;
var x = canvas.width/2;
var y = canvas.height/2;
var dx = 0;
var dy = 0;
document.getElementById("myCanvas").style.backgroundColor = 'rgba(0, 88, 255, 0.74)';


function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = "#dbcc00";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
}
setInterval(draw, 10);

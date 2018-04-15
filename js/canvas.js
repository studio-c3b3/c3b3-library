var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
document.getElementById("myCanvas").style.backgroundColor = 'rgba(0, 88, 255, 0.74)';

var ball =   {
  x:canvas.width/2,
  y:canvas.height/2,
  spX:0,
  spY:0
};


function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, 10, 0, Math.PI*2);
  ctx.fillStyle = "#dbcc00";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  ball.x += ball.spX;
  ball.y += ball.spY;
}
setInterval(draw, 10);

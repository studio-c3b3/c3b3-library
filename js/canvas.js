var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
document.getElementById("myCanvas").style.backgroundColor = 'rgba(0, 88, 255, 0.74)';

var ball =   {
  x:canvas.width/2,
  y:canvas.height/2,
  spX:0,
  spY:0,
  color:"#f2e900",
};

var enemy = {
  x:50,
  y:20,
  spX:10,
  spY:10,
  color:"#e40101",
}


function draw(a) {
  ctx.beginPath();
  ctx.arc(a.x, a.y, 10, 0, Math.PI*2);
  ctx.fillStyle = a.color;
  ctx.fill();
  ctx.closePath();
}

function moveEntity(a) {
  a.x += a.spX;
  a.y += a.spY;
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw(ball);
  draw(enemy);
  moveEntity(ball);
  moveEntity(enemy);
}
setInterval(update, 10);

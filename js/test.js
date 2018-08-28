var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
document.getElementById("myCanvas").style.backgroundColor = 'rgba(0, 88, 255, 0.74)';
var entity = [];
var image = [];
var HEIGHT = 320; // = y
var WIDTH = 480; // = x = largeur
var gameProperty = {};

//test sur les collision

function getDistanceBetweenEntity(entity1,entity2){     //return distance (number)
        var vx = gameMath.middleXY(entity1, "x") - gameMath.middleXY(entity2, "x");
        var vy = gameMath.middleXY(entity1, "y") - gameMath.middleXY(entity2, "y");
        return Math.sqrt(vx*vx+vy*vy);
}

function testCollisionEntity(entity1,entity2){  //return if colliding (true/false)
        var distance = getDistanceBetweenEntity(entity1,entity2);
        return distance < 30;
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updatePlayerPosition();
  drawImage();

  for(var key in entity) {
    var isColliding = testCollisionEntity(gameProperty.id,key);
    if(isColliding & key != gameProperty.id){
        console.log('Colliding!');


    }

  }

  debug.release()
}


registerEntity(0, 0, 0, 10, document.getElementById("source"), 128, 128, true);
registerEntity(1, 0, 0, 10, document.getElementById("source1"), 26, 26, false);

registerAnimation(30, 128, 0);
registerAnimation(15, 26, 1);

setInterval(update, 10);

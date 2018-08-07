var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
document.getElementById("myCanvas").style.backgroundColor = 'rgba(0, 88, 255, 0.74)';
var entity = [];
var HEIGHT = 320; // = y
var WIDTH = 480; // = x = largeur

//test sur les déplacement


function registerEntity(id,x,y,speed,imageA,width,height,player) {
  console.log("Ajout de "+id+" en tant que Entity");
  if (player) {
    var entityC = {
      name:name,
      x:x,
      y:y,
      speed:speed,
      animation: {},
      player: true,
      pressingDown:false,
      pressingUp:false,
      pressingLeft:false,
      pressingRight:false,
      image:imageA,
      width:width,
      height:height
    }
  }
  else {
    var entityC = {
      name:name,
      x:x,
      y:y,
      speed:speed,
      animation: {},
      player: false,
      image:imageA,
      width:imageA.clientWidth,
      height:imageA.clientHeight,
    }
  }
  entity[id] = entityC;
}

document.onkeydown = function(event){
        if(event.keyCode === 68)        //d
                entity[0].pressingRight = true;
        else if(event.keyCode === 83)   //s
                entity[0].pressingDown = true;
        else if(event.keyCode === 81) //q
                entity[0].pressingLeft = true;
        else if(event.keyCode === 90) // z
                entity[0].pressingUp = true;
}

document.onkeyup = function(event){
        if(event.keyCode === 68)        //z
                entity[0].pressingRight = false;
        else if(event.keyCode === 83)   //s
                entity[0].pressingDown = false;
        else if(event.keyCode === 81) //q
                entity[0].pressingLeft = false;
        else if(event.keyCode === 90) // z
                entity[0].pressingUp = false;
}

updatePlayerPosition = function(){
        if(entity[0].pressingRight)
                entity[0].x += entity[0].speed;
        if(entity[0].pressingLeft)
                entity[0].x -= entity[0].speed;
        if(entity[0].pressingDown)
                entity[0].y += entity[0].speed;
        if(entity[0].pressingUp)
                entity[0].y -= entity[0].speed;

        //ispositionvalid
        if(entity[0].x < 0) {
                entity[0].x = 0;
              }
        if(entity[0].x > WIDTH - entity[0].width){
                entity[0].x = WIDTH - entity[0].width;
              }
        if(entity[0].y < 0){
                entity[0].y = 0;
              }
        if(entity[0].y > HEIGHT - entity[0].height){
                entity[0].y = HEIGHT - entity[0].height;
              }


}
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updatePlayerPosition();
  draw();
}


registerEntity(0, 0, 0, 10, document.getElementById("source"), 128, 128, true);
registerEntity(1, 0, 0, 30, document.getElementById("source1"), 26, 26, false);

registerAnimation(30, 128, 0);
registerAnimation(15, 26, 1);

setInterval(update, 10);

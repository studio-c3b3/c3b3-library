function getDistanceBetweenEntity(entity1,entity2){     //return distance (number)
        var vx = gameMath.middleXY(entity1, "x") - gameMath.middleXY(entity2, "x");
        var vy = gameMath.middleXY(entity1, "y") - gameMath.middleXY(entity2, "y");
        return Math.sqrt(vx*vx+vy*vy);
}

function oldTestCollisionEntity(entity1,entity2){  //return if colliding (true/false)
        var distance = getDistanceBetweenEntity(entity1,entity2);
        if(entity[entity1].imageRender.zoom){
          var diag1 = gameMath.diagonaleCarre((entity[entity1].width*entity[entity1].imageRender.zoomNumber)/2);
        }
        else{
          var diag1 = gameMath.diagonaleCarre((entity[entity1].width/entity[entity1].imageRender.zoomNumber)/2);
        }
        if(image[entity2].zoom){
          var diag2 = gameMath.diagonaleCarre((entity[entity1].width*entity[entity2].imageRender.zoomNumber)/2);
        }
        else{
          var diag2 = gameMath.diagonaleCarre((entity[entity1].width/entity[entity2].imageRender.zoomNumber)/2);
        }

        return distance < Math.max(diag1,diag2);
}

function updateCollision() {
  for(var key in entity) {
    var isColliding = testCollisionEntity(gameProperty.player,key);
    if(isColliding && key != gameProperty.player){
      console.log('Colliding!');
    }
  }

}

function testCollisionEntity(entity1,entity2){
  if(gameProperty.collisionVersion === "new") {
  	if ( !(entity[entity2].x > (entity[entity1].x + gameMath.zoom(entity1))
  	     || entity[entity2].x < (entity[entity1].x - gameMath.zoom(entity2))
  	     || entity[entity2].y > (entity[entity1].y + gameMath.zoom(entity1))
  	     || entity[entity2].y < (entity[entity1].y - gameMath.zoom(entity2))))  {
      return true
  	}
  }else if (gameProperty.collisionVersion === "old") {
    oldTestCollisionEntity(entity1, entity2);
  }
}

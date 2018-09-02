function getDistanceBetweenEntity(entity1,entity2){     //return distance (number)
        var vx = gameMath.middleXY(entity1, "x") - gameMath.middleXY(entity2, "x");
        var vy = gameMath.middleXY(entity1, "y") - gameMath.middleXY(entity2, "y");
        return Math.sqrt(vx*vx+vy*vy);
}

function testCollisionEntity(entity1,entity2){  //return if colliding (true/false)
        var distance = getDistanceBetweenEntity(entity1,entity2);
        if(image[entity1].zoom){
          var diag1 = gameMath.diagonaleCarre((entity[entity1].width*image[entity1].zoomNumber)/2);
        }
        else{
          var diag1 = gameMath.diagonaleCarre((entity[entity1].width/image[entity1].zoomNumber)/2);
        }
        if(image[entity2].zoom){
          var diag2 = gameMath.diagonaleCarre((entity[entity1].width*image[entity2].zoomNumber)/2);
        }
        else{
          var diag2 = gameMath.diagonaleCarre((entity[entity1].width/image[entity2].zoomNumber)/2);
        }

        return distance < Math.max(diag1,diag2);
}

function updateCollision() {
  for(var key in entity) {
    var isColliding = testCollisionEntity(gameProperty.player,key);
    if(isColliding & key != gameProperty.player){
        console.log('Colliding!');


    }
  }

}

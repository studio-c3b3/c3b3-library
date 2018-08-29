function getDistanceBetweenEntity(entity1,entity2){     //return distance (number)
        var vx = gameMath.middleXY(entity1, "x") - gameMath.middleXY(entity2, "x");
        var vy = gameMath.middleXY(entity1, "y") - gameMath.middleXY(entity2, "y");
        return Math.sqrt(vx*vx+vy*vy);
}

function testCollisionEntity(entity1,entity2){  //return if colliding (true/false)
        var distance = getDistanceBetweenEntity(entity1,entity2);
        return distance < Math.max(gameMath.diagonaleCarre(entity[entity1].width/2),gameMath.diagonaleCarre(entity[entity2].width/2));
}

function updateCollision() {
  for(var key in entity) {
    var isColliding = testCollisionEntity(gameProperty.player,key);
    if(isColliding & key != gameProperty.player){
        console.log('Colliding!');


    }
  }

}

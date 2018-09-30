function getDistanceBetweenEntity(entity1,entity2){     //return distance (number)
        var vx = gameMath.middleXY(entity1, "x") - gameMath.middleXY(entity2, "x");
        var vy = gameMath.middleXY(entity1, "y") - gameMath.middleXY(entity2, "y");
        return Math.sqrt(vx*vx+vy*vy);
}

function oldTestCollisionEntity(entity1,entity2){  //return if colliding (true/false)
        var distance = getDistanceBetweenEntity(entity1,entity2);
        if(entite[entity1].imageRendu.zoom){
          var diag1 = gameMath.diagonaleCarre((entite[entity1].width*entite[entity1].imageRendu.zoomFacteur)/2);
        }
        else{
          var diag1 = gameMath.diagonaleCarre((entite[entity1].width/entite[entity1].imageRendu.zoomFacteur)/2);
        }
        if(image[entity2].zoom){
          var diag2 = gameMath.diagonaleCarre((entite[entity1].width*entite[entity2].imageRendu.zoomFacteur)/2);
        }
        else{
          var diag2 = gameMath.diagonaleCarre((entite[entity1].width/entite[entity2].imageRendu.zoomFacteur)/2);
        }

        return distance < Math.max(diag1,diag2);
}

function updateCollision() {
  for(var key in entity) {
    var isColliding = testCollisionEntity(gameProperty.joueur,key);
    if((isColliding && key != gameProperty.joueur) && entite[key].collision){
      entite[gameProperty].genCollision(entite[key].type)
    }
  }

}

function testCollisionEntity(entity1,entity2){
  if(gameProperty.collisionVersion === "v2") {
  	if ( !(entite[entity2].x > (entite[entity1].x + gameMath.zoom(entity1))
  	     || entite[entity2].x < (entite[entity1].x - gameMath.zoom(entity2))
  	     || entite[entity2].y > (entite[entity1].y + gameMath.zoom(entity1))
  	     || entite[entity2].y < (entite[entity1].y - gameMath.zoom(entity2))))  {
      return true
  	}
  }else if (gameProperty.collisionVersion === "v1") {
    oldTestCollisionEntity(entity1, entity2);
  }
}

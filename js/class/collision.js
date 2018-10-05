function distanceEntreEntite(Entite1,Entite2){
        var vx = gameMath.middleXY(Entite1, "x") - gameMath.middleXY(Entite2, "x");
        var vy = gameMath.middleXY(Entite1, "y") - gameMath.middleXY(Entite2, "y");
        return Math.sqrt(vx*vx+vy*vy);
}

function ancienTestCollisionEntite(Entite1,Entite2){
        var distance = distanceEntreEntite(Entite1,Entite2);
        if(entite[Entite1].imageRendu.zoom){
          var diag1 = gameMath.diagonaleCarre((entite[Entite1].width*entite[Entite1].imageRendu.zoomFacteur)/2);
        }
        else{
          var diag1 = gameMath.diagonaleCarre((entite[Entite1].width/entite[Entite1].imageRendu.zoomFacteur)/2);
        }
        if(image[Entite2].zoom){
          var diag2 = gameMath.diagonaleCarre((entite[Entite1].width*entite[Entite2].imageRendu.zoomFacteur)/2);
        }
        else{
          var diag2 = gameMath.diagonaleCarre((entite[Entite1].width/entite[Entite2].imageRendu.zoomFacteur)/2);
        }

        return distance < Math.max(diag1,diag2);
}

function updateCollision() {
  for(var key in entite) {
    var isColliding = testCollisionEntite(gamePropriete.joueur,key);
    if((isColliding && key != gamePropriete.joueur) && entite[key].collision){
      entite[gamePropriete].genCollision(entite[key].type)
    }
  }

}

function testCollisionEntite(Entite1,Entite2){
  if(gamePropriete.collisionVersion === "v2") {
  	if ( !(entite[Entite2].x > (entite[Entite1].x + gameMath.zoom(Entite1))
  	     || entite[Entite2].x < (entite[Entite1].x - gameMath.zoom(Entite2))
  	     || entite[Entite2].y > (entite[Entite1].y + gameMath.zoom(Entite1))
  	     || entite[Entite2].y < (entite[Entite1].y - gameMath.zoom(Entite2))))  {
      return true
  	}
  }else if (gamePropriete.collisionVersion === "v1") {
    ancienTestCollisionEntite(Entite1, Entite2);
  }
}

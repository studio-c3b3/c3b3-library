function distanceEntreEntite(entite1,entite2){
        let vx = gameMath.middleXY(entite1, "x") - gameMath.middleXY(entite2, "x");
        let vy = gameMath.middleXY(entite1, "y") - gameMath.middleXY(entite2, "y");
        return Math.sqrt(vx*vx+vy*vy);
}

function ancienTestCollisionEntite(entite1,entite2){
        let diag1,diag2;
        let distance = distanceEntreEntite(entite1,entite2);
        if(entite[entite1].imageRendu.zoom){
          diag1 = gameMath.diagonaleCarre((entite[entite1].width*entite[entite1].imageRendu.zoomFacteur)/2);
        }
        else{
          diag1 = gameMath.diagonaleCarre((entite[entite1].width/entite[entite1].imageRendu.zoomFacteur)/2);
        }
        if(image[entite2].zoom){
          diag2 = gameMath.diagonaleCarre((entite[entite1].width*entite[entite2].imageRendu.zoomFacteur)/2);
        }
        else{
          diag2 = gameMath.diagonaleCarre((entite[entite1].width/entite[entite2].imageRendu.zoomFacteur)/2);
        }

        return distance < Math.max(diag1,diag2);
}

function updateCollision() {
  for(let key in entite) {
    let isColliding = testCollisionEntite(gamePropriete.joueur,key);
    if((isColliding && key !== gamePropriete.joueur) && entite[key].collision){
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

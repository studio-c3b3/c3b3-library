//require Entite.js with a joueur declarer !
// TODO : Refaire les keycode.
document.onkeydown = function(event) {
  if(gamePropriete.state === 1){
    if (gamePropriete.joueur == null) {
        console.error("Le joueur n'est pas spécifié donc aucun déplacement possible");
    } else {
        if (event.keyCode === 68) //d
            entite[gamePropriete.joueur].appuyerDroite = true;
        else if (event.keyCode === 83) //s
            entite[gamePropriete.joueur].appuyerBas = true;
        else if (event.keyCode === 81) //q
            entite[gamePropriete.joueur].appuyerGauche = true;
        else if (event.keyCode === 90) // z
            entite[gamePropriete.joueur].appuyerHaut = true;
    }

  }
  else if(gamePropriete.state === 0){
    if(event.keyCode === 90){
      if(0 < gamePropriete.menuCursor) gamePropriete.menuCursor -= 1;
    }
    else if(event.keyCode === 83){
      if(menuElement.length-1 > gamePropriete.menuCursor) gamePropriete.menuCursor += 1;
    }
    else if(event.keyCode === 13){
      entite[menuElement[gamePropriete.menuCursor]].callback();
    }
  }
};

document.onkeyup = function(event) {
  if(gamePropriete.state === 1){
    if (gamePropriete.joueur == null) {} else {
        if (event.keyCode === 68) //d
            entite[gamePropriete.joueur].appuyerDroite = false;
        else if (event.keyCode === 83) //s
            entite[gamePropriete.joueur].appuyerBas = false;
        else if (event.keyCode === 81) //q
            entite[gamePropriete.joueur].appuyerGauche = false;
        else if (event.keyCode === 90) // z
            entite[gamePropriete.joueur].appuyerHaut = false;
    }

  }
};

updateJoueurPosition = function() {
    if (gamePropriete.joueur == null) {} else {
        if (entite[gamePropriete.joueur].appuyerDroite)
            entite[gamePropriete.joueur].x += entite[gamePropriete.joueur].vitesse;
        if (entite[gamePropriete.joueur].appuyerGauche)
            entite[gamePropriete.joueur].x -= entite[gamePropriete.joueur].vitesse;
        if (entite[gamePropriete.joueur].appuyerBas)
            entite[gamePropriete.joueur].y += entite[gamePropriete.joueur].vitesse;
        if (entite[gamePropriete.joueur].appuyerHaut)
            entite[gamePropriete.joueur].y -= entite[gamePropriete.joueur].vitesse;

        //ispositionvalid
        if (entite[gamePropriete.joueur].imageRendu.zoom) {
            if (entite[gamePropriete.joueur].x < 0) {
                entite[gamePropriete.joueur].x = 0;
            }
            if (entite[gamePropriete.joueur].x > WIDTH - entite[gamePropriete.joueur].width * entite[gamePropriete.joueur].imageRendu.zoomFacteur) {
                entite[gamePropriete.joueur].x = WIDTH - entite[gamePropriete.joueur].width * entite[gamePropriete.joueur].imageRendu.zoomFacteur;
            }
            if (entite[gamePropriete.joueur].y < 0) {
                entite[gamePropriete.joueur].y = 0;
            }
            if (entite[gamePropriete.joueur].y > HEIGHT - entite[gamePropriete.joueur].height * entite[gamePropriete.joueur].imageRendu.zoomFacteur) {
                entite[gamePropriete.joueur].y = HEIGHT - entite[gamePropriete.joueur].height * entite[gamePropriete.joueur].imageRendu.zoomFacteur;
            }
        } else {
            if (entite[gamePropriete.joueur].x < 0) {
                entite[gamePropriete.joueur].x = 0;
            }
            if (entite[gamePropriete.joueur].x > WIDTH - entite[gamePropriete.joueur].width / entite[gamePropriete.joueur].imageRendu.zoomFacteur) {
                entite[gamePropriete.joueur].x = WIDTH - entite[gamePropriete.joueur].width / entite[gamePropriete.joueur].imageRendu.zoomFacteur;
            }
            if (entite[gamePropriete.joueur].y < 0) {
                entite[gamePropriete.joueur].y = 0;
            }
            if (entite[gamePropriete.joueur].y > HEIGHT - entite[gamePropriete.joueur].height / entite[gamePropriete.joueur].imageRendu.zoomFacteur) {
                entite[gamePropriete.joueur].y = HEIGHT - entite[gamePropriete.joueur].height / entite[gamePropriete.joueur].imageRendu.zoomFacteur;
            }
        }
    }


};

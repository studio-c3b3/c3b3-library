//require Entite.js with a joueur declarer !
document.onkeydown = function(event) {
    if (etats[gamePropriete.etat].type === 1) if (gamePropriete.joueur == null) {
        console.error("Le joueur n'est pas spécifié donc aucun déplacement possible");
    } else {
        switch (event.code) {
            case "KeyA":
            case "ArrowLeft":
                entite[gamePropriete.joueur].appuyerGauche = true;
                break;
            case "KeyW":
            case "ArrowUp":
                entite[gamePropriete.joueur].appuyerHaut = true;
                break;
            case "KeyD":
            case "ArrowRight":
                entite[gamePropriete.joueur].appuyerDroite = true;
                break;
            case "KeyS":
            case "ArrowDown":
                entite[gamePropriete.joueur].appuyerBas = true;
                break;
            case "Escape":
                changeEtat(gamePropriete.mainMenu);
                break;
        }
    }
    else if (etats[gamePropriete.etat].type === 0) switch (event.code) {
        case "KeyW":
        case "ArrowUp":
            if (0 < gamePropriete.menuCursor){
                gamePropriete.menuCursor -= 1;
                if (etats[gamePropriete.etat].sonDefilement) etats[gamePropriete.etat].sonDefilement.play();
            }

            break;
        case "KeyS":
        case "ArrowDown":
            if (menuElement.length - 1 > gamePropriete.menuCursor){
                gamePropriete.menuCursor += 1;
                if (etats[gamePropriete.etat].sonDefilement) etats[gamePropriete.etat].sonDefilement.play();
            }
            break;
        case "Enter":
            entite[menuElement[gamePropriete.menuCursor]].callback();
            break;
    }
}

document.onkeyup = function(event) {
  if(etats[gamePropriete.etat].type === 1){
    if (gamePropriete.joueur == null) {} else {
        switch (event.code) {
            case "KeyA":
            case "ArrowLeft":
                entite[gamePropriete.joueur].appuyerGauche = false;
                break;
            case "KeyW":
            case "ArrowUp":
                entite[gamePropriete.joueur].appuyerHaut = false;
                break;
            case "KeyD":
            case "ArrowRight":
                entite[gamePropriete.joueur].appuyerDroite = false;
                break;
            case "KeyS":
            case "ArrowDown":
                entite[gamePropriete.joueur].appuyerBas = false;
                break;
        }
    }
  }
};

updateJoueurPosition = function() {
    if (gamePropriete.joueur == null) {} else {
        if(gamePropriete.playerInput === "zqsd") {
            if (entite[gamePropriete.joueur].appuyerDroite)
                entite[gamePropriete.joueur].x += entite[gamePropriete.joueur].vitesse;
            if (entite[gamePropriete.joueur].appuyerGauche)
                entite[gamePropriete.joueur].x -= entite[gamePropriete.joueur].vitesse;
            if (entite[gamePropriete.joueur].appuyerBas)
                entite[gamePropriete.joueur].y += entite[gamePropriete.joueur].vitesse;
            if (entite[gamePropriete.joueur].appuyerHaut)
                entite[gamePropriete.joueur].y -= entite[gamePropriete.joueur].vitesse;
        }
        else if(gamePropriete.playerInput === "rotate"){
            entite[gamePropriete.joueur].x += entite[gamePropriete.joueur].vitesse * Math.sin(gameMath.convertToRadian(entite[gamePropriete.joueur].angle));
            entite[gamePropriete.joueur].y += entite[gamePropriete.joueur].vitesse * -Math.cos(gameMath.convertToRadian(entite[gamePropriete.joueur].angle));
            if(entite[gamePropriete.joueur].appuyerDroite) entite[gamePropriete.joueur].angle += 2;
            if(entite[gamePropriete.joueur].appuyerGauche) entite[gamePropriete.joueur].angle -= 2;
            rotateEntity(gamePropriete.joueur,entite[gamePropriete.joueur].angle);
        }
        /*if (entite[gamePropriete.joueur].imageRendu.zoom) {
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
        }*/
    }


};

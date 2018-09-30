//require entity.js with a joueur register !


document.onkeydown = function(event){
        if (gameProperty.joueur == null) {}
        else {
          if(event.keyCode === 68)        //d
                  entite[gameProperty.joueur].pressingRight = true;
          else if(event.keyCode === 83)   //s
                  entite[gameProperty.joueur].pressingDown = true;
          else if(event.keyCode === 81) //q
                  entite[gameProperty.joueur].pressingLeft = true;
          else if(event.keyCode === 90) // z
                  entite[gameProperty.joueur].pressingUp = true;
        }
}

document.onkeyup = function(event){
        if (gameProperty.joueur == null) {}
        else {
          if(event.keyCode === 68)        //z
                  entite[gameProperty.joueur].pressingRight = false;
          else if(event.keyCode === 83)   //s
                  entite[gameProperty.joueur].pressingDown = false;
          else if(event.keyCode === 81) //q
                  entite[gameProperty.joueur].pressingLeft = false;
          else if(event.keyCode === 90) // z
                  entite[gameProperty.joueur].pressingUp = false;
        }
}

updateJoueurPosition = function(){
        if (gameProperty.joueur == null) {}
        else {
          if(entite[gameProperty.joueur].pressingRight)
                  entite[gameProperty.joueur].x += entite[gameProperty.joueur].speed;
          if(entite[gameProperty.joueur].pressingLeft)
                  entite[gameProperty.joueur].x -= entite[gameProperty.joueur].speed;
          if(entite[gameProperty.joueur].pressingDown)
                  entite[gameProperty.joueur].y += entite[gameProperty.joueur].speed;
          if(entite[gameProperty.joueur].pressingUp)
                  entite[gameProperty.joueur].y -= entite[gameProperty.joueur].speed;

          //ispositionvalid
          if(entite[gameProperty.joueur].imageRendu.zoom){
            if(entite[gameProperty.joueur].x < 0) {
                    entite[gameProperty.joueur].x = 0;
                  }
            if(entite[gameProperty.joueur].x > WIDTH - entite[gameProperty.joueur].width*entite[gameProperty.joueur].imageRendu.zoomFacteur){
                    entite[gameProperty.joueur].x = WIDTH - entite[gameProperty.joueur].width*entite[gameProperty.joueur].imageRendu.zoomFacteur;
                  }
            if(entite[gameProperty.joueur].y < 0){
                    entite[gameProperty.joueur].y = 0;
                  }
            if(entite[gameProperty.joueur].y > HEIGHT - entite[gameProperty.joueur].height*entite[gameProperty.joueur].imageRendu.zoomFacteur){
                    entite[gameProperty.joueur].y = HEIGHT - entite[gameProperty.joueur].height*entite[gameProperty.joueur].imageRendu.zoomFacteur;
                  }
          }
          else{
            if(entite[gameProperty.joueur].x < 0) {
                    entite[gameProperty.joueur].x = 0;
                  }
            if(entite[gameProperty.joueur].x > WIDTH - entite[gameProperty.joueur].width/entite[gameProperty.joueur].imageRendu.zoomFacteur){
                    entite[gameProperty.joueur].x = WIDTH - entite[gameProperty.joueur].width/entite[gameProperty.joueur].imageRendu.zoomFacteur;
                  }
            if(entite[gameProperty.joueur].y < 0){
                    entite[gameProperty.joueur].y = 0;
                  }
            if(entite[gameProperty.joueur].y > HEIGHT - entite[gameProperty.joueur].height/entite[gameProperty.joueur].imageRendu.zoomFacteur){
                    entite[gameProperty.joueur].y = HEIGHT - entite[gameProperty.joueur].height/entite[gameProperty.joueur].imageRendu.zoomFacteur;
                  }
          }
        }


}

//require entity.js with a player register !


document.onkeydown = function(event){
        if (gameProperty.player == null) {}
        else {
          if(event.keyCode === 68)        //d
                  entity[gameProperty.player].pressingRight = true;
          else if(event.keyCode === 83)   //s
                  entity[gameProperty.player].pressingDown = true;
          else if(event.keyCode === 81) //q
                  entity[gameProperty.player].pressingLeft = true;
          else if(event.keyCode === 90) // z
                  entity[gameProperty.player].pressingUp = true;
        }
}

document.onkeyup = function(event){
        if (gameProperty.player == null) {}
        else {
          if(event.keyCode === 68)        //z
                  entity[gameProperty.player].pressingRight = false;
          else if(event.keyCode === 83)   //s
                  entity[gameProperty.player].pressingDown = false;
          else if(event.keyCode === 81) //q
                  entity[gameProperty.player].pressingLeft = false;
          else if(event.keyCode === 90) // z
                  entity[gameProperty.player].pressingUp = false;
        }
}

updatePlayerPosition = function(){
        if (gameProperty.player == null) {}
        else {
          if(entity[gameProperty.player].pressingRight)
                  entity[gameProperty.player].x += entity[gameProperty.player].speed;
          if(entity[gameProperty.player].pressingLeft)
                  entity[gameProperty.player].x -= entity[gameProperty.player].speed;
          if(entity[gameProperty.player].pressingDown)
                  entity[gameProperty.player].y += entity[gameProperty.player].speed;
          if(entity[gameProperty.player].pressingUp)
                  entity[gameProperty.player].y -= entity[gameProperty.player].speed;

          //ispositionvalid
          if(image[gameProperty.player].zoom){
            if(entity[gameProperty.player].x < 0) {
                    entity[gameProperty.player].x = 0;
                  }
            if(entity[gameProperty.player].x > WIDTH - entity[gameProperty.player].width*image[gameProperty.player].zoomNumber){
                    entity[gameProperty.player].x = WIDTH - entity[gameProperty.player].width*image[gameProperty.player].zoomNumber;
                  }
            if(entity[gameProperty.player].y < 0){
                    entity[gameProperty.player].y = 0;
                  }
            if(entity[gameProperty.player].y > HEIGHT - entity[gameProperty.player].height*image[gameProperty.player].zoomNumber){
                    entity[gameProperty.player].y = HEIGHT - entity[gameProperty.player].height*image[gameProperty.player].zoomNumber;
                  }
          }
          else{
            if(entity[gameProperty.player].x < 0) {
                    entity[gameProperty.player].x = 0;
                  }
            if(entity[gameProperty.player].x > WIDTH - entity[gameProperty.player].width/image[gameProperty.player].zoomNumber){
                    entity[gameProperty.player].x = WIDTH - entity[gameProperty.player].width/image[gameProperty.player].zoomNumber;
                  }
            if(entity[gameProperty.player].y < 0){
                    entity[gameProperty.player].y = 0;
                  }
            if(entity[gameProperty.player].y > HEIGHT - entity[gameProperty.player].height/image[gameProperty.player].zoomNumber){
                    entity[gameProperty.player].y = HEIGHT - entity[gameProperty.player].height/image[gameProperty.player].zoomNumber;
                  }
          }
        }


}

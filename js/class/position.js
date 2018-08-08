//require entity.js with a player register !

document.onkeydown = function(event){
        if(event.keyCode === 68)        //d
                entity[0].pressingRight = true;
        else if(event.keyCode === 83)   //s
                entity[0].pressingDown = true;
        else if(event.keyCode === 81) //q
                entity[0].pressingLeft = true;
        else if(event.keyCode === 90) // z
                entity[0].pressingUp = true;
}

document.onkeyup = function(event){
        if(event.keyCode === 68)        //z
                entity[0].pressingRight = false;
        else if(event.keyCode === 83)   //s
                entity[0].pressingDown = false;
        else if(event.keyCode === 81) //q
                entity[0].pressingLeft = false;
        else if(event.keyCode === 90) // z
                entity[0].pressingUp = false;
}

updatePlayerPosition = function(){
        if(entity[0].pressingRight)
                entity[0].x += entity[0].speed;
        if(entity[0].pressingLeft)
                entity[0].x -= entity[0].speed;
        if(entity[0].pressingDown)
                entity[0].y += entity[0].speed;
        if(entity[0].pressingUp)
                entity[0].y -= entity[0].speed;

        //ispositionvalid
        if(entity[0].x < 0) {
                entity[0].x = 0;
              }
        if(entity[0].x > WIDTH - entity[0].width){
                entity[0].x = WIDTH - entity[0].width;
              }
        if(entity[0].y < 0){
                entity[0].y = 0;
              }
        if(entity[0].y > HEIGHT - entity[0].height){
                entity[0].y = HEIGHT - entity[0].height;
              }


}

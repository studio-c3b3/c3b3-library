let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext("2d")

let imageMer = new Image();
imageMer.src = 'assets/images/mer.png'; 

let imageBateauHero = new Image();
imageBateauHero.src = 'assets/images/bateau_hero.png';

let bateauHero = {
  position : {
    x: 250,
    y: 250,
  },
  vitesse : 0, 
  angle : 0,
  rotation : 'still',
};

function tapisserCanvas (imageParam) {
  for (var i = 0; i < canvas.width/imageParam.width; i++) {
    for (var j = 0; j < canvas.height/imageParam.height; j++) {  
      ctx.drawImage(imageParam, i * imageParam.width, j * imageParam.height);
    }
  }
}

function updatePosition(acteur) {
  acteur.position.x += acteur.vitesse * Math.sin(convertToRadian(acteur.angle));
  acteur.position.y += acteur.vitesse * -Math.cos(convertToRadian(acteur.angle));
  if (acteur.rotation == 'gauche') {
    acteur.angle -= 2;
  } else if (acteur.rotation == 'droite') {
    acteur.angle += 2; 
  } 

}

function update() {
  tapisserCanvas(imageMer);
  rotateEntity(imageBateauHero,bateauHero.position.x, bateauHero.position.y, bateauHero.angle);
  updatePosition(bateauHero);
}

function convertToRadian(degrees) {
  return degrees * Math.PI/180;
}

function rotateEntity(image, positionX, positionY, angle) {
  ctx.save();
  ctx.translate(positionX+image.width/2, positionY);
  ctx.rotate(convertToRadian(angle));
  ctx.drawImage(image, -image.width/2, -image.height/2);
  ctx.restore();

}

imageMer.onload = function(){
  tapisserCanvas(imageMer);
}

imageBateauHero.onload = function() {
  rotateEntity(imageBateauHero,bateauHero.position.x, bateauHero.position.y, bateauHero.angle);
}

window.onload = function(){
  setInterval(update, 40);
}


/************ CONTROLE ************/
document.onkeydown = function(event){
  if(event.keyCode === 68) { //d
    bateauHero.rotation = 'droite';
  }

	else if(event.keyCode === 83) {//s
    bateauHero.vitesse  = 0;
  }

	else if(event.keyCode === 81) {//q
    bateauHero.rotation = 'gauche';
  }

	else if(event.keyCode === 90){// z 
    bateauHero.vitesse  = -2;
  }
}

document.onkeyup = function(event){
  if(event.keyCode === 68) { //d
    bateauHero.rotation = 'still';
  }

	else if(event.keyCode === 81) {//q
    bateauHero.rotation = 'still';
  }

}

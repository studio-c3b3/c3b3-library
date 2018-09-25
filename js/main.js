let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext("2d")

const CANVAS_LARGEUR = canvas.width 
const CANVAS_HAUTEUR = canvas.height

let imageMer = new Image()
imageMer.src = 'assets/img/mer.png' 

let imageBateauHero = new Image()
imageBateauHero.src = 'assets/img/bateau_hero.png'


let bateauHero = {
    position : {
        x: 250,
        y: 250
    },
    vitesse : {
        x:-1,
        y:-1
    },
    angle : 0.5,
}


console.log(CANVAS_LARGEUR/imageMer.width)
console.log(CANVAS_HAUTEUR/imageMer.height)


function tapisserCanvas (imageParam) {
    for (var i = 0; i < CANVAS_LARGEUR/imageParam.width; i++) {
        for (var j = 0; j < CANVAS_HAUTEUR/imageParam.height; j++) {
            console.log(imageParam.width);
            ctx.drawImage(imageParam, i * imageParam.width, j * imageParam.height);
        }
    }
}

function updatePosition(acteur) {
    acteur.position.x += acteur.vitesse.x;
    acteur.position.y += acteur.vitesse.y;
}

function update() {
    tapisserCanvas(imageMer);
    ctx.save();
    ctx.drawImage(imageBateauHero, bateauHero.position.x, bateauHero.position.y);
    ctx.restore();
    console.log("bateau position x : " + bateauHero.position.x);
    console.log("bateau position y : " + bateauHero.position.y);
    updatePosition(bateauHero);
}

imageMer.onload = function(){
    tapisserCanvas(imageMer);
}



imageBateauHero.onload = function() {
    ctx.save();
    ctx.translate(imageBateauHero.width/2, imageBateauHero.height/2 )
    radians = (Math.PI/180)*90;
    ctx.rotate(radians);
    ctx.drawImage(imageBateauHero, bateauHero.position.x, bateauHero.position.y);
    ctx.restore();
}

setInterval(update, 40)

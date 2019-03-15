const HEIGHT = 448;
const WIDTH = 640;
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let gamePropriete = {};

gamePropriete.menuCursor = 0; //emplacement du curseur
gamePropriete.menuCursorId = null; // Le curseur actif
gamePropriete.mapsReader = "xy";
gamePropriete.mapsid = 0;
gamePropriete.player = 0;
gamePropriete.pret = false;
gamePropriete.etat = 0;
gamePropriete.mainMenu = 0;
gamePropriete.playerInput = "rotate";


function update() {
    etats[gamePropriete.etat].update();
    setTimeout(update, 10);
}

declarerEtat(0, 0,
    () => {
    audio[2].play();
    audio[2].loop = true;
    console.log("Bienvenue dans le menu");
  },
    () => {
      for(let key in entite) {
          if (entite[key].type === 2) {
              entite[key].rendu = false;
          }
      }
      audio[2].pause();
      audio[2].currentTime = 0;
  },
    () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateMaps();
      updateMenu();
    });
declarerEtat(1, 1,
    () => {
        console.log("Bienvenue dans le monde");
    },
    () => {
        console.log("Au revoir");
    },
    () =>  {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        updateMaps();
        updateJoueurPosition();
        drawImage();});

declarerAudio(0, "./assets/song/defilement.ogg");
declarerAudio(1, "./assets/song/clic.ogg");
declarerAudio(2, "./assets/song/boucleMenu.mp3");
declarerMenuCursor(3, 22, 21, "assets/img/menu/arrowBlue_right.png", 1, 1);
declarerMenuElement(1, 0, 96, 40, "assets/img/menu/play.png", 1, 1, () => {changeEtat(1); audio[1].play()});
declarerMenuElement(2, 180, 96, 40, "assets/img/menu/play.png", 1, 1, () => {console.log("test 1"); audio[1].play();});
declarerMap(0, "assets/maps/map1.json");
declarerEntite(0, 0, 73, 0, "assets/img/bateau_hero.png", 146, 146, 0);
//declarerEntite(1, 0, 0, 0, "assets/img/bateau_hero.png", 146, 146, 0);
declarerStatic(0, 146,146,1,1);
ajouteProprieteMenu(0, "sonDefilement",audio[0]);
changeEtat(1);

if(gamePropriete.playerInput === "rotate") entite[gamePropriete.player].imageRendu.gen = function() {
    ctx.save();
    ctx.translate(entite[gamePropriete.player].x+entite[gamePropriete.player].width/2, entite[gamePropriete.player].y);
    ctx.fillRect(0, 0, 10, 10);
    ctx.rotate(gameMath.convertToRadian(entite[gamePropriete.joueur].angle));
    if(entite[gamePropriete.player].image.zoom){
        ctx.drawImage(entite[gamePropriete.player].image, 0, 0, entite[gamePropriete.player].imageRendu.width, entite[gamePropriete.player].imageRendu.height, -entite[gamePropriete.player].width/2, -entite[gamePropriete.player].height/2, (entite[gamePropriete.player].imageRendu.width*entite[gamePropriete.player].imageRendu.zoomFacteur), (entite[gamePropriete.player].imageRendu.height*entite[gamePropriete.player].imageRendu.zoomFacteur));
    }
    else{
        ctx.drawImage(entite[gamePropriete.player].image, 0, 0, entite[gamePropriete.player].imageRendu.width, entite[gamePropriete.player].imageRendu.height, -entite[gamePropriete.player].width/2, -entite[gamePropriete.player].height/2, (entite[gamePropriete.player].imageRendu.width/entite[gamePropriete.player].imageRendu.zoomFacteur), (entite[gamePropriete.player].imageRendu.height/entite[gamePropriete.player].imageRendu.zoomFacteur));
    }
    ctx.restore();
};

setTimeout(update, 1000);
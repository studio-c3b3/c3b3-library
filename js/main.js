const HEIGHT = 448;
const WIDTH = 640;
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
var gamePropriete = {};
gamePropriete.menuCursor = 0; //emplacement du curseur
gamePropriete.menuCursorId = null; // Le curseur actif

gamePropriete.mapsReader = "xy";
gamePropriete.mapsid = 0;
gamePropriete.player = 0;
gamePropriete.pret = false;
gamePropriete.etat = 0;

function update() {
    etats[gamePropriete.etat].update();
}

declarerEtat(0, 0,
    () => {
    console.log("Bienvenue dans le menu");
  },
    () => {
      for(let key in entite){
        if(entite[key].type === 2) {
          entite[key].rendu = false;
        }
      }
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

declarerMenuCursor(3, 22, 21, "assets/img/menu/arrowBlue_right.png", 1, 1);
declarerMenuElement(1, 0, 96, 40, "assets/img/menu/play.png", 1, 1, () => changeEtat(1));
declarerMenuElement(2, 180, 96, 40, "assets/img/menu/play.png", 1, 1, () => console.log("test 1"));
declarerMap(0, "assets/maps/map1.json");
declarerEntite(0, 0, 0, 10, "assets/img/bateauPirates.png", 128, 128, 0);
declarerAnimation(20,256,256,128,0,0,1);
setInterval(update, 10);

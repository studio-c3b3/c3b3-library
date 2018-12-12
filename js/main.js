const HEIGHT = 448;
const WIDTH = 640;
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let gamePropriete = {};
let menuElement = [];
let etats = [];
gamePropriete.menuCursor = 0; //emplacement du curseur
gamePropriete.menuCursorId = null; // Le curseur actif

gamePropriete.mapsReader = "xy";
gamePropriete.mapsid = 0;
gamePropriete.player = 0;
gamePropriete.pret = false;
gamePropriete.etat = 0;

function updateMenu() {

  for(let cle in entite){
    if(entite[cle].type === 2 && !entite[cle].imageRendu.cursor){ //C'est un curseur
      entite[cle].imageRendu.gen();
    }
    if(cle === menuElement[gamePropriete.menuCursor].toString()){
      entite[gamePropriete.menuCursorId].y = entite[cle].y;
      entite[gamePropriete.menuCursorId].x = entite[cle].x - 20;
      entite[gamePropriete.menuCursorId].imageRendu.gen();
    }
  }

}

function declarerMenuCursor(id,width,height,srcImage,zoom,zoomFacteur){
  declarerEntite(id, 0, 0, 0, srcImage, width, height, 2);
  declarerStatic(id, width, height, zoom, zoomFacteur);
  gamePropriete.menuCursorId = id;
  entite[id].imageRendu.cursor = true;
}

function declarerMenuElement(id,x,width,height,srcImage,zoom,zoomFacteur,callback) {
  declarerEntite(id, WIDTH/2-width/2, x, 0, srcImage, width, height, 2);
  declarerStatic(id, width, height, zoom, zoomFacteur);
  entite[id].imageRendu.active = false;
  entite[id].imageRendu.cursor = false;
  entite[id].callback = () => callback();
  menuElement.push(id);
}
function declarerEtat(id, type, functionEntrer, functionSortie, update){
  etats[id] = {
    id: id,
    type: type,
    functionEntrer: () => functionEntrer(),
    functionSortie: () => functionSortie(),
    update: () => update(),
  };
}

function changeScene(id) {
  if(etats[gamePropriete.etat].functionSortie) etats[gamePropriete.etat].functionSortie();
  if(etats[id].functionEntrer) {
    etats[id].functionEntrer();
    gamePropriete.etat = id;
  }
}


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
declarerMenuElement(1, 0, 96, 40, "assets/img/menu/play.png", 1, 1, () => changeScene(1));
declarerMenuElement(2, 180, 96, 40, "assets/img/menu/play.png", 1, 1, () => console.log("test 1"));
declarerMap(0, "assets/maps/map1.json");
declarerEntite(0, 0, 0, 10, "assets/img/bateauPirates.png", 128, 128, 0);
declarerAnimation(20,256,256,128,0,0,1);
setInterval(update, 10);

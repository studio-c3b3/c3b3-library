const HEIGHT = 448;
const WIDTH = 640;
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var gamePropriete = {};
var menuElement = [];
gamePropriete.menuCursor = 0; //emplacement du curseur
gamePropriete.menuCursorId = null; // Le curseur actif

gamePropriete.mapsReader = "xy";
gamePropriete.mapsid = 0;
gamePropriete.player = 0;
gamePropriete.pret = false;
gamePropriete.state = 0;

if (!localStorage.getItem("testAlert")){
  alert("VERSION DE TEST")
  localStorage.setItem("testAlert", true);
}


function updateMenu() {

  for(var cle in entite){
    if(entite[cle].type == 2 && !entite[cle].imageRendu.cursor){ //C'est un curseur
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
  entite[id].callback = function(){callback();}
  menuElement.push(id);
}

function update() {
  if (gamePropriete.pret){
    if (gamePropriete.state == 0){
      updateMaps();
      updateMenu();
    }
    else if(gamePropriete.state == 1){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateMaps();
      updateJoueurPosition();
      drawImage();
    }
  }
}

declarerMenuCursor(3, 22, 21, "assets/img/menu/arrowBlue_right.png", 1, 1)
declarerMenuElement(1, 0, 96, 40, "assets/img/menu/play.png", 1, 1, function(){console.log("test")});
declarerMenuElement(2, 180, 96, 40, "assets/img/menu/play.png", 1, 1, function(){console.log("test 1")})
declarerMap(0, "assets/maps/map1.json");
declarerEntite(0, 0, 0, 10, "assets/img/bateauPirates.png", 128, 128, 0);
declarerStatic(0, 128, 128, 0, 0)
setInterval(update, 10);

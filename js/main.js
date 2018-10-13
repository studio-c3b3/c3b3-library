const HEIGHT = 448;
const WIDTH = 640;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var gamePropriete = {};
var menuElement = [];
gamePropriete.menuCursor = 0;
gamePropriete.manuCursorId = 0;
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
    if(entite[cle].type == 2 && !entite[cle].imageRendu.cursor){
      entite[cle].imageRendu.gen();
    }
    if(cle === menuElement[gamePropriete.menuCursor]){
      entite[gamePropriete.menuCursorId].x = entite[cle].x;
      entite[gamePropriete.menuCursorId].y = entite[cle].y - 10;
      entite[gamePropriete.menuCursorId].imageRendu.gen();
    }
  }

}

function declarerMenuCursor(id,width,height,srcImage,zoom,zoomFacteur){
  declarerEntite(id, 0, 0, 0, srcImage, width, height, 2);
  declarerStatic(id, width, height, zoom, zoomFacteur);
  menuCursorId = 0;
  entite[id].imageRendu.cursor = true;
}

function declarerMenuElement(id,x,width,height,srcImage,zoom,zoomFacteur,callback) {
  declarerEntite(id, x, WIDTH/2-width/2, 0, srcImage, width, height, 2);
  declarerStatic(id, width, height, zoom, zoomFacteur);
  entite[id].imageRendu.active = false;
  entite[id].imageRendu.cursor = false;
  entite[id].callback() = callback;
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
declarerMenuCursor(3, 64, 64, "asstes/img/cursor.png", 0, 0)
declarerMenuElement(1, 0, 96, 40, "assets/img/play.png", 0, 0, console.log("test"))
declarerMenuElement(2, 180, 96, 40, "assets/img/play.png", 0, 0, console.log("test 1"))
declarerMap(0, "assets/maps/map1.json");
declarerEntite(0, 0, 0, 10, "assets/img/bateauPirates.png", 128, 128, 0);
declarerStatic(0, 128, 128, 0, 0)
setInterval(update, 10);

const HEIGHT = 448;
const WIDTH = 640;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var gamePropriete = {};
gamePropriete.mapsReader = "xy";
gamePropriete.mapsid = 0;
gamePropriete.player = 0;
gamePropriete.pret = false;

if (!localStorage.getItem("testAlert")){
  alert("VERSION DE TEST")
}
localStorage.setItem("testAlert", true);

function update() {
  if (gamePropriete.pret){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateMaps();
    updateJoueurPosition();
    drawImage();
  }

}

declarerMap(0, "assets/maps/map1.json");

declarerEntite(0, 0, 0, 10, "assets/img/bateauPirates.png", 128, 128, 0);
declarerAnimation(20, 128, 0, true, 1);


setInterval(update, 10);
